"use client";
import Reveal from "@/components/animations/reveal";
import Underline from "@/components/animations/underline";
import Button from "@/components/buttons/button";
import Image from "next/image";
import { EnvelopeIcon, LinkIcon } from "@heroicons/react/16/solid";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkProjects = [
  {
    name: "Listr",
    link: "https://listr.app",
    logoUrl: "/projects/listr/logo.png",
    description:
      "The ultimate platform for trading card game enthusiasts. Built with Next.js, TypeScript, Firebase, and Stripe.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Stripe",
      "GCP",
      "Typesense",
      "Docker",
    ],
    githubUrl: "",
    imagesUrls: [
      "/projects/listr/logo.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "Qortor",
    logoUrl: "/projects/qortor/logo.webp",
    link: "https://Qortor.com",
    description: "The future of creators marketplace.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Styled Components",
      "Stripe",
      "Shopify",
      "Vercel",
    ],
    githubUrl: "",
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "DomumGym",
    link: "https://domumgym.com",
    description:
      "The ultimate destination for your online gym experience. Connect with fellow enthusiasts, explore trainers and workouts to commit to.",
    technologies: ["React", "Javascript", "Firebase", "Stripe", "Bootstrap"],
    githubUrl: "",
    imagesUrls: [
      "/projects/domumgym/logo.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "Dojo Apps",
    link: "https://google.com",
    description:
      "The ultimate destination for your online gym experience. Connect with fellow enthusiasts, explore trainers and workouts to commit to.",
    technologies: ["React", "Javascript", "MongoDB", "Shopify"],
    githubUrl: "",
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "Booz Allen Hamilton",
    link: "https://boozallen.com",
    description:
      "A social media platform for sharing and discovering new music. Built with Next.js, TypeScript, and Firebase.",
    technologies: [
      "Ember.js",
      "Javascript",
      "MySQL",
      "Ruby on Rails",
      "AWS",
      "Docker",
      "Elasticsearch",
    ],
    githubUrl: "",
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "lockr",
    logoUrl: "/projects/lockr/logo.png",
    link: "https://lockr.social",
    description:
      "A social media platform for sharing and discovering new music. Built with Next.js, TypeScript, and Firebase.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Docker",
      "GCP",
    ],
    githubUrl: "",
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
];

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  return (
    <>
      <main
        ref={ref}
        className="snap-y snap-mandatory h-dvh overflow-y-auto max-w-7xl mx-auto"
      >
        <div
          data-name="hero"
          className="flex flex-col sm:flex-row items-center gap-x-20 p-4 sm:px-10 lg:px-20 h-dvh snap-start"
        >
          <Reveal
            delay={2}
            animate={["y"]}
            className="w-full sm:w-1/3 flex-none"
          >
            <Image
              src="/images/profile-pic.jpeg"
              alt="Ali"
              className="rounded-full p-4 w-full flex-none"
              width={500}
              height={500}
            />
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal
              delay={0}
              animate={["y"]}
              className="text-6xl sm:text-8xl font-bold"
            >
              Hi!
            </Reveal>
            <Reveal delay={1} className="text-2xl sm:text-4xl font-thin">
              I'm <span className="font-bold">Ali</span>, and I'm a&nbsp;
              <Underline delay={1.5} className="font-bold whitespace-nowrap">
                Full-Stack Engineer
              </Underline>
              .
            </Reveal>
            <Reveal delay={3} className="text-xl sm:text-2xl font-thin">
              I have a passion for building scalable web apps and engaging user
              experiences, specializing in Next.js, TypeScript, and a mix of
              front-end and back-end technologies.
            </Reveal>
            <Reveal delay={5} className="text-xl sm:text-2xl font-thin">
              Motivated by a commitment to excellence and efficiency, I lead
              teams to transform complex challenges into intuitive solutions.
            </Reveal>

            <Reveal delay={7}>
              <Button variant="outline" className="px-5 text-2xl w-fit mt-4">
                Let's work together!
              </Button>
            </Reveal>
          </div>
        </div>

        {/* <section data-name="skills" className=""></section>
      <section data-name="education" className=""></section> */}
        <Reveal
          data-name="work"
          className="flex flex-col items-center justify-center h-dvh gap-4 snap-start"
        >
          <h1 className="text-4xl sm:text-6xl font-bold">Recent Work</h1>
          <p className="text-xl sm:text-2xl font-thin">
            Here are a few projects I've worked on recently.
          </p>
        </Reveal>
        {WorkProjects.map((project) => (
          <div className="flex flex-col sm:flex-row items-center gap-x-20 p-4 h-dvh sm:px-10 lg:px-20 snap-start">
            <Reveal
              delay={1}
              className="w-full overflow-hidden relative sm:w-1/3 flex-none "
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%);",
              }}
            >
              <div className="flex gap-x-4 overflow-x-auto snap-mandatory snap-x aspect-square p-4">
                {project.imagesUrls?.map((imageUrl) => (
                  <Image
                    src={imageUrl}
                    alt={project.name}
                    className=""
                    width={500}
                    height={500}
                  />
                ))}
              </div>
            </Reveal>
            <Reveal delay={0} className="flex flex-col gap-4">
              <h1 className="flex gap-4 items-center text-6xl sm:text-8xl font-bold">
                {project.name}
              </h1>
              <h2 className="text-2xl sm:text-4xl font-thin">
                {project.description}
              </h2>
              <p className="text-lg sm:text-xl text-violet-500 font-medium">
                {project.technologies.join(" • ")}
              </p>
              <div className="flex gap-2">
                <Button
                  as="Link"
                  variant="none"
                  className="p-1 text-xl w-fit mt-4"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="size-8 text-gray-500 hover:text-gray-400 active:text-gray-300"
                  />
                </Button>
                <Button
                  as="Link"
                  variant="none"
                  className="p-1 text-xl w-fit mt-4"
                >
                  <LinkIcon className="size-8 text-gray-500 hover:text-gray-400 active:text-gray-300" />
                </Button>
              </div>
            </Reveal>
          </div>
        ))}

        <section data-name="projects" className="h-dvh snap-start">
          <h1 className="text-4xl sm:text-6xl font-bold">Projects</h1>
        </section>
        <section data-name="testimonials" className="h-dvh snap-start">
          <h1 className="text-4xl sm:text-6xl font-bold">Testimonials</h1>
        </section>
        <Reveal
          data-name="contact"
          className="flex flex-col items-center justify-center h-dvh gap-4 snap-start"
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
      <motion.div
        className="fixed right-0 top-0 bottom-0 w-2 origin-top-right bg-violet-500"
        style={{
          scaleY: scrollYProgress,
        }}
      />
    </>
  );
}
