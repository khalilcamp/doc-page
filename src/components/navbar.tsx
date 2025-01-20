import React from 'react';
import "../output.css";
import GrafanaPNG from "../assets/grafanalogo.png"

const Navbar: React.FC = () => {
    return (
        <nav className='flex justify-between items-center h-full py-3 shadow-md'>
            <div className="flex items-center border-1 bg-slate-100 rounded-r-xl gap-4">
                <img src={GrafanaPNG} alt="" className='h-16' />
                <h2 className='pr-2'>Grafana Documentação</h2>
            </div>
            <ul className='flex gap-4'>
                <li><a href="/">Docs</a></li>
                <li><a href="/about">Faq</a></li>
                <li><a href="/contact">Elements</a></li>
            </ul>
            <div className='px-5 flex gap-4'>
                <button className='bg-green-400 border-slate-700 border-2 rounded-xl px-4 py-2 hover:bg-slate-400 duration-200'>Entre em contato</button>
                <button className='bg-slate-500 border-slate-700 border-2 rounded-xl px-4 py-2 hover:bg-slate-200 duration-200'>Changelog</button>
            </div>
        </nav>
    );
};

export default Navbar;
