import styled from 'styled-components'

export const ContainerMenu = styled.nav`
ul{
    padding: 0;
    margin:0;
    list-style-type: none;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-left: 10px;
    li{
        margin-left: 16px;
        margin-rigth: 16px;
        
        
        a{
            text-decoration:none;
            color: #7D8792;
            font-size: 1.5rem;
            cursor: pointer
        }
    }

}
li :hover{
    color:#DFA70C;
transition-duration:1s;
    
}
`