/*
  Warnings:

  - Made the column `id_person` on table `Dependents` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Dependents" DROP CONSTRAINT "Dependents_id_person_fkey";

-- AlterTable
ALTER TABLE "Dependents" ALTER COLUMN "id_person" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Dependents" ADD CONSTRAINT "Dependents_id_person_fkey" FOREIGN KEY ("id_person") REFERENCES "Reg_Person"("id_person") ON DELETE RESTRICT ON UPDATE CASCADE;
