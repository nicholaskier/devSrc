const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema

const SALT_ROUNDS = 6;

const flashCardSchema = new Schema({
  frontSide: String,
  backSide: String,
  tag: String
}, {timestamps:true})

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, lowercase: true, unique: true},
  password: String,
  avatar: {type: String, default: ''},
  github: String,
  linkedIn: String,
  website: String,
  savedItems: [{ type: Schema.Types.ObjectId, ref: 'Resource'}],
  flashCards: [flashCardSchema]
}, {
  timestamps: true
});


userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model('User', userSchema);