import React from 'react';
import logo from '../assets/alta_logo.jpg';

// the Home page
export function Home() {

    return (
        <div className="App">
            <header >
                <h2>
                    OneTreeWood
                </h2>
                <img src={logo} className="App-logo"  style={{width: 300, height:200}} alt="logo" />
            </header>
        </div>
    );
}