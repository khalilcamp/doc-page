import React from "react";
import "../output.css";
import GrafanaPNG from "../assets/grafanalogo.png";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-start gap-36 items-center py-3 shadow-md">
      <div className="flex items-center border-1 bg-slate-100 rounded-r-xl gap-4">
        <Link to="/" className="flex items-center gap-4 ml-4">
          <img src={GrafanaPNG} alt="" className="h-16" />
          <h2 className="pr-2 font-montregular font-semibold text-black">
            Grafana Documentação
          </h2>
        </Link>
      </div>
      <div className="flex justify-between w-full">
      <ul className="flex gap-4">
        <li className="font-montregular hover:underline hover:text-green-600 hover:font-montbold">
          <a href="/docs">Docs</a>
        </li>
        <Separator orientation="vertical"/>
        <li className="font-montregular hover:underline hover:text-green-600 hover:font-montbold">
          <a href="/about">Faq</a>
        </li>
      </ul>
      <div className="px-5 flex gap-4">
        <button className="bg-green-400 border-slate-700 border-2 rounded-xl px-4 py-2 hover:bg-slate-400 duration-200">
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
