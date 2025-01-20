import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MonitorIMG from "../../assets/Startup-Business-Strategy-1200x885.png";

function SectionOne(){
    return (
        <div className=" bg-white flex h-96 w-full justify-evenly border rounded-b-3xl py-5">
            <div className="ml-12 flex flex-col gap-4 justify-center items-start w-1/2 px-2">
                <h1 className="font-smoochregular font-semibold text-4xl w-1/2 text-slate-950">Vamos iniciar nossa documentação com Grafana</h1>
                <p className="w-1/2 font-smoochbold text-lg text-slate-800">Grafana é uma plataforma open source de Analise e visualização interativa. É possível produzir gráficos, alertas
                    o que sua imaginação preferir!
                </p>
                <div className="w-1/2 flex gap-2">
                    <Input className="w-1/2 border-r-8 font-smoochregular text-black" type="search" placeholder="Procure na documentação" id="searchWiki"/>
                    <Button className="bg-slate-900 border-r-2" id="searchWiki" >Buscar</Button>
                </div>
            </div>
            <div>
                <div className="flex w-full h-full">
                    <img src={MonitorIMG} className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}

export default SectionOne;