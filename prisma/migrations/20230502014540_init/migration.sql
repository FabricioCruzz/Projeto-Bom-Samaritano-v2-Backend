-- DropForeignKey
ALTER TABLE "Dependents" DROP CONSTRAINT "Dependents_id_person_fkey";

-- AlterTable
ALTER TABLE "Dependents" ALTER COLUMN "id_person" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Dependents" ADD CONSTRAINT "Dependents_id_person_fkey" FOREIGN KEY ("id_person") REFERENCES "Reg_Person"("id_person") ON DELETE SET NULL ON UPDATE CASCADE;
