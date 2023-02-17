import styled from 'styled-components'

export const ContainerBox = styled.div`{
    .button{
        color: dimgray;
    width: 150px;
    height: 25px;
    display: flex;
    align-items: center;
    margin: 0px 40px;
    cursor: pointer;
    padding: 30px 10px;
    justify-content: center;
    background-color: #DFA70C;
    border-radius:15px;
    background-color: transparent;
  display:flex;
margin-bottom:0;
margin-top: 0;
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

     width: 80%;
  margin:0 10% 30px;
  display: flex;
  height: 200px;
  text-align: center;
  justify-content:center;
  


}`
export const ContainerTitle = styled.div`{
width: 80%;
  display: flex;
  margin:10px 10%;
  height: 100px;
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
  width:100%;ßs
  overflow: hidden;
  text-align: center;
  transition: height .4s ease;
}

.slide li {padding : 30px;}
}`
export const Container = styled.div`{
        width: 80%;
    margin: 30px 10%;
    padding: 20px;
    display: flex;
    height: 300px;
    text-align: center;
  border-radius:20px;
    background-color: #555555;
    
    p{
        color:#CCCCCC;
    }
    img {
  transition: transform .2s;
  :hover {
  transform: scale(1.2);
}

}`
export const Course = styled.div`{
margin: 0 10%;
text-align: center;
width:80%;
border:1px solid #2e2e2e;
  background-color:#DFA70C;
  border-radius:20px;
  color:white;
  
h1 {
color:#2e2e2e;
}
h2{
 border-top:1px solid dimgray;
padding:10px;

}
}`