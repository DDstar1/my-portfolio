"use client";

import { Button } from "@/components/ui/button";
import data from "@/data";

export function ContactForm() {
  return (
    <div className="flex min-h-[380px] flex-col justify-center gap-6">
      <h2 className="text-2xl font-semibold">Let’s work together</h2>
      <p className="text-muted-foreground leading-relaxed">
        Have a project in mind? Email me with a little about what you want to build.
      </p>
      <a
        href={`mailto:${data.contact.email}`}
        className="break-all text-sm underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {data.contact.email}
      </a>
      <Button asChild className="min-h-11 self-start">
        <a href={`mailto:${data.contact.email}`}>Email Destiny</a>
      </Button>
      <p className="text-sm text-muted-foreground">Opens your email app.</p>
    </div>
  );
}
