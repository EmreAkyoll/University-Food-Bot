const scrapeProduct = require("./siteVeri.js");
const rwClient = require("./twitterClient.js");

const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v1.tweet(await scrapeProduct("http://sks.nku.edu.tr/YemekListesi/0/s/4138/7411"));
    } catch (e) {
        console.error(e)
    }
}

const job = new CronJob("* 8 * * *", () => {
    console.log('calisiyo!')
    tweet()
})

//tweet()

job.start()
