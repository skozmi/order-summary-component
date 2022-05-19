const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get('/', (req, res, next)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/payment', (req, res, next)=>{
    res.send('<script>alert("Thank you for payment!"); window.location.href = "/"; </script>')
});

app.post('/cancel', (req, res, next)=>{
    res.send('<script>alert("Canceled order!"); window.location.href = "/"; </script>')
});

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});