import React from "react";
import viewData from "../viewData";
import Card from "./Card";
function CreateCard(cont) {
    return (
        <Card 
            ctitle= {cont.vtitle}
            cdetail= {cont.vdetail}
        />
    );
}
function Views() {
    return <div className="Elementpage row" id="elements">
        <h1 className="org"><strong>You write we organize...</strong></h1>
        {viewData.map(CreateCard)}
    </div>
}
export default Views;