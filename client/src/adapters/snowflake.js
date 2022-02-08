import axios from "axios";

export const getSnowflakeData = () => {
    fetch("https://api.thedogapi.com/v1/images/search").then((response) =>
        response.json()
    );
};

export const toJson = (data) => {
    axios
        .post("http://localhost:9000/transactions", JSON.stringify(data))
        .then(() => console.log("EMS Data Saved"))
        .catch((err) => {
            console.error(err);
        });
};