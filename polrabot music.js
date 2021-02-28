const kakaoModule = require('KakaoLink'); 
const Kakao = new kakaoModule(); 
Kakao.init("4d545a185d172754667d621049004aa1", "https://www.melon.com");
Kakao.login("kakao ID", "kakao P/W");

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
if (msg.startsWith("*멜론 ")) {
  melon(room, msg.slice(4));
  var blank = "\u200b".repeat(500);

try{
  if(msg.startsWith("*멜론 ")){
    var a = msg.trim().substring(4);
    var naver = Utils.getWebText("https://m.search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q="+a+"%EA%B0%80%EC%82%AC");
    var b = naver.split("멜론앱</a>")[1];
    var c = b.split("접기</a>")[0];
    var d = c.replace(/(<([^>]+)>)/g, "");
    d = d.trim();
    d = d.replace(/^ +/gm,"");
    replier.reply("'"+a+"' 의 가사 검색 결과입니다.\n"+blank+"\n\n"+d);
     }
    } catch(error){
  replier.reply("가사를 찾을 수 없습니다.");
  }
  
}
} 

function melon(room, query) {
try {
  let adult;
  let url = "https://m.search.daum.net/search?nil_profile=btn&w=music&DA=SBC&m=song&q=";
  let document = org.jsoup.Jsoup.connect(url + encodeURIComponent(query)).get();
  let title = document.select("strong.tit-g").get(0);
  title.select("span.ico_adult").text() != "" ? adult = true : adult = false;
  adult ? title = title.text().replace("19", "") : title = title.text();
  
    Kakao.send(room, {
      link_ver: "4.0",
      template_id: 17141,
        template_args: {
          KMA: adult,
          SONG_ID: document.select("a").attr("data-song-id"),
          THUMB_URL: decodeURIComponent("http" + document.select("img").attr("data-original-src").split("http")[2]),
          TITLE: title,
          ARTIST: document.select("p.desc").get(0).text()
          }
       }, "custom");
    } catch (e) {
      Api.replyRoom(room, "노래를 찾지 못했어요.");
      }
}
