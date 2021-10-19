
import {
    IonGrid,
    IonButton,
    IonRow,
    IonCol,
    IonItem,

} from '@ionic/react';
import React from 'react';

//When writing this, I did not have a good grasp on states and hooks quite yet, 
//so I opted for a more familiar approach; that being the management of booleans in the place of states.
let plus = false;
let minus = false;
let divide = false;
let multiply = false;
let opSet = false;
let equals = false;
let equation = "";
let history= [""];



export const CalInterface:React.FC = (): JSX.Element => {

//8 characters in the display for now, no more otherwise things get funky
    return ( 
        <div style={{backgroundColor: "#4B0082"}}>
        <IonGrid fixed={true} style={{height: "100vh", width: "flex"}}>
            <div style={{borderBottom: "thin solid white", padding: "10px"}}>
                <h1 id="numberInput" style={{fontSize: 60, direction: "rtl", color: "white"}} >
                    0
                </h1>
                </div>
                <IonRow style={{flex: "auto"}}>
                    <IonCol>    
                        <IonButton id='ClearButton' color= "warning" shape="round" fill="outline" size="large" onClick={clearInput}> C</IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol></IonCol>
                    <IonCol>    
                        <IonButton id='DivButton' color= "warning" shape="round"  fill="solid"  size="large" onClick={setDiv}> ÷ </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow style={{flex: "auto"}}>
                    <IonCol>
                        <IonButton id='Seven' color= "light" shape="round" fill="outline"  size="large" onClick={appendSeven}> 7 </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id='Eight' color= "light" shape="round" fill="outline"  size="large" onClick={appendEight}> 8 </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='Nine' color= "light" shape="round" fill="outline"  size="large" onClick={appendNine}> 9 </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='MultButton' color= "warning" shape="round" fill="solid"  size="large" onClick={setMult}> x </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow style={{flex: "auto"}}>
                    <IonCol>
                        <IonButton id='Four' color= "light" shape="round" fill="outline"  size="large" onClick={appendFour}> 4 </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id='Five' color= "light" shape="round" fill="outline"  size="large" onClick={appendFive}> 5 </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='Six' color= "light" shape="round" fill="outline"  size="large" onClick={appendSix}> 6 </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='SubtractionButton'  color= "warning" shape="round" fill="solid"  size="large" onClick={setSub}> - </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow style={{flex: "auto"}}>
                    <IonCol>
                        <IonButton id='One'  color= "light" shape="round" fill="outline"  size="large" onClick={appendOne}> 1 </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton id='Two'  color= "light" shape="round" fill="outline"  size="large" onClick={appendTwo}> 2 </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='Three'  color= "light" shape="round" fill="outline"  size="large" onClick={appendThree}> 3 </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='AdditionButton'  color= "warning" shape="round" fill="solid"  size="large" onClick={setAdd}> + </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow style={{flex: "auto"}}>
                    <IonCol>
                        <IonButton id='Zero'  color= "light" shape="round" fill="outline"  size="large" onClick={appendZero}> 0 </IonButton>
                    </IonCol>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonButton id='DecimalButton'  color= "light" shape="round" fill="outline"  size="large" onClick={appendDP}> . </IonButton>
                    </IonCol>
                    <IonCol>    
                        <IonButton id='EqualButton' color= "warning" shape="round"  fill="solid"  size="large" onClick={setEq}> = </IonButton>
                    </IonCol>
                </IonRow>
        </IonGrid>
        </div>
    );

}



function clearInputMinusEquation() {
    document.getElementById("numberInput")!.innerHTML = "0";
    plus = false;
    minus = false;
    multiply = false;
    divide = false;
    opSet = false;
    equals = false;
}
function clearInput() {
    document.getElementById("numberInput")!.innerHTML = "0";
    equation = "";
    plus = false;
    minus = false;
    multiply = false;
    divide = false;
    opSet = false;
    equals = false;
}

function appendDP() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
         document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + ".";
    }
}
function appendZero() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "0";
        }
    }
}
function appendOne() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + '1';
        }
        else{
            document.getElementById("numberInput")!.innerHTML = '1';
        }
    }
}
function appendTwo() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + '2';
        }
        else{
            document.getElementById("numberInput")!.innerHTML = '2';
        }
    }
}
function appendThree() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "3";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "3";
        }
    }
}
function appendFour() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "4";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "4";
        }
    }
}
function appendFive() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "5";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "5";
        }
    }
}
function appendSix() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "6";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "6";
        }
    }
}
function appendSeven() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "7";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "7";
        }
    }
}
function appendEight() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "8";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "8";
        }
    }
}
function appendNine() {
    if (opSet) {
        if (equals) {
            clearInput();
        }
        clearInputMinusEquation();
    }
    if ((document.getElementById("numberInput")!.innerHTML).length !== 8) {
        if (document.getElementById("numberInput")!.innerHTML !== "0") {
            document.getElementById("numberInput")!.innerHTML = document.getElementById("numberInput")!.innerHTML + "9";
        }
        else{
            document.getElementById("numberInput")!.innerHTML = "9";
        }
    }
}

function setAdd() {
    if (!plus && document.getElementById("numberInput")!.innerHTML !== "Infinity") {
        if (equals) {
            equation = equation + " + ";
            equals = false;
        }
        else{
            equation = equation + document.getElementById("numberInput")!.innerHTML + " + ";
        }
    }
    plus = true;
    opSet = true;
}
function setSub() {
    if (!minus && document.getElementById("numberInput")!.innerHTML !== "Infinity") {
        if (equals) {
            equation = equation + " - ";
            equals = false;
        }
        else{
            equation = equation + document.getElementById("numberInput")!.innerHTML + " - ";
        }
    }
    minus = true;
    opSet = true;
}
function setMult() {
    if (!multiply && document.getElementById("numberInput")!.innerHTML !== "Infinity") {
        if (equals) {
            equation = equation + " * ";
            equals = false;
        }
        else{
            equation = equation + document.getElementById("numberInput")!.innerHTML + " * ";
        }
    }
    multiply = true;
    opSet = true;
    
}
function setDiv() {
    if (!divide && document.getElementById("numberInput")!.innerHTML !== "Infinity") {
        if (equals) {
            equation = equation + " / ";
            equals = false;
        }
        else{
            equation = equation + document.getElementById("numberInput")!.innerHTML + " / ";
        }
    }
    divide = true;
    opSet = true;
}
function setEq() {
    if (!equals && !opSet) {
        equation = equation + document.getElementById("numberInput")!.innerHTML;
        equals = true;
        opSet = true;
        calcTot();
    }
}

function calcTot() {
    //calculate from string equation, add it to the history array, and show the answer to the user
    let solution = "";
    solution = eval(equation)

    equation = equation + " = " + solution;

    history.push(equation);
    console.log(history);
    document.getElementById("numberInput")!.innerHTML = solution;
    equation = document.getElementById("numberInput")!.innerHTML;
    plus = false;
    minus = false;
    multiply = false;
    divide = false;
    //I want to leave it open to allow users to keep making equations out of answers to other equations, for example: 5 + 4 = 9 + 3 = 12 ... ect.
}


function doThing() {
    let temp = [history].toString().split(",");
    let History = temp.reverse();
    return History;
}

export const Logs:React.FC = () => {

    return (
        <>
        <div style={{ height: "100vh", overflowY: "scroll", backgroundColor: "#4B0082"}}>
            {console.log(history)}
            {doThing().map((i) =>(<IonItem color="#4B0082" style = {{backgroundColor: "#4B0082", color: "white"}}>{i}</IonItem>))}
        </div>
     </>
    );
}

