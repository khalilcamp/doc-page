import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="mx-4 px-12 py-12 mt-12 border rounded-t-lg bg-neutral-950 flex flex-col justify-center gap-14">
        <div>
          <h1 className="font-montbold">Documentação Grafana</h1>
          <p className="font-montregular">
            Uma documentação feita em React + Tailwind.
          </p>
        </div>
        <Separator />
        <div className="flex gap-4">
        <a href="https://www.linkedin.com/in/khalil-camargo-packer-035ba91a5/">
        <FaLinkedin
            size={30}
            className="text-black hover:text-green-600 transition-transform transform"
          />
        </a>
        <a href="https://github.com/khalilcamp">
        <FaGithub size={30} className="text-black hover:text-green-600 transition-transform transform"/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
