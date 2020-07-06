const Twitter = require('twitter-lite');

const client = new Twitter({
    subdomain: "api", // api is the default
    version: "1.1", // version 1.1 is the default
    consumer_key: process.env.twitter_consumer_key,
    consumer_secret: process.env.twitter_consumer_secret,
    access_token_key: process.env.twitter_access_token_key,
    access_token_secret: process.env.twitter_access_token_secret,
});

let name = 'Praveen Yen'
let emoji = '👨‍💻'

function changeName() {
    client
        .get("account/verify_credentials")
        .then((results) => {
            const followerCount = results.followers_count;
            const string = followerCount.toString();
            const stringSplit = string.split("");
            const followers = stringSplit.reduce((acc, val) => {
                return acc + numberMatch[val];
            }, "");
            const profile_name = `${name} | ${emoji} | ${followers}`;
            console.log("profile_name: ", profile_name);
            const response = client.post("account/update_profile", {
                name: profile_name,
            });
        })
        .catch(console.error);
}

setInterval(() => {
    changeName();
}, 60000);
const numberMatch = {
    "0": "0️⃣",
    "1": "1️⃣",
    "2": "2️⃣",
    "3": "3️⃣",
    "4": "4️⃣",
    "5": "5️⃣",
    "6": "6️⃣",
    "7": "7️⃣",
    "8": "8️⃣",
    "9": "9️⃣",
};