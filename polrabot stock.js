const kakaoModule = require('KakaoLink'); 
const Kakao = new kakaoModule(); 
Kakao.init("javascript key", "platform link");
Kakao.login("kakao ID", "kakao P/W");


function response (room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
  const allsee = "\u200b".repeat(500);
  
  if(msg.startsWith("*주식 ")) {
    try {
    var stockname = msg.substr(4);
    
    var data_stock = org.jsoup.Jsoup.connect("https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=" + stockname).get();
    var name_stock = data_stock.select('a.tit_name').get(0).text();
    var info_stock = data_stock.select('strong.tit_company').select('span.txt_sub').get(0).text();
      var stock_code = info_stock.split(" ")[0];
    var num_stock = data_stock.select('span.num_stock').get(0).text();
    var num_rate = data_stock.select('span.num_rate').get(0).text();

    var moreinfo_stock_1 = data_stock.select('div.info_updown').get(0);
    var high_52 = moreinfo_stock_1.select('dl.dl_comm').get(0).text();
    var low_52 = moreinfo_stock_1.select('dl.dl_comm').get(1).text();
    var trade_total = moreinfo_stock_1.select('dl.dl_comm').get(2).text();
    var per_foreign = moreinfo_stock_1.select('dl.dl_comm').get(3).text();
    var stock_total = moreinfo_stock_1.select('dl.dl_comm').get(4).text();
    var stock_rank = moreinfo_stock_1.select('dl.dl_comm').get(5).text();
    var stock_per_pbr = moreinfo_stock_1.select('dl.dl_comm').get(6).text();
    var profit_per = moreinfo_stock_1.select('dl.dl_comm').get(7).text();
    var stock_line = moreinfo_stock_1.select('dl.dl_comm').get(8).text();
          
    num_rate = num_rate.replace(/상승/gm, " 🔺 ").replace(/하락/gm, " 🔻 ");

    var img_stock = org.jsoup.Jsoup.connect("https://finance.naver.com/item/main.nhn?code=" + stock_code).get().select('div.chart').select('img').attr('src');
    if (stockname != undefined) {
      
         Kakao.send(room, {
      "link_ver": "4.0",
      "template_id": template_id, //템플릿
      "template_args": {
          "img" : img_stock,
          "name" : name_stock + "\n",
          "info" : info_stock,
          "cost" : num_stock,
          "rate" : num_rate
      }
  }, "custom");
  replier.reply("• " + high_52 + "\n• " + low_52 + "\n• " + trade_total + allsee + "\n• " + per_foreign + "\n• " + stock_total + "\n• " + stock_rank + "\n• " + stock_per_pbr + "\n• " + profit_per + "\n• " + stock_line);
    }
  }catch (e) {
    replier.reply("검색하신 기업은 없거나 국내 주식이 아닙니다.");
  }
  return;
  }
}
