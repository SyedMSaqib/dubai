/*
  Warnings:

  - You are about to drop the `SubTourImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TourImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SubTourImage" DROP CONSTRAINT "SubTourImage_subTourId_fkey";

-- DropForeignKey
ALTER TABLE "TourImage" DROP CONSTRAINT "TourImage_tourId_fkey";

-- DropTable
DROP TABLE "SubTourImage";

-- DropTable
DROP TABLE "TourImage";

-- CreateTable
CREATE TABLE "TourImages" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "altText" TEXT,
    "tourId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTourImages" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "altText" TEXT,
    "subTourId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SubTourImages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TourImages_tourId_key" ON "TourImages"("tourId");

-- AddForeignKey
ALTER TABLE "TourImages" ADD CONSTRAINT "TourImages_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTourImages" ADD CONSTRAINT "SubTourImages_subTourId_fkey" FOREIGN KEY ("subTourId") REFERENCES "SubTours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
