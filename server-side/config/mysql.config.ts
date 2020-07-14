const devConfig = {
  host: 'localhost',
  database: 'liu',
  user: 'root',
  password: ''
}

const prodConfig = {
  host: 'xxx',
  database: 'xxx',
  user: 'xxx',
  password: 'xxx'
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : prodConfig
