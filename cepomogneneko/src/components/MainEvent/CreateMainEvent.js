import React from 'react'
import { useForm } from "react-hook-form";

const MainEvent = () => {

    const {register, handleSubmit } = useForm()

    const onSubmit = (newMainEvent) => {
      console.log(newMainEvent);
    }
  
    return (
      <div className="centerLoginDiv">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Kreiraj Radnu Akciju</h1>

          <h3>Naziv radne akcije</h3>
          <input 
            type="text"
            placeholder="Ocistimo reku Nisavu"
            name="nazivRadneAkcije" 
            {...register('nazivRadneAkcije')} />

          <h3>Lokacija</h3>
          <input 
            type="text"
            placeholder="Nis"
            name="lokacija" 
            {...register('lokacija')} />
  
          <h3>Opis problema</h3>
          <input
            type="text"
            placeholder="Velika gomila djubreta na reci Nisavi"
            name="decription"
            {...register('decription')} />

          <h3>Dodaj Sliku</h3>
          <input
            type="file"
            name="pictureInput"
            {...register('pictureInput')} />

          <h3>Datum pocetka</h3>
          <input
            type="date"
            name="startDate"
            {...register('startDate')} />
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }

export default MainEvent
