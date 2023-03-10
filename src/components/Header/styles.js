import styled from 'styled-components'

export const HeaderContainer = styled.header`
height: 60px;
background-color: #2B2C2C; text-decoration: none; `;

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: 0 auto;
padding: 16px 16px;
display: flex;
justify-content: space-between;
align-items: center;
text-decoration: none;

 


.title{
    font-size:1.6rem;
    color:white;
 text-decoration: none;
  .deco {
  text-decoration: none;
  color:white;
}

}
   
.title:hover{
transition-duration:1s;
    color:#DFA70C;
}
.deco:hover{
transition-duration:0.5s;
    color:#DFA70C;
}
@media only screen and (max-width: 800px) {
    .test{
      font-size:1rem;
      margin:1px 3px;
    }
    .title{
        font-size:0.8rem;
    }

}

`