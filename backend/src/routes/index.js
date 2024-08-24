import express from "express"
import apartamentos from "./apartamentoRoutes.js"

const routes= (app) =>{
 app.use(express.json(), apartamentos)                                             
}

export default routes