import connectDB from './Configure/db.js';
import User from './Models/User.js';

const testSave = async () => {
  await connectDB();
  const user = new User({
    Email: "test@example.com",
    Password: "123456"
  });
  const savedUser = await user.save();
  console.log("Saved user:", savedUser);
  process.exit();
};

testSave();
