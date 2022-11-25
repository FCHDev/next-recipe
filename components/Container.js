import React from 'react';
import Navbar from "./Navbar";

const Container = ({children}) => {
    return (
        <div style={{overflow: "hidden"}}>
            <Navbar />
            {children}
        </div>
    );
};

export default Container;