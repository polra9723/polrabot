const kakaoModule = require('KakaoLink'); 
const Kakao = new kakaoModule(); 
Kakao.init('javascript key', 'platform link');
Kakao.login('kakao ID', 'kakao P/W');

function KaKaoLink(room, msg){ 

let json = {
'link_ver': '4.0',
'template_id': template_id, 
'template_args': {
  img : getWeatherImage(area),
  location : area,
  sum : org.jsoup.Jsoup.connect("https://search.daum.net/search?q=" + area + " 날씨").get().select("p.txt_desc").text().replace(/체감온도/g, "체감온도는") + " 입니다."
  }
}

Kakao.send(room, json, "custom");

}

function getWeatherImage (area) {
  let uk = "Xo5bJRh7ab1BvzuXlkfaagAAALY";
  let url = "search?w=tot&q=" + encodeURIComponent(area + " 날씨");
  let location = "https://m.search.daum.net/" + url;
  let res = String(org.jsoup.Jsoup.connect(location).cookies({uvkey: uk}).get());
  let mk = res.split("var mk = \"")[1].split("\"")[0];
  let id = res.split("\"id\":\"")[1].split("\"")[0];
  let code = res.split("\"lcode\":\"")[1].split("\"")[0];
  
  url = "qsearch?mk=" + mk + "&uk=" + uk + "&q=" + encodeURIComponent(area + " 날씨") + "&w=weather&m=balloon&lcode=" + code + "&id=" + id + "&viewtype=json";
  location = "https://m.search.daum.net/" + url;
  res = org.jsoup.Jsoup.connect(location).cookies({uvkey: uk}).ignoreContentType(true).get().text();
  
  return JSON.parse(res).RESULT.WEATHER_BALLOON.result;
}


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
   if(msg.startsWith("*날씨 ")) {
     area = msg.substr(4);
     KaKaoLink(room);
   }
   
}
