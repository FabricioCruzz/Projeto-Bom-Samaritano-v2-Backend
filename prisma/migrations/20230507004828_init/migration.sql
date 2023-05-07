-- DropForeignKey
ALTER TABLE "Dependents" DROP CONSTRAINT "Dependents_id_person_fkey";

-- AddForeignKey
ALTER TABLE "Dependents" ADD CONSTRAINT "Dependents_id_person_fkey" FOREIGN KEY ("id_person") REFERENCES "Reg_Person"("id_person") ON DELETE CASCADE ON UPDATE CASCADE;
