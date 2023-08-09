-- CreateTable
CREATE TABLE "Contractor" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "availablity" BOOLEAN NOT NULL DEFAULT false,
    "day_rate" INTEGER NOT NULL,
    "specialities" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contractor_pkey" PRIMARY KEY ("id")
);
