"use client";
import Reveal from "@/components/animations/reveal";
import Underline from "@/components/animations/underline";
import Button from "@/components/buttons/button";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Navbar from "@/components/navbar";

type Project = {
  name: string;
  position: string;
  description: string;
  technologies: string[];
  location: string;
  dates: string;
  githubUrl?: string;
  link: string;
  imagesUrls: string[];
};

const WorkProjects: Project[] = [
  {
    name: "Listr",
    dates: "2023 - Present",
    link: "https://listr.app",
    position: "Senior Full-Stack Engineer",
    location: "Los Angeles, CA",
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
    imagesUrls: [
      "/projects/listr/logo.png",
      "/projects/listr/1.png",
      "/projects/listr/2.png",
      "/projects/listr/3.png",
    ],
  },
  {
    name: "Qortor",
    dates: "2022 - 2023",
    link: "https://Qortor.com",
    position: "Senior Full-Stack Engineer",
    location: "Los Angeles, CA",
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
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "Dojo Apps",
    dates: "2021 - 2022",
    position: "Lead Full-Stack Engineer",
    location: "Los Angeles, CA",

    link: "https://google.com",
    description:
      "The ultimate destination for your online gym experience. Connect with fellow enthusiasts, explore trainers and workouts to commit to.",
    technologies: ["React", "Javascript", "MongoDB", "Shopify"],
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "DomumGym",
    dates: "2020 - 2021",
    position: "Lead Full-Stack Engineer",
    location: "Los Angeles, CA",
    link: "https://domumgym.com",
    description:
      "The ultimate destination for your online gym experience. Connect with fellow enthusiasts, explore trainers and workouts to commit to.",
    technologies: ["React", "Javascript", "Firebase", "Stripe", "Bootstrap"],
    githubUrl: "https://domumgym.com",
    imagesUrls: [
      "/projects/domumgym/logo.png",
      "/projects/domumgym/1.png",
      "https://placehold.co/500.png",
    ],
  },

  {
    name: "Booz Allen Hamilton",
    dates: "2016 - 2018",
    position: "Full-Stack Engineer",
    location: "McLean, VA",
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
    imagesUrls: [
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
      "https://placehold.co/500.png",
    ],
  },
  {
    name: "lockr",
    dates: "",
    position: "Lead Full-Stack Engineer",
    location: "Los Angeles, CA",
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
      <Navbar />
      <main ref={ref} className="flex flex-col">
        <section
          data-name="hero"
          className="flex flex-col sm:flex-row items-center justify-center max-w-5xl mx-auto w-full gap-x-20 h-dvh snap-start mb-10"
        >
          <Reveal
            delay={1}
            animate={["y"]}
            className="w-full sm:w-1/3 flex-none px-24 pt-14 sm:p-0"
          >
            <Image
              src="/images/profile-pic.jpeg"
              alt="Ali"
              className="rounded-full w-full flex-none"
              width={500}
              height={500}
            />
          </Reveal>
          <div className="flex flex-col gap-4 px-14 pt-10">
            <Reveal
              delay={0}
              animate={["y"]}
              className="text-6xl sm:text-8xl font-bold"
            >
              Hi!
            </Reveal>
            <Reveal delay={1} animate={["y"]}>
              <h2 className="text-2xl sm:text-3xl font-thin mb-4">
                I'm <span className="font-bold">Ali</span>, and I'm a&nbsp;
                <Underline delay={1.5} className="font-bold whitespace-nowrap">
                  Full-Stack Engineer
                </Underline>
                .
              </h2>
              <p className="sm:text-2xl font-thin">
                I have a passion for building scalable web apps and engaging
                user experiences, specializing in Next.js, TypeScript, and a mix
                of front-end and back-end technologies.
              </p>
            </Reveal>
            {/* <Reveal delay={1} className="text-xl sm:text-2xl font-thin">
              Motivated by a commitment to excellence and efficiency, I lead
              teams to transform complex challenges into intuitive solutions.
            </Reveal> */}

            <Reveal delay={1} animate={["y"]}>
              <Button
                variant="outline"
                className="px-5 sm:text-2xl w-full sm:w-fit mt-4"
              >
                Let's work together!
              </Button>
            </Reveal>
          </div>
        </section>

        <section
          data-name="about"
          className="mb-24 w-full bg-neutral-950 flex flex-col sm:flex-row items-center justify-center h-dvh border-y border-gray-800 px-14"
        >
          <div className="max-w-4xl mx-auto w-full ">
            <Reveal className="text-5xl font-bold mb-4">
              <Underline delay={0.3}>About</Underline>
            </Reveal>
            <div className="flex flex-col">
              <Reveal
                delay={0.5}
                className="flex flex-col gap-4 w-full px-0 py-8 sm:w-1/2 text-lg font-thin"
              >
                <p className="">
                  I'm a Full-Stack Engineer with 6+ years of experience building
                  scalable web apps and engaging user experiences. I'm
                  passionate about building products that make a difference in
                  people's lives. I'm a self-starter who loves to learn and is
                  always looking for ways to improve.
                </p>
                <p className="">
                  I'm motivated by a commitment to excellence and efficiency. I
                  lead teams to transform complex challenges into intuitive
                  solutions.
                </p>
                <p className="">
                  I love to travel, hike, and play soccer. I'm also a big fan of
                  music and enjoy playing the guitar.
                </p>
                <p className="">
                  I'm currently looking to join a team of talented engineers to
                  build products that make a difference in people's lives.
                </p>
              </Reveal>

              <Reveal className="w-full sm:w-1/2"></Reveal>
            </div>
          </div>
        </section>

        <section
          data-name="education"
          className="max-w-4xl mx-auto mb-24 w-full px-14 sm:px-0"
        >
          <Reveal className="text-5xl font-bold mb-6">
            <Underline delay={0.3}>Education</Underline>
          </Reveal>
          <Reveal
            delay={0.5}
            className="flex flex-col w-full border-b border-gray-800 px-0 py-8 gap-4"
          >
            <div className="flex flex-col sm:flex-row justify-start sm:justify-between sm:items-end text-lg">
              <h1 className="text-2xl font-medium">University of Maryland</h1>
              <h2 className="font-thin">College Park, MD</h2>
            </div>
            <div className="flex flex-col sm:flex-row justify-start sm:justify-between sm:items-end text-lg">
              <h2 className="font-medium text-violet-500">
                Bachelor of Science in Computer Science
              </h2>
              <h3 className="font-thin text-lg">Graduated May 2015</h3>
            </div>
            <h2 className="font-thin text-lg mb-4">GPA: 3.55</h2>
          </Reveal>
        </section>

        <section
          data-name="experience"
          className="max-w-4xl mx-auto mb-24 w-full px-14 sm:px-0"
        >
          <Reveal className="text-5xl font-bold mb-6">
            <Underline delay={0.3}>Work Experience</Underline>
          </Reveal>
          <div className="flex flex-col">
            {WorkProjects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </section>

        <section
          data-name="contact"
          className="w-full bg-neutral-950 flex items-center justify-center h-dvh border-y border-gray-800 px-14"
        >
          <Reveal
            data-name="contact"
            className="flex flex-col items-center justify-center h-dvh gap-4 snap-start"
          >
            <h1 className="text-4xl sm:text-6xl font-bold">Contact</h1>
            <p className="text-lg sm:text-2xl font-thin text-center">
              I'm currently open to new opportunities. Let's connect!
            </p>
            <Button
              variant="outline"
              as="Link"
              href="mailto:alieskandari3@gmail.com"
              className="text-lg sm:text-2xl font-bold flex items-center"
            >
              <EnvelopeIcon className="w-6" />
              &nbsp;alieskandari3@gmail.com
            </Button>
          </Reveal>
        </section>
        {/* <section data-name="resume" className=""></section> */}
      </main>
      {/* <motion.div
        className="fixed right-0 top-0 bottom-0 w-2 origin-top-right bg-violet-500"
        style={{
          scaleY: scrollYProgress,
        }}
      /> */}
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="flex flex-col w-full border-b border-gray-800 px-0 py-8 gap-4 sm:gap-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <h1 className="text-2xl font-medium">{project.name}</h1>
        <h3 className="font-thin text-lg">{project.dates}</h3>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end text-lg mb-4">
        <h2 className="font-medium text-violet-500">{project.position}</h2>
        <h2 className="font-thin">{project.location}</h2>
      </div>
      <h2 className="font-thin text-lg mb-4">{project.description}</h2>
      <div className="flex-wrap font-base text-sm flex gap-2">
        {project.technologies.map((technology) => (
          <div className="rounded-full w-fit py-1.5 px-3 border border-gray-700 bg-gray-900">
            {technology}
          </div>
        ))}
      </div>
      {/* 
      <div className="flex gap-2">
        <Button
          as="Link"
          variant="none"
          href={project.link}
          className="p-1 text-xl w-fit mt-4"
        >
          <LinkIcon className="size-8 text-gray-500 hover:text-gray-400 active:text-gray-300" />
        </Button>
      </div> */}
    </Reveal>
  );
}
