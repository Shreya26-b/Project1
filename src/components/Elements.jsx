import React from "react";
import cardData from "../data";
import Card from "./Card";
function CreateCard(cont) {
    return (
        <Card 
            ctitle= {cont.ctitle}
            cdetail= {cont.cdetail}
        />
    );
}
function Elements() {
    return <div className="Elementpage row" id="elements">
        {cardData.map(CreateCard)}
    </div>
}
export default Elements;