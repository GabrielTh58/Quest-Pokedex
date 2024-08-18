import styled from "styled-components";

export const FilterWrapper = styled.div`   
    div{

        max-width: 1440px;
        margin: 0 auto;
        padding: 30px;
  
        
        @media(max-width: 1220px){
            padding: 15px 30px;
        }

        
        @media(max-width: 800px){
            padding-top: 40px ;
            padding-bottom: 40px ;
        }
    }

    span{
        font-weight: 400;
    }

    select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            outline: none;
            max-width: 150px;
            padding: 5px 10px;
            font-size: 15px;
            color: #333;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-transform: capitalize;
            
               option {
                background-color: #fff;
                color: #333;
                padding: 10px;
                font-size: 15px;
                border: none;
                cursor: pointer;
            }
        }

        select:focus {
            border-color: #721919;
        }      
`