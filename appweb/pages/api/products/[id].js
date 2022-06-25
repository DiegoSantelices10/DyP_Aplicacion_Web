import { dbConnect } from 'utils/mongoose'
import Products from 'models/product'

dbConnect()

export default async(req,res) => {
    
    
    const { method, query: {id}, body} = req




}