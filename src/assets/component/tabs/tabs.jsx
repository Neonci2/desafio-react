import { useState } from "react";
import "./tabs.css";

export default function Tabs() {
  const [abaAtiva, setAbaAtiva] = useState("games");

  return (
      <div className="tabs-container">
        <div className="tabs-header">
          <button 
            className={abaAtiva === "games" ? "active" : ""} 
            onClick={() => setAbaAtiva("games")}
          >
            Games
          </button>
          <button 
            className={abaAtiva === "tech" ? "active" : ""} 
            onClick={() => setAbaAtiva("tech")}
          >
            Tecnologia
          </button>
          <button 
            className={abaAtiva === "programacao" ? "active" : ""} 
            onClick={() => setAbaAtiva("programacao")}
          >
            Programação
          </button>
        </div>

        <div className="tabs-content">
          {abaAtiva === "games" && (
                    <div>
                      <h3>Lista de jogos</h3>
                      <ul>
                        <li>Mario</li>
                        <li>Pokemon</li>
                        <li>Roblox</li>
                      </ul>
                    </div>
                  )}
          {abaAtiva === "tech" && (
                    <div>
                      <h3>técnologia no mundo</h3>
                      <p>Inteligência Artificial, realidade virtual e computação quântica estão mudando o mundo!</p>
                    </div>
                  )}
          {abaAtiva === "programacao" && (
                    <div>
                      <h3>tipos de modos de programar</h3>
                      <p>JavaScript, Python, Rust e Go são populares atualmente.</p>
                    </div>
                  )}
        </div>
      </div>
    );
}
