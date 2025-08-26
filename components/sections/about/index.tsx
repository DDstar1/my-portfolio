"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import agakadela from "@/public/imgs/agakadela_mini.webp";

export default function AboutSection() {
  const ref = useRef(null);
  useCurSection(ref, 0.1);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="w-11/12 md:w-10/12 mx-auto p-1 md:p-5 rounded-lg container">
        {/* Image floats left */}
        <div className="relative float-left mr-5 mb-4 size-[200px] rounded-full overflow-hidden shape-wrap">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale-0 object-cover"
              width={600}
              height={600}
              alt="about profile image"
              src={agakadela}
            />
          </motion.div>
        </div>

        {/* Text wraps around floated image */}
        <div className="space-y-4 text-left">
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground"
          >
            <strong>
              I&apos;m Abhuluimen Destiny — I design and build websites and
              mobile apps that are fast, scalable, and user-friendly.
            </strong>
            <br />
            <br />I specialize in{" "}
            <strong>React, Next.js, and React Native</strong>, crafting apps
            that run smoothly across web and mobile. Whether it&apos;s starting
            a new project from scratch or fixing and improving an existing one,
            I make sure your product is clean, efficient, and built to last.
            <br />
            <br />
            <span className="font-semibold">📌 What I Do Best:</span>
            <br />✅ Build full-stack web & mobile apps with modern stacks{" "}
            <br />✅ Fix broken projects & debug issues quickly <br />✅ Improve
            speed, performance & user experience <br />✅ Add AI features
            (OpenAI, Gemini, automations, vector search) <br /> ✅ Scale apps
            with clean architecture & optimized databases
            <br />
            <br />
            <span className="font-semibold">📌 Why Work With Me?</span>
            <br />
            🔹 I focus on real results — apps that perform well and grow with
            your business. <br />
            🔹 I move fast and deliver without unnecessary delays. <br />
            🔹 I don’t just build apps — I ensure they’re reliable, scalable,
            and easy to maintain.
            <br />
            <br />
            <span className="font-semibold">📌 Let&apos;s Talk</span>
            <br />
            If you need a website, mobile app, or help fixing and scaling your
            current project, let&apos;s connect.
            <br />
            <a href="#contact" className="text-primary hover:underline">
              ✅ Get in Touch
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
