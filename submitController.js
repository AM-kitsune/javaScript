import { createConnection } from "mysql2"

export const submitController = (req,res) =>{
    const db = createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "barang"
    })
    const nama = req.body.nama;
    const status = req.body.sts;

    db.query(`insert into stok(namaBarang, status) value ('${nama}' , '${status}')`)

    res.redirect('/')
    // console.log(req.body)
}