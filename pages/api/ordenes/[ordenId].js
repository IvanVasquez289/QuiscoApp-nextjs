import { PrismaClient } from "@prisma/client"
export default async function handler(req, res) {
    const prisma = new PrismaClient()
    if(req.method === 'PUT'){
        console.log(req.query)
        const {ordenId} = req.query
        const ordenActualizada = await prisma.orden.update({
            where:{
                id: parseInt(ordenId)
            },
            data:{
                estado: true
            }
        })
        res.status(200).json(ordenActualizada)
    }
}