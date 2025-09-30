import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="content-logo">
            <img className='logo' src="https://hgcrastreamentos.com.br/wp-content/uploads/2024/07/logo-HGC-Rastreramento3.png" alt="logo da empresa" />
          </div>
          <button className="menu-button" onClick={toggleSidebar}>
            ☰
          </button>
            <h1 className="header-title">{currentPage}</h1>
          <div className="header-info">
            <span className="alert">🔔​</span>
            <ThemeToggle />
            <img className='avatar' src="https://github.com/pc-silva.png" alt="imagem de perfil do usuário" />
            <span className='username'>Olá, Paulo Silva ✨</span>
            <span className='arrow-info'>▼</span>
          </div>
        </div>
      </header>
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={toggleSidebar}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
};

export default Header;