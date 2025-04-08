
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const mongoURI = 'mongodb+srv://nikhilanand2001bam:wAPoiXYXfW2uou5N@cluster0.jtrcpad.mongodb.net/pin?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: {
    type: String,
    default: 'default.jpg'
  },
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "post"
  }]
});

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);

