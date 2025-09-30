import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header/Header.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CadastrarPessoa from './components/Pessoas/CadastrarPessoa/CadastrarPessoa.jsx';
import PainelMonitoramento from './components/PainelMonitoramento/PainelMonitoramento.jsx';

import './App.css';
import Desenvolvimento from './components/Sidebar/Desenvolvimento.jsx';

export function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/tracking-project" element={<Dashboard/>} />
            <Route path="/tracking-project/dashboard" element={<Dashboard/>} />
            <Route path="/tracking-project/pessoas" element={<CadastrarPessoa/>} />
            <Route path="/tracking-project/painel-de-monitoramento" element={<PainelMonitoramento/>} />

            //################################################
            
          <Route path="/dev" element={<Desenvolvimento/>} />
          </Routes>     
        </main>
      </div>
    </BrowserRouter>
  );
}