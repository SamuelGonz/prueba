const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("TODO PERFECTO");
});

app.listen(3000, () => console.log("APP CORRIENDO EN EL PUERTO 3000"));
