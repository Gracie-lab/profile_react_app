import styled from 'styled-components'

export const AppDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin:20px;
    width:100%;
    height:100%;
    justify-content: center;
    align-items:center;

    @media (max-width:768px){
        margin:0 20px 0 0;
    }
`