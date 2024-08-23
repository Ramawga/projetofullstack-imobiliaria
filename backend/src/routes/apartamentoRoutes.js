import express from "express";
import ApartamentoController from "../controller/apartamentoController.js";

const routes = express.Router();

routes.get("/apartamentos", ApartamentoController.listarApartamentos);
routes.get("/apartamentos/busca", ApartamentoController.listarApartamentoPorBairro);
routes.get("/apartamentos/:id", ApartamentoController.listarApartamentoPorId);
routes.post("/apartamentos", ApartamentoController.cadastrarApartamento);
routes.put("/apartamentos/:id", ApartamentoController.atualizarApartamento);
routes.delete("/apartamentos/:id", ApartamentoController.deletarApartamento);

export default routes;