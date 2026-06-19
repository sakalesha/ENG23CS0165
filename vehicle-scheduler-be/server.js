const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json());
const bearToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyb25hZGFzYWthbGVzaGFAZ21haWwuY29tIiwiZXhwIjoxNzgxODQ2Nzk5LCJpYXQiOjE3ODE4NDU4OTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4ZTkyNDkwMi1kYTI5LTRiY2EtYTgzOC01NjcyN2ExNmQ0MzUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyb25hZGEgc2FrYWxlc2hhIiwic3ViIjoiMzdmZDlmY2UtODhhYS00OGIzLThmNDItNTE3OGFkNDRlN2UzIn0sImVtYWlsIjoicm9uYWRhc2FrYWxlc2hhQGdtYWlsLmNvbSIsIm5hbWUiOiJyb25hZGEgc2FrYWxlc2hhIiwicm9sbE5vIjoiZW5nMjNjczAxNjUiLCJhY2Nlc3NDb2RlIjoiQmdXWlNXIiwiY2xpZW50SUQiOiIzN2ZkOWZjZS04OGFhLTQ4YjMtOGY0Mi01MTc4YWQ0NGU3ZTMiLCJjbGllbnRTZWNyZXQiOiJwdUt5akNjQVZKZWZLQWRrIn0.VKX3QQNXg8NpQZ7TDcHUhRQbs8KspfSgD2wVN8wUy0w';

app.get("/depots",async (req,res) => {
    try{
        const response = await axios.get("http://4.224.186.213/evaluation-service/depots", {
            header : {
                'Content-Type' : "application/json",
                'Authorization' : `Bearer ${bearToken}`
            }
        });

        if(response) {
            console.log("Login successful");
        }

        res.status(200).json({
            'message' : "List of Depots"
        });
    }catch(error) {
        console.log(error);
    }
})



const port = process.env.PORT | 500;

app.listen(port, () => {
    console.log(`Server is running ${port}`);
});