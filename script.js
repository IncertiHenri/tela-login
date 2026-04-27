document.getElementById("formLogin").addEventListener("submit", function (e) {

    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;

    loginCorreto = true;

    if(!email.includes("@") || !email.includes(".")){
        loginCorreto = true;
        return alert("Insira um e-mail válido!");
    }

    if(senha.length < 8){
        loginCorreto = true;
        return alert("Insira uma senha válida!");
    }

    if(loginCorreto === true) return alert("Login realizado com sucesso!");
});

