export async function Register(FullName, Email, Password) {
  const data = {
    fullName: FullName,
    email: Email,
    password: Password,
  };
  await fetch(`http://localhost:8088/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status == 201 && res.statusText == "Created") {
      return true;
    } else {
      return false;
    }
  });
}

export async function AddCatFunction(FullName, Gender, Breed, CoatColor, UsersId) {
  const data = {
    catName: FullName,
    gender: Gender,
    breed: Breed,
    coatColor: CoatColor,
    usersId: UsersId,
    vetInformationId: null,
    enabled: 1,
  };
  await fetch(`http://localhost:8088/cats`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status == 201 && res.statusText == "Created") {
      return true;
    } else {
      return false;
    }
  });
}

export async function AddVetVisitFunction(VisitConcern, VisitDate, VisitNotes, CatID) {
  const data = {
    visitConcern: VisitConcern,
    visitDate: VisitDate,
    visitNotes: VisitNotes,
    catsId: CatID,
  };
  await fetch(`http://localhost:8088/vetVisits`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status == 201 && res.statusText == "Created") {
      return true;
    } else {
      return false;
    }
  });
}

export async function AddShotFunction(Completed, TypeOfShot, DueDate, CatID) {
  const data = {
    completed: Completed,
    typeOfShot: TypeOfShot,
    dueDate: DueDate,
    catsId: CatID,
  };
  await fetch(`http://localhost:8088/shots`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status == 201 && res.statusText == "Created") {
      return true;
    } else {
      return false;
    }
  });
}

export async function AddVetFunction(VetName, VetAddress, VetPhoneNumber, VetFaxNumber, UserID) {
  const data = {
    vetName: VetName,
    vetAddress: VetAddress,
    vetPhoneNumber: VetPhoneNumber,
    vetFaxNumber: VetFaxNumber,
    userID: UserID,
  };
  await fetch(`http://localhost:8088/vetInformations`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status == 201 && res.statusText == "Created") {
      return true;
    } else {
      return false;
    }
  });
}

export async function GetNewVetFunction(UsersId, VetPhoneNumber) {
  var NewVet = [];
  await fetch(`http://localhost:8088/vetInformations?userID=${UsersId}`)
    .then((res) => res.json())
    .then((data) => {
      NewVet = data.filter((obj) => obj.vetPhoneNumber == VetPhoneNumber);
    });

  return NewVet;
}

export async function UpdateCatVetFunction(CatID, VetID) {
  await fetch(`http://localhost:8088/cats/${CatID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vetInformationId: VetID,
    }),
  });
}

export async function GetUpdatedVet(VetName, VetAddress, VetPhoneNumber, VetFaxNumber, UsersId, CatID) {
  var AddVet = await AddVetFunction(VetName, VetAddress, VetPhoneNumber, VetFaxNumber, UsersId);
  var GetNewVet = await GetNewVetFunction(UsersId, VetPhoneNumber);
  var UpdateCatVet = await UpdateCatVetFunction(CatID, GetNewVet[0].id);
  return console.log("Success!");
}

export async function GetMyCats(usersId) {
  var data = [];
  await fetch(`http://localhost:8088/cats?usersId=${usersId}&enabled=1`)
    .then((res) => res.json())
    .then((cats) => {
      data = cats;
    });

  return data;
}

export async function UserLogin(Email, Password) {
  var data = [];
  await fetch(`http://localhost:8088/users?email=${Email}`)
    .then((res) => res.json())
    .then((users) => {
      if (users.length < 1) {
        data = "No Such User";
      } else if (users.length === 1) {
        if (users[0].password === Password) {
          data = users[0];
        } else {
          data = "Incorrect credentials";
        }
      } else {
        data = "Failed";
      }
    });

  return data;
}

export async function DeleteCat(CatID) {
  var data = [];
  await fetch(`http://localhost:8088/cats/${CatID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      enabled: 0,
    }),
  })
    .then((res) => res.json())
    .then((cats) => {
      data = cats;
    });

  return data;
}

export async function DeleteVisitFunction(VisitID) {
  var data = [];
  await fetch(`http://localhost:8088/vetVisits/${VisitID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((cats) => {
      data = cats;
    });

  return data;
}

export async function DeleteShotFunction(ShotID) {
  var data = [];
  await fetch(`http://localhost:8088/shots/${ShotID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((cats) => {
      data = cats;
    });

  return data;
}

export async function GetVetInformation(VetID) {
  var data = [];
  await fetch(`http://localhost:8088/vetInformations?id=${VetID}`)
    .then((res) => res.json())
    .then((vets) => {
      data = vets;
    });

  return data;
}

export async function GetCats(CatID) {
  var data = [];
  await fetch(`http://localhost:8088/cats?id=${CatID}`)
    .then((res) => res.json())
    .then((cats) => {
      data = cats;
    });

  return data;
}

export async function GetVetVisits(CatID) {
  var data = [];
  await fetch(`http://localhost:8088/vetVisits?catsId=${CatID}`)
    .then((res) => res.json())
    .then((visits) => {
      data = visits;
    });

  return data;
}

export async function GetShots(CatID) {
  var data = [];
  await fetch(`http://localhost:8088/shots?catsId=${CatID}`)
    .then((res) => res.json())
    .then((shots) => {
      data = shots;
    });

  return data;
}

export async function GetCatDetails(CatId, VetID) {
  var vetInformation = await GetVetInformation(VetID);
  var vetVisits = await GetVetVisits(CatId);
  var shots = await GetShots(CatId);
  var catDetails = { vetInformation, vetVisits, shots };
  return catDetails;
}

export async function UpdateVetInfoFunction(VetID, VetName, VetAddress, VetPhoneNumber, VetFaxNumber) {
  await fetch(`http://localhost:8088/vetInformations/${VetID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vetName: VetName,
      vetAddress: VetAddress,
      vetPhoneNumber: VetPhoneNumber,
      vetFaxNumber: VetFaxNumber,
    }),
  });
}

export async function UpdateCat(CatID, CatName, Gender, Breed, CoatColor) {
  await fetch(`http://localhost:8088/cats/${CatID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      catName: CatName,
      gender: Gender,
      breed: Breed,
      coatColor: CoatColor,
    }),
  });
}
