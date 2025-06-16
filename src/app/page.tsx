"use client"
import { useState } from "react";

interface Persona{
  nombre : string,
  apellido : string
}
let initialStatePersona:Persona = {
  nombre: "",
  apellido : ""
}
export default function Home() {
  const [persona, setPersona] = useState(initialStatePersona)
  const handlePersona = (name:string, value:string)=>{
    console.log(name)
    console.log(value)
    // validaciones
    setPersona(
      {...persona, [name] : value}
    )

  }
  return (
    <form>
      <h1>{persona.nombre} {persona.apellido}</h1>
      <label>Nombre: </label><br/>
      <input type="text"
            name = "nombre"
            placeholder="Nombre"
            onChange={(e)=>handlePersona(e.currentTarget.name, e.currentTarget.value)}/><br/>
      <span></span><br/>
      <label>Apellido: </label><br/>
      <input type="text" 
            name = "apellido"
            placeholder="Apellido"
            onChange={(e)=>handlePersona(e.currentTarget.name, e.currentTarget.value)}/><br/>
      <span></span><br/>
      <button>Registrar</button>
    </form>
  );
}
