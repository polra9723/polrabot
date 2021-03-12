const scriptName = "polrabot school food";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  const allsee = "\u200b".repeat(500);
  const basic = "https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=";
  let day = new Date();
  
  //school example
  if(sender.indexOf("sender 1") != -1 || sender == "sender 2") {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/N100000206?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text();
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 예*고의 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  
  
}
