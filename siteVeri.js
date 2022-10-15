console.log("emre")

const puppeteer = require("puppeteer");
//const { trimUndefinedProperties } = require("twitter-api-v2/dist/helpers");
console.log("emre")
let el;
console.log("emre")
async function scrapeProduct(url) {

  console.log("emre")
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
  const page = await browser.newPage();

  
  await page.goto(url, { waitUntil: "load", timeout: 0 });

  console.log("emre")
  

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
     break;
    case 1:
      day = "Monday";
       [el] = await page.$x('//h3[contains(.,"Pazartesi")]/ancestor::tbody[1]'); //PAZARTESİ YEMEKLERİ
      break;
    case 2:
       day = "Tuesday";
       [el] = await page.$x('//h3[contains(.,"Salı")]/ancestor::tbody[1]'); //SALI YEMEKLERİ 
      break;
    case 3:
      day = "Wednesday";
       [el] = await page.$x('//h3[contains(.,"Çarşama")]/ancestor::tbody[1]'); //ÇARŞAMBA YEMEKLERİ
      break;
    case 4:
      day = "Thursday";
       [el] = await page.$x('//h3[contains(.,"Perşembe")]/ancestor::tbody[1]'); //PERŞEMBE YEMEKLERİ
      break;
    case 5:
      day = "Friday";
       [el] = await page.$x('//h3[contains(.,"Cuma")]/ancestor::tbody[1]'); //CUMA YEMEKLERİ
      break;
   case 6:
      day = "Saturday";
  }
  // //*[@id="icerik"]/div/table/tbody/tr[4]/td/table/tbody
  
 //const [el] = await page.$x('//*[@id="productTitle"]'); //amazon deneme
  
  
  const src = await el.getProperty("textContent");
  var srcTxt = await src.jsonValue();

  var kcalValue = /\d+ Kcal/.exec(srcTxt)
  srcTxt ="\n"+ srcTxt.replace(kcalValue,"")

  srcTxt = srcTxt.split("\n").map(x=>"  "+x.trim()).join("\n");


  srcTxt += '\n'+"     "+kcalValue

  return srcTxt;
}
module.exports = scrapeProduct;

