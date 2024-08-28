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
const usuario = new Usuario("mv", "1234")

for (let senhaTest = 0; senhaTest < 10000; senhaTest++) {
    if (usuario.autentica("mv", senhaTest.toString())) {
        console.log(`A senha do usuário é ${senhaTest}`)
    }
}