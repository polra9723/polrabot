const Jsoup = org.jsoup.Jsoup;
const kakaoModule = require('KakaoLink'); 
const Kakao = new kakaoModule(); 
Kakao.init('javascript key', 'platform link');
Kakao.login('kakao ID', 'kakao P/W');


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) { 

  var base = "https://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=";
  var cmd = msg.split(" ")[0];
  var part = msg.split(" ")[1];
  
  if(part=="정치"){
   partno="100";
  }else if(part=="경제"){
    partno="101";
  }else if(part=="사회"){
   partno="102";
  }else if(part=="세계"){
    partno="104";
  }

  if(cmd=="*뉴스"){
    var bapa = base+partno;
    var url = org.jsoup.Jsoup.connect(bapa).get();
    var title = url.select("a.cluster_text_headline");
    var img = url.select("img");

    var link0 = title.get(4).attr("href");
    var link1 = title.get(8).attr("href");
    var link2 = title.get(12).attr("href");
    var link3 = title.get(16).attr("href");
    var link4 = title.get(20).attr("href");
    var link00 = link0.replace("https://news.naver.com/","");
    var link11 = link1.replace("https://news.naver.com/","");
    var link22 = link2.replace("https://news.naver.com/","");
    var link33 = link3.replace("https://news.naver.com/","");
    var link44 = link4.replace("https://news.naver.com/","");

    Kakao.send(room, {
      "link_ver":"4.0",
      "template_id": 47886,
      "template_args":{
      "header": (part + " 분야 실시간 주요 뉴스"),
      "title" : title.get(4).text(),
      "title1" : title.get(8).text(),
      "title2" : title.get(12).text(),
      "title3" : title.get(16).text(),
      "title4" : title.get(20).text(),
      "link" : link00,
      "link1" : link11,
      "link2" : link22,
      "link3" : link33,
      "link4" : link44,
      "img" : img.get(6).attr("src"),
      "img1" : img.get(7).attr("src"),
      "img2" : img.get(8).attr("src"),
      "img3" : img.get(9).attr("src"),
      "img4" : img.get(13).attr("src")
    }
  }, "custom");
}
}
