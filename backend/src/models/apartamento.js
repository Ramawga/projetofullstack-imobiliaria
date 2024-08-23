import mongoose from "mongoose";
import { bairroSchema } from "./bairro.js";

const apartamentoSchema = new mongoose.Schema ({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: { type:String, required:true },
    descricao: { type:String },
    imgprincipal: { type:String },
    imgslide1: { type:String },
    imgslide2: { type:String },
    imgslide3: { type:String },
    imgslide4: { type:String },
    imgslide5: { type:String },
    quartos: { type:Number },
    vagas: { type:Number },
    bairro: bairroSchema
}, { versionKey:false });

const apartamento = mongoose.model("Apartamentos", apartamentoSchema)
export default apartamento