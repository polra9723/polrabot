const scriptName = "polrabot COVID19";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

let livenum = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/").get().select("ul.livenum").text().replace(/\(누적\)/g, "").replace(/ 전일대비/g, "").replace(/=/g, "\n").replace(/ 격리해제/g, "격리해제").replace(/\+ 치료 중 /g, "\n치료 중").replace(/\(격리 중\)/g, "").replace(/\? \+ /g, "\n").replace(/ \(/g, "명 (");
let date = org.jsoup.Jsoup.connect("http://ncov.mohw.go.kr/").get().select("span.livedate").text().replace(/[\(\)]/g, "").split(",")[0];
let covid19 = livenum + "\n\n" + date;

  if(msg.startsWith("*코로나")) {
    replier.reply(covid19);
  }
  
}
