const mongoose = require('mongoose')


const connectDB = (url) => {
  const dbURL = url || process.env.MONGO_URI
  if (!dbURL) {
    throw new Error('MongoDB connection string is missing. Set MONGO_URI in your .env file or pass it as an argument to connectDB().')
  }

  return mongoose
    .connect(dbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err)
      throw err
    })
}

module.exports = connectDB
