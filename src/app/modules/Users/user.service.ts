

import { APPerror } from "../../errors/AppError";
import config from "../../config";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { createToken } from "./user.utils";
import httpStatus from "http-status";


const registerUser = async (userData: TUser) => {
  const user = new User(userData);
  console.log(user);
  await user.save();
  return user;
};


const loginUser = async (payload: TUser) => {
    const user = await User.findOne({ email: payload.email }).select(
      "password email role"
    );
    console.log(user);
  
    if (!user ) {
     throw new APPerror(httpStatus.FORBIDDEN, "Invalid email or password");
    }
    const isPasswordValid = await user.comparePassword(payload.password);
console.log("Password Valid:", isPasswordValid);

if (!isPasswordValid) {
  throw new Error("Invalid email or password");
}
  
    const JwtPayload = {
      email: user.email,
      role: user.role as string
  }
  const token = createToken(JwtPayload, config.jwt_access_secret as string, config.jwt_expire_access as string)
  return token;

  };

export const UserService = {
  registerUser,
  loginUser,
};
