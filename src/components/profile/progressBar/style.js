import styled from 'styled-components'

export const Pplus = styled.img`
    font-size: 2px;
    font-weight: 300; 
    height: 10px;
    display: flex;
    justify-content: space-around;
    margin-right: 10px;
    
           

`

export const Inner = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 10px;

`

export const PContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    height:50px;
    width:200px;
    // border: 2px solid red;
`
export const PDiv = styled.div`
    width:150px;
    align-self:center;
    margin-bottom: 11px;
    .kprass{
        display:flex;
        justify-content: space-between;
    }

`
export const Maxbar = styled.div`
    height:5px;
    width:100%;
    background-color: lightgrey;
    border-radius: 4px;
`
export const Progressbar = styled.div`
    height: 5px;
    width: ${({percent})=>`${1.5*percent}px`};
    background-color: ${({percent})=>percent<30?"red":percent>=30 && percent<60?"yellow":"green"};
`
export const PText = styled.p`
    font-size: 11px;
    text-transform: capitalize;
    font-weight: 500;
`
export const PIcon = styled.img`
    width:30px;
    height: 30px;
`
export const InnerCircle = styled.div`
    background-color: green;
    border-radius:50%;
    width: 100px;
    height: 100px;
    display:flex;
    flex-direction:column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content:center;

    h1{
        color:white;
        font-size:25px;
    }
    p{
        color:white;
        font-size:13px;
        
    }
`
export const OuterCircle = styled.div`
    border: 2px solid green;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 110px;

`