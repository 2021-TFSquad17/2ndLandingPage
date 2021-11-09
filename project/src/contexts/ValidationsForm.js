import React from "react";
import { validateMessage, validateName, validateEmail, validateTelephone } from "../model/validations";

const ValidationsForm = React.createContext({
    message: validateMessage,
    name: validateName,
    email: validateEmail,
    telephone:validateTelephone
});

export default ValidationsForm;