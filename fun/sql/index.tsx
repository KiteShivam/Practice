import { Sequelize, DataTypes } from "sequelize";

const conn = new Sequelize(`${process.env.MYSQLDATABASE}`, `${process.env.MYSQLUSERNAME}`, `${process.env.MYSQLPASSWORD}`,{
    host:`${process.env.MYSQLHOST}`,
    dialect:'mysql'
})


const sequlelize  = new Sequelize("mysql::memory")

const UserSchema = sequlelize.define("User",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    Name:{
        type:DataTypes.STRING,
        
    },
    PhoneNo:{
        type:DataTypes.INTEGER,
        
    },
    Email:{
        type:DataTypes.STRING
    },
    Password:{
        type:DataTypes.STRING
    }
})

export default async function User(Name:string, PhoneNo:Number, Eamil:string, Password:String){

try {
    await conn.authenticate()
 const data =   await  UserSchema.create({
        Name:"shivam",
        PhoneNO:123213,
        Email:"shivam@9540"
    })

    data.save()
} catch (error) {
     console.log(error)
}

}