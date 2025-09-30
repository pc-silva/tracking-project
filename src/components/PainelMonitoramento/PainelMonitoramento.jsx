import React, { useState, useEffect } from 'react';
import './PainelMonitoramento.css';

const PainelMonitoramento = () => {
  const [veiculos, setVeiculos] = useState([
    { id: 1, placa: 'ABC-1234', status: 'online', lat: -23.5505, lng: -46.6333, velocidade: 60 },
    { id: 2, placa: 'DEF-5678', status: 'online', lat: -23.5510, lng: -46.6340, velocidade: 45 },
    { id: 3, placa: 'GHI-9012', status: 'offline', lat: -23.5498, lng: -46.6325, velocidade: 0 },
    { id: 4, placa: 'JKL-3456', status: 'online', lat: -23.5520, lng: -46.6350, velocidade: 80 }
  ]);

  const [filtroStatus, setFiltroStatus] = useState('todos');
  const [mapaCarregado, setMapaCarregado] = useState(false);

  // Simula carregamento do mapa
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapaCarregado(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const veiculosFiltrados = filtroStatus === 'todos' 
    ? veiculos 
    : veiculos.filter(v => v.status === filtroStatus);

  return (
    <div className="painel-monitoramento">
      <div className="painel-header">
        <h1>Painel de Monitoramento</h1>
        <div className="painel-stats">
          <div className="stat">
            <span className="stat-number">{veiculos.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat online">
            <span className="stat-number">
              {veiculos.filter(v => v.status === 'online').length}
            </span>
            <span className="stat-label">Online</span>
          </div>
          <div className="stat offline">
            <span className="stat-number">
              {veiculos.filter(v => v.status === 'offline').length}
            </span>
            <span className="stat-label">Offline</span>
          </div>
        </div>
      </div>

      <div className="painel-content">
        {/* Filtros */}
        <div className="filtros">
          <div className="filtro-group">
            <label>Status:</label>
            <select 
              value={filtroStatus} 
              onChange={(e) => setFiltroStatus(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          
          <div className="filtro-group">
            <button className="btn-atualizar">
              🔄 Atualizar Dados
            </button>
          </div>
        </div>

        {/* Container do Mapa e Lista */}
        <div className="monitoramento-container">
          {/* Mapa */}
          <div className="mapa-container">
            <div className="mapa-header">
              <h3>Mapa de Monitoramento</h3>
              <div className="mapa-legenda">
                <div className="legenda-item">
                  <span className="ponto online"></span>
                  Online
                </div>
                <div className="legenda-item">
                  <span className="ponto offline"></span>
                  Offline
                </div>
              </div>
            </div>
            
            <div className="mapa-placeholder">
              {mapaCarregado ? (
                <>
                  <div className="mapa-simulado">
                    {/* Pontos simulados no mapa */}
                    {veiculosFiltrados.map(veiculo => (
                      <div 
                        key={veiculo.id}
                        className={`ponto-mapa ${veiculo.status}`}
                        style={{
                          left: `${((veiculo.lng + 46.64) * 1000) % 90}%`,
                          top: `${((veiculo.lat + 23.56) * 1000) % 90}%`
                        }}
                        title={`${veiculo.placa} - ${veiculo.velocidade}km/h`}
                      >
                        <div className="ponto-interno"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mapa-coordenadas">
                    📍 Fortaleza, CE - Brasil
                  </div>
                </>
              ) : (
                <div className="mapa-carregando">
                  <div className="loading-spinner"></div>
                  <p>Carregando mapa...</p>
                </div>
              )}
            </div>
          </div>

          {/* Lista de Veículos */}
          <div className="lista-veiculos">
            <h3>Veículos Monitorados</h3>
            <div className="veiculos-list">
              {veiculosFiltrados.map(veiculo => (
                <div key={veiculo.id} className={`veiculo-card ${veiculo.status}`}>
                  <div className="veiculo-header">
                    <span className="veiculo-placa">{veiculo.placa}</span>
                    <span className={`status-badge ${veiculo.status}`}>
                      {veiculo.status === 'online' ? '🟢 Online' : '🔴 Offline'}
                    </span>
                  </div>
                  <div className="veiculo-info">
                    <div className="info-item">
                      <span>Velocidade:</span>
                      <strong>{veiculo.velocidade} km/h</strong>
                    </div>
                    <div className="info-item">
                      <span>Última atualização:</span>
                      <strong>Há 2 min</strong>
                    </div>
                    <div className="info-item">
                      <span>Localização:</span>
                      <strong>Lat: {veiculo.lat.toFixed(4)}, Lng: {veiculo.lng.toFixed(4)}</strong>
                    </div>
                  </div>
                  <div className="veiculo-actions">
                    <button className="btn-acao">🗺️ Rota</button>
                    <button className="btn-acao">📊 Histórico</button>
                    <button className="btn-acao">🔍 Detalhes</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelMonitoramento;