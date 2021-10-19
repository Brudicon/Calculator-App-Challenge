

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
    IonInput,
    IonSelectOption,
    IonSelect,

} from '@ionic/react';
import React, { Component, useState } from 'react';

const Conversion: React.FC = (props) => {
    const [number1, setNumber1] = useState<number>(1);
    const [select1, setSelect1] = useState("Centimeters");
    const [select2, setSelect2] = useState("Centimeters");

    function conv() {
        convert(number1.toString(), select1, select2);
    }


    return(
        <div style={{backgroundColor: "#663399", height: "100vh", width: "flex"}}>
            <IonGrid fixed={true} style={{height: "100vh", width: "flex", padding: "20px"}}>
                <IonRow>
                    <IonCol>
                        <IonInput id="Input" color = "dark" style={{backgroundColor: "white"}} value={number1} type="number" placeholder="Enter Number" onIonChange={e => setNumber1(parseInt(e.detail.value!, 10))}></IonInput>
                    </IonCol>
                    <IonCol>
                        <IonSelect id="FirstMenu" value={select1} interface="popover" style={{backgroundColor: "white"}}  onIonChange={e => setSelect1(e.detail.value!)}>
                            <IonSelectOption value="centimeters">Centimeters</IonSelectOption>
                            <IonSelectOption value="inches">Inches</IonSelectOption>
                            <IonSelectOption value="feet">Feet</IonSelectOption>
                            <IonSelectOption value="yards">Yards</IonSelectOption>
                            <IonSelectOption value="meters">Meters</IonSelectOption>
                            <IonSelectOption value="kilometers">Kilometers</IonSelectOption>
                            <IonSelectOption value="miles">Miles</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{color: "white"}}>
                        ------------------------------------------------------------
                    </IonCol>
                    <IonCol>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{color: "white"}}>
                        is equal to:
                    </IonCol>
                    <IonCol>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol style={{color: "white"}}>
                    ------------------------------------------------------------
                    </IonCol>
                    <IonCol>
                        
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <div id = "Output" style={{fontSize: 20, borderBottom: "thin solid white", padding: "10px", color: "white"}} >
                            NaN
                        </div>
                    </IonCol>
                    <IonCol>
                        <IonSelect id="SecondMenu" value={select2} interface="popover" style={{backgroundColor: "white"}} onIonChange={e => setSelect2(e.detail.value!)}>
                            <IonSelectOption value="centimeters">Centimeters</IonSelectOption>
                            <IonSelectOption value="inches">Inches</IonSelectOption>
                            <IonSelectOption value="feet">Feet</IonSelectOption>
                            <IonSelectOption value="yards">Yards</IonSelectOption>
                            <IonSelectOption value="meters">Meters</IonSelectOption>
                            <IonSelectOption value="kilometers">Kilometers</IonSelectOption>
                            <IonSelectOption value="miles">Miles</IonSelectOption>
                        </IonSelect>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton id='conversionButton' color= "light"  fill="outline"  size="large" onClick={conv}>
                            Convert
                        </IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                </IonRow>
            </IonGrid>
            
            
        </div>
    );
}


function convert(number1: string, select1: string, select2: string) {
    let From = select1;
    let To = select2;
    console.log(From + " and " + To + " and " + number1); 

    if (isNaN(Number(number1))) {  //if the input is not a number
        document.getElementById("Output")!.innerHTML = "NaN";
    }
    else{

        if (From === "centimeters") {       //From cm
            if (To === "centimeters") {
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                number1 = (Number(number1) * 0.4).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                number1 = (Number(number1) * 0.033).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                number1 = (Number(number1) * 0.011).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                number1 = (Number(number1) * 0.01).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                number1 = (Number(number1) * 0.00001).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                number1 = (Number(number1) * 0.000006).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
        else if (From === "inches") {       //from inches
            if (To === "centimeters") {
                number1 = (Number(number1) * 2.5).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                number1 = (Number(number1) * 0.83).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                number1 = (Number(number1) * 0.28).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                number1 = (Number(number1) * 0.0254).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                number1 = (Number(number1) * 0.0000254).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                number1 = (Number(number1) * 0.000016).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
        else if (From === "feet") {         //From feet
            if (To === "centimeters") {
                number1 = (Number(number1) * 30.48).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                number1 = (Number(number1) * 12).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                number1 = (Number(number1) * 0.333).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                number1 = (Number(number1) * 0.305).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                number1 = (Number(number1) * 0.000305).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                number1 = (Number(number1) * 0.00019).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
        else if (From === "yards") {        //From yards
            if (To === "centimeters") {
                number1 = (Number(number1) * 91.44).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                number1 = (Number(number1) * 36).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                number1 = (Number(number1) * 3).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                number1 = (Number(number1) * 0.9144).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                number1 = (Number(number1) * 0.0009144).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                number1 = (Number(number1) * 0.00057).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
        else if (From === "meters") {       //From meters
            if (To === "centimeters") {
                number1 = (Number(number1) * 100).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                number1 = (Number(number1) * 39.37).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                number1 = (Number(number1) * 3.28).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                number1 = (Number(number1) * 1.0936).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                number1 = (Number(number1) * 0.001).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                number1 = (Number(number1) * 0.00062).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
        else if (From === "kilometers") {       //From kilometers
            if (To === "centimeters") {
                number1 = (Number(number1) * 100000).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                number1 = (Number(number1) * 3,9370).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                number1 = (Number(number1) * 3281).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                number1 = (Number(number1) * 1093.61).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                number1 = (Number(number1) * 1000).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                number1 = (Number(number1) * 0.62).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
        else {  //if Miles                      //From Miles
            if (To === "centimeters") {
                number1 = (Number(number1) * 160934).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "inches") {
                number1 = (Number(number1) * 63360).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "feet") {
                number1 = (Number(number1) * 5280).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "yards") {
                number1 = (Number(number1) * 1760).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "meters") {
                number1 = (Number(number1) * 1609.34).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else if (To === "kilometers") {
                number1 = (Number(number1) * 1.61).toString();
                document.getElementById("Output")!.innerHTML = number1;
            }
            else {  //if Miles
                document.getElementById("Output")!.innerHTML = number1;
            }
        }
    }
}


export default Conversion;