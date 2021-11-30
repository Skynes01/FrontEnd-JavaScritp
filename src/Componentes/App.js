import React from 'react';
import './App.css';
import axios from 'axios';
import PersonasLista from './Personas/PersonasLista';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonasForm from './Personas/PersonasForm';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      personas : [],
      personaActual : {}
    }

    this.actualizarPersona = this.actualizarPersona.bind(this)
  }

  componentDidMount(){
    const url = 'http://localhost:5000/personas'
    axios.get(url)
    .then((respuesta)=>{
      //actualizar estado
      this.setState({
        personas: respuesta.data,
        personaActual: respuesta.data[0]
      })
      console.log(respuesta.data)
    })
    .catch((error=>{console.log(error)}))
  }

//asignar el estado de la persona actual
actualizarPersona(persona){
this.setState(
    {
    personaActual: persona
    }
  )
}

borrarArtista({_id:id}){
  console.log(id);
  const url=`http://localhost:5000/personas/${id}`;
     axios.delete(url)
     .then( (respuesta)=> {   
       this.setState({
             personas: respuesta.data
       })
       
   })
       .catch( (error) => {console.log(error)}  )
};
 

  render(){
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">
        <nav>
       <div className="nav-wrapper ef9a9a red lighten-3">
          <a href="#!" className="brand-logo center white-text text-white">Artistas</a>
      </div>
      </nav>
        </div>
      </div>
      <div className="row">
      <div className="col s3">
          <PersonasLista lista={ this.state.personas } actualizarPersona={ this.actualizarPersona }  borrarArtista = {this.borrarArtista}
 />
        </div>
      <div className="col s9">
          <PersonasDetalle personita={ this.state.personaActual }/>
        </div>
      </div>
      <div className="row">
      <div className="col s12">
          <PersonasForm/>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
