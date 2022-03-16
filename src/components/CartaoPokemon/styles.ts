import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dadfe8;
   
`;

export const Container = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;

    header{
        padding: 30px 40px 0;
        background-color: #fcc719;
    
    }
    h2 {
        color: #fff;
    }
    
    span{
        font-family: 'Poppins';
        color: #fff;
        align-items: center;
        justify-content: space-between;

        &.fundo {
            background-color: #fff;
            color: #000000;
            border-radius: 10px;
            padding: 2px 10px;
        }
    }
    div  {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    `; 

export const Menu = styled.aside`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-width: 200px ;
    background-color: pink;

    img {
        width: 25%;
        border-radius: 50%;
    }
`;

export const Content = styled.div`
    
    div {
        display: block;
        align-items: center;
        justify-content: center;
        
        ul  {
            list-style: none;
        }
        h3 {
            margin-bottom: 10px;
            align-items: center;
            border-bottom: 1px solid #000;
        }
        li{
            border-bottom: 1px solid #6b727a;
        }
    }

`;