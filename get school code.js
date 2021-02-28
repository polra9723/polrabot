const scriptName = "school code";

function getOrgCode(query) {
    let code = JSON.parse(org.jsoup.Jsoup.connect("http://hcs.eduro.go.kr/v2/searchSchool?orgName=" + query).ignoreContentType(true).get().text()).schulList;
    return !!code.length && code[0].orgCode;
}

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

if(msg.startsWith("*학교 ")){
  query = msg.substr(4);
  replier.reply(getOrgCode(query));
}

}
