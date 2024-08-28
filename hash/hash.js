import { createHash } from "crypto";

function criarHash(senha) {
    return createHash("sha256").update(senha).digest("hex")
}

console.log(criarHash("Uma string qualquer"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome
        this.hash = criarHash(senha)
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criarHash(senha)) {
            console.log("Usuário cadastrado com sucesso");
            return true;
        }
        console.log("Usuário ou senha incorretas.")
        return false;
    }
}
const usuario = new Usuario("Carlos Barros", "senhacerta")
console.log(usuario)

//CASO DE SUCESSO
usuario.autentica("Carlos Barros", "senhacerta")

//CASO DE FRACASSO
usuario.autentica("carlos baros", "cenhaSerttaa")
