import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ticket = (props) => {
    return(
        <div className="Compra">
        {
          Object.keys(props.compra).length!==0
          ?
            <div className="Compra2">
              <h1>Compra Boleto</h1>
              <div className="DetallesComp">
                <p><b>{props.compra.nombre}</b> ({props.compra.idioma})</p>
                <p><b>Hora: </b>{props.compra.horario}</p>
                <p><b>Cantidad:</b> <input type="number" min="1" style={{width:'50px'}} value={props.compra.cantidad} onChange={e=>props.calcular(props.compra,e.target.value)}/></p>
                <p><b>Total: </b>${props.compra.total}</p>
                <div className="MasBotones">
                  <Button variant="danger" onClick={()=>props.eliminarCompra()}>Cancelar</Button>
                  <Button variant="success" onClick={()=>props.comprar(props.compra)}>comprar</Button>
                </div>
              </div>
            </div>
          :
            <div className="MensajeNada">
              <p> “Selecciona una película dando click en su horario”</p>
            </div>
        }  
      </div>
    );
}

export default Ticket;