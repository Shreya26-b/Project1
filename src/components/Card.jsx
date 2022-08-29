import React from "react";
function Card(props) {
    return <span className="card col-md-4">
        <div className="container">
            <h3 className="ctitle">{props.ctitle}</h3>
            <p>{props.cdetail}</p>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
        </div>
    </span>
}
export default Card;