const scriptName = "polrabot famous restaurant";
const kakaoModule = require('KakaoLink');
const Kakao = new kakaoModule();
Kakao.init('javascript key', 'platform link');
Kakao.login('kakao ID', 'kakao P/W');

const base = "https://www.siksinhot.com/search?keywords=";
const Jsoup = org.jsoup.Jsoup.connect;

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    try{
    if(msg.startsWith("*맛집 ")){
        search = msg.substr(4);
        const parse = base + search;
        let start = Jsoup(parse).get()

        //img parse
        let i1 = start.select("span[class*=img] > img").get(0).attr("src")
        let i2 = start.select("span[class*=img] > img").get(1).attr("src")
        let i3 = start.select("span[class*=img] > img").get(2).attr("src")

        //store name parse
        let n1 = start.select("div.cnt").get(0).select("strong.store").get(0).text()
        let n2 = start.select("div.cnt").get(1).select("strong.store").get(0).text()
        let n3 = start.select("div.cnt").get(2).select("strong.store").get(0).text()

        //menu parse
        let m1 = start.select("div.cnt").get(0).select("p").get(0).text()
        let m2 = start.select("div.cnt").get(1).select("p").get(0).text()
        let m3 = start.select("div.cnt").get(2).select("p").get(0).text()

        //link parse
        let l1 = start.select("div[class*=cont] > a").get(0).attr("href")
        let l2 = start.select("div[class*=cont] > a").get(1).attr("href")
        let l3 = start.select("div[class*=cont] > a").get(2).attr("href")

        /** parse end **/

        //kakaolink
        let json = {
            "link_ver" : "4.0",
            "template_id" : template_id,
            "template_args" : {
                i1 : i1, i2 : i2, i3 : i3,
                n1 : n1, n2 : n2, n3 : n3,
                m1 : m1, m2 : m2, m3 : m3,
                l1 : l1, l2 : l2, l3 : l3,
                keyword : search

            }
        }

        Kakao.send(room, json, "custom");

    }
    }catch(e) {
        replier.reply("오류가 발생하였습니다. 다시 시도해 주세요.");
    }
}
