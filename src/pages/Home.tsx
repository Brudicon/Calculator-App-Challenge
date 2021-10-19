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
    IonPage,
    IonGrid, IonRow, IonCol, IonApp, IonBackdrop, IonList, IonMenuToggle, IonItem, IonMenu, IonRouterOutlet, IonIcon, IonButton
} from '@ionic/react';
import React, { Component, useState } from 'react';
import {CalInterface} from './Calculator';
import Conversion from './Converter';
import {Logs} from './Calculator';
import Themes from "./Themes"

import { bookOutline,calculatorOutline, colorPaletteOutline, constructOutline } from 'ionicons/icons';




const Home: React.FC = (props) => {
    const [state, setState] = useState(0);

    function StateZero() {
        setState(0);
        console.log(state);
    }
    function StateOne() {
        setState(1);
        console.log(state);
    }
    function StateTwo() {
        setState(2);
        console.log(state);
    }
    function StateThree() {
        setState(3);
        console.log(state);
    }


    return (
        <>

        <IonHeader style = {{backgroundColor: "#663399"}}>
          <IonToolbar color ="#663399" style={{padding: "15px", borderBottom: "thick solid black"}}>
              <IonTitle color="light" >
                  {state === 0 ?  <>Calculator</> : 
                state === 1 ? <>Calculation History</> : 
                    state === 2 ? <>Themes and Fonts</> : <>Conversion Tool</>}
              </IonTitle>
              <IonButtons slot='start'>
                  <IonMenuButton menu='main-menu' autoHide = {false} color = "light"></IonMenuButton>
              </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonMenu side="start" menuId="main-menu" contentId="main" type="overlay" >
            <IonHeader style = {{backgroundColor: "#663399"}}>
                <IonToolbar color ="#663399" style={{padding: "15px", borderBottom: "thick solid black"}}>
                    <IonMenuButton slot="start" color="light"/>
                    <IonTitle color="light">Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <IonList >
                <IonMenuToggle >
                    <IonItem style = {{backgroundColor: "#4B0082", color: "white"}} color="#4B0082" button={true} onClick={StateZero}>
                        Calculator
                        <IonIcon color="light" icon={calculatorOutline} slot="start"></IonIcon>
                    </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem  style = {{backgroundColor: "#4B0082", color: "white"}} color="#4B0082" button={true} onClick={StateOne}>
                        Calculation History 
                        <IonIcon color="light" icon={bookOutline} slot="start"></IonIcon>
                        </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem  style = {{backgroundColor: "#4B0082", color: "white"}} color="#4B0082" button={true} onClick={StateTwo}>
                        Themes and Fonts
                        <IonIcon color="light" icon={colorPaletteOutline} slot="start"></IonIcon>
                    </IonItem>
                </IonMenuToggle>
                <IonMenuToggle>
                    <IonItem  style = {{backgroundColor: "#4B0082", color: "white"}} color="#4B0082" button={true} onClick={StateThree}>
                        Conversion Tool
                        <IonIcon color="light" icon={constructOutline} slot="start"></IonIcon>
                    </IonItem>
                </IonMenuToggle>
            </IonList>
            </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main"></IonRouterOutlet>

        <div id="checker" >
            {console.log("STATE IS " + state)}
            {state === 0 ?  <><CalInterface></CalInterface> </> : 
                state === 1 ? <><Logs></Logs></> : 
                    state === 2 ? <><Themes></Themes></> : <><Conversion></Conversion></>}
        </div>

        </>
    );

}


export default Home;

