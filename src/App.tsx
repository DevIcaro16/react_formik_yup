import { useState } from 'react';
import BasicForm from './components/BasicForm';
import './App.css';
import AdvancedForm from './components/AdvancedForm';

export default function App() {

  const [view, setView] = useState<string>("basic");

  return (
    <div className="container">
      <nav className="nav">
        <h3
          className={`nav-item ${view === "basic" ? "active" : ""}`}
          onClick={() => setView("basic")}
        >
          Formulário Básico
        </h3>

        <h3
          className={`nav-item ${view === "advanced" ? "active" : ""}`}
          onClick={() => setView("advanced")}
        >
          Formulário Completo
        </h3>
      </nav>

      <div className="form-container">
        {view === "basic" ? (
          <div className="form-section">
            <h2 className="form-title">Formulário Básico</h2>
            <BasicForm />
          </div>
        ) : (
          <div className="form-section">
            <h2 className="form-title">Formulário Completo</h2>
            <AdvancedForm />
          </div>
        )}
      </div>
    </div>
  );
}
