import { useState } from "react";
import './inicio.css'

export default function Header() {
  const [open, setOpen] = useState(false);
  const togglemenu = () => setOpen(!open) 

  return (
      <>
        <header>
          <button
          className={`inicio ${open ? "open" : ""}`}
          onClick={togglemenu}
          aria-label="Abrir ou fechar menu"
          >
          <span></span>
          <span></span>
          <span></span>
          </button>

          <nav className={`menu ${open ? "active" : ""}`}>
          <a href="#home">home</a>
          <a href="#jogos">config</a>
          <a href="#programacao">conta</a>
          <a href="#contato">Contato</a>
          </nav>
        </header>
      </>
    );
}
