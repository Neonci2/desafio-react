import { useState } from "react";
import "./accordion.css";

export default function AccordionItem({ per, res }) {
  const [expandido, setExpandido] = useState(false);

  return (
      <div className="accordion-item">
        <div
          className={`accordion-header ${expandido ? "active" : ""}`}
          onClick={() => setExpandido(!expandido)}
        >
          <h3>{per}</h3>
          <span className="icon">{expandido ? '' : ''}</span>
        </div>
        {expandido && <p className="accordion-content slide-down">{res}</p>}
      </div>
    );
}
