/*
  Warnings:

  - You are about to drop the column `tipologradouro` on the `enderecos` table. All the data in the column will be lost.
  - You are about to drop the column `dataNascimento` on the `jogadores` table. All the data in the column will be lost.
  - Added the required column `logradouro` to the `enderecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_logradouro` to the `enderecos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "enderecos" DROP COLUMN "tipologradouro",
ADD COLUMN     "logradouro" VARCHAR(255) NOT NULL,
ADD COLUMN     "tipo_logradouro" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "jogadores" DROP COLUMN "dataNascimento",
ADD COLUMN     "data_nascimento" VARCHAR(255),
ADD COLUMN     "is_active" BOOLEAN;
