import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import './logado.css'
const Logado = ({ isLoged, handleLogOut }) => {
    const history = useHistory();
    if (!isLoged) {
        history.push('/')
    }
    return (
        <div className='logado'>
            <p>
                Olá Kenzie Academy
            </p>
            <p  className='voltar'>
               <span onClick={handleLogOut} >Voltar</span> 
            </p>

        </div>
    )
}
export default Logado;