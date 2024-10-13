-- CreateTable
CREATE TABLE "Corper" (
    "parent_id" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "state_code" TEXT NOT NULL,
    "state" TEXT,
    "ppa" TEXT,
    "phone_number" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Corper_pkey" PRIMARY KEY ("parent_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Corper_state_code_key" ON "Corper"("state_code");

-- CreateIndex
CREATE UNIQUE INDEX "Corper_phone_number_key" ON "Corper"("phone_number");
