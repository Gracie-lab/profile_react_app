import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    width:450px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const GreyContainer = styled.div`
    background-color: #f6f6f6;
    padding: 0 20px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;

    @media (max-width:768px){
        width: 85%;
        
    }
`