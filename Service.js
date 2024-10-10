const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 2005;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: 'brpas2iea9jom89b3qnr-mysql.services.clever-cloud.com',
  user: 'uu19tu8hjb0q1yhz',
  password: 'p1zXV4UJrwNSnVVVOtjW',
  database: 'brpas2iea9jom89b3qnr'
});

const promisePool = pool.promise();

app.get('/services', async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM services');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
