import React from "react";
import Header from "./Header";
import Elements from "./Elements";
import Views from "./Views";
import Footer from "./Footer";
function Home() {
    return <div className="overflow-hidden bdy" id="home">
        <Header />
        <div className='mainweb'>
            <h1 className='websiteName'>DIARIO</h1>
            <p className='caption'>track the journey of your life...</p>
        </div>
        <Elements />
        <Views />
        <Footer />
    </div>

}

export default Home;
