const store = require('./store');

function addUser(userID, name, vehiculoId, cel, email) {
  if (!userID) {
    return Promise.reject('Invalid ID');
  }

  const user = {
    userID,
    name,
    vehiculoId,
    cel,
    email
  };
  return store.add(user);
}

function listUsers() {
  return store.list();
}

function getUserByID(filterBici) {
  return new Promise((resolve, reject) => {
      resolve(store.getByID(filterBici));
  });
}

function updateUser(id, userID, name, vehiculoId, cel, email){
  return new Promise(async (resolve, reject) => {
    if(!userID){
      reject("Invalid parameters");
      return false;
    }
    const user={
      userID,
      name,
      vehiculoId,
      cel,
      email
    }
    const result = await store.update(id, user);
    resolve(result);
  })
}

function deletUserByID(id) {
  return new Promise((resolve, reject) => {
      if (!id) {
          reject('Invalid Id');
          return false;
      }
      store.deleteUser(id)
          .then(() => {
              resolve();
          })
          .catch(e => {
              reject(e);
          })
  });
}


module.exports = {
  addUser,
  listUsers,
  updateUser,
  deletUserByID,
  getUserByID
}