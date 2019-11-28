const schedule = require('node-schedule')

module.exports = app =>{
  schedule.scheduleJob('*/1 * * * *', async function(){
      const userCount = await app.db('users').count('id').first()
      const lastInto = await app.db('users').select('id','name','email','pontos','compras').orderBy('id','desc')

      const { Stat } = app.api.stat

      const lastStat = await Stat.findOne({},{},
        {sort: {'createdAt' : -1 }})

      const stat = new Stat({
          users: userCount.count,
          lastInto: lastInto,
          createdAt: new Date()
      })

      const changeUsers = !lastStat  || stat.users !== lastStat.users
      if(changeUsers){
        stat.save().then(() => console.log('[Stats] Estatisticas Atualizadas!'))
      }
  })
}