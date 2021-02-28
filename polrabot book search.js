const scriptName = "polrabot book search";
const kakaoModule = require('KakaoLink');
const Kakao = new kakaoModule();
Kakao.init('javascript key', 'platform link');
Kakao.login('kakao ID', 'kakao P/W');


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

try{
if(msg.startsWith("*책 ")){
  
    let bklink = org.jsoup.Jsoup.connect("https://book.naver.com/search/search.nhn?sm=sta_hty.book&sug=&where=nexearch&query=" + msg.substr(3)).get()
    let moreinfo = bklink.select("a[class*=a:bls.thumb]").get(0).attr("href");
    let bookid = moreinfo.split("bid=")[1]
  
    let json = {
    "link_ver" : "4.0",
    "template_id" : template_id,
    "template_args" : {
        
    price : bklink.select("em.price").get(0).text().split("원")[0],
    img : bklink.select("a[class*=a:bls.thumb] > img").get(0).attr("src").split('?type')[0],
    title : bklink.select("a[class*=a:bls.title]").get(0).text(),
    author : bklink.select("#container.type2 > #content > #searchBiblioList.basic > li > dl > dd.txt_block").text().split("|")[0].replace(/저/g, ""),
    intro : bklink.select("dd[id^=searchDescrition_]").get(0).text().replace("소개 ", ""),
    link : String(bookid)
 
    }
  }
  
  Kakao.send(room, json, "custom");
 
}
} catch (e) {
  replier.reply("책을 찾을 수 없습니다. 다시 시도해 주세요. 오류가 계속되는 경우 검색을 지원하지 않는 책입니다.");
}
}
