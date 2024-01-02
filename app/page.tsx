"use client";
import Reveal from "@/components/animations/reveal";
import Underline from "@/components/animations/underline";
import Button from "@/components/buttons/button";
import Image from "next/image";
import { EnvelopeIcon, LinkIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArrowsPointingOutIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

type Project = {
  name: string;
  position: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  link: string;
  imagesUrls: string[];
};

const WorkProjects: Project[] = [
  {
    name: "Listr",
    link: "https://listr.app",
    position: "Senior Full-Stack Engineer",
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
    link: "https://Qortor.com",
    position: "Senior Full-Stack Engineer",
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
    name: "DomumGym",
    position: "Lead Full-Stack Engineer",
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
    name: "Dojo Apps",
    position: "Lead Full-Stack Engineer",
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
    name: "Booz Allen",
    position: "Full-Stack Engineer",
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
    position: "Lead Full-Stack Engineer",
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

        <section data-name="skills" className=""></section>
        <section data-name="education" className=""></section>

        {WorkProjects.map((project) => (
          <ProjectCard project={project} />
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

function ProjectCard({ project }: { project: Project }) {
  const animation = useAnimation();
  const [status, setStatus] = useState<"normal" | "image-view">("normal");
  const [hoverStatus, setHoverStatus] = useState<"hover" | "no-hover">(
    "no-hover"
  );

  useEffect(() => {
    if (status === "normal") {
      animation.start("normal");
    } else {
      animation.start("image-view");
    }
  }, [status]);

  useEffect(() => {
    if (hoverStatus === "hover") {
      animation.start("hover");
    } else {
      animation.start("no-hover");
    }
  }, [hoverStatus]);

  return (
    <div
      data-name="project"
      className="flex flex-col sm:flex-row items-center gap-x-10 h-dvh snap-start"
    >
      {/* Left Side: Project Images */}
      <motion.div
        onClick={() => setStatus("image-view")}
        onMouseEnter={() => {
          if (status === "normal") setHoverStatus("hover");
        }}
        onMouseLeave={() => {
          if (status === "normal") setHoverStatus("no-hover");
        }}
        data-name="project:images"
        // delay={1}
        animate={animation}
        initial="normal"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        variants={{
          "image-view": {
            width: "100%",
            height: "100%",
            transition: {
              delay: 0.6,
              duration: 0.6,
            },
          },
          normal: {
            width: "calc(100% * 1 / 3)",
            height: "calc(100% * 1 / 3)",
          },
        }}
        className="overflow-hidden relative flex-none whitespace-nowrap"
      >
        <Reveal
          delay={1}
          className="h-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgb(0, 0, 0) 10%, rgb(0, 0, 0) 90%, transparent 100%); ",
          }}
        >
          <div className="flex gap-x-4 overflow-x-auto snap-mandatory snap-x aspect-video p-4 px-10 rounded-xl h-full">
            {project.imagesUrls?.map((imageUrl) => (
              <Image
                src={imageUrl}
                alt={project.name}
                className="object-cover w-full h-full rounded-xl"
                width={2000}
                height={2000}
                quality={100}
              />
            ))}
          </div>

          <motion.button
            animate={animation}
            initial="normal"
            variants={{
              "image-view": {
                opacity: 0,
                visibility: "hidden",
              },
              normal: {
                opacity: 0,
                visibility: "visible",
              },
              hover: {
                opacity: 1,
                visibility: "visible",
              },
              "no-hover": {
                opacity: 0,
                visibility: "visible",
              },
            }}
            className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-80"
          >
            <ArrowsPointingOutIcon className="size-12 text-violet-500" />
          </motion.button>
        </Reveal>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={animation}
          initial="normal"
          variants={{
            "image-view": {
              opacity: 1,
            },
            normal: {
              opacity: 0,
            },
          }}
          className="absolute top-5 right-5 p-1 text-xl w-fit rounded-full bg-black"
          onClick={(event) => {
            event.stopPropagation();
            setStatus("normal");
          }}
        >
          <XMarkIcon className="size-8 text-white" />
        </motion.button>
      </motion.div>

      {/* Right Side: Project Info */}
      <motion.div
        animate={animation}
        initial="normal"
        variants={{
          "image-view": {
            opacity: 0,
            transitionEnd: {
              visibility: "hidden",
            },
            transition: {
              duration: 0.6,
            },
          },
          normal: {
            opacity: 1,
            visibility: "visible",
            transition: {
              delay: 0.6,
            },
          },
        }}
        data-name="project:info"
        // delay={0}
        className="overflow-clip"
      >
        <Reveal className="flex flex-col gap-4 flex-none">
          <h1 className="flex gap-4 items-center text-6xl sm:text-8xl font-bold">
            {project.name}
          </h1>
          <h2 className="text-2xl sm:text-4xl font-thin">{project.position}</h2>
          <p className="text-base sm:text-lg text-violet-500 font-medium">
            {project.technologies.join(" • ")}
          </p>
          <h2 className="text-lg sm:text-2xl font-thin">
            {project.description}
          </h2>

          <div className="flex gap-2">
            <Button
              as="Link"
              variant="none"
              href={project.link}
              className="p-1 text-xl w-fit mt-4"
            >
              <LinkIcon className="size-8 text-gray-500 hover:text-gray-400 active:text-gray-300" />
            </Button>
          </div>
        </Reveal>
      </motion.div>
    </div>
  );
}
