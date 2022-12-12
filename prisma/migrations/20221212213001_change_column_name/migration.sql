/*
  Warnings:

  - You are about to drop the column `descricao` on the `cidades` table. All the data in the column will be lost.
  - Added the required column `nomeCidade` to the `cidades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cidades" DROP COLUMN "descricao",
ADD COLUMN     "nomeCidade" VARCHAR(255) NOT NULL;
