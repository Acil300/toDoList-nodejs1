//variables para inicializar proyectos en NODEJS

const express = require("express");
const app = express();
app.use(express.json());

// variable para mandar a llamar variables de rutas

const useRouter = require("./todoList/todoList.routes").router;

//ESTRUCTURA DEL PROYECTO (METODOLOGIA MVC(VISTA-CONTROLADOR))

//Traer todos los usuarios y traer filtrado el usuario por id
app.use("/api/v1", useRouter);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
