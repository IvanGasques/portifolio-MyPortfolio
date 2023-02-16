import styled from 'styled-components'

export const ContainerBox = styled.div`{
    .button{
        color: dimgray;
    width: 150px;
    height: 25px;
    display: flex;
    align-items: center;
    margin: 80px 50px;
    cursor: pointer;
    padding: 30px 10px;
    justify-content: center;
    background-color: #DFA70C;
    border-radius:15px;
    background-color: transparent;
  display:flex;
margin-bottom: 1rem;
margin-top: 2rem;
transition-duration: 0.5s;
  box-shadow: 0px 0px 10px #BBBBBB;
  cursor: pointer;
font-family:none;
  
  &:hover{
color: #DFA70C;
border: solid 1px transparent;
transition-duration:1s;}
font-family:none;
    }
}`

export const ContainerDesc = styled.div`{

     width: 90%;
  margin: 60px 5% 30px;
  display: flex;
  height: 200px;
  text-align: center;
  justify-content:center;
  


}`
export const Drop = styled.div`{

  h1 {padding: 40px; text-align: center; font-size: 1.5em;}

li a {text-decoration : none; color : #2d2f31;}


nav {
  width : 300px; 
  background: #d9d9d9;
  margin : 40px auto; 
}

span {
  padding : 30px;
  background : #2d2f31; 
  color : white;
  font-size : 1.2em;
  font-variant : small-caps;
  cursor : pointer;
  display: block;
}

span::after {
  float: right;
  right: 10%;
  content: "+";
}

.slide {
  clear:both;
  width:100%;
  height:0px;
  overflow: hidden;
  text-align: center;
  transition: height .4s ease;
}

.slide li {padding : 30px;}
}`
export const Container = styled.div`{
        width: 90%;
    margin: 30px 5%;
    padding: 20px;
    display: flex;
    height: 300px;
    text-align: center;
    background-color: #555555;
    p{
        color:#CCCCCC;
    }
    img {
  transition: transform .2s;
  :hover {
  transform: scale(1.2);
}
}

}`