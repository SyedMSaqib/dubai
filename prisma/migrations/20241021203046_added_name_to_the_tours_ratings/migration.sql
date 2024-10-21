/*
  Warnings:

  - Added the required column `name` to the `SubToursRating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubToursRating" ADD COLUMN     "name" TEXT NOT NULL;
