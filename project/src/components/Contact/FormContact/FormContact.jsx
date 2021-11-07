import { TextField, Button } from "@material-ui/core";
import "./style.css";

function FormContact() {
    return (
        <form className="form-contact">
            <TextField
                className="normal-input"
                type="text"
                label="Nome"
                variant="filled"
                color="secondary"
                fullWidth
                margin="normal"
            />

            <TextField
                className="normal-input"
                type="email"
                label="Email"
                variant="filled"
                color="secondary"
                fullWidth
                margin="normal"
            />

            <TextField
                className="normal-input"
                type="number"
                label="Telefone"
                variant="filled"
                color="secondary"
                fullWidth
                margin="normal"
            />

            <TextField
                className="normal-input"
                type="text"
                label="Mensagem"
                variant="filled"
                color="secondary"
                fullWidth
                multiline
                rows="4"
                margin="normal"
            />

            <Button
            size="large" 
            color="secondary" 
            variant="contained"
            >
                Enviar
            </Button>


        </form>
    );
}

export default FormContact;