export default async function handler(req, res) {
    if(req.method === 'POST'){
        res.status(200).json({hola:'este es un metodo post'})
    }else{
        res.status(200).json({hola:'este es un metodo get'})
    }
  }