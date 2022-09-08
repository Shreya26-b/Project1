import React from "react";
import {Col} from "react-bootstrap";
function Card(props) {
    return <Col className="card" md={4}>
        <div className="containerr">
            <h3 className="ctitle">{props.ctitle}</h3>
            <p>{props.cdetail}</p>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
        </div>
    </Col>
}
export default Card;