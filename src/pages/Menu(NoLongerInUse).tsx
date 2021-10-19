import React, { Component, useState } from 'react';
import { IonApp, IonPage, IonIcon, IonMenuButton, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet, IonMenuToggle } from '@ionic/react';
import { menuOutline, toggle } from 'ionicons/icons';

import { canConstructResponseFromBodyStream } from 'workbox-core/_private';

import Home from "./Home"

const Menu: React.FC = () => {
    
    return (
    <>
        <IonMenu side="start" menuId="main-menu" contentId="main" type="overlay">
            <IonHeader >
                <IonToolbar >
                    <IonMenuButton slot="start" />
                    <IonTitle></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle>
                        <IonItem >Calculator</IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem >Log </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem >Themes</IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <IonItem >Conversion Tool</IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
    );

}





export default Menu;







/*
<IonHeader>
    <IonToolbar color="primary">
        <IonMenuButton slot="start" color="secondary" autoHide={false}>
            <IonIcon icon={menuOutline} />
        </IonMenuButton>
    </IonToolbar>
</IonHeader>

import {
    IonApp,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';

import MenuExample from './pages/Menu';
*/