userDB = [
  {
    id: 1,
    title: "",
    description: "",
  },
];
/*body del arreglo userDB
{
  id:1,
  name:"",
  age:20,
  email:"",
  country:"",
  phone:""
}
*/

//variable para llamar a todos mis usuarios
const getAllUsers = () => {
  return userDB;
};

//variable para filtrarlos/encontarlos por id especifico
const getUserById = (id) => {
  const filterDB = userDB.filter((user) => user.id === id);
  return filterDB[0];
};

//variable para crear usuario
const createUser = (userObj) => {
  if (userDB.length === 0) {
    const newUser = {
      id: 1,
      title: userObj.title,
      description: userObj.description,
    };
    userDB.push(newUser);
    return newUser;
  }
  const newUser = {
    id: userDB[userDB.length - 1].id + 1,
    title: userObj.title,
    description: userObj.description,
  };
  userDB.push(newUser);
  return newUser;
};

//variable para eliminar un usuario
const deleteUser = (id) => {
  // const id = req.params.id
  const index = userDB.findIndex((item) => item.id === id);
  if (index) {
    userDB.splice(index, 1);
    return true;
  }
    return false;
}

//variable para actualizar un usuario.
const editUser = (id, data) => {
  const index = userDB.findIndex((item) => item.id === id);
  if (index !== -1) {
    userDB[index] = data;
    return userDB[index];
  } else {
    createUser(data);
    return userDB.at(-1);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  editUser,
};
