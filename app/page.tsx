"use client";
import Reveal from "@/components/animations/reveal";
import Underline from "@/components/animations/underline";
import Button from "@/components/buttons/button";
import Navbar from "@/components/navbar";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

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
      "React Query",
      "Zustand",
      "Mixpanel",
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
      "Redux",
      "Figma",
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
    technologies: [
      "React",
      "Javascript",
      "MongoDB",
      "Shopify",
      "GraphQL",
      "AWS",
      "Tailwind CSS",
      "Material UI",
    ],
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
      "Google Analytics",
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
          data-name="hero:container"
          className="flex items-center justify-center max-w-5xl mx-auto w-full h-svh mb-10"
        >
          <div
            data-name="hero:content"
            className="flex flex-col sm:flex-row-reverse gap-x-20 relative"
          >
            <Reveal
              data-name="light:left"
              delay={1.4}
              className="absolute left-20 top-20 sm:left-[450px] sm:top-[280px]"
            >
              <Light
                pathRadius={15}
                direction="ccw"
                duration={815}
                className="size-24 bg-violet-500/10"
              />
            </Reveal>
            <Reveal
              data-name="light:middle"
              delay={1}
              className="absolute top-96 right-80"
            >
              <Light
                pathRadius={30}
                duration={20}
                className="size-10 bg-violet-300"
              />
            </Reveal>
            <Reveal
              data-name="light:right"
              delay={1.2}
              className="absolute -top-20 sm:top-0 right-44 sm:right-72"
            >
              <Light
                direction="cw"
                pathRadius={28}
                duration={25}
                className="size-32 sm:size-52 bg-violet-700/30"
              />
            </Reveal>

            <div
              data-name="hero:text"
              className="flex flex-col gap-4 px-8 sm:pt-10"
            >
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
                  <Underline
                    delay={1.5}
                    className="font-bold whitespace-nowrap"
                  >
                    Full-Stack Engineer
                  </Underline>
                  .
                </h2>
                <p className="sm:text-2xl font-thin">
                  I have a passion for building scalable web apps and engaging
                  user experiences, specializing in Next.js, TypeScript, and a
                  mix of front-end and back-end technologies.
                </p>
              </Reveal>
              {/* <Reveal delay={1} className="text-xl sm:text-2xl font-thin">
              Motivated by a commitment to excellence and efficiency, I lead
              teams to transform complex challenges into intuitive solutions.
            </Reveal> */}
              <Reveal delay={1} animate={["y"]}>
                <Button
                  variant="outline"
                  className="sm:px-5 text-base sm:text-xl w-full sm:w-fit mt-4"
                >
                  Let's work together!
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          data-name="about:container"
          className="w-full bg-neutral-950 flex justify-center items-center border-y border-gray-800 sm:px-10 py-20 mb-24"
        >
          <Section data-name="about" heading="About" className="mb-0">
            <div className="flex flex-col sm:flex-row justify-between gap-10">
              <Reveal
                delay={0.5}
                className="flex flex-col gap-4 w-full px-0 py-8 sm:w-1/2 text-base sm:text-lg font-thin"
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

              <Reveal className="w-full sm:w-1/2" delay={1}>
                <Image
                  src="/images/profile-pic.jpeg"
                  alt="Ali"
                  className="rounded-full flex-none aspect-square object-cover w-2/3 mx-auto filter grayscale"
                  width={500}
                  height={500}
                />
              </Reveal>
            </div>
          </Section>
        </section>

        <Section data-name="education" heading="Education">
          <Reveal
            delay={0.5}
            className="flex flex-col w-full border-b border-gray-800 px-0 py-8 gap-4 sm:gap-0"
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
        </Section>

        <Section data-name="experience" heading="Work Experience">
          <div className="flex flex-col">
            {WorkProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <section
          data-name="contact"
          className="w-full bg-neutral-950 flex items-center justify-center h-svh border-y border-gray-800 px-10"
        >
          <Reveal
            data-name="contact"
            className="flex flex-col items-center justify-center h-svh gap-4"
          >
            <h1 className="text-4xl sm:text-6xl font-bold">Contact</h1>
            <p className="text-lg sm:text-2xl font-thin text-center">
              I'm currently open to new opportunities. Let's connect!
            </p>
            <Button
              variant="outline"
              as="Link"
              href="mailto:alieskandari3@gmail.com"
              className="text-lg sm:text-xl flex items-center"
            >
              <EnvelopeIcon className="w-6" />
              &nbsp;alieskandari3@gmail.com
            </Button>
          </Reveal>
        </section>
        {/* <section data-name="resume" className=""></section> */}
        <Footer />
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
          <div
            key={technology}
            className="rounded-full w-fit py-1.5 px-3 border border-gray-700 bg-gray-900"
          >
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

function Footer() {
  return (
    <footer className="flex gap-4  items-center justify-center h-14 border-t border-gray-800">
      <Button
        variant="text"
        className="text-sm flex items-center gap-2"
        as="Link"
        href=""
      >
        See the code on Github{" "}
        <FontAwesomeIcon icon={faGithub} className="size-6" />
      </Button>
    </footer>
  );
}

type LightProps = {
  containerClassName?: string;
  className?: string;
  pathRadius?: number;
  delay?: number;
  duration?: number;
  direction?: "cw" | "ccw";
};
function Light({
  containerClassName,
  className,
  pathRadius,
  delay,
  duration,
  direction,
}: LightProps) {
  return (
    <div className={twMerge("absolute", containerClassName)}>
      <motion.div
        initial={{
          offsetDistance: direction == "cw" ? "0%" : "100%",
          opacity: 0.7,
        }}
        animate={{
          offsetDistance: direction == "cw" ? "100%" : "0%",
          opacity: 0.3,
        }}
        transition={{
          delay: delay ?? 0,
          duration: duration ?? 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0,
        }}
        style={{
          offsetPath: `circle(${pathRadius ?? 5}px at center);`,
        }}
        className={twMerge("rounded-full blur-xl", className)}
      />
    </div>
  );
}

type SectionProps = {
  heading: string;
  children: React.ReactNode;
  className?: string;
};
function Section({ heading, children, className }: SectionProps) {
  return (
    <section
      className={twMerge(
        "max-w-4xl mx-auto mb-24 w-full px-8 sm:px-0",
        className
      )}
    >
      <Reveal className="text-4xl sm:text-5xl font-bold mb-6">
        <Underline delay={0.3}>{heading}</Underline>
      </Reveal>

      {children}
    </section>
  );
}
