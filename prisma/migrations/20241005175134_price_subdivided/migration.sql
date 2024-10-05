/*
  Warnings:

  - You are about to drop the column `price` on the `SubTourInfo` table. All the data in the column will be lost.
  - Added the required column `adultPrice` to the `SubTourInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `childPrice` to the `SubTourInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SubTourInfo_time_duration_price_idx";

-- AlterTable
ALTER TABLE "SubTourInfo" DROP COLUMN "price",
ADD COLUMN     "adultPrice" INTEGER NOT NULL,
ADD COLUMN     "childPrice" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "AddOns_subTourInfoId_idx" ON "AddOns"("subTourInfoId");

-- CreateIndex
CREATE INDEX "AdditionalInfo_subTourInfoId_idx" ON "AdditionalInfo"("subTourInfoId");

-- CreateIndex
CREATE INDEX "Highlight_subTourInfoId_idx" ON "Highlight"("subTourInfoId");

-- CreateIndex
CREATE INDEX "SubTourInfo_time_duration_adultPrice_subTourSlug_idx" ON "SubTourInfo"("time", "duration", "adultPrice", "subTourSlug");

-- CreateIndex
CREATE INDEX "WhatToExpect_subTourInfoId_idx" ON "WhatToExpect"("subTourInfoId");

-- CreateIndex
CREATE INDEX "WhatsIncluded_subTourInfoId_idx" ON "WhatsIncluded"("subTourInfoId");
