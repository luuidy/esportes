const ProdutoModel = require('../models/Produto')

exports.list = async (req, res) => {

}

exports.filtro = async (req, res) => {
    
}

exports.abreAdd = async (req, res) => {
    res.render('admin/produto/add.ejs', {msg: req.flash('msg')})
}

exports.add = async (req, res) => {
    const {nome, valor, tipo} = req. body;
    try {
        const produto = await ProdutoModel.create({ nome, valor, tipo})
        req.flash('msg', `${produto.nome} foi adicionado com sucesso!`);
        req.redirect('/admin/produt/add');
    } catch (error) {
        req.flash('msg', "Problema ao adicionar o produto")
         res.redirect('/admin/produto/add')
    }
    
}

exports.abreEdit = async (req, res) => {
    
}

exports.edit = async (req, res) => {
    
}

exports.del = async (req, res) => {
    
}