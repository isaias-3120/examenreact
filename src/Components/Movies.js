import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Movies = (props) => {
    return(
        <div className="Cartelera-Pelis">
        <h1>Cartelera de peliculas</h1>
        <div className="Contenedor-Pelis"> 
          {
            props.cartelera.map((a,index)=>(
              <>
                <div className="Peli-Individual">
                  <div className = "poster">
                    <img src={a.url} alt="Imagen"></img>
                  </div>
                  <div className = "info">
                    <p>{a.nombre}</p>
                    <p>{a.idioma}</p>
                    <p>{a.clasificacion}</p>
                    <p>{a.duracion}</p>
                    <div className="btnPelis">
                    {
                      a.horarios.map((b,index)=>
                        <Button variant="dark" onClick={()=>props.agregar(a,b)}> {b} </Button>
                      )
                    }
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </div>



    );
}

export default Movies;