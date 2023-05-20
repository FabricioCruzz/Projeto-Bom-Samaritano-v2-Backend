-- CreateTable
CREATE TABLE "Reg_Person" (
    "id_person" SERIAL NOT NULL,
    "completeName" VARCHAR(100) NOT NULL,
    "street" VARCHAR(150) NOT NULL,
    "houseNumber" VARCHAR(20) NOT NULL,
    "district" VARCHAR(50) NOT NULL,
    "addressComplement" VARCHAR(50) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "phone1" VARCHAR(14) NOT NULL,
    "phone2" VARCHAR(14),
    "birthDate" TIMESTAMP(3) NOT NULL,
    "maritalStatus" VARCHAR(20) NOT NULL,
    "schoolLevel" VARCHAR(40) NOT NULL,
    "occupation" VARCHAR(50) NOT NULL,
    "isWorking" CHAR(3) NOT NULL,
    "srcIncome" VARCHAR(30) NOT NULL,
    "numberOfResidents" INTEGER NOT NULL,
    "familyIncome" DECIMAL(7,2) NOT NULL,
    "housingSituation" VARCHAR(20) NOT NULL,
    "appliances" VARCHAR(70)[],
    "needBlankets" CHAR(3) NOT NULL,
    "needShoes_answer" CHAR(3) NOT NULL,
    "needShoes_number" INTEGER,
    "needClothes_answer" CHAR(3) NOT NULL,
    "needClothes_pantsNumber" INTEGER,
    "needClothes_tShirtCoatSize" CHAR(2),
    "needDiapers_answer" CHAR(3) NOT NULL,
    "needDiapers_size" CHAR(2) NOT NULL,
    "specialNeed" VARCHAR(200) NOT NULL,
    "workshop" VARCHAR(50)[],
    "religion" VARCHAR(30) NOT NULL,
    "receivedSacraments" VARCHAR(100)[],
    "wishReceiveSacraments" VARCHAR(100)[],
    "attendanceMass" VARCHAR(70) NOT NULL,
    "churchActivity" VARCHAR(100)[],
    "memberPastoralsMovements_answer" CHAR(3) NOT NULL,
    "memberPastoralsMovements_which" VARCHAR(40),

    CONSTRAINT "Reg_Person_pkey" PRIMARY KEY ("id_person")
);

-- CreateTable
CREATE TABLE "Dependents" (
    "id_dep" SERIAL NOT NULL,
    "completeName" VARCHAR(100) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "relationship" VARCHAR(20) NOT NULL,
    "schoolLevel" VARCHAR(40) NOT NULL,
    "occupation" VARCHAR(50) NOT NULL,
    "isWorking" CHAR(3) NOT NULL,
    "needShoes_answer" CHAR(3) NOT NULL,
    "needShoes_number" INTEGER,
    "needClothes_answer" CHAR(3) NOT NULL,
    "needClothes_pantsNumber" INTEGER,
    "needClothes_tShirtCoatSize" CHAR(2),
    "workshop" VARCHAR(50)[],
    "religion" VARCHAR(30) NOT NULL,
    "receivedSacraments" VARCHAR(100)[],
    "wishReceiveSacraments" VARCHAR(100)[],
    "attendanceMass" VARCHAR(70) NOT NULL,
    "churchActivity" VARCHAR(100)[],
    "memberPastoralsMovements_answer" CHAR(3) NOT NULL,
    "memberPastoralsMovements_which" VARCHAR(40),
    "id_person" INTEGER NOT NULL,

    CONSTRAINT "Dependents_pkey" PRIMARY KEY ("id_dep")
);

-- CreateTable
CREATE TABLE "ProductStock" (
    "id_product" SERIAL NOT NULL,
    "product" VARCHAR(100) NOT NULL,
    "productType" CHAR(5) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "ProductStock_pkey" PRIMARY KEY ("id_product")
);

-- AddForeignKey
ALTER TABLE "Dependents" ADD CONSTRAINT "Dependents_id_person_fkey" FOREIGN KEY ("id_person") REFERENCES "Reg_Person"("id_person") ON DELETE RESTRICT ON UPDATE CASCADE;
