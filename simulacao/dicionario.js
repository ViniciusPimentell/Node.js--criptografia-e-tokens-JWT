import { createHash } from "crypto";
class Usuario {
    constructor(nome, senha) {
        this.nome = nome
        this.hash = this.criarHash(senha)
    }
    criarHash(senha) {
        return createHash("sha256").update(senha).digest("hex")
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criarHash(senha)) {
            console.log("Usuário cadastrado com sucesso");
            return true;
        }
        //console.log("Usuário ou senha incorretas.")
        return false;
    }
}
const usuario = new Usuario("mv", "senha123")

const senhasComuns = [
    "senha", "123456", "senha123", "admin", "blink182", "meuAniversario", "senha123456", "brasil", "102030"
]

senhasComuns.map(senha => {
    if(usuario.autentica("mv", senha)){
        console.log(`A senha do usuário é ${senha}`)
    }
})