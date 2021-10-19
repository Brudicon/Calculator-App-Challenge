

import {
    IonButton,
} from '@ionic/react';
import React, { Component, useContext, useState } from 'react';
//import ColorContext from '../components/AppContext.js';
/*
Purple:    663399, 4B0082
Blue:	primary, 3171e0
Green:	success, 28ba62
Yellow: warning, e0ac08
Red:	danger, cf3c4f
Dark: 	medium, dark
*/

const Themes: React.FC = (props) => {


    return(
        <div style={{backgroundColor: "#4B0082", height: "100vh", width: "flex"}}>
            <section style={{padding: "10px"}}>
                <header style={{fontSize: 20, padding: "10px", color: "white"}}>Color Themes:</header>
                <IonButton  fill="solid" color="#4B0082" style={{ width: "100px", height: "50px"}} >Purple</IonButton>

                <IonButton  fill="solid" color="primary" style={{width: "100px", height: "50px"}} >Blue</IonButton>

                <IonButton  fill="solid" color="success" style={{ width: "100px", height: "50px"}}>Green</IonButton>

                <IonButton  fill="solid" color="warning" style={{ width: "100px", height: "50px"}} >Yellow</IonButton>

                <IonButton  fill="solid" color="danger" style={{ width: "100px", height: "50px"}} >Red</IonButton>

                <IonButton  fill="solid" color="dark" style={{ width: "100px", height: "50px"}} >Dark</IonButton>

            </section>
            <section style={{padding: "10px"}}>
                <header style={{fontSize: 20, padding: "10px", color: "white", }}>Font Size:</header>
                <IonButton  fill="clear" color="light" style={{ width: "100px", height: "50px", fontSize: 12}}>abc...</IonButton>

                <IonButton  fill="clear" color="light" style={{ width: "100px", height: "50px", fontSize: 18}}>abc...</IonButton>

                <IonButton  fill="clear" color="light" style={{ width: "100px", height: "50px", fontSize: 24}}>abc...</IonButton>

                <IonButton  fill="clear" color="light" style={{ width: "100px", height: "50px", fontSize: 30}}>abc...</IonButton>

                <IonButton  fill="clear" color="light" style={{ width: "100px", height: "50px", fontSize: 36}}>abc...</IonButton>

                <IonButton  fill="clear" color="light" style={{ width: "100px", height: "50px", fontSize: 42}}>abc...</IonButton>

            </section>
            
            
            </div>
    );
}

export default Themes;