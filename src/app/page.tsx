"use client"
import { useEffect, useState } from "react";

interface Persona{
  nombre : string,
  apellido : string
}

let initialStatePersona:Persona = {
  nombre : "",
  apellido : ""
}

export default function Home() {
const miStorage = window.localStorage;
const [Persona, setPersona] = useState(initialStatePersona)
const [personas, setPersonas] = useState(useState<Persona[]>([]))
useEffect(() => {
  console.log("Hola")
  let listadoSTR = miStorage.getItem("personas")
  if(listadoSTR != null){
    let listado = JSON.parse(listadoSTR)
    setPersonas(listado)
    console.log(personas)
  }
 
  }, [])

const handlePersona = (name:string, value:string)=>{
  console.log(name)
  console.log(value)
  //validaciones
  setPersona(
    {...Persona, [name] : value}
  )
};
const handleRegistrar = ()=>{
  miStorage.setItem("personas", JSON.stringify([...personas, Persona]))
}
  return (
    <>
      <form>
        <h1>{Persona.nombre} {Persona.apellido}</h1>
        <label>Nombre: </label>
        <input type="text"
                placeholder="Nombre"
                name = "nombre"
                onChange={(e)=>handlePersona(e.currentTarget.name, e.currentTarget.value)}/>
        <span></span><br />
        <label>Apellido: </label>
        <input type="text" 
                placeholder="apellido"
                name = "apellido"
                onChange={(e)=>handlePersona(e.currentTarget.name, e.currentTarget.value)} /> 
        <br />
        <button onClick={()=>handleRegistrar}>Registrar</button>
      </form>
    </>
  );
}