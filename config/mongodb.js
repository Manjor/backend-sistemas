const mongoose = require('mongoose')
mongoose.connect('mongodb://manjor:123456M@ds061631.mlab.com:61631/sistema-dist-db', { useNewUrlParser: true})
  .catch(e => {
      const msg = "Não foi possível conectar ao mongo DB"
      console.log('\x1b[41m%s\x1b[37m', msg,'\x1b[0m]')
  })

