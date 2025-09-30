import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header/Header.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CadastrarPessoa from './components/Pessoas/CadastrarPessoa/CadastrarPessoa.jsx';
import PainelMonitoramento from './components/PainelMonitoramento/PainelMonitoramento.jsx';

import './App.css';
import Desenvolvimento from './components/Sidebar/Desenvolvimento.jsx';

export function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/pessoas" element={<CadastrarPessoa/>} />
            <Route path="/painel-de-monitoramento" element={<PainelMonitoramento/>} />

            //################################################
            
          <Route path="/dev" element={<Desenvolvimento/>} />
          </Routes>     
        </main>
      </div>
    </HashRouter>
  );
}