import { useState } from "react";
import DocsSideBar from "@/components/docs-sidebar";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import GrafLogin from "../assets/graf_login.png";

// Conteúdo dos documentos
const docContent = [
  {
    id: 1,
    title: 
     " O que é o Grafana?",
    content:
        "O Grafana Open Source Software (OSS) permite que você consulte, visualize, alerte e explore suas métricas, logs e rastros onde quer que estejam armazenados. Os plugins de fonte de dados do Grafana permitem que você consulte fontes de dados, incluindo bancos de dados de séries temporais como Prometheus e CloudWatch, ferramentas de registro como Loki e Elasticsearch, bancos de dados NoSQL/SQL como Postgres, ferramentas CI/CD como GitHub e muito mais. O Grafana OSS fornece ferramentas para exibir esses dados em painéis ao vivo com gráficos e visualizações perspicazes.",
    contentadd:
    <div className="flex flex-col gap-4">
  <h1 className="text-2xl font-montbold">Explore métricas, logs e rastros</h1>
  <p>Explore seus dados por meio de consultas ad-hoc e drilldown dinâmico. Divida a visualização e compare diferentes intervalos de tempo, consultas e fontes de dados lado a lado.</p>
  <Separator/>
  <h1 className="text-2xl font-montbold">Alertas</h1>
<p>
  Se você estiver utilizando o Grafana Alerting, pode enviar alertas através de diversos notifiers, como PagerDuty, SMS, email, VictorOps, OpsGenie ou Slack.
  Hooks de alerta permitem que você crie diferentes notifiers com um pouco de código, caso prefira outros canais de comunicação. Defina regras de alerta visualmente para suas métricas mais importantes.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Anotações</h1>
<p>
  Anote gráficos com eventos ricos de diferentes fontes de dados. Passe o mouse sobre os eventos para ver os metadados completos e tags.
  Este recurso, que aparece como um marcador de gráfico no Grafana, é útil para correlacionar dados caso algo dê errado. Você pode criar as anotações manualmente — basta clicar com o botão direito em um gráfico e inserir algum texto — ou você pode buscar dados de qualquer fonte de dados.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Variáveis de Dashboard</h1>
<p>
  Variáveis de template permitem criar dashboards reutilizáveis para diferentes casos de uso. Os valores não são fixos nesses templates, por exemplo, se você tiver um servidor de produção e um servidor de testes, pode usar o mesmo dashboard para ambos.
  O template permite explorar os dados, desde todos os dados até dados específicos, como de um servidor de produção, passando por uma região como a América do Norte e até o estado do Texas. Você também pode compartilhar esses dashboards com diferentes equipes dentro da sua organização — ou se criar um ótimo template para uma fonte de dados popular, pode compartilhá-lo com a comunidade para personalização.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Configuração do Grafana</h1>
<p>
  Se você é um administrador do Grafana, é importante se familiarizar com as opções de configuração e o CLI do Grafana. A configuração abrange tanto arquivos de configuração quanto variáveis de ambiente. Você pode configurar portas padrão, níveis de log, endereços IP de email, segurança e muito mais.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Importar Dashboards e Plugins</h1>
<p>
  Descubra centenas de dashboards e plugins na biblioteca oficial. Graças à paixão e ao esforço dos membros da comunidade, novos dashboards e plugins são adicionados toda semana.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Autenticação</h1>
<p>
  O Grafana oferece diferentes métodos de autenticação, como LDAP e OAuth, permitindo mapear usuários para organizações. Na versão Enterprise do Grafana, você pode mapear usuários para equipes: se sua empresa tiver seu próprio sistema de autenticação, o Grafana permite mapear as equipes de seus sistemas internos para as equipes no Grafana. Assim, você pode automaticamente conceder acesso aos dashboards designados para suas equipes.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Provisionamento</h1>
<p>
  Embora seja fácil criar um dashboard clicando, arrastando e soltando, usuários avançados que precisam de muitos dashboards podem automatizar a configuração com um script. Você pode automatizar qualquer coisa no Grafana. Por exemplo, ao iniciar um novo cluster Kubernetes, você pode configurar o Grafana automaticamente com um script que predefine o servidor, o endereço IP e as fontes de dados, de modo que os usuários não possam alterá-los. Também é uma maneira de controlar vários dashboards.
</p>
<Separator/>

<h1 className="text-2xl font-montbold">Permissões</h1>
<p>
  Quando as organizações têm um único Grafana e várias equipes, é comum querer manter as coisas separadas e ao mesmo tempo compartilhar dashboards. Você pode criar uma equipe de usuários e definir permissões em pastas e dashboards, até mesmo no nível de fonte de dados, caso esteja usando o Grafana Enterprise.
</p>
<Separator/>


    </div>
        ,
    version: "",
    date: "",
  },
  {
    id: 2,
    title: "Setup",
    content:
      "Esse tópico trará detalhes importantes de como começar a usar o Grafana.",
    contentadd:
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-montbold">Login Grafana</h1>
        <ul className="flex flex-col justify-center items-center gap-4">
          <Separator/>
          <li>
            1. Ao entrar no link fornecido para o Grafana, você irá se deparar com essa página:
          </li>
          <Separator/>
          <img src={GrafLogin} alt="" className="w-1/2" />
          <Separator/>
          <li>
            2. Você deverá colocar o seu login como designado por quem fez o seu acesso.
          </li>
        </ul>
      </div>,
  },
];

function MainDoc() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Filtra o conteúdo baseado no id selecionado
  const selectedContent = docContent.find((item) => item.id === selectedId);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Separator/>
      <div className="flex flex-row">
        <DocsSideBar onItemClick={setSelectedId} /> {/* Passa a função para atualizar o id */}
        <Separator orientation="vertical"/>
        <div className="flex-1 p-4">
          {selectedContent ? (
            <div className="flex flex-col gap-4">
              <h1 className="font-montbold text-4xl text-white">
                {selectedContent.title}
              </h1>
              <Separator/>
              <p className="font-montregular text-sm text-white">
                {selectedContent.content}
              </p>
              <Separator/>
              <p className="font-montregular text-sm text-white">
                {selectedContent.contentadd}
              </p>
              <Separator/>
            </div>
          ) : (
            <p className="text-white">Selecione um item no menu.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainDoc;
