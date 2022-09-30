const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "wJHeNHZC9hC2EdD7C3Aw2W5HY",
    appSecret: "cYNI9XrzKQfcfHyFHSuMMZVN6GGQQOcBilPeHWctXrHlN1LiPh",
    accessToken: "707250819649966080-X2eSEBnpgR4hG6n5awzXFURhxvWhYq3",
    accessSecret: "7I8znZiHlrkXxCguWrgU4VTn9UtbdWEw4tiHVA5eOwRau"
})

const rwClient = client.readWrite

module.exports = rwClient

