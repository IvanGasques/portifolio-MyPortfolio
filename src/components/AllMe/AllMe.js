
import { Container, ContainerBox ,StyledVideo, ContainerDesc ,Skills, Course, ContainerTitle } from './style'
import Foto from '../../assets/image/WhatsApp Image 2023-01-27 at 20.16.04 copy.jpeg';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



const UpdatingPopover = React.forwardRef(
  ({ popper, children, show: _, ...props }, ref) => {
    useEffect(() => {
      console.log('updating!');
      popper.scheduleUpdate();
    }, [children, popper]);

    return (
      <Popover ref={ref} body {...props}>
        {children}
      </Popover>
    );
  },
);

const longContent = "Hi";
const shortContent = 'Nice to meet You!';

const longContent1 = "Ola";
const shortContent1 = "Prazer ve-lo aqui";

const longContent2 = `
  Very long
  Multiline content
  that is engaging and what-not
`;
const shortContent2 = 'Short and sweet!';

function AllMe() {
  const [content, setContent] = useState(shortContent);
  const [content1, setContent1] = useState(shortContent1);
  const [content2, setContent2] = useState(shortContent2);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent1(content1 === shortContent1 ? longContent1 : shortContent1);
    }, 3000);

    return () => clearInterval(timerId);
  });

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent2(content2 === shortContent2 ? longContent2 : shortContent2);
    }, 3000);

    return () => clearInterval(timerId);
  });

  return (
    <ContainerBox>
    <StyledVideo>
        <iframe width="690" height="400" src="https://www.youtube.com/embed/XrrbK5GwnA0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <ul>
          <li className='item2' style={{display:'flex', justifyContent:'center' ,listStyle: 'none' }}></li><p style={{ color: 'gray' }}>Ivan Gasques</p><hr />
          <li className='item2' style={{display:'flex', justifyContent:'center' ,listStyle: 'none' }}></li> <p style={{ color: 'gray' }}>Moita - Portugal</p><hr />
          <li className='item2' style={{display:'flex', justifyContent:'center' ,listStyle: 'none' }}></li><p style={{ color: 'gray' }}>(+351) 916 630 190</p><hr />
        </ul>

      </StyledVideo>
     
    <Container>
     <img  src={Foto} width='280px' alt='eu'>
</img>
      <p> Highly motivated Front-end Developer with almost 2 years of experience in web application development. Strong knowledge of JavaScript, HTML, CSS, and other web technologies, as well as the ability to work in a team and solve problems quickly.
        <br/>
        Development of applications and creation of components, state management and integration with external APIs; knowledge of libraries and frameworks such as Redux, Next.js, and TypeScript.
        <br/>
        Knowledge of Agile methodologies such as Scrum and Kanban. Ability to solve problems and work with designers, back-end developers, and other team members.</p>

    </Container> 
    <ContainerTitle><h1>Linguage Speack</h1></ContainerTitle>
    <ContainerDesc>
    <OverlayTrigger
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
      }
    >
      <Button className='button'>English</Button>
    </OverlayTrigger>
    <OverlayTrigger
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content1}</UpdatingPopover>
      }
    >
      <Button className='button'>Portuguese</Button>
    </OverlayTrigger>
    <OverlayTrigger
      trigger="click"
      overlay={
        <UpdatingPopover id="popover-contained">{content2}</UpdatingPopover>
      }
    >
      <Button className='button'>Spanish</Button>
    </OverlayTrigger>
   
</ContainerDesc>
 <ContainerTitle><h1>Skills</h1></ContainerTitle>
       
<Skills>
<ul>
  <li>HTML 5</li><hr/>
  <li>CSS</li><hr/>
  <li>JAVASCRIPT</li><hr/>
  <li>REACT</li><hr/>
  <li>TYPESCRIPT</li><hr/>
  <li>REDUX</li><hr/>
  <li>MYSQL</li><hr/>
  <li>BOOSTRAP</li><hr/>
  <li>REST API</li><hr/>

</ul>
<ul>
  <li>TRABALHO EM EQUIPA</li><hr/>
  <li>RESOLUÇÃO DE PROBLEMAS</li><hr/>
  <li>RESPONSAVEL</li><hr/>
  <li>CUMPRE COM OS OBJETIVOS</li><hr/>
  <li>AMIGÁVEL</li><hr/>

</ul>

</Skills>
<Course>
<h1>Courses</h1>

<h2>React.js Profissional</h2>
<h4>Joao Ribeiro / Online  02/2023</h4>

<h2>FRONT-END || Back-END</h2>
<h4>Flag. Lisboa | Jan 2022 - Nov 2022</h4>
Agile Methodology: Scrum / Kanban || UI/UX para developers || Scrum ||
UI/UX para developers || HTML 5 || CSS3 || Sass || Responsive web design ||
JavaScript || React || GitHub || Bootstrap || Estrutura de dados || MySQL


<h2>WEB DESIGN</h2>
<h4>Daniel Tapias  | Dez 2021 - Jan 2022</h4>
HTML. || CSS || JavaScript

<h2>LOGICA DE PROGRAMAÇÃO</h2>
<h4>Udemy. Online | Dez 2021 - Dez 2021</h4>
HTML. || CSS || JavaScript

</Course>

    </ContainerBox>
  );
}
export default AllMe



