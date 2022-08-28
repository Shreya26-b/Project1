import React from "react";
import Header from "./Header";
import Elements from "./Elements";
function App() {
    return <div>
        <Header />
        <div className='mainweb'>
        <h1 className='websiteName'>DIARIO</h1>
        <p className='caption'>track the journey of your life...</p>
       </div>
       <Elements />
    </div>
    
}

export default App;
