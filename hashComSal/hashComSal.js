import { scryptSync, randomBytes, timingSafeEqual } from "crypto"

function criarHashComSal(senha) {
    const sal = randomBytes(16).toString("hex")

    const senhaHasheada = scryptSync(senha, sal, 64).toString("hex")
    return `${sal}: ${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha) {
        this.nome === nome;
        [this.sal, this.hash] = criarHashComSal(senha).split(":")
    }
    autenticar(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64)
            const hashReal = Buffer.from(this.hash, "hex")

            const hashesCorrespodem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespodem) {
                console.log("Usuário autenticado!")
                return true
            }
        }
        console.log("Usuário ou senhas incorretos")
        return false
    }
}

const jm = new Usuario("Jao marcio", "1234")

console.log(jm)

// TESTE DE SUCESSO
jm.autenticar("Jao marcio", "1234")