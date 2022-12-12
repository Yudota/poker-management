/*
  Warnings:

  - You are about to drop the column `fk_jogador` on the `jogadores` table. All the data in the column will be lost.
  - Added the required column `fk_telefone` to the `jogadores` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "fk_jogadores_telefones";

-- AlterTable
ALTER TABLE "jogadores" DROP COLUMN "fk_jogador",
ADD COLUMN     "fk_telefone" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "fk_jogadores_telefones" FOREIGN KEY ("fk_telefone") REFERENCES "telefones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
