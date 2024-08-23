import apartamento from "../models/apartamento.js"

class ApartamentoController {
    //GET
    static async listarApartamentos (req, res){
        try{
            const listaApartamentos = await apartamento.find({})
            res.status(200).json(listaApartamentos) 
        }catch{
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }

    static async listarApartamentoPorId (req, res){
        try{
            const id = req.params.id
            const apartamentoEncotrado = await apartamento.findById(id)
            res.status(200).json(apartamentoEncotrado)  
        }catch{
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }
    //POST
    static async cadastrarApartamento (req, res){
        try{
            const novoApartamento = await apartamento.create(req.body)
            res.status(201).json({message: "criado com sucesso", apartamento:novoApartamento})
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar`})
        }

    }
    //PUT
    static async atualizarApartamento (req, res){
        try{
            const id = req.params.id
            await apartamento.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Apartamento atualizado"})  
        }catch{
            res.status(500).json({message: `${erro.message} - falha na atualização`})
        }
    }
    //DELETE
    static async deletarApartamento (req, res){
        try{
            const id = req.params.id
            await apartamento.findByIdAndDelete(id)
            res.status(200).json({message: "Apartamento apagado"}) 
        }catch{
            res.status(500).json({message: `${erro.message} - falha ao deletar`})
        }
    }
    //BUSCAR POR PARAMETRO
    static async listarApartamentoPorBairro (req, res){
        const bairro = req.query.bairro
        try{
            const apartamentoPorBairro = await apartamento.find({bairro: bairro}) 
            res.status(200).json(apartamentoPorBairro)
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
    }
}

export default ApartamentoController