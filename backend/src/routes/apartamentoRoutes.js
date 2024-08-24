import express from "express";
import ApartamentoController from "../controller/apartamentoController.js";
import upload from "../config/multerConfig.js"; // Importando a configuração do multer

const routes = express.Router();

routes.get("/apartamentos", ApartamentoController.listarApartamentos);
routes.get("/apartamentos/busca", ApartamentoController.listarApartamentoPorBairro);
routes.get("/apartamentos/:id", ApartamentoController.listarApartamentoPorId);
// Adicionando o middleware do multer para o upload de imagens na rota de cadastro
routes.post("/apartamentos", 
    upload.fields([
        { name: 'imgmprincipal', maxCount: 1 },
        { name: 'imgslide1', maxCount: 1 },
        { name: 'imgslide2', maxCount: 1 },
        { name: 'imgslide3', maxCount: 1 },
        { name: 'imgslide4', maxCount: 1 },
        { name: 'imgslide5', maxCount: 1 }
    ]), 
    ApartamentoController.cadastrarApartamento
)
routes.put("/apartamentos/:id", ApartamentoController.atualizarApartamento);
routes.delete("/apartamentos/:id", ApartamentoController.deletarApartamento);

export default routes;