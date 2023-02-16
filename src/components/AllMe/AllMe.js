
import { Container, ContainerBox , ContainerDesc , Drop} from './style'
import Foto from '../../assets/image/WhatsApp Image 2023-01-27 at 20.16.04 copy.jpeg';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card'

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
    <Container>
     <img  src={Foto} width='280px' alt='eu'>
</img>
      <p> Highly motivated Front-end Developer with almost 2 years of experience in web application development. Strong knowledge of JavaScript, HTML, CSS, and other web technologies, as well as the ability to work in a team and solve problems quickly.
        <br/>
        Development of applications and creation of components, state management and integration with external APIs; knowledge of libraries and frameworks such as Redux, Next.js, and TypeScript.
        <br/>
        Knowledge of Agile methodologies such as Scrum and Kanban. Ability to solve problems and work with designers, back-end developers, and other team members.</p>

    </Container>
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
       <ContainerDesc>
    EXPERIÊNCIA
OAE - OPERADOR EM ESCOLA Ground Force. Aeroporto Lisboa Operador em escala
DISTRIBUIDOR
Correos Express. Alcochete | Jan 2021 - Out 2022</ContainerDesc>


EXPERIÊNCIA
OAE - OPERADOR EM ESCOLA Ground Force. Aeroporto Lisboa Operador em escala
DISTRIBUIDOR
Correos Express. Alcochete | Jan 2021 - Out 2022

<div>
<Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

</div>

    </ContainerBox>
  );
}
export default AllMe



