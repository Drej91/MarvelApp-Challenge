import React from 'react';
import { CustomButton } from '../button/button.component';
import './card-content.css'


export const CardContent = (props) => (
    <div className="card-content">
        <h1>{ props.character.name }</h1>
        {/* had some problems to access thumbnail key in json object */}
        <img src="" alt=""/>
        <CustomButton/>
    </div>
)

