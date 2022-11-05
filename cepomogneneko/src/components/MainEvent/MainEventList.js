import React from 'react'
import MainEvent from './MainEvent'


const MainEventList = () => {

  const MainEventObject1 = {
    nazivRadneAkcije: "Ocistimo reku Nisavu",
    lokacija: "Nis",
    decription: "Velika gomila djubreta na reci Nisavi",
    pictureInput: "jabskdjbajsbd",
    startDate: "20-06-2014"
  }
  
  const MainEventObject2 = {
    nazivRadneAkcije: "Ocistimo djubre iz centra",
    lokacija: "Beograd",
    decription: "Mnogo veliki grad",
    pictureInput: "jabskdjbajsbd",
    startDate: "201-07-2015"
  }

  console.log("Ulazi u Main Event List")

  return (
    <>
      <MainEvent MainEventObject={MainEventObject1}/>
      <MainEvent MainEventObject={MainEventObject2}/>
    </>
  )
}

export default MainEventList
