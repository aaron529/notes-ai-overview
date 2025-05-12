import { hash, genSalt, compare } from "bcrypt";

export const hashPassword = async (password) => {
  const saltRounds = await genSalt(10);
  return await hash(password, saltRounds);
};

export const comparePassword = async (originalPass, encryptedPass) => {
  return await compare(originalPass, encryptedPass);
};
