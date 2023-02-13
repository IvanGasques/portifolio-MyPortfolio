import React from 'react'
import { Container, ContainerBox} from './style'
import Foto from '../../assets/image/WhatsApp Image 2023-01-27 at 20.16.04 copy.jpeg'

const AllMe = () => {
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
    
    </ContainerBox>
  )
}

export default AllMe
