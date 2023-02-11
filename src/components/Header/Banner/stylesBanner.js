import styled from 'styled-components'
import Banner from '..//..//../assets/image/Banner.jpg'

export const BannerContainer = styled.div`
height:75vh;
display: flex;
align-items: center;
justify-content: center;
background-image:url(${Banner});
background-position: center;
background-size: cover;
 margin-bottom: 1rem;
text-align: center;
position:relative;

&:after{
    content:"";
    position:absolute;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    background-color: rgba(86,86,86,0.8);
}

div{
    z-index:40;
}

h2{
text-transform: uppercase;
font-size: 1.2rem;
margin-bottom: 1rem;
color: #EEEEEE;
}

h1{
    text-transform: uppercase;
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #DFA70C;
}

p{
    font-size: 1rem;
    color:#EEEEEE;
    margin-bottom: 1rem;
    margin:0;
}
button{
    min-width: 150px;
    border: solid 1px #DFA70C;
    display:flex;
    align-items: center;
    justify-content:center;
    color:#EEEEEE;
    background-color: transparent;
    border-radius: 42px;
    font-size: 1rem;
    padding: 10px 15px;
    margin-bottom: 1rem;
    margin-top: 2rem;
    transition-duration: 1s;
    cursor:pointer;
&:hover{
    color: #DFA70C;
border: solid 1px #EEEEEE;
transition-duration:1s;
}
}
&:hover{
    color: #DFA70C;
border: solid 1px #DFA70C;
transition-duration:1s;
}
@media only screen and (max-width: 950px) {
    div{
      font-size:2rem;
    }

}
`