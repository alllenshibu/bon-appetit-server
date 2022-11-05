const pool = require('../../db-configure')
// @desc Add Products
// @route GET /api/products/addproduct
// @access Admin 

const addProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body
        const amount = parseInt(price);
        const file = req.file.location;
        console.log(file)

        const adminId = req.admin.id;
        let insertQuery = `insert into products(name,description,price,images,admin_id) values( '${name}', '${description}','${amount}',ARRAY ['${file}'],'${adminId}') RETURNING*`
        const product = await pool.query(insertQuery)

        // console.log(product)
        if (product) {
            res.status(201).json({
                message: "Products Added",
                data: product.rows[0]
            })
        } else {
            return res.status(400).json({ error: "Invalid request" })
        }

    } catch (err) {
        res.status(500).json({ message: err.message, error: "Something went wrong" })
    }

}


module.exports = { addProduct }
