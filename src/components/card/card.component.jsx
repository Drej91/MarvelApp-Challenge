import React from 'react';
import { CardContent } from '../card-content/card-content.component';

import './card.css';

export const Card = props => (
     <div className="card">
    {
       props.marvelCharaters.map(character =>
        <CardContent key={character.id} character={character} onclick={props.sendData}/>
        )
    }
    </div>
)