/*
  Warnings:

  - You are about to drop the `_AddOnsToBookingAddonWithQuantity` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `addOnsId` to the `BookingAddonWithQuantity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addonId` to the `BookingAddonWithQuantity` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_AddOnsToBookingAddonWithQuantity" DROP CONSTRAINT "_AddOnsToBookingAddonWithQuantity_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddOnsToBookingAddonWithQuantity" DROP CONSTRAINT "_AddOnsToBookingAddonWithQuantity_B_fkey";

-- AlterTable
ALTER TABLE "BookingAddonWithQuantity" ADD COLUMN     "addOnsId" TEXT NOT NULL,
ADD COLUMN     "addonId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_AddOnsToBookingAddonWithQuantity";
