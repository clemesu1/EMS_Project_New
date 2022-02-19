import SimpleStorage from "./contracts/SimpleStorage.json";

const drizzleOptions = {
    contracts: [SimpleStorage],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:9545",
        },
    },
};

export default drizzleOptions;