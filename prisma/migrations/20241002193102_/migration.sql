/*
  Warnings:

  - You are about to drop the column `name` on the `SubTours` table. All the data in the column will be lost.
  - You are about to drop the column `tourId` on the `SubTours` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `SubTours` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Tours` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `SubTours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tourSlug` to the `SubTours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Tours` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubTours" DROP CONSTRAINT "SubTours_tourId_fkey";

-- AlterTable
ALTER TABLE "SubTours" DROP COLUMN "name",
DROP COLUMN "tourId",
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "tourSlug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tours" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "SubToursRating" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "SubTourInfoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubToursRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTourInfo" (
    "id" TEXT NOT NULL,
    "subTourSlug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "SubTourInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Highlights" (
    "id" TEXT NOT NULL,
    "highlight" TEXT NOT NULL,
    "subTourInfoId" TEXT,

    CONSTRAINT "Highlights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatsIncluded" (
    "id" TEXT NOT NULL,
    "included" TEXT NOT NULL,
    "subTourInfoId" TEXT NOT NULL,

    CONSTRAINT "WhatsIncluded_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WhatToExpect" (
    "id" TEXT NOT NULL,
    "expectation" TEXT NOT NULL,
    "subTourInfoId" TEXT NOT NULL,

    CONSTRAINT "WhatToExpect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalInfo" (
    "id" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "subTourInfoId" TEXT NOT NULL,

    CONSTRAINT "AdditionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddOns" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "subTourInfoId" TEXT NOT NULL,

    CONSTRAINT "AddOns_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "adults" INTEGER NOT NULL,
    "child" INTEGER NOT NULL,
    "transportType" TEXT NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "addOns" TEXT[],
    "bookingUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingUser" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "whatsApp" TEXT,
    "pickUpPoint" TEXT NOT NULL,
    "room" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "BookingUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SubToursRating_rating_idx" ON "SubToursRating"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "SubTourInfo_subTourSlug_key" ON "SubTourInfo"("subTourSlug");

-- CreateIndex
CREATE UNIQUE INDEX "WhatToExpect_subTourInfoId_key" ON "WhatToExpect"("subTourInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_bookingUserId_key" ON "Booking"("bookingUserId");

-- CreateIndex
CREATE UNIQUE INDEX "SubTours_slug_key" ON "SubTours"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Tours_slug_key" ON "Tours"("slug");

-- AddForeignKey
ALTER TABLE "SubTours" ADD CONSTRAINT "SubTours_tourSlug_fkey" FOREIGN KEY ("tourSlug") REFERENCES "Tours"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubToursRating" ADD CONSTRAINT "SubToursRating_SubTourInfoId_fkey" FOREIGN KEY ("SubTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTourInfo" ADD CONSTRAINT "SubTourInfo_subTourSlug_fkey" FOREIGN KEY ("subTourSlug") REFERENCES "SubTours"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Highlights" ADD CONSTRAINT "Highlights_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatsIncluded" ADD CONSTRAINT "WhatsIncluded_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WhatToExpect" ADD CONSTRAINT "WhatToExpect_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalInfo" ADD CONSTRAINT "AdditionalInfo_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddOns" ADD CONSTRAINT "AddOns_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_bookingUserId_fkey" FOREIGN KEY ("bookingUserId") REFERENCES "BookingUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
