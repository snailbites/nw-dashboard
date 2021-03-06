var nconf = require('nconf')

// config
nconf.argv()
     .env()
     .file({ file: './config.json' })

// modules
var weather = require('./modules/weather')
,   clock   = require('./modules/clock')
,   todos   = require('./modules/todos')

// export app
module.exports = {
  init : function () {
    weather(nconf.get('WUNDERGROUND_API_KEY'))
    todos(nconf.get('TODO_SERVER_URL'))
    clock()
  }
}
