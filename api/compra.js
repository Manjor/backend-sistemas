module.exports = app =>{

  const save = async (req, res) =>{
      const compra = { ...req.body}
      
      app.db('compras')
          .insert(user)
          .then(_=> res.status(204).send())
          .catch(err => res.status(500).send(err))
      
  }

  const get = (req,res) =>{
      app.db('compras')
          .select('id','resumo','valorFinal','pontos','userId')
          .then(compras => res.json(compras))
          .catch(err => res.status(500).send(err))
  }

  const getById = (req,res) =>{
      app.db('compras')
          .select('id','resumo','valorFinal','pontos','userId')
          .where({ id: req.params.id })
          .first()
          .then(compra => res.json(compra))
          .catch(err => res.status(500).send(err))
  }

  return { save, get, getById }
}