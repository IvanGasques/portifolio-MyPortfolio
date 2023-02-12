import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
//import "./PortfolioPage.css";

function PortfolioPage() {

  
  return (
    <div className="portfolio-page">
      <h1 className="section-title">Contactos</h1>
      <ul className="contact-list">
        <li className="contact-item">
          <FaMapMarkerAlt/>
          <div className="contact-info">Baixa da Banheira - Moita</div>
        </li>
        <li className="contact-item">
          
          <div className="contact-info"><FaPhone /> +351 916630190</div>
        </li>
        <li className="contact-item">
          
          <div className="contact-info"><FaEnvelope />ivanngasques@gmail.com</div>
        </li>
      </ul>
    </div>
  );
}

export default PortfolioPage;
