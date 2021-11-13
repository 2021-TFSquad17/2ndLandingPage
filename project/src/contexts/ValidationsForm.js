import React from "react";
import { validateMessage, validateName, validateEmail } from "../model/validations";

const ValidationsForm = React.createContext({
    message: validateMessage,
    name: validateName,
    email: validateEmail,
});

export default ValidationsForm;