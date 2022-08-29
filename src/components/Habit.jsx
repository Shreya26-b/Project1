import React from "react";
function Habit() {
    return <div>
        <h1>Habit</h1>
         <div className="leftbox">
            <h2>Description</h2>
            <p>
                <ul>
                    <li>List all those things which you want to make a habit.</li>
                    <li>Check daily whether you make it daily or not.</li>
                    <li>Add new by just clicking on add button and click enter.</li>
                    <li>It gets refreshed by the start of your day.</li>
                </ul>
            </p>
         </div>
         <div className="container1 rightbox">
            <h1>Make a Habit</h1>
            <hr className="rule"/>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <button className="btn btn-secondary btn-lg" type="submit">Add</button>
         </div>
    </div>
}
export default Habit;