import React from 'react';
import logo from '../../assets/tree2.png';

// the Home page
export function HomePage() {
    //const { innerWidth, innerHeight } = useWindowSize();
    return (
        <div className="App">

            <header >
                <h2>
                </h2>
            </header>
            <img src={logo} className="App-logo"  style={{width: 400, height:400}} alt="logo" />
            <h1>
                OneTreeWood
            </h1>
        </div>
    );
}