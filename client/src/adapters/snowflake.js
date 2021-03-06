import axios from "axios";

export const getSnowflakeData = () => {
    fetch("https://api.thedogapi.com/v1/images/search").then((response) =>
        response.json()
    );
};

export async function loginUser(data) {
    return fetch("http://localhost:9000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((data) => data.json());
}

export const toJson = (data) => {
    axios
        .post("http://localhost:9000/api", JSON.stringify(data))
        .then(() => console.log("EMS Data Saved"))
        .catch((err) => {
            console.error(err);
        });
};