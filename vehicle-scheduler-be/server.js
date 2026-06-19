import express from "express";

const app = express();

app.use(express.json());
app.use("/", );

const port = process.env.PORT | 500;

app.listen(port, (req,req) => {
    console.log(`Server is running ${port}`);
});