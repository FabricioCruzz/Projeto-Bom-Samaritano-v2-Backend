const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// TODO: TESTAR
const create = async (registerData) => {
  // console.log(registerData);

  const {
    completeName,
    street,
    houseNumber,
    district,
    addressComplement,
    city,
    phone1,
    phone2,
    birthDate,
    maritalStatus,
    schoolLevel,
    occupation,
    isWorking,
    srcIncome,
    numberOfResidents,
    familyIncome,
    housingSituation,
    appliances,
    needBlankets,
    needShoes_answer,
    needShoes_number,
    needClothes_answer,
    needClothes_pantsNumber,
    needClothes_tShirtCoatSize,
    needDiapers_answer,
    needDiapers_size,
    specialNeed,
    workshop,
    religion,
    receivedSacraments,
    wishReceiveSacraments,
    attendanceMass,
    churchActivity,
    memberPastoralsMovements_answer,
    memberPastoralsMovements_which,
    dependents,
  } = registerData;

  const birthDateFormatted = toDate(birthDate);

  await prisma.reg_Person.create({
    data: {
      completeName: completeName,
      street: street,
      houseNumber: houseNumber,
      district: district,
      addressComplement: addressComplement,
      city: city,
      phone1: phone1,
      phone2: phone2,
      birthDate: birthDateFormatted,
      maritalStatus: maritalStatus,
      schoolLevel: schoolLevel,
      occupation: occupation,
      isWorking: isWorking,
      srcIncome: srcIncome,
      numberOfResidents: numberOfResidents,
      familyIncome: familyIncome,
      housingSituation: housingSituation,
      appliances: appliances,
      needBlankets: needBlankets,
      needShoes_answer: needShoes_answer,
      needShoes_number: needShoes_number,
      needClothes_answer: needClothes_answer,
      needClothes_pantsNumber: needClothes_pantsNumber,
      needClothes_tShirtCoatSize: needClothes_tShirtCoatSize,
      needDiapers_answer: needDiapers_answer,
      needDiapers_size: needDiapers_size,
      specialNeed: specialNeed,
      workshop: workshop,
      religion: religion,
      receivedSacraments: receivedSacraments,
      wishReceiveSacraments: wishReceiveSacraments,
      attendanceMass: attendanceMass,
      churchActivity: churchActivity,
      memberPastoralsMovements_answer: memberPastoralsMovements_answer,
      memberPastoralsMovements_which: memberPastoralsMovements_which,
      dependents: {
        create: dependents.map((dep) => ({
          completeName: dep.completeName,
          birthDate: toDate(dep.birthDate),
          relationship: dep.relationship,
          schoolLevel: dep.schoolLevel,
          occupation: dep.occupation,
          isWorking: dep.isWorking,
          needShoes_answer: dep.needShoes_answer,
          needShoes_number: dep.needShoes_number,
          needClothes_answer: dep.needClothes_answer,
          needClothes_pantsNumber: dep.needClothes_pantsNumber,
          needClothes_tShirtCoatSize: dep.needClothes_tShirtCoatSize,
          workshop: dep.workshop,
          religion: dep.religion,
          receivedSacraments: dep.receivedSacraments,
          wishReceiveSacraments: dep.wishReceiveSacraments,
          attendanceMass: dep.attendanceMass,
          churchActivity: dep.churchActivity,
          memberPastoralsMovements_answer: dep.memberPastoralsMovements_answer,
          memberPastoralsMovements_which: dep.memberPastoralsMovements_which,
        })),
      },
    },
    include: {
      dependents: true,
    },
  });
};

const getAllRegisters = async () => {
  return await prisma.reg_Person.findMany({
    include: {
      dependents: true,
    },
  });
};

const getRegisterById = async (registerId) => {
  return await prisma.reg_Person.findUnique({
    where: {
      id_person: registerId,
    },
  });
};

const update = async (req, res) => {};

const remove = async (registerId) => {
  const dependents = await prisma.reg_Person.findMany({
    where: {
      id_person: registerId,
    },
  });

  if (dependents.length > 0) {
    await prisma.reg_Person.deleteMany({
      where: {
        id_person: registerId,
      },
    });
  } else {
    await prisma.reg_Person.delete({
      where: {
        id_person: registerId,
      },
    });
  }
};

const toDate = (dateStr) => {
  const [dd, mm, yyyy] = dateStr.split("/");
  return new Date(`${mm}/${dd}/${yyyy}`);
};

module.exports = {
  create,
  getAllRegisters,
  getRegisterById,
  update,
  remove,
};
