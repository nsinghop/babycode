const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const students = [
  {
    id: 24010101,
    name: "Aryan Sharma",
    email: "aryan.sharma@gmail.com",
    course: "Computer Science",
    enrolledOn: "2024-01-15"
  },
  {
    id: 24010102,
    name: "Priya Mehta",
    email: "priya.mehta@gmail.com",
    course: "Information Technology",
    enrolledOn: "2024-02-10"
  },
  {
    id: 24010103,
    name: "Rahul Verma",
    email: "rahul.verma@gmail.com",
    course: "Electronics",
    enrolledOn: "2023-12-20"
  },
  {
    id: 24010104,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@gmail.com",
    course: "Mechanical Engineering",
    enrolledOn: "2024-03-02"
  },
  {
    id: 24010105,
    name: "Aditya Jain",
    email: "aditya.jain@gmail.com",
    course: "Computer Science",
    enrolledOn: "2024-04-01"
  },
  {
    id: 24010106,
    name: "Riya Singh",
    email: "riya.singh@gmail.com",
    course: "Civil Engineering",
    enrolledOn: "2024-02-25"
  },
  {
    id: 24010107,
    name: "Kunal Deshmukh",
    email: "kunal.deshmukh@gmail.com",
    course: "Electrical Engineering",
    enrolledOn: "2024-01-18"
  },
  {
    id: 24010108,
    name: "Anjali Nair",
    email: "anjali.nair@gmail.com",
    course: "Information Technology",
    enrolledOn: "2024-03-15"
  },
  {
    id: 24010109,
    name: "Vikram Joshi",
    email: "vikram.joshi@gmail.com",
    course: "Computer Science",
    enrolledOn: "2024-04-05"
  },
  {
    id: 24010110,
    name: "Tanvi Iyer",
    email: "tanvi.iyer@gmail.com",
    course: "Electronics",
    enrolledOn: "2024-01-10"
  }
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
