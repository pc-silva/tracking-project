import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Desenvolvimento from './Desenvolvimento';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, onPageChange, currentPage }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const handleMenuItemClick = (itemName, subItem = null) => {
    if (subItem) {
      onPageChange(`${itemName} / ${subItem}`);
    } else {
      onPageChange(itemName);
    }
    // Não fecha o sidebar ao selecionar um item
  };

  const menuItems = [
    {
      name: 'dashboard',
      label: 'Dashboard',
      hasSubmenu: false,
      icon: '📊',
      path: '/tracking-project/dashboard',
    },
    {
      name: 'pessoas',
      label: 'Pessoas',
      hasSubmenu: true,
      icon: '👥',
      submenu: [
        { label: 'Pessoas', path: '/tracking-project/pessoas' }, 
        { label: 'Categoria', path: '/dev' }, 
        { label: 'Permissões', path: '/dev' }, 
        { label: 'Horários', path: '/dev' },
      ]
    },
    {
      name: 'veiculos',
      label: 'Veículos',
      hasSubmenu: true,
      icon: '🚗',
      submenu: [
        { label: 'Veículos', path: '/dev' },
        { label: 'Painel de Monitoramento', path: '/dev' },
        { label: 'Grupos', path: '/dev' },
        { label: 'Definir Comandos de Eventos', path: '/dev' },
      ]
    },
    {
      name: 'equipamentos/chips',
      label: 'Equipamentos/Chips',
      hasSubmenu: true,
      icon: '🖧',
      submenu: [
        { label: 'Equipamentos',  path: '/dev' },
        { label: 'Estoque',  path: '/dev' },
        { label: 'Chips',  path: '/dev' },
        { label: 'Operadora', path: '/dev' },
      ]
    },
    {
      name: 'financeiro',
      label: 'Financeiro',
      hasSubmenu: true,
      icon: '📈',
      submenu: [
        { label: 'Contas a Receber',  path: '/dev' },
        { label: 'Contas a Pagar',  path: '/dev' },
        { label: 'Contas Recorrentes',  path: '/dev' },
        { label: 'Banco',  path: '/dev' },
        { label: 'Categoria',  path: '/dev' },
        { label: 'Fluxo de Caixa',  path: '/dev' },
        { label: 'Cobrança',  path: '/dev' },
        { label: 'Relatório de Vendas',  path: '/dev' },
        { label: 'Relatório de Inadimplentes',  path: '/dev' },
        { label: 'Relatório de Faturamento', path: '/dev' },
      ]
    },{
      name: 'contratos',
      label: 'Contratos',
      hasSubmenu: true,
      icon: '📝',
      submenu: [
        { label: 'Contratos',  path: '/dev' },
        { label: 'Serviços',  path: '/dev' },
        { label: 'Termo de Rescisão',  path: '/dev' },
        { label: 'Termo de Comodato',  path: '/dev' },
        { label: 'Termo de Uso',  path: '/dev' },
        { label: 'Pedidos',  path: '/dev' },
        { label: 'Próximos a Vencer', path: '/dev' },
      ]
    },
    {
      name: 'ordem de serviço',
      label: 'Ordem de Serviços',
      hasSubmenu: true,
      icon: '📑',
      submenu: [
        { label: 'Ordem de Serviços', path: '/dev' },
        { label: 'Agenda', path: '/dev' },
        { label: 'Categorias', path: '/dev' },
      ]
    },
    {
      name: 'assistência veicular',
      label: 'Assistência Veicular',
      hasSubmenu: true,
      icon: '🚨',
      submenu: [
        { label: 'Planos', path: '/dev' },
        { label: 'Solicitações', path: '/dev' },
        { label: 'Histórico', path: '/dev' },
        { label: 'Veículos com Assistência', path: '/dev' },
        { label: 'Serviços', path: '/dev' },
      ]
    },
    {
      name: 'manutenções',
      label: 'Manutenções',
      hasSubmenu: true,
      icon: '🧑🏽‍🔧',
      submenu: [
        { label: 'Manutenções', path: '/dev' },
        { label: 'Plano de Manutenção', path: '/dev' },
        { label: 'Despesas', path: '/dev' },
      ]
    },
    {
      name: 'sinistros',
      label: 'Sinistros',
      hasSubmenu: true,
      icon: '💢',
      submenu: [
        { label: 'Sinistros', path: '/dev' },
        { label: 'Tipo de Sinistro', path: '/dev' },
        { label: 'Categoria de Ocorrências', path: '/dev' },
      ]
    },
    {
      name: 'relatórios',
      label: 'Relatórios',
      hasSubmenu: true,
      icon: '📋',
      submenu: [
        { label: 'Rotas por Ignição', path: '/dev' },
        { label: 'Percusso e Motorista', path: '/dev' },
        { label: 'Relatório de Excesso de Velocidade', path: '/dev' },
        { label: 'Relatório de Paradas', path: '/dev' },
        { label: 'Relatório de Cadastro e Exclusão de Veículo', path: '/dev' },
        { label: 'Consumo de Combustível', path: '/dev' },
        { label: 'Relatório de Eventos', path: '/dev' },
        { label: 'Relatório de Log', path: '/dev' },
        { label: 'Relatório de Log do Equipamento', path: '/dev' },
        { label: 'Relatório de Comissão do Consultor', path: '/dev' },
        { label: 'Relatório de Sinistro', path: '/dev' },
        { label: 'Relatório de Plano de Manutenção', path: '/dev' },
      ]
    },
  ];

  const isItemActive = (itemName, subItem = null) => {
    if (subItem) {
      return currentPage === `${itemName} - ${subItem}`;
    }
    return currentPage === itemName;
  };

  return (
    <div className={`sidebar-container ${isOpen ? 'sidebar-open' : ''}`}>
      <div className={`sidebar ${isOpen ? 'sidebar-visible' : ''}`}>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.name} className="menu-item">
              {item.hasSubmenu ? (
                <>
                  {/* Item com submenu - usa div com onClick */}
                  <div
                    className={`menu-link ${isItemActive(item.label) ? 'active' : ''} ${openSubmenu === item.name ? 'submenu-open' : ''}`}
                    onClick={() => toggleSubmenu(item.name)}
                    onKeyPress={(e) => e.key === 'Enter' && toggleSubmenu(item.name)}
                    tabIndex={0}
                    role="button"
                  >
                    <span className="menu-content">
                      <span className="menu-icon">{item.icon}</span>
                      <span className="menu-label">{item.label}</span>
                    </span>
                    {item.hasSubmenu && (
                      <span className={`arrow ${openSubmenu === item.name ? 'arrow-up' : 'arrow-down'}`}>
                        ▼
                      </span>
                    )}
                  </div>
                  {/* Submenu */}
                  {item.hasSubmenu && openSubmenu === item.name && (
                    <ul className="submenu">
                      {item.submenu.map((subItem, index) => (
                        <li key={index} className="submenu-item">
                          <Link 
                            to={subItem.path}
                            className={isItemActive(item.label, subItem.label) ? 'active' : ''} 
                            onClick={() => {
                              handleMenuItemClick(item.label, subItem.label);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                /* Item sem submenu - usa Link */
                <Link 
                  to={item.path}
                  className={`menu-link ${isItemActive(item.label) ? 'active' : ''}`}
                  onClick={() => {
                    handleMenuItemClick(item.label);
                  }}
                >
                  <span className="menu-content">
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-label">{item.label}</span>
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Sidebar;