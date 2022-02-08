import axios from 'axios';

export const getSnowflakeData = () => {
    fetch("https://api.thedogapi.com/v1/images/search").then((response) =>
        response.json()
    );
};