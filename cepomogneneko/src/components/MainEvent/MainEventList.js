import React from 'react'
import MainEventThumblr from './MainEventThumblr'
import "../../styles/Profile.scss";


const MainEventList = () => {

  const MainEventObject1 = {
    nazivRadneAkcije: "Ocistimo reku Nisavu",
    lokacija: "Nis",
    decription: "Molimo Vas da u sto vecem broju dodjemo na dan 20-07-2022 i pokazemo sta znaci zajednica i odgomna zelja za preokretom losih navika. Idemo ljudiiii. Sto visee to boljeee. Idemo samo jakoooO!!",
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
    <div className='make-space-for-navbar'>
      <MainEventThumblr MainEventObject={MainEventObject1}/>
      <div className='spacer-between-main-events'></div>
      <MainEventThumblr MainEventObject={MainEventObject2}/>
    </div>
  )
}

export default MainEventList
