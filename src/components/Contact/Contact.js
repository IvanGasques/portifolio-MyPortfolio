import React, { useState } from 'react';
import styled from 'styled-components';
import PortfolioPage from './Page';

const StyledForm = styled.form`
  background-color: #F2F2F2;
  width:54%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #BBBBBB;
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
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  height:35px;
  border: none;
  background-color: #0070C0;
  color: #FFFFFF;
  box-shadow: 0px 0px 10px #BBBBBB;
  cursor: pointer;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // aqui você pode enviar os dados do formulário para um arquivo JSON interno
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
    <PortfolioPage/>
  </>);
};

export default ContactForm;
