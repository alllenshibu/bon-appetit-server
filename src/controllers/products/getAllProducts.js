const pool = require('../../db-configure')
// @desc Get All Products
// @route GET /api/products/
// @access Admin and Users

const getAllProducts = async (req, res) => {
    try {

        pool.query('SELECT * FROM products', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })


    } catch (err) {
        res.status(500).json({ message: err.message, error: "Something went wrong" })
    }

}


module.exports = { getAllProducts }
