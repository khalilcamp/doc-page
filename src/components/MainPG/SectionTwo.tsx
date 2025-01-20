import { FaChartBar, FaCogs, FaEye, FaPlug } from "react-icons/fa"; // Importando ícones
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="px-12 py-12 mx-2 mt-12 border rounded-t-lg bg-black flex flex-col justify-center gap-14">
      <div>
        <h1 className="font-smoochregular text-5xl text-white">Inicie aqui:</h1>
      </div>
      <div className="flex flex-row justify-center gap-12">
        {cardContent.map((card, index) => (
          <Card key={index} className="mb-4 h-60 w-1/4 bg-white py-5 ">
            <CardHeader>
              <div className="flex items-start gap-2">
                {card.icon}
              </div>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={card.content}
                className="text-blue-500 underline hover:text-blue-700"
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
