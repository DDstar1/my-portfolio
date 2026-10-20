import { NextResponse } from "next/server";
import { z } from "zod";
import data from "@/data";

export const maxDuration = 60;

const requestSchema = z.object({
  messages: z.array(z.object({
    role: z.enum(["user", "assistant"]),
    content: z.string().trim().min(1).max(4000),
  })).min(1).max(20),
});

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: `The AI assistant is unavailable right now. Please email ${data.contact.email}.` },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
  }
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success || parsed.data.messages.at(-1)?.role !== "user") {
    return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
  }

  // Exclude the UI's introductory greeting and send the latest turn only once.
  const messages = parsed.data.messages.slice(-9);
  while (messages[0]?.role === "assistant") messages.shift();
  const context = `You are Destiny Abhuluimen's portfolio assistant. Answer only from this public portfolio information. Be friendly, concise and honest; do not invent experience, results or credentials. For project inquiries, direct visitors to ${data.contact.email}.\n${JSON.stringify({
    about: data.home,
    projects: data.projects.projects,
    skills: data.technologies.skills.map((skill) => skill.name),
  })}`;

  try {
    const model = process.env.GEMINI_MODEL || "gemini-3.8-flash";
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: context }] },
          contents: messages.map((message) => ({
            role: message.role === "assistant" ? "model" : "user",
            parts: [{ text: message.content }],
          })),
          generationConfig: { maxOutputTokens: 2048, thinkingConfig: { thinkingLevel: "low" } },
        }),
        signal: AbortSignal.timeout(45000),
      }
    );
    if (!response.ok) {
      // Never log credentials, provider bodies or visitor messages.
      console.error("Gemini request failed", { status: response.status });
      return NextResponse.json(
        { error: response.status === 429
          ? `The AI assistant is busy. Please try again shortly or email ${data.contact.email}.`
          : `The AI assistant is unavailable right now. Please email ${data.contact.email}.` },
        { status: response.status === 429 ? 429 : 502 }
      );
    }
    const result = await response.json();
    const content = result.candidates?.[0]?.content?.parts
      ?.filter((part: { text?: string; thought?: boolean }) => part.text && !part.thought)
      .map((part: { text: string }) => part.text).join("\n");
    if (!content) {
      return NextResponse.json({ error: "I couldn’t answer that. Please try rephrasing your question." }, { status: 502 });
    }
    return NextResponse.json({ content });
  } catch (error) {
    console.error("Gemini connection failed", { type: error instanceof Error ? error.name : "UnknownError" });
    return NextResponse.json(
      { error: `The AI assistant couldn’t connect. Please try again or email ${data.contact.email}.` },
      { status: 502 }
    );
  }
}
