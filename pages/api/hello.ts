// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import YupValidation from '@/fun/yup';


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){
  let type:any =req.method

 switch(type){
  case "GET":
    break;


  case "POST":
    YupValidation(req, res)
    break;


  case "DELETE":
    break;


  case "PUT":
    break;

  default:

    break;


 }

}

