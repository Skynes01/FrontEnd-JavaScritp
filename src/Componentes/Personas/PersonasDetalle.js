import React from "react";

const PersonasDetalle = ({personita}) =>{
    return(
        <div>   
  <div className="row">
<div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2019/03/cursos-musica.jpg"></img>
      </div>
      <div class="card-stacked">
        <div class="card-content ef5350 red lighten-1">
        <span className="card-title white-text text-white">{personita.nombre}   {personita.apellido}</span>
          <p className="fce4ec pink lighten-5">Edad: {personita.telefono}</p>
          <p className="fce4ec pink lighten-5">Nombre Artistico: {personita.email}</p>
          <p className="fce4ec pink lighten-5">Genero: {personita.empresa}</p>
        </div>
      </div>
    </div>
  </div>
          
    </div>
  </div>
           
        
    )
}

export default PersonasDetalle
