import { Button } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import './logado.css'
const Logado = ({ isLoged, handleLogOut }) => {
    const history = useHistory();
    const {user} = useParams(); 
    if (!isLoged) {
        history.push('/')
    }
    return (
        <div className='logado'>
            <p>
                Olá {user}
            </p>
            <p  className='voltar'>
               <span onClick={handleLogOut} >Voltar</span> 
            </p>

        </div>
    )
}
export default Logado;