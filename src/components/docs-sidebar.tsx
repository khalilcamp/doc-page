
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { GoAlert } from "react-icons/go";

const sideBarContent = [
  {title: "Getting Started", icon: <GoAlert size={10}/>, url: "/getting-started"},
  {title: "Installation", icon: <GoAlert size={10}/>, url: "/installation"},
  {title: "Configuration", icon: <GoAlert size={10}/>, url: "/configuration"},
];
const DocsSideBar = () => {

  return (

    <div className="flex gap-4 min-h-full">
      <div className="flex flex-col gap-2">
      {sideBarContent.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <Link to={item.url} className="text-white flex items-center gap-2 hover:bg-slate-500 hover:border-r-4 border-green-500 p-2 rounded-lg">
          {item.icon}
          <h1 className="font-montsemi text-sm text-white">{item.title}</h1>
          </Link>
        </div>
      ))}
      </div>


      <Separator orientation="vertical"/>
    );
    </div>

  );

};

export default DocsSideBar;