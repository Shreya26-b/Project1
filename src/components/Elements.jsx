import React from "react";
import cardData from "../data";
import Card from "./Card";
function Elements() {
    return <div className="Elementpage row">
        <Card 
            ctitle= {cardData[0].ctitle}
            cdetail= {cardData[0].cdetail}
        />
        <Card 
            ctitle= {cardData[1].ctitle}
            cdetail= {cardData[1].cdetail}
        />
        <Card 
            ctitle= {cardData[2].ctitle}
            cdetail= {cardData[2].cdetail}
        />
        <Card 
            ctitle= {cardData[3].ctitle}
            cdetail= {cardData[3].cdetail}
        />
        <Card 
            ctitle= {cardData[4].ctitle}
            cdetail= {cardData[4].cdetail}
        />
        <Card 
            ctitle= {cardData[5].ctitle}
            cdetail= {cardData[5].cdetail}
        />
    </div>
}
export default Elements;