import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Defautt export
// import MyComponent from './Components/ClassComp';
// //Named import
// import { FunctionalArrow } from './Components/FunctionalComp';
// import Hello from './Components/Hello';
// import PropsComp from './Components/PropsComp';
// import StateComp from './Components/StateComp';
// import SetStateComp from './Components/SetStateComp';
// import DesFunc from './Components/DesFunc';
// import DesClass from './Components/DesClass';
// import FuncEvent from './Components/FuncEvent';
// import ClassEvent from './Components/ClassEvent';
import Bind from './Components/Bind';
import MethodClass from './Components/MethodClass';
import ConditionalRendering from './Components/ConditionalRendering';
import ListRendering from './Components/ListRendering';
import Index from './Components/Index';
import Inline from './Components/Inline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <FunctionalArrow />
    <MyComponent />
    <Hello />
    <PropsComp name="Divya1" heroName="Ramalingappa1" ><button>Action</button></PropsComp>
    <PropsComp name="Divya2" heroName="Ramalingappa2" >This is a children comp</PropsComp>
    <PropsComp name="Divya3" heroName="Ramalingappa3" />
    <StateComp />
   
    <DesFunc name="DesDivya1" heroName="Deshero" />
    <DesFunc name="DesDivya2" heroName="Deshero" />
    <DesClass name="DesDivya1" heroName="Deshero" />
    <DesClass name="DesDivya2" heroName="Deshero" /> */}
     {/* <SetStateComp /> */}
     {/* <FuncEvent />
     <ClassEvent /> */}
     <Bind />
     <MethodClass />
     <ConditionalRendering />
     <ListRendering />
     <Index />
     <Inline />
  </React.StrictMode>
);

