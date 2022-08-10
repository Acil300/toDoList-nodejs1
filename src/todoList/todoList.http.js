const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
  editUser,
} = require("../todoList/todoList.controllers");

const getAll = (req, res) => {
  const data = getAllUsers();
  res.status(200).json(data);
};

const getById = (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    const data = getUserById(id);
    if (data.id) {
      res.status(200).json(data);
    } else {
      res.status(400).json({ mesagge: "ID is not found" });
    }
  } else {
    res.status(400).json({ mesagge: "ID is not Number" });
  }
};
const getByDelete = (req, res) => {
  const id = Number(req.params.id);
  if (typeof id === "number") {
    const deleted = deleteUser(id);
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(400).json({ mesagge: "Try with another ID" });
    }
  } else {
    res.status(400).json({ mesagge: "Invalid ID" });
  }
};
const getByCreate = (req, res) => {
  const data = req.body;
  if (data.title && data.description) {
    const response = createUser(data);
    res.status(201).json(response);
  } else {
    res.status(400).json({ mesagge: "Invalid Create New Work" });
  }
};
const getByUpdate = (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  if (data.title && data.description) {
    const response = editUser(id, data);
    res.status(201).json(response);
  } else {
    res.status(400).json({ mesagge: "Invalid edit work" });
  }
};

module.exports = {
  getAll,
  getById,
  getByDelete,
  getByCreate,
  getByUpdate,
};
