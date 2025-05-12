import User from "../models/userModel.js";

export const getUsers = async () => {
  let users = await User.find({}, { password: 0 });
  return users.map((user) => {
    const userObj = user.toObject();
    delete userObj.password;
    return userObj;
  });
};

export const getUserById = async (id) => {
  return await User.findById(id);
};

export const createUser = async (UserData) => {
  const user = new User({ ...UserData });
  return await user.save();
};

export const getUserPass = async (id) => {
  return (await User.findById(id)).password;
};

export const updateUserById = async (id, UserData) => {
  return await User.findByIdAndUpdate(id, {
    ...UserData,
    updated_at: Date.now(),
  });
};

export const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};
