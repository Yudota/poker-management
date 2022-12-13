const allStates = [
    {
        "id": 11,
        "sigla": "RO",
        "nome": "Rondônia",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 12,
        "sigla": "AC",
        "nome": "Acre",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 13,
        "sigla": "AM",
        "nome": "Amazonas",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 14,
        "sigla": "RR",
        "nome": "Roraima",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 15,
        "sigla": "PA",
        "nome": "Pará",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 16,
        "sigla": "AP",
        "nome": "Amapá",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 17,
        "sigla": "TO",
        "nome": "Tocantins",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte"
        }
    },
    {
        "id": 21,
        "sigla": "MA",
        "nome": "Maranhão",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 22,
        "sigla": "PI",
        "nome": "Piauí",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 23,
        "sigla": "CE",
        "nome": "Ceará",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 24,
        "sigla": "RN",
        "nome": "Rio Grande do Norte",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 25,
        "sigla": "PB",
        "nome": "Paraíba",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 26,
        "sigla": "PE",
        "nome": "Pernambuco",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 27,
        "sigla": "AL",
        "nome": "Alagoas",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 28,
        "sigla": "SE",
        "nome": "Sergipe",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 29,
        "sigla": "BA",
        "nome": "Bahia",
        "regiao": {
            "id": 2,
            "sigla": "NE",
            "nome": "Nordeste"
        }
    },
    {
        "id": 31,
        "sigla": "MG",
        "nome": "Minas Gerais",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 32,
        "sigla": "ES",
        "nome": "Espírito Santo",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 33,
        "sigla": "RJ",
        "nome": "Rio de Janeiro",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 35,
        "sigla": "SP",
        "nome": "São Paulo",
        "regiao": {
            "id": 3,
            "sigla": "SE",
            "nome": "Sudeste"
        }
    },
    {
        "id": 41,
        "sigla": "PR",
        "nome": "Paraná",
        "regiao": {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
        }
    },
    {
        "id": 42,
        "sigla": "SC",
        "nome": "Santa Catarina",
        "regiao": {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
        }
    },
    {
        "id": 43,
        "sigla": "RS",
        "nome": "Rio Grande do Sul",
        "regiao": {
            "id": 4,
            "sigla": "S",
            "nome": "Sul"
        }
    },
    {
        "id": 50,
        "sigla": "MS",
        "nome": "Mato Grosso do Sul",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    },
    {
        "id": 51,
        "sigla": "MT",
        "nome": "Mato Grosso",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    },
    {
        "id": 52,
        "sigla": "GO",
        "nome": "Goiás",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    },
    {
        "id": 53,
        "sigla": "DF",
        "nome": "Distrito Federal",
        "regiao": {
            "id": 5,
            "sigla": "CO",
            "nome": "Centro-Oeste"
        }
    }
]
enum estados {
    RO = 1,
    AC = 2,
    AM = 3,
    RR = 4,
    PA = 5,
    AP = 6,
    TO = 7,
    MA = 8,
    PI = 9,
    CE = 10,
    RN = 11,
    PB = 12,
    PE = 13,
    AL = 14,
    SE = 15,
    BA = 16,
    MG = 17,
    ES = 18,
    RJ = 19,
    SP = 20,
    PR = 21,
    SC = 22,
    RS = 23,
    MS = 24,
    MT = 26,
    GO = 26,
    DF = 27,
}
import ConnectionFactory from "../DAO/ConnectionFactory";
import { PrismaClient } from "@prisma/client";
import { AC, AL, AM, AP, BA, CE, DF, ES, GO, MA, MG, MS, MT, PA, PB, PE, PI, PR, RJ, RN, RO, RR, RS, SC, SE, SP, TO } from "./cidades";
import AbstractDAO from "../DAO/AbstractDAO";

class GeraRegistro {
    con: PrismaClient;
    constructor() {
        this.gerarEstados = this.gerarEstados.bind(this)

        this.con = ConnectionFactory.criar()
    }

    async gerarEstados(arr: Array<any>) {
        console.log('gerando registros de estados');

        try {
            for (const estado of arr) {

                await this.getPrismaClient().estados.create({
                    data: {
                        descricao: estado.nome,
                        uf: estado.sigla
                    },
                })
            }

        } catch (error) {
            console.log('ERRO::', error)
        }
    }
    async gerarCidades(arr: Array<any>, idEstado: number) {
        console.log('gerando registros de cidades');
        try {
            for (const estado of arr) {

                await this.getPrismaClient().cidades.create({
                    data: {
                        nomeCidade: estado.nome,
                        fk_estado: idEstado,

                    },
                })
            }

        } catch (error) {
            console.log('ERRO::', error)
        }
    }
}

const gr = new GeraRegistro()
gr.gerarEstados(allStates).then(_ => {
    gr.gerarCidades(RO, estados.RO)
    gr.gerarCidades(AC, estados.AC)
    gr.gerarCidades(AM, estados.AM)
    gr.gerarCidades(RR, estados.RR)
    gr.gerarCidades(PA, estados.PA)
    gr.gerarCidades(AP, estados.AP)
    gr.gerarCidades(TO, estados.TO)
    gr.gerarCidades(MA, estados.MA)
    gr.gerarCidades(PI, estados.PI)
    gr.gerarCidades(CE, estados.CE)
    gr.gerarCidades(RN, estados.RN)
    gr.gerarCidades(PB, estados.PB)
    gr.gerarCidades(PE, estados.PE)
    gr.gerarCidades(AL, estados.AL)
    gr.gerarCidades(SE, estados.SE)
    gr.gerarCidades(BA, estados.BA)
    gr.gerarCidades(MG, estados.MG)
    gr.gerarCidades(ES, estados.ES)
    gr.gerarCidades(RJ, estados.RJ)
    gr.gerarCidades(SP, estados.SP)
    gr.gerarCidades(PR, estados.PR)
    gr.gerarCidades(SC, estados.SC)
    gr.gerarCidades(RS, estados.RS)
    gr.gerarCidades(MS, estados.MS)
    gr.gerarCidades(MT, estados.MT)
    gr.gerarCidades(GO, estados.GO)
    gr.gerarCidades(DF, estados.DF)
})
