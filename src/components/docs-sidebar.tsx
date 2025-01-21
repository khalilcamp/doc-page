import { GoAlert } from "react-icons/go";

// Itens da sidebar
const sideBarContent = [
  { title: "1. Sobre o Grafana", icon: <GoAlert size={10} />, id: 1 },
  { title: "1.1. Setup", icon: <GoAlert size={10} />, id: 2 },
  { title: "2. Overview", icon: <GoAlert size={10} />, id: 3 },
  { title: "2.1. Introdução à time series.", icon: <GoAlert size={10} />, id: 4 },
  { title: "2.2. Introdução à historiograma e heatmaps.", icon: <GoAlert size={10} />, id: 5 },
  { title: "2.3. Glossario", icon: <GoAlert size={10} />, id: 6 },
  { title: "3. Data Sources / Bancos de Dados", icon: <GoAlert size={10} />, id: 7 },
  { title: "3.1. Alertmanager", icon: <GoAlert size={10} />, id: 8 },
  { title: "3.2. PostgreSQL", icon: <GoAlert size={10} />, id: 9 },
  { title: "3.3. Loki", icon: <GoAlert size={10} />, id: 10 },
  { title: "3.4. Graphite", icon: <GoAlert size={10} />, id: 11 },
  { title: "4. Dashboards", icon: <GoAlert size={10} />, id: 12 },
  { title: "4.1. Usando Dashboards", icon: <GoAlert size={10} />, id: 13 },
  { title: "4.2. Construindo Dashboards", icon: <GoAlert size={10} />, id: 14 },
  { title: "4.3. Importar Dashboards", icon: <GoAlert size={10} />, id: 6 },
  { title: "4.4. Modificar configurações", icon: <GoAlert size={10} />, id: 6 },
  { title: "4.5. Links de Dashboards", icon: <GoAlert size={10} />, id: 6 },
  { title: "4.6. Variaveis", icon: <GoAlert size={10} />, id: 6 },
  { title: "4.7. Bibliotecas", icon: <GoAlert size={10} />, id: 6 },
  { title: "4.8. Modelos JSON", icon: <GoAlert size={10} />, id: 6 },
  { title: "4.9. Boas práticas", icon: <GoAlert size={10} />, id: 6 },
  
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
