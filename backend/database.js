const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to Mongodb");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;