const scrapeProduct = require("./siteVeri.js");
const rwClient = require("./twitterClient.js");

const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v1.tweet(await scrapeProduct("http://sks.nku.edu.tr/YemekListesi/0/s/4138/7411"));
      //  await rwClient.v1.tweet(await scrapeProduct("https://www.amazon.com.tr/Hayvan-%C3%87iftli%C4%9Fi-George-Orwell/dp/9750719387/ref=sr_1_1?pf_rd_i=12466381031&pf_rd_m=A1UNQM1SR2CHM&pf_rd_p=66134489-a224-4ffb-8ab4-7c2a47eb3e4f&pf_rd_r=KYE9PQ4S2405FBR0Y7MY&pf_rd_s=merchandised-search-4&pf_rd_t=30901&qid=1647114391&refinements=p_27%3AGeorge+Orwell&s=books&sr=1-1%22"));
    } catch (e) {
        console.error(e)
    }
}

const job = new CronJob("10 8 * * 1-5", () => {
    console.log('calisiyo!')
    tweet()
})

//tweet()

job.start()
