import { object, string, number, ObjectSchema } from "yup";
import { NextApiRequest, NextApiResponse } from "next";

import { Sequelize } from "sequelize";

const conn = new Sequelize(`${process.env.MYSQLDATABASE}`, `${process.env.MYSQLUSERNAME}`, `${process.env.MYSQLPASSWORD}`,{
    host:`${process.env.MYSQLHOST}`,
    dialect:'mysql'
})


/***
 * @object :- object here is used to create schema for
 * validation  object is coming from Yup,
 * You just have to Create Schema here to use it
 */

interface User {
  Name: String;
  PhoneNo: Number;
  Email: String;
}

let UserInfo: ObjectSchema<User> = object({
  Name: string().required({
    success: false,
    Messge: "Name is Required for this",
  }),
  PhoneNo: number().required({
    success: false,
    Messge: "PhoneNo is Required for this",
  }),
  Email: string().required({
    success: false,
    Messge: "Email is Required for this",
  }).email(),
  Password:string().required({Message:"Please Provide the Password"})
});

export default async function YupValidation(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { Name, PhoneNo, Email, Password } = req.body;

  try {
    const value = await UserInfo.validate({
      Name: Name,
      PhoneNo: PhoneNo,
      Email: Email,
      Password:Password
    });

    console.log(value);
    await conn.authenticate()
    // console.log(tet)
  } catch (error: any) {

    console.log(error.errors, error);
    res.status(400).json({
      Success: false,
      message: error.errors,
    });
  }
  return;
}
