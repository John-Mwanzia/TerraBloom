-- CreateTable
CREATE TABLE "Crop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "introduction" TEXT NOT NULL,
    "ecologicalRequirements" TEXT NOT NULL,
    "varieties" TEXT NOT NULL,
    "landPreparation" TEXT NOT NULL,
    "establishment" TEXT[],
    "establishmentImg" TEXT NOT NULL,
    "routineManagementPractices" TEXT[],
    "pestsAndDiseases" TEXT NOT NULL,
    "maturity" TEXT NOT NULL,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Crop_name_key" ON "Crop"("name");
