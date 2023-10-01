import React from "react";
import Style from './Styles/Card.module.css'

export default function Card({ name, homeworld  }) {
   return (
    <div className={Style.card} key={name}>
        <h2 className={Style.hname}>{name}</h2>
        <h2 className={Style.hname} >{homeworld}</h2>
    </div>
  );
};