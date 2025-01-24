/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-unused-vars */

import { Model } from "mongoose"


export interface TUser extends Document {
    name: string
    email: string
    password: string
    role: string
}


export interface IUserMethods {
    comparePassword(candidatePassword: string): Promise<boolean>;
  }
  
  // Combined model type
  export type TUserModel = Model<TUser, {}, IUserMethods>;