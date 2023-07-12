export default async function handler(req, res) {
    if(req.method === 'POST'){
        console.log(req.body)
        res.status(200).json({hola:'este es un metodo post'})
    }
}