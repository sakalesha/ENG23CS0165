import express from "express";
import axios  from "axios";

const getVehical = () => {
    const response = await axios.get("http://4.224.186.213/evaluation-service/depots");
}