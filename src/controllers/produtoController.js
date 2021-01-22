const ProdutoModel = require('../models/Produto')

exports.list = async (req, res) => {
        try {
            const produtos = await ProdutoModel.findAll()
            return res.render('admin/produto/list.ejs', {'Produtos':produtos, 'mag': req.flash('msg')})
        } catch (error) {
            req.flash('msg', "Problema ao adicionar o produto")
        }
}

exports.filtro = async (req, res) => {
    let query = `%${req.body.filtro}%`
    const produtos = await ProdutoModel.findAll({
        where:{
            nome: {
                [Op.like]: query
            }
        }
    })
    return res.render('admin/produto/list.ejs', {'Produtos':produtos, 'mag': req.flash('msg')})

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