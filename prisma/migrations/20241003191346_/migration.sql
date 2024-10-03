-- DropForeignKey
ALTER TABLE "SubToursRating" DROP CONSTRAINT "SubToursRating_subTourInfoId_fkey";

-- AlterTable
ALTER TABLE "SubToursRating" ADD COLUMN     "subToursId" TEXT;

-- CreateIndex
CREATE INDEX "SubTours_slug_idx" ON "SubTours"("slug");

-- AddForeignKey
ALTER TABLE "SubToursRating" ADD CONSTRAINT "SubToursRating_subToursId_fkey" FOREIGN KEY ("subToursId") REFERENCES "SubTours"("id") ON DELETE SET NULL ON UPDATE CASCADE;
