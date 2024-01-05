import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./buttons/button";

export default function Navbar() {
  return (
    <div className="z-10 backdrop-blur-md fixed top-0 left-0 right-0 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto h-14 sm:h-20 px-10 text-white flex items-center justify-between">
        <div className="flex gap-6 items-center">
          <Button
            variant="text"
            className="flex items-center"
            as="Link"
            href="https://github.com/AliEskandari"
          >
            <FontAwesomeIcon icon={faGithub} className="size-6" />
          </Button>
          {/* <Button
          variant="none"
          className="text-violet-500 hover:text-violet-400"
          as="Link"
          href="/about"
        >
          <FontAwesomeIcon icon={faLinkedin} className="size-6" />
        </Button> */}
        </div>
        <div>
          <Button
            as="Link"
            href="/files/resume.pdf"
            variant="none"
            className="text-violet-500 flex items-center gap-x-2 text-sm"
          >
            My resume
          </Button>
        </div>
      </nav>
    </div>
  );
}
