import Link from "next/link";
import Button from "./buttons/button";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default function Navbar() {
  return (
    <nav className="z-10 h-20 px-10 backdrop-blur-md text-white fixed top-0 left-0 right-0 flex items-center justify-between border-b border-gray-800">
      <div className="flex gap-6 items-center">
        <Button
          variant="none"
          className="text-violet-500 hover:text-violet-400"
          as="Link"
          href="/projects"
        >
          <FontAwesomeIcon icon={faGithub} className="size-6" />
        </Button>
        <Button
          variant="none"
          className="text-violet-500 hover:text-violet-400"
          as="Link"
          href="/about"
        >
          <FontAwesomeIcon icon={faLinkedin} className="size-6" />
        </Button>
      </div>
      <div>
        <Button variant="none" className="text-violet-500">
          My resume
        </Button>
      </div>
    </nav>
  );
}
