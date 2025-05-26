import { useState } from 'react'
import Menu from "./components/menu"
import "./components/styles.css"
import {Image, Logo} from "./components/images.jsx"
import Title from "./components/title"
import Orario from "./components/orario"
import images from "./arrays.js"



function App() {
  return (
    <>
    <Title
      titleClass={"text-style main-title"}
      titleText={""}
    />
      <Menu 
        menuBar={"menu-bar"}
        firstElement={"Chi Siamo"}
        secondElement={"Servizi"}
        thirdElement={"Info e Contatti"} 
        />

      {images.map(({ imgName, img }) => (
        <Image key={imgName} imgName={imgName} img={img} />
      ))}

      <Orario class={"text-style-small"}/>
      <Logo
      imgName={"logo"}
      imgDivName={"logo-cont"}
      img={import.meta.env.BASE_URL+"img/LOGO.png"}
       />
    </>
  )
}

export default App;
