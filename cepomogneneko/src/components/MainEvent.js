import React, { useState } from 'react'

const MainEvent = (props) => {

  console.log(props)
  return (
    <div>
          <h3>{props.nazivRadneAkcije}</h3>

          <h3>{props.lokacija}</h3>
  
          <h3>{props.decription}</h3>

      </div>
  )
}

export default MainEvent
