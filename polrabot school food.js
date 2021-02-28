const scriptName = "polrabot school food";

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  const allsee = "\u200b".repeat(500);
  const basic = "https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=";
  let day = new Date();
  
  //예산고등학교
  if(sender.indexOf("재호") != -1 || sender == "서정욱") {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/N100000206?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text();
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 예*고의 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  
  
  //군산동고등학교
  if(sender.indexOf("ㅈㅇㅈ") != -1 || sender == "서정욱") {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/P100000308?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text().replace(/동고/g, "");
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 군**고의 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  

  //내정중학교
  if(sender.indexOf("준경") != -1 || sender == "서정욱") {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/J100002176?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text();
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 내*중의 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  
  
  //부천부흥중학교
  if(sender.indexOf("park h.s") != -1 || sender == "서정욱") {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/J100001889?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text();
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 부천부*중의 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  
  
  //청주흥덕고등학교
  if(sender.indexOf("요정") != -1 || sender.indexOf("폴라") != -1) {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/M100001839?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text();
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 " + sender + "님의 학교 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  
  
  //서울영상고등학교
  if(sender.indexOf("서정욱") != -1 || sender.indexOf("폴라") != -1) {
  if(msg=="*급식"){
  menu = org.jsoup.Jsoup.connect("https://schoolmenukr.ml/api/high/B100000500?year="+day.getFullYear()+"&month="+(day.getMonth()+1)+"&date="+day.getDate()).ignoreContentType(true).get().text();
  json = JSON.parse(menu);
  arr=json["menu"];
  arr = arr.map(a => "• 조식 : "+a["breakfast"]+"\n\n• 중식 : "+a["lunch"]+"\n\n• 석식 : "+a["dinner"]).join("\n\n");
  replier.reply((day.getMonth()+1)+"월 "+day.getDate()+"일 서울영*고 급식입니다." + allsee + "\n\n" + arr);
  }
  }
  
  
}
