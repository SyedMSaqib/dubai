/*
  Warnings:

  - Added the required column `privatePrice` to the `SubTourInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sharedPrice` to the `SubTourInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubTourInfo" ADD COLUMN     "privatePrice" INTEGER NOT NULL,
ADD COLUMN     "sharedPrice" INTEGER NOT NULL;
