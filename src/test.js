const teste = fetch("http://localhost:3000/player", {
    "headers": {
        "accept": "application/json, text/plain, /",
        "access-control-allow-origin": "*",
        "content-type": "application/json",
        "sec-ch-ua": "Not?A_Brand"; v="8", "Chromium"; v="108", "Google Chrome"; v="108"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Linux"
    },
    "referrer": "http://localhost:5173/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{"nome":"joaquim kennedy batista de souza","dataNascimento":"092022","apelido":"josezinho","email":"joaquimkbs@gmail.com","cpf":"330.579.528 - 01","senha":"152214","ddd":"11","numeroTelefone":"11951698212","saldo":"50","logradouro":"dasfsa","tipoLogradouro":"av","numeroEndereco":"13","nomeCidade":"Mogi das Cruzes","bairro":"centro","complemento":"csa","nomeEstado":"Solteiro(a)"}",
        "method": "POST",
            "mode": "cors",
                "credentials": "omit"
});
console.log(teste);
console.log(teste.statusText);