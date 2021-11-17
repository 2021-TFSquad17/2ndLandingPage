import {useState} from "react";

function useErros(validations){
    const initialState = createNewInitialState(validations);
    const [erros,setErros] = useState(initialState);

    function validateFields(event){
        const {name,value} = event.target;
        const newState = {...erros};
        newState[name] = validations[name](value);
        setErros(newState);
    }

    function canSendForm(){
        for(let campo in erros){
            if(!erros[campo].valid){
                return false;
            }
            return true;
        }
    }

    return [erros,validateFields,canSendForm];
}

function createNewInitialState(validacoes){
    const initialState = {}
    for(let campo in validacoes){
        initialState[campo] = {valid:true,text:""};
    }
    return initialState;
}

export default useErros;