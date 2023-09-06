const res = require('express/lib/response');
const mongoose = require('mongoose')
const folhaSalarial = mongoose.model('folhaSalarial')

exports.getAll = async()=>{
    const result = await folhaSalarial.find({ativo:true});
    return result;
}

exports.create = async(data) => {
    let folhaSalarial = folhaSalarial(data);
    await folhaSalarial.save();
}

exports.delete = async(codigoPessoa) => {
    await folhaSalarial.findByIdAndUpdate(codigoPessoa, {
        $set:
        {
            ativo:false
        }
    })
}

exports.getById = async(codigoPessoa) => {
    const result = await folhaSalarial.findOne({_codigoPessoa: codigoPessoa},
        "_codigoPessoa salario data codigoDepatamento"
    );

    return result;
}

exports.update = async(codigoPessoa, data) =>{
    await folhaSalarial.findByIdAndUpdate(codigoPessoa,
        {
            $set:{
                codigoPessoa: data.codigoPessoa,
                salario: data.salario,
                data: data.data,
                codigoDepatamento: data.codigoDepatamento,
            }
        })
}