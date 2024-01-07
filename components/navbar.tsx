import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./buttons/button";
import { BriefcaseIcon, DocumentIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="z-10 fixed top-0 left-0 right-0">
      <nav className="max-w-7xl mx-auto h-14 px-4 sm:px-10 text-white flex items-center justify-end">
        <div className="flex items-center justify-around backdrop-blur-sm gap-1 rounded-full border-neutral-800 border px-2">
          <Button
            variant="text"
            className="flex items-center justify-center rounded-full size-10 text-neutral-500"
            as="Link"
            href="https://github.com/AliEskandari"
          >
            <FontAwesomeIcon icon={faGithub} className="size-5 sm:size-6" />
          </Button>
          <Button
            as="Link"
            href="/files/resume.pdf"
            variant="text"
            className="flex items-center justify-center rounded-full size-10 text-neutral-500 p-0"
          >
            <DocumentIcon className="size-5 sm:size-6" />
            {/* My resume */}
          </Button>
        </div>
      </nav>
    </div>
  );
}
