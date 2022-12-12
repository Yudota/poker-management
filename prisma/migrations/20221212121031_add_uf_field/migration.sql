/*
  Warnings:

  - Added the required column `uf` to the `estados` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "estados" ADD COLUMN     "uf" VARCHAR(2) NOT NULL;
