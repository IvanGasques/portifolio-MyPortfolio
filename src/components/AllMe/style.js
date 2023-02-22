import styled from 'styled-components'

export const StyledVideo = styled.div`{
  justify-content: space-evenly;
    display: flex;
    height: 12rem;
    place-items: center;
    margin: 160px 5% ;
    width: 90%;
    text-color:gray;
    color:#DFA70C;
    
    @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    height: auto;
    padding: 20px;
  justify-content: center;
    text-align: center;
    width:100%;
    margin:0px 0 0 0px;
    ul{
      padding: inherit; 
      margin-bottom: 0;
      padding-bottom: 0;
    }
    }
    @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
    padding: 20px;
  justify-content: center;
    text-align: center;
    width:100%;
    margin:0px 0 0 0px;
    ul{
      padding: inherit; 
    }
    }

}`;

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
  margin:0 10% 0px;
  display: flex;
  height: 130px;
  text-align: center;
  justify-content:center;


}`
export const ContainerTitle = styled.div`{
width: 80%;
  display: flex;
  margin: auto;
  height: 100px;
  text-align: center;
  justify-content:center;
  color:#DFA70C;
}`
export const Skills = styled.div`{
  width: 80%;
  display: flex;
  margin:0 10% 50px;
  height: auto;
  text-align: center;
  border: 1px solid gray;
  padding: 20px;
    text-align: center;
  border-radius:20px;
    background-color: #555555;
  
  justify-content: space-around;
  ul{
    list-style-type: none;
    font-size:1.2em;
    padding:20px;
  }
@media only screen and (max-width: 450px) {
  ul{
    font-size:1em;
   
  }

}

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
  
    height: 340px;
    text-align: center;
  border-radius:20px;
    background-color: #555555;
    
    
    p{
        color:#CCCCCC;
        font-size:1.2em;
        width:inherit;
    }
    img {
      width:30%;
      height:auto;
  transition: transform .2s;
  :hover {
  transform: scale(1.2);
}}
@media only screen and (max-width: 450px) {
img{
  width: 50%;
    height: 150px;
    margin: 0 25%;
}
p{
    font-size: 0.7em;
    width: 80%;
    padding-top: 30px;
}
display: flex;
    flex-direction: column;
    height: 500px;
    width: 80%;
    padding: 40px 0;
    margin: 70px 10%;
    align-items: center;

}
@media only screen and (max-width: 900px) {
img{
  width: 40%;
    height: 250px;
    margin: 0 25%;
}
p{
    font-size: 0.7em;
    width: 80%;
    padding-top: 30px;
}
display: flex;
    flex-direction: column;
    height: 500px;
    width: 80%;
    padding: 40px 0;
    margin: 70px 10%;
    align-items: center;
}
}`

export const Course = styled.div`{
margin: 0 10%;
text-align: center;
width:80%;
border:1px solid #2e2e2e;
  background-color:#555555;
  border-radius:20px;
  color:white;
  padding:30px;
  
h1 {
  color:#DFA70C;
}
h2{
 border-top:1px solid dimgray;
padding:10px;

}
}`