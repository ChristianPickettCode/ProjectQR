import React from 'react';
import QRCode from 'react-qr-code';

import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ 
                margin:"auto", 
                display:"flex", 
                flexFlow:"wrap", 
                padding:"2%",
                backgroundColor:"white",
                justifyContent:"center" }}>
            
            { [1,2, 3, 4, 5, 6, 7,8,12, 13, 14, 15, 16, 17, 23, 25, 63, 65].map(i => (
                <div style={{ margin: "10px"}} key={i}>
                    <Link to={`/code/${i}`}>
                        <QRCode size={128} value="http://facebook.github.io/react/" /> 
                    </Link>
                </div>
            )) }
        </div>
    )
}

export default Home
