
const dbUsername = "ismart"
const dbPassword = "cheppanu7"
const URL = `mongodb://${dbUsername}:${dbPassword}@ds241298.mlab.com:41298/ismat-split`

module.exports  ={
    port : 3000,
    url : URL,
    saltPassword: 10
}