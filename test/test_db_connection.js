const mysql = require('mysql'); // เพิ่มการ require ไลบรารี mysql
const dbConfig = require('../config/mysqli.config.js');

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('เชื่อมต่อฐานข้อมูลล้มเหลว:', err.message);
  } else {
    console.log('เชื่อมต่อฐานข้อมูลสำเร็จ!');
  }
  connection.end();
});