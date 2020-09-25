const { Schema, model } = require ("mongoose"); // Maneja la base de datos de mongodb
const bcrypt = require("bcryptjs"); // Es un modulo de cifrado, como las contraseñas

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Script, required: true },
}, {
    timestamps: true
}); 

UserSchema.methods.encrypPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

UserSchema.method.matchPassword = function(password) {
    return await bcrypt.compare(password, this.password)
};

module.exports = model("User", UserSchema)