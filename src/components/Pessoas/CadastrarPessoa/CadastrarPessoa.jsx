import React, { useState } from 'react';
import './CadastrarPessoa.css';

const CadastrarPessoa = () => {
  const [formData, setFormData] = useState({
    tipoPessoa: 'FÍSICA',
    nomeFantasia: '',
    dataNascimento: '',
    porteiroEstadual: '',
    cnh: '',
    categoria: '',
    grupo: '',
    status: 'ATIVO',
    nomeCompleto: '',
    email: '',
    nomePai: '',
    banco: '',
    consultor: '',
    whatsapp: ['', '', '', '', '', ''],
    notificarAlerta: ['', '', '', '', '']
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (index, value, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui implementa a lógica de envio para o backend
  };

  return (
    <div className="cadastrar-pessoa">
      <div className="form-header">
        <div className="attention-box">
          <strong>Atenção!</strong>
          <p>Aqui vai aviso de cobranças dentre outros vários avisos.</p>
        </div>
        <strong className='title'>CADASTRAR PESSOA</strong>
      </div>

      <form onSubmit={handleSubmit} className="pessoa-form">
        {/* Seção Informações Pessoais */}
        <section className="form-section">
          <h2>Informações Pessoais</h2>
          
          <div className="form-row">
            <div className="form-group">
              <label>Tipo Pessoa</label>
              <select 
                name="tipoPessoa" 
                value={formData.tipoPessoa}
                onChange={handleInputChange}
              >
                <option value="FÍSICA">FÍSICA</option>
                <option value="JURÍDICA">JURÍDICA</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nome Fantasia</label>
              <input 
                type="text" 
                name="nomeFantasia"
                value={formData.nomeFantasia}
                onChange={handleInputChange}
                placeholder="Nome Fantasia"
              />
            </div>

            <div className="form-group">
              <label>Data Nascimento</label>
              <input 
                type="date" 
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Inscrição Estadual</label>
              <input 
                type="text" 
                name="porteiroEstadual"
                value={formData.porteiroEstadual}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>N° Documento</label>
              <input 
                type="text" 
                name="cnh"
                value={formData.cnh}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Categoria</label>
              <select 
                name="categoria" 
                value={formData.categoria}
                onChange={handleInputChange}
              >
                <option value="">Selecione...</option>
                <option value="Comodato">Comodato</option>
                <option value="Fornecedor">Fornecedor</option>
                <option value="Funcionario">Funcionário</option>
                <option value="Plataforma">Plataforma</option>
                <option value="Broker">Broker</option>
                <option value="Associado">Associado</option>
                <option value="Banco">Banco</option>
                <option value="Prestador">Prestador</option>
                <option value="Consultor">Consultor</option>
                <option value="Nexus">Nexus</option>
                <option value="Vendedor">Vendedor</option>
                <option value="Instalador">Instalador</option>
              </select>
            </div>

            <div className="form-group">
              <label>Anexar do Documento</label>
              <input type="file" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Grupo</label>
              <select 
                name="grupo" 
                value={formData.grupo}
                onChange={handleInputChange}
              >
                <option value="">Grupos criados aparecerão aqui...</option>
              </select>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select 
                name="status" 
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="ATIVO">ATIVO</option>
                <option value="INATIVO">INATIVO</option>
              </select>
            </div>
          </div>
        </section>

        {/* Seção Informações de Contato */}
        <section className="form-section">
          <h2>Informações de Contato</h2>
          
          <div className="form-row">
            <div className="form-group large">
              <label>Nome Completo/Razão Social</label>
              <input 
                type="text" 
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                placeholder="Nome completo ou razão social"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <label>Nome do Pai</label>
              <input 
                type="text" 
                name="nomePai"
                value={formData.nomePai}
                onChange={handleInputChange}
                placeholder="Nome do pai"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Banco</label>
              <select 
                name="banco" 
                value={formData.banco}
                onChange={handleInputChange}
              >
                <option value="">Selecione o banco...</option>
                <option value="Banco do Brasil">Banco do Brasil</option>
                <option value="Itaú">Itaú</option>
                <option value="Bradesco">Bradesco</option>
                <option value="Santander">Santander</option>
              </select>
            </div>

            <div className="form-group">
              <label>Consultor</label>
              <input 
                type="text" 
                name="consultor"
                value={formData.consultor}
                onChange={handleInputChange}
                placeholder="Consultor"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" /> Solicitude as serviços
            </label>
          </div>
        </section>

        {/* Seção Contatos WhatsApp */}
        <section className="form-section">
          <h2>Contatos WhatsApp</h2>
          <div className="contacts-grid">
            {formData.whatsapp.map((whatsapp, index) => (
              <div key={index} className="form-group">
                <label>Whatsapp {index + 1}</label>
                <input 
                  type="tel" 
                  value={whatsapp}
                  onChange={(e) => handleArrayChange(index, e.target.value, 'whatsapp')}
                  placeholder="Ex: (11) 99999-9999"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Seção Notificar Alerta */}
        <section className="form-section">
          <h2>Notificar Alerta</h2>
          <div className="contacts-grid">
            {formData.notificarAlerta.map((alerta, index) => (
              <div key={index} className="form-group">
                <label>Notificar Alerta {index + 1}</label>
                <input 
                  type="tel" 
                  value={alerta}
                  onChange={(e) => handleArrayChange(index, e.target.value, 'notificarAlerta')}
                  placeholder="Ex: (11) 99999-9999"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="btn-primary">Cadastrar Pessoa</button>
          <button type="button" className="btn-secondary">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarPessoa;