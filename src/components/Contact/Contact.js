import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PortfolioPage from './Page';
import Page from './Page'
import { FaWhatsapp, FaRegMap, FaMobileAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { MdOutlineMailOutline, MdPermIdentity } from "react-icons/md";

const StyledForm = styled.form`
  background-color: #2e2e2e;
  width:56%;
  margin:100px 22%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #BBBBBB;
  display:block;
`;

const StyledInput = styled.input`
  display: block;
  width: 96%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px #BBBBBB;
`;

const StyledTextarea = styled.textarea`
  display: block;
  width: 96%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px #BBBBBB;
`;

const StyledButton = styled.button`
  display: block;
  width: 96%;
border: solid 1px #DFA70C;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  height:35px;
  border: none;
  background-color: transparent;
  color: #FFFFFF;
margin-bottom: 1rem;
margin-top: 2rem;
transition-duration: 1s;
  box-shadow: 0px 0px 10px #BBBBBB;
  cursor: pointer;
  &:hover{
color: #DFA70C;
border: solid 1px #EEEEEE;
transition-duration:1s;}
`;
const StyledVideo = styled.div`{
  justify-content: space-evenly;
    display: flex;
    height: 50vh;
    place-items: center;
    margin: 100px auto;
    width: 90%;
    border-radius: 8px;
}`;
const StyledInfo = styled.div`{
  display:flex;
  width:90%;
  font-size:1.4em;
  justify-content:center; 
  background-color: #2e2e2e;
    padding: 20px;
    color: white;
    margin: auto;
    letter-spacing:2px;
    
    .item{
      padding: 15px;
      list-style:none;
      color: inherit;
    text-decoration: none;
    display:flex;
      aling-items:center;
      
    }
    .item2{
      padding: 18px;
      list-style:none;
      color: inherit;
    text-decoration: none;
    justify-content:center;
    display:flex;
      aling-items:center;
      
    }
    a {
    color: inherit;
    text-decoration: none;
    display:flex;
      aling-items:center;
      padding:0 25px;
   
}


}`

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(storedContacts);

  }, []);



  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts([...contacts, formData]);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  return (
    <>
      <StyledVideo>
        <iframe width="660" height="345" src="https://www.youtube.com/embed/XrrbK5GwnA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


      </StyledVideo>
      <StyledInfo>
        <p>
          <ul>
           <li className='item2'><MdPermIdentity size={50} /></li><p className='texto'>Ivan Gasques</p><hr/>
            <li className='item2'><FaRegMap size={50}/></li> <p>Moita - Portugal</p><hr/>
            <li className='item2'><FaMobileAlt size={50}/></li><p>(+351)916 630 190</p><hr/>
             </ul>
        </p>

        <p>
          <ul>
          <li className='item'><a href="mailto:ivanngasques@gmail.com?subject=Front-end&body=Mensagem" target="_blank" rel="noreferrer"><MdOutlineMailOutline /></a>Email</li>
            <li className='item'><FaWhatsapp />Whatapp</li>
            <li className='item'><a href="https://github.com/IvanGasques" target="_blank" rel="noreferrer"><FaGithub /></a>GitHub</li>
            <li className='item'><a href="https://www.linkedin.com/in/ivan-gasques-1349b0229" target="_blank" rel="noreferrer"><FaLinkedin /></a>Linkdin</li>
            <li className='item'><a href="https://www.instagram.com/gasques.ivan/" target="_blank" rel="noreferrer"><FaInstagram /></a>Instagran</li>
          </ul>

        </p>
        {/* <p> Desenvolvedor Front-end altamente motivado com quase 2 anos de experiência na criação de aplicativos web.
          Possuo forte conhecimento de JavaScript, HTML, CSS e outras tecnologias web,
          além de habilidade para trabalhar em equipe e solucionar problemas rapidamente.
        </p>
        <p>Desenvolvimento de aplicativos e criação de componentes, gerenciamento de estado e integração com APIs externas;
          conhecimento em bibliotecas e frameworks como Redux, Next.js e Typescript.
        </p>
        <p>Conhecimento de metodologias ágeis, como Scrum e Kanban.
          Habilidade para solucionar problemas e trabalhar em equipe com designers, desenvolvedores back-end e outros membros da equipe
        </p> */}
      </StyledInfo>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Seu nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <StyledInput
          type="email"
          placeholder="Seu e-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <StyledTextarea
          placeholder="Sua mensagem"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <StyledButton type="submit">Enviar</StyledButton>
      </StyledForm>
      <PortfolioPage />

    </>);
};

export default ContactForm;
