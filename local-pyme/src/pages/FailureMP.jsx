//aviso de fallo al intentar pagar con mercado pago, la operacion NO fue realizada con exito
import { Link } from "react-router-dom"

export const FailureMP = () => {
  return (
    <>
  <div>
    <h3>
      Se ha producido un error en el intento de pago, intentelo mas tarde.
    </h3>
    <h3>
      <Link to='/FailureMP'>Pagina principal</Link>
    </h3>
  </div>
    </>
  )
}
