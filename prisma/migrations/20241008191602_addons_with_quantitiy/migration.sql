/*
  Warnings:

  - You are about to drop the column `addOns` on the `Booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "addOns";

-- CreateTable
CREATE TABLE "BookingAddonWithQuantity" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "bookingId" TEXT,

    CONSTRAINT "BookingAddonWithQuantity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AddOnsToBookingAddonWithQuantity" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AddOnsToBookingAddonWithQuantity_AB_unique" ON "_AddOnsToBookingAddonWithQuantity"("A", "B");

-- CreateIndex
CREATE INDEX "_AddOnsToBookingAddonWithQuantity_B_index" ON "_AddOnsToBookingAddonWithQuantity"("B");

-- AddForeignKey
ALTER TABLE "BookingAddonWithQuantity" ADD CONSTRAINT "BookingAddonWithQuantity_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddOnsToBookingAddonWithQuantity" ADD CONSTRAINT "_AddOnsToBookingAddonWithQuantity_A_fkey" FOREIGN KEY ("A") REFERENCES "AddOns"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddOnsToBookingAddonWithQuantity" ADD CONSTRAINT "_AddOnsToBookingAddonWithQuantity_B_fkey" FOREIGN KEY ("B") REFERENCES "BookingAddonWithQuantity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
