/*
  Warnings:

  - Added the required column `name` to the `SubTours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `SubTours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Tours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubTours" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tours" ADD COLUMN     "thumbnail" TEXT NOT NULL;
