import mongoose from "mongoose";

const bairroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: {
    type: String,
    required: [true, "O bairro é obrigatório"],
    enum: {
      values: ["Centro", "Trindade","Lagoa da Conceição","Jurerê","Canasvieiras","Ingleses","Campeche","Itacorubi","Estreito"],
      message: "O baiiro {VALUE} não é um valor permitido."
    }
  },
  imgbairro: { type: String }
}, { versionKey: false });

const bairro = mongoose.model("bairros", bairroSchema);

export { bairro, bairroSchema };