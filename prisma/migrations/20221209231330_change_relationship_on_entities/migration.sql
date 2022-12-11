-- CreateTable
CREATE TABLE "carteiras" (
    "id" SERIAL NOT NULL,
    "saldo" DECIMAL(15,2) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "carteiras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cidades" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "fk_estado" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "tipologradouro" VARCHAR(255) NOT NULL,
    "numero" VARCHAR(255) NOT NULL,
    "bairro" VARCHAR(255) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "complemento" VARCHAR(255) NOT NULL,
    "fk_cidade" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estados" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jogadores" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "apelido" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "fk_carteira" INTEGER NOT NULL,
    "fk_endereco" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataNascimento" VARCHAR(255),

    CONSTRAINT "jogadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "telefones" (
    "id" SERIAL NOT NULL,
    "ddd" VARCHAR(2) NOT NULL,
    "numero" VARCHAR(255) NOT NULL,
    "fk_jogador" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "telefones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "u_jogadores_apelido" ON "jogadores"("apelido");

-- CreateIndex
CREATE UNIQUE INDEX "u_jogadores_email" ON "jogadores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "u_jogadores_cpf" ON "jogadores"("cpf");

-- AddForeignKey
ALTER TABLE "cidades" ADD CONSTRAINT "fk_cidades_estados" FOREIGN KEY ("fk_estado") REFERENCES "estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enderecos" ADD CONSTRAINT "fk_enderecos_cidades" FOREIGN KEY ("fk_cidade") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "fk_jogadores_carteiras" FOREIGN KEY ("fk_carteira") REFERENCES "carteiras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "fk_jogadores_enderecos" FOREIGN KEY ("fk_endereco") REFERENCES "enderecos"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "telefones" ADD CONSTRAINT "fk_telefones_jogadores" FOREIGN KEY ("fk_jogador") REFERENCES "jogadores"("id") ON DELETE CASCADE ON UPDATE CASCADE;
