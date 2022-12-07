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

export async function GetMyCats(usersId) {
  var data = [];
  await fetch(`http://localhost:8088/cats?usersId=${usersId}`)
    .then((res) => res.json())
    .then((cats) => {
      data = cats;
    });

  return data;
}

export async function DeleteCat(CatID) {
  var data = [];
  await fetch(`http://localhost:8088/cats?id=${CatID}`)
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
