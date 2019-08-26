import React, {useState, useEffect} from 'react';

import { Container } from './styles';
import Linha from '../../assets/linha.svg';
import Circle from '../../assets/elipse.svg';

const Velocimeter = () => {
    const [value, setValue] = useState(471);

    useEffect(() => {
        if(value !== 194){
            setValue(value-1)
        }
    
    }, [value])
        return (
        <Container>
            <div id="wrapper">
                <svg id="meter">
                    <circle id="outline_curves" r="150" cx="50%" cy="50%"
                            stroke="#5F4A87" stroke-width="15"
                            stroke-dasharray="471, 943" fill="none">
                    </circle>   
                    <circle id="low" r="150" cx="50%" cy="50%" stroke="#F4F0EB"
                            stroke-width="16" stroke-dasharray={`${value}, 943`}
                            fill="none">
                    </circle>  
                </svg>
                <img src={Linha} className="arrow" alt="linhas"/>
                <img src={Circle} className="circle" alt="circle"/>
                <div className="wrap"></div>
            </div>
        </Container>
    )
}

export default Velocimeter;
