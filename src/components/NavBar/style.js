import styled from 'styled-components';

export const ContainerMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: 10px;
    
    li {
      margin-left: 1.2em;
      margin-right: 1.2em;
      
      a {
        text-decoration: none;
        color: #7D8792;
        font-size: 1.4rem;
        cursor: pointer;
      }
    }
    
      @media screen and (max-width: 450px) {
li{
    margin-left: 0.4em;
      margin-right: 0.5em;
      a{
        font-size:1em
      }
}
    li:hover {
      color: #DFA70C;
      transition-duration: 0.5s;
    }
  }


  }
`;
