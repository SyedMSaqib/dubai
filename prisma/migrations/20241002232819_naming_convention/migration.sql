/*
  Warnings:

  - You are about to drop the column `dateTime` on the `SubTourInfo` table. All the data in the column will be lost.
  - You are about to drop the column `SubTourInfoId` on the `SubToursRating` table. All the data in the column will be lost.
  - You are about to drop the `Highlights` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price` to the `SubTourInfo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `time` on the `SubTourInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Highlights" DROP CONSTRAINT "Highlights_subTourInfoId_fkey";

-- DropForeignKey
ALTER TABLE "SubToursRating" DROP CONSTRAINT "SubToursRating_SubTourInfoId_fkey";

-- AlterTable
ALTER TABLE "SubTourInfo" DROP COLUMN "dateTime",
ADD COLUMN     "price" INTEGER NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SubToursRating" DROP COLUMN "SubTourInfoId",
ADD COLUMN     "subTourInfoId" TEXT;

-- DropTable
DROP TABLE "Highlights";

-- CreateTable
CREATE TABLE "Highlight" (
    "id" TEXT NOT NULL,
    "highlight" TEXT NOT NULL,
    "subTourInfoId" TEXT,

    CONSTRAINT "Highlight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SubTourInfo_time_duration_price_idx" ON "SubTourInfo"("time", "duration", "price");

-- AddForeignKey
ALTER TABLE "SubToursRating" ADD CONSTRAINT "SubToursRating_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_subTourInfoId_fkey" FOREIGN KEY ("subTourInfoId") REFERENCES "SubTourInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
