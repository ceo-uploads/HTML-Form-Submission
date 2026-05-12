const express = require('express');
const app = express();
const PORT = 3000;

app.get('/student', (req, res) => {
    const studentInfo = {
        id: "232031030",
        name: "MD Rayhan",
        course: "IT Project Management",
        Department: "CSE",
        CGPA: "N/A"
    };

    res.status(200).json(studentInfo);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
