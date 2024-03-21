import React, {useState} from 'react'


export default function Componente() {

  const[texto,setText]=useState()
  const[updated,setUpdated]=useState()
  
  function textOnChange(event) {
    //alert("entro aqui en cambio de texto ")
    setText(event.target.value)
  }
  /*const textOnChange2 = function(event){
 setText(event.target.value)
  }*/
const buttonClick = (param) => {
  setUpdated(texto+" - "+param.pageX)
  console.log(param)
}
  return (
    <div>
  <input type='text' value={texto} onChange={textOnChange}/>
  <button  value="e" onClick={buttonClick}> Actualizar</button>
<p>Texto Input {texto}</p>
<p>Texto Actualizado {updated}  </p>
    </div>
  )
}
