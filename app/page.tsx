"use client";
import Reveal from "@/components/animations/reveal";
import Underline from "@/components/animations/underline";
import Button from "@/components/buttons/button";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Reveal
        data-name="hero"
        className="flex flex-col sm:flex-row items-center gap-x-20 p-4 sm:px-10 lg:px-20 h-dvh"
      >
        <Image
          src="/images/profile-pic.jpeg"
          alt="Ali"
          className="rounded-full p-4 w-full sm:w-1/3 flex-none"
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl sm:text-8xl font-bold">Hi!</h1>
          <h2 className="text-2xl sm:text-4xl font-thin">
            I'm <span className="font-bold">Ali</span>, and I'm a&nbsp;
            <Underline className="font-bold whitespace-nowrap">
              Full-Stack Engineer
            </Underline>
            .
          </h2>
          <p className="text-xl sm:text-2xl font-thin">
            I have a passion for building scalable web apps and engaging user
            experiences, specializing in Next.js, TypeScript, and a mix of
            front-end and back-end technologies. Motivated by a commitment to
            excellence and efficiency, I lead teams to transform complex
            challenges into intuitive solutions.
          </p>
          <Button variant="primary" className="px-5 text-xl w-fit mt-4">
            Let's work together!
          </Button>
        </div>
      </Reveal>

      <section data-name="skills" className=""></section>
      <section data-name="education" className=""></section>
      <section data-name="experience" className=""></section>
      <section data-name="projects" className=""></section>
      <section data-name="testimonials" className=""></section>
      <Reveal
        data-name="contact"
        className="flex flex-col items-center justify-center h-dvh gap-4"
      >
        <h1 className="text-4xl sm:text-6xl font-bold">Contact</h1>
        <p className="text-xl sm:text-2xl font-thin">
          I'm currently open to new opportunities. Let's connect!
        </p>
        <Button
          variant="outline"
          as="Link"
          href="mailto:alieskandari3@gmail.com"
          className="text-xl sm:text-2xl font-bold flex items-center"
        >
          <EnvelopeIcon className="w-6" />
          &nbsp;alieskandari3@gmail.com
        </Button>
      </Reveal>
      <section data-name="resume" className=""></section>
    </main>
  );
}
