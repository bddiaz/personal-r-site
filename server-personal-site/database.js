const mysql =require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'remote',
    password: 'password',
    database: 'pupusas'
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    // connection.query('SELECT * FROM orders', (error, results, fields) =>{
    //     if (error) {
    //         return console.error(error.message);
    //       }
    //       console.log(results);
    // })
  });






// async function getOrders(){
//     const [rows] = await pool.query('SELECT * FROM orders')
//     console.log(rows)
//     return rows
// }

// getOrders()

