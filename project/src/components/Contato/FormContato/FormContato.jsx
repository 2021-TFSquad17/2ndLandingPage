import { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import "./style.css";
import ValidationsForm from "../../../contexts/ValidationsForm";
import useErros from "../../../hooks/useErros";

function FormContato() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const validations = useContext(ValidationsForm);
    const [erros, validateFields, canSendForm] = useErros(validations);

    return (
        <form className="form-contact" onSubmit={(event) => {
            event.preventDefault();
            if (canSendForm()) {
                console.log({ name, email, message });
            }
        }}>
            <TextField
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
                onBlur={(event) => {
                    validateFields(event);
                }}
                name="name"
                className="normal-input"
                type="text"
                label="Nome*"
                variant="filled"
                color="secondary"
                fullWidth
                margin="normal"
                error={!erros.name.valid}
                helperText={erros.name.text}
            />

            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                onBlur={(event) => {
                    validateFields(event);
                }}
                name="email"
                className="normal-input"
                type="email"
                label="E-mail*"
                variant="filled"
                color="secondary"
                fullWidth
                margin="normal"
                error={!erros.email.valid}
                helperText={erros.email.text}
            />

            <TextField
                value={message}
                onChange={(event) => {
                    setMessage(event.target.value);
                }}
                onBlur={(event) => {
                    validateFields(event);
                }}
                name="message"
                className="normal-input"
                type="text"
                label="Mensagem*"
                variant="filled"
                color="secondary"
                fullWidth
                multiline
                rows="4"
                margin="normal"
                error={!erros.message.valid}
                helperText={erros.message.text}
            />

            <Button
                size="large"
                color="secondary"
                variant="contained"
                type="submit"
                fullWidth
            >
                Enviar
            </Button>

        </form>
    );
}

export default FormContato;