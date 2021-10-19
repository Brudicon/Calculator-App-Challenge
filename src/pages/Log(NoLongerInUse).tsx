
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonButtons,
    IonCardSubtitle,
    IonImg,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenuButton,
    IonRouterLink, 
    IonGrid,
    IonButton,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonInfiniteScrollContent,
    IonInfiniteScroll,

} from '@ionic/react';
import React, { Component, useState } from 'react';

//import {history} from './Calculator'


let temp = [""].toString().split(",");
let History = temp.reverse();


const Logs:React.FC = () => {

    return (
        <>
        <div style={{ height: "100vh", overflowY: "scroll"}}>
            {console.log(History)}
            {History.map((i) =>(<IonItem>{i}</IonItem>))}
        </div>
     </>
    );
}


export default Logs;