import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
    const cardComonet = robots.map((user,i) =>{
        return(
        <Card 

        key={i} 
        id={robots[i].id} 
        name={robots[i].name}
        email={robots[i].eamil}

        />
        );
    })
    return(
        <div>
           {cardComonet}
        </div>
    );
}



export default CardList;