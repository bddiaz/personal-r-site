import mysql from 'mysql2'


const db = mysql.createConnection({
    host: "192.168.1.236",
    user: "remote",
    password: "password",
    database: "pupusas",
}).promise();


export async function handleAddCostumer(req) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const phone_number = req.body.phone_number;
    const email = req.body.email;

    try {

        let found = await findCostumer(email)
        if (found.length > 0) {
            let id = found[0].costumer_id;
            return id
        } else {
            // if no costumer is found, add to database
            let result = await db.query('INSERT INTO costumers (first_name, last_name, phone_number, email) VALUES (?,?,?,?)',
                [first_name, last_name, phone_number, email])
            let id = result[0].insertId
            return id
        }
    } catch (err) {
        console.log('error got ', err)
    }


}

export async function findCostumer(email) {
    const findQuery = "SELECT * FROM pupusas.costumers WHERE email = ?"
    const [found] = await db.query(findQuery, [email])
    // console.log(found)
    return found
}

export async function handleAddOrderItems(order_items) {
    // for order_items table: 
    const pork_quantity = order_items[3].quantity;
    const beans_quantity = order_items[2].quantity;
    const mixed_quantity = order_items[0].quantity;
    const spinach_quantity = order_items[5].quantity;
    const jalapeno_quantity = order_items[4].quantity;
    const loroco_quantity = order_items[1].quantity;
    let total_quantity = 0
    for (let i = 0; i < 6; i++) {
        total_quantity += order_items[i].quantity;
    }
    try {
        const newOrderQuery = 'INSERT INTO order_items (order_size,pork_quantity, beans_quantity, mixed_quantity, spinach_quantity, jalapeno_quantity, loroco_quantity, side1_quantity, side2_quantity, notes) VALUES (?,?,?,?,?,?,?,?,?,?)'
        const result = await db.query(newOrderQuery, [total_quantity, pork_quantity, beans_quantity, mixed_quantity, spinach_quantity, jalapeno_quantity, loroco_quantity, 0, 0, ''])
        let id = result[0].insertId
        return id
    } catch (err) {
        console.log(err)
    }

}