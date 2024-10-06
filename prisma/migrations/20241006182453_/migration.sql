/*
  Warnings:

  - You are about to drop the column `sharedPrice` on the `SubTourInfo` table. All the data in the column will be lost.
  - Changed the type of `transportType` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "transportType" AS ENUM ('private', 'shared');

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "transportType",
ADD COLUMN     "transportType" "transportType" NOT NULL;

-- AlterTable
ALTER TABLE "SubTourInfo" DROP COLUMN "sharedPrice";
