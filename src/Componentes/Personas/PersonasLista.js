import React from "react";

const PersonasLista = ( props ) =>{
    return(
    <ul className="collection with-header ">
        {
            props.lista.map( (elemento) => {
                return (
                    <li
                    className="collection-item e57373 red lighten-2"
                    key={ elemento._id}
                    onClick={props.actualizarPersona.bind(this, elemento)}
                    >
                    { elemento.nombre} {elemento.apellido}

                    <a href="#!" className="secondary-content ">
                        <i class="material-icons "><box-icon name='info-circle' type='solid'onClick={ props.actualizarPersona.bind(this , elemento   ) } ></box-icon ></i><box-icon name='trash'
                                        onClick={ props.borrarArtista.bind(this,elemento)}
                                        
                                        
                                        ></box-icon></a>
                    </li>
                )
            })
        }
    </ul>
            
    )
}
export default PersonasLista