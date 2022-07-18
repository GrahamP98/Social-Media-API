const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Social-Media-API', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;