/*
  Warnings:

  - You are about to drop the column `routineManagementPractices` on the `Crop` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Crop" DROP COLUMN "routineManagementPractices";

-- CreateTable
CREATE TABLE "RoutineManagementPractice" (
    "id" TEXT NOT NULL,
    "fertilizers" TEXT[],
    "weeding" TEXT[],
    "mulching" TEXT[],
    "pruning" TEXT[],
    "bananaStoolManagement" TEXT[],
    "cropId" TEXT NOT NULL,

    CONSTRAINT "RoutineManagementPractice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RoutineManagementPractice" ADD CONSTRAINT "RoutineManagementPractice_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
