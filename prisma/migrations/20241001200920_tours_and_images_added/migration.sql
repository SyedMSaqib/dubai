/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Tours" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourImage" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,

    CONSTRAINT "TourImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTours" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tourId" TEXT NOT NULL,

    CONSTRAINT "SubTours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTourImage" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "subTourId" TEXT NOT NULL,

    CONSTRAINT "SubTourImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TourImage_tourId_key" ON "TourImage"("tourId");

-- AddForeignKey
ALTER TABLE "TourImage" ADD CONSTRAINT "TourImage_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTours" ADD CONSTRAINT "SubTours_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTourImage" ADD CONSTRAINT "SubTourImage_subTourId_fkey" FOREIGN KEY ("subTourId") REFERENCES "SubTours"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
