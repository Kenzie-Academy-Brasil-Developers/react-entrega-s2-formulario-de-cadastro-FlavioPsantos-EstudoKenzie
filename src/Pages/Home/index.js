import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import './styleHome.css'
const Home = () => {
    return (
        <div>
            <Button variant="contained" color="secondary">
                <Link to='/login'>Faça Login</Link>
            </Button>

        </div>
    )
}
export default Home;