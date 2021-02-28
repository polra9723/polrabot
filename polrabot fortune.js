const scriptName = "polrabot fortune";
const allsee = "\u200b".repeat(500);

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  if(msg.startsWith("*운세 ")){
    fortune = msg.substr(4);
    let happy = org.jsoup.Jsoup.connect("https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&oquery=fortune&tqi=hvDt2wp0JxosstqrMBGssssstNC-224478&query=" + fortune + "운세").get().select("p.text_box").get(0).text();
    replier.reply(sender + "님 오늘 " + fortune + " 운세입니다." + allsee + "\n\n" + happy);
  }

}
