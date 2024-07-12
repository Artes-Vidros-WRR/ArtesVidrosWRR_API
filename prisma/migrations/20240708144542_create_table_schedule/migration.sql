-- CreateTable
CREATE TABLE "Schedule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "date" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Schedule_id_key" ON "Schedule"("id");
