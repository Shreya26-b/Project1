import React from "react";
import cardData from "../data";
import Card from "./Card";
import {Row} from "react-bootstrap";
function CreateCard(cont) {
    return (
        <Card 
            ctitle= {cont.ctitle}
            cdetail= {cont.cdetail}
        />
    );
}
function Elements() {
    return <Row className="Elementpage row" id="elements">
        {cardData.map(CreateCard)}
    </Row>
}
export default Elements;