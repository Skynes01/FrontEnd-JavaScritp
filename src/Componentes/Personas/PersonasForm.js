import React from "react";
import axios from 'axios';

class PersonasForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    submitNuevaPersona(event){
        event.preventDefault();
        //hacer la peticion via axios
        axios.post('http://localhost:5000/personas',{

        nombre: this.refs.nombre.value,
        apellido: this.refs.apellido.value,
        email: this.refs.email.value,
        telefono: this.refs.telefono.value,
        empresa: this.refs.empresa.value,

        }).then(respuesta => console.log(respuesta))
        .catch(error => console.log(error))
    }

    render(){
        return(
           
<div className="row">
    <h5 className="center">Nuevo Artista</h5>
        <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
            <div className="row">
                <div className="input-field col s6">
                    <input id="nombre" ref="nombre" type="text" placeholder="Nombre"></input>
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="input-field col s6">
                    <input id="apellido" ref="apellido" type="text" placeholder="Epellido"></input>
                    <label htmlFor="apellido">Apellido</label>
                </div>
                <div className="input-field col s6">
                    <input id="email" ref="email" type="text" placeholder="Nombre Artistico"></input>
                    <label htmlFor="email">Nombre Artistico</label>
                </div>
                <div className="input-field col s6">
                    <input id="telefono" ref="telefono" type="text" placeholder="Canción"></input>
                    <label htmlFor="telefono">Edad</label>
                </div>
                <div className="input-field col s6">
                    <input id="empresa" ref="empresa" type="text" placeholder="Genero"></input>
                    <label htmlFor="empresa">Genero</label>
                </div>
                <div className="input-field col s6">
                    <button type="submit" name="action" className="btn-floating btn-large waves-effect waves-light red">+</button>
                </div>
            </div>
        </form>
   </div>
        )
    }
}

export default PersonasForm