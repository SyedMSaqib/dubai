/*
  Warnings:

  - Added the required column `subTourId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "subTourId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_subTourId_fkey" FOREIGN KEY ("subTourId") REFERENCES "SubTours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
