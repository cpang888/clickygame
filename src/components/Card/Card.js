import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectChar(props.name)} 
                className={props.curScore === 0 ? "style_previousSel style_previousSel_ex" : "style_previousSel"}
            >
                <img alt={props.name} src={props.image} />
            </a>
        </div>
    </div>
);

export default Card;