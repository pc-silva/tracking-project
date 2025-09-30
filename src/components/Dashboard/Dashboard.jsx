import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { label: 'Total de Veículos', value: '0', icon: '🚗' },
    { label: 'Clientes Comodato', value: '0', icon: '👥' },
    { label: 'Clientes Plataforma', value: '0', icon: '💻' },
    { label: 'Rastreadores em Estoque', value: '0', icon: '📡' },
    { label: 'Veículos Online', value: '0%', icon: '📶', percentage: true },
    { label: 'Offline até 24h', value: '0%', icon: '⚠️', percentage: true },
    { label: 'Offline até 36h', value: '0%', icon: '📴', percentage: true },
    { label: 'Offline +36h', value: '0%', icon: '🛑', percentage: true }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard de Gestão</h1>
      </div>
      
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
            {stat.percentage && (
              <div className="stat-percentage">
                <span className="percentage-indicator">●</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;