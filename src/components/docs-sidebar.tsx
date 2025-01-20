import { GoAlert } from "react-icons/go";

// Itens da sidebar
const sideBarContent = [
  { title: "1. Sobre o Grafana", icon: <GoAlert size={10} />, id: 1 },
  { title: "1.1. Setup", icon: <GoAlert size={10} />, id: 2 },
  // Adicione mais itens conforme necessário
];

interface DocsSideBarProps {
  onItemClick: (id: number | null) => void; // Função para alterar o conteúdo
}

const DocsSideBar: React.FC<DocsSideBarProps> = ({ onItemClick }) => {
  return (
    <div className="flex flex-col gap-2 p-4 w-64 ">
      {sideBarContent.map((item) => (
        <div key={item.id} className="flex items-center gap-4">
          <div
            onClick={() => onItemClick(item.id)} // Chama a função passando o id
            className="text-white flex items-center gap-2 hover:bg-slate-500 hover:border-r-4 border-green-500 p-2 rounded-lg cursor-pointer"
          >
            {item.icon}
            <h1 className="font-montsemi text-sm text-white">{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocsSideBar;
