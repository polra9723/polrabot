const scriptName = "polrabot medicine search";
const kakaoModule = require('KakaoLink');
const Kakao = new kakaoModule();
Kakao.init('javascript key', 'platform link');
Kakao.login('kakao ID', 'kakao P/W');
 
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    try{
    if(msg.startsWith("*약 ")){
        search = msg.substr(3);
        let mdc = org.jsoup.Jsoup.connect("https://terms.naver.com/medicineSearch.nhn?mode=nameSearch&query=" + search).get()
        let json = {
            "link_ver" : "4.0",
            "template_id" : template_id,
            "template_args" : {
                img : mdc.select("a:nth-child(1) > img").get(0).attr("data-src"),
                name : mdc.select("div.info_area > div.subject > strong.title").get(0).select("strong").text().split("담기")[1].trim(),
                effect : mdc.select("div.info_area > p").get(0).text().split("[효능효과]")[1].split("[용법용량]")[0].trim(),
                link : mdc.select("div.info_area > div.subject > strong > a").get(0).attr("href")
            }
        }
 
        Kakao.send(room, json, "custom");
 
    }
    }catch (e) {
        replier.reply("약 이름이 올바르지 않거나 오류가 발생하여 찾을 수 없습니다. 다시 시도해 주세요.");
    }
}
