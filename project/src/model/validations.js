function validateMessage(message){
    if(message.length < 10){
        return {valid:false,text:"A mensagem deve ter pelo menos 10 caracteres!"};
    }
    return {valid:true,text:""};
}

function validateName(name){
    if(name.length === 0){
        return {valid:false,text:"O nome não pode ser em branco!"}
    }
    return {valid:true,text:""};
}

function validateEmail(email){
    if(email.length === 0){
        return {valid:false,text:"O email não pode ser em branco!"}
    }
    return {valid:true,text:""}
}

function validateTelephone(telephone){
    if(telephone.length === 0){
        return {valid:false,text:"O telefone não pode ser em branco!"}
    }
    return {valid:true,text:""}
}

export {validateMessage,validateName,validateEmail,validateTelephone};