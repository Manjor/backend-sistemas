module.exports = app =>{

    const save = async (req, res) =>{
        const user = { ...req.body}
        
        app.db('users')
            .insert(user)
            .then(_=> res.status(204).send())
            .catch(err => res.status(500).send(err))
        
    }

    const get = (req,res) =>{
        app.db('users')
            .select('id','name','email','pontos','compras')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req,res) =>{
        app.db('users')
            .select('id','name','email','pontos','compras')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    const compra = (req,res) =>{
        const compras = req.body.compra
        const pontos = req.body.pontos
        
        app.db('users')
        .select('id','name','email','pontos','compras')
        .where({ id: req.params.id })
        .first()
        .then(user => {
            
            user.pontos = parseInt(user.pontos) + req.body.pontos
            user.compras = parseInt(user.compras) + req.body.pontos

            app.db('users')
                .update(user)
                .where({ id : user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
                
        }).catch(err => res.status(500).send(err))
    }

    return { save, get, getById, compra }
}