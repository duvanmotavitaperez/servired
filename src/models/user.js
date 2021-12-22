const db = require('mongoose')
const bcrypt = require('bcryptjs')
const {Schema} = db

const Register = new Schema({
    name: {type: String, required: true},
    email:{type: String, required: true}, 
    number:{type: String, required: true},
    city: {type: String, required: true}, 
    lastname: {type: String, required: true},
    departament: {type: String, required: true},
    direction: {type: String, required: true}, 
    username: {type: String, required: true},
    userpass: {type: String, required: true},
})
Register.methods.encryptPassword = async (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}
Register.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.userpass)
}

module.exports = db.model('Users', Register)