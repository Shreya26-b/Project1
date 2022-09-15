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
    return <div id="views">
        <h1 className="org"><strong>You write we organize...</strong></h1>
        <div className="Elementpage row">
        {viewData.map(CreateCard)}
        </div>
    </div>
}
export default Views;