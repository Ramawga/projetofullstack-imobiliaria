import express from "express"
import apartamentos from "./apartamentoRoutes.js"

const routes= (app) =>{
 app.route("/").get((req, res) => res.status(200).send("imobiliaria"))

 app.use(express.json(), apartamentos)                                             
}

export default routes