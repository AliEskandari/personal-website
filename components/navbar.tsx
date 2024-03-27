import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./buttons/button";
import { BriefcaseIcon, DocumentIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="z-10 absolute top-0 left-0 right-0">
      <nav className="max-w-5xl mx-auto h-16 text-white flex items-center justify-end px-2">
        <div className="flex items-center justify-around backdrop-blur-md gap-2 rounded-full border-neutral-800 border px-2 divide-x-[.2px] divide-neutral-800">
          <Button
            variant="text-dark"
            className="flex items-center justify-center rounded-full size-10 p-0"
            as="Link"
            href="https://github.com/AliEskandari"
          >
            <FontAwesomeIcon icon={faGithub} className="size-5 sm:size-6" />
          </Button>
          <Button
            as="Link"
            href="/files/resume-3-26-24.pdf"
            variant="text-dark"
            className="flex items-center justify-center rounded-l-none rounded-r-full h-10 w-full p-0 text-xs"
          >
            <DocumentIcon className="size-5 sm:size-6 mr-1" />
            Resume
          </Button>
        </div>
      </nav>
    </div>
  );
}
