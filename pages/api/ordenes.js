import { PrismaClient } from "@prisma/client"
export default async function handler(req, res) {
    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        // console.log(req.body)
        const orden = await prisma.orden.create({
            data:{
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                total: req.body.total,
                pedido: req.body.pedido
            }
        })
        res.status(200).json(orden)
    }else{
        const ordenes = await prisma.orden.findMany({
            where:{
                estado: false
            }
        })
        res.status(200).json(ordenes)
    }
}