const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

//  MySQL CONNECTION

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9826",
  database: "routeai",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected!");
});

// JWT Secret
const SECRET = "ROUTEAI_SECRET_KEY";

//  REGISTER USER

app.post("/api/register", (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role)
    return res.status(400).json({ message: "All fields required" });

  // Check if user exists
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const sql =
        "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)";

      db.query(sql, [name, email, hashedPassword, role], (err, result) => {
        if (err) return res.status(500).json({ message: "DB error", err });
        res.json({ message: "User registered successfully" });
      });
    }
  );
});


//  LOGIN USER
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length === 0) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ message: "Incorrect password" });

      // Create token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        SECRET,
        { expiresIn: "7d" }
      );

      res.json({
        message: "Login successful",
        token,
        role: user.role,
      });
    }
  );
});
//  SERVER START

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

