const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello from Docker!");
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});

// 4:49:07