import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaRegMap, FaMobileAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { MdOutlineMailOutline, MdPermIdentity } from "react-icons/md";

const StyledForm = styled.form`
  background-color: #2e2e2e;
  width:60%;
  height:420px;
  padding: 15px;
  margin:10px 0;
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
  height: 170px;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 10px #BBBBBB;
`;

const StyledButton = styled.button`
  display: block;
  width: 80%;
border: solid 1px #DFA70C;
  padding: 10px;
  margin: 20px 10% 0;
  font-size: 16px;
  border-radius: 5px;
  height:35px;
  border: none;
  background-color: transparent;
  color: #FFFFFF;
margin-bottom: 1rem;
margin-top: 2rem;
transition-duration: 0.5s;
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
    height: 60vh;
    place-items: center;
        margin: 150px auto;
    width: 88%;
    text-color:gray;
    color:#DFA70C;
}`;
const StyledInfo = styled.div`{
  display:flex;
  width:30%;
  font-size:1.4em;
  justify-content:center; 
    margin: auto;
    letter-spacing:2px;
    color:gray;
    
    .item{
      padding: 15px;
      list-style:none;
      color: gray;
    text-decoration: none;
    display:flex;
      aling-items:center;
      
    }
    .item2{
      list-style:none;
    text-decoration: none;
    justify-content:center;
    display:flex;
      aling-items:center;
      
    }
    a {
    color: #DFA70C;
    text-decoration: none;
    display:flex;
      aling-items:center;
      padding:0 25px;
   
}

}`
const StyContainer = styled.div`{
   display: flex;
   width: 80%;
    margin: 10px 15% 60px;
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
        <iframe width="690" height="400" src="https://www.youtube.com/embed/XrrbK5GwnA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <ul>
          <li className='item2' style={{display:'flex', justifyContent:'center' ,listStyle: 'none' }}><MdPermIdentity  size={30} /></li><p style={{ color: 'gray' }}>Ivan Gasques</p><hr />
          <li className='item2' style={{display:'flex', justifyContent:'center' ,listStyle: 'none' }}><FaRegMap size={30} /></li> <p style={{ color: 'gray' }}>Moita - Portugal</p><hr />
          <li className='item2' style={{display:'flex', justifyContent:'center' ,listStyle: 'none' }}><FaMobileAlt size={30} /></li><p style={{ color: 'gray' }}>(+351) 916 630 190</p><hr />
        </ul>

      </StyledVideo>
      <StyContainer>
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
        <StyledInfo  >
          <>
            <ul>
              <li className='item'><a href="mailto:ivanngasques@gmail.com?subject=Front-end&body=Mensagem" target="_blank" rel="noreferrer"><MdOutlineMailOutline /></a>Email</li>
              <li className='item'><a href="https://api.whatsapp.com/send?phone=351916630190"
                target="_blank"
                rel="noopener noreferrer"><FaWhatsapp /></a>Whatapp</li>
              <li className='item'><a href="https://github.com/IvanGasques" target="_blank" rel="noreferrer"><FaGithub /></a>GitHub</li>
              <li className='item'><a href="https://www.linkedin.com/in/ivan-gasques-1349b0229" target="_blank" rel="noreferrer"><FaLinkedin /></a>Linkdin</li>
              <li className='item'><a href="https://www.instagram.com/gasques.ivan/" target="_blank" rel="noreferrer"><FaInstagram /></a>Instagran</li>
            </ul>

          </></StyledInfo>
      </StyContainer>

    </>);
};

export default ContactForm;
