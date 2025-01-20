import { FaChartBar, FaCogs, FaEye, FaPlug } from "react-icons/fa"; // Importando ícones
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoAlert } from "react-icons/go";

const cardContent = [
  {
    title: "Iniciando com Grafana",
    description: "Não sabe por onde começar? Este guia é para você!",
    content: "/guia-grafana",
    linkText: "Acessar o Guia",
    icon: <FaChartBar className="text-blue-500 text-3xl" />, // Ícone personalizado
  },
  {
    title: "Configuração Avançada",
    description: "Explore opções avançadas e potencialize seu uso.",
    content: "/configuracao-avancada",
    linkText: "Configurações",
    icon: <FaCogs className="text-green-500 text-3xl" />, // Ícone personalizado
  },
  {
    title: "Monitoramento",
    description: "Descubra como monitorar seus sistemas com eficiência.",
    content: "/monitoramento",
    linkText: "Ir para Monitoramento",
    icon: <FaEye className="text-purple-500 text-3xl" />, // Ícone personalizado
  },
  {
    title: "Integrações",
    description: "Aprenda a integrar ferramentas externas ao Grafana.",
    content: "/integracoes",
    linkText: "Explorar Integrações",
    icon: <FaPlug className="text-red-500 text-3xl" />, // Ícone personalizado
  },
];

function SectionTwo() {
  return (
    <div className="px-12 py-12 mt-12 border rounded-t-lg bg-neutral-950 flex flex-col justify-center gap-14">
      <div className="flex items-center gap-4">
        <GoAlert size={40}/>
        <h1 className="font-montsemi text-4xl text-white">Tópicos mais acessados:</h1>
      </div>
      <div className="flex flex-row justify-center gap-12">
        {cardContent.map((card, index) => (
          <Card key={index} className="mb-4 h-60 w-1/4 bg-white py-5 font-montregular flex flex-col items-start justify-center">
            <CardHeader>
              <div className="flex items-start">
                {card.icon}
              </div>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={card.content}
                className="text-green-500 hover:text-green-700"
              >
                {card.linkText}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SectionTwo;
