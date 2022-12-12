/*
  Warnings:

  - You are about to drop the column `fk_jogador` on the `telefones` table. All the data in the column will be lost.
  - Added the required column `fk_jogador` to the `jogadores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "fk_jogadores_enderecos";

-- DropForeignKey
ALTER TABLE "telefones" DROP CONSTRAINT "fk_telefones_jogadores";

-- AlterTable
ALTER TABLE "jogadores" ADD COLUMN     "fk_jogador" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "telefones" DROP COLUMN "fk_jogador";

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "fk_jogadores_enderecos" FOREIGN KEY ("fk_endereco") REFERENCES "enderecos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "fk_jogadores_telefones" FOREIGN KEY ("fk_jogador") REFERENCES "telefones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
