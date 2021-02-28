const scriptName = "polrabot";
const allsee = "\u200b".repeat(500);
const cmdguide = "💡 폴라봇 명령어 도움말ㅤㅤ  " 
+ allsee + "\n"
+ "\n"
+ "일반\n"
+ "*코로나 : 실시간 코로나 현황 안내\n"
+ "*약 [약 이름] : 입력한 약의 약 정보를 안내\n"
+ "*책 [책 제목] : 입력한 책의 책 정보를 안내\n"
+ "*멜론 [노래 이름] : 가사와 함께 멜론으로 음악 공유\n"
+ "*운세 [띠 or 별자리] : 오늘의 운세 안내\n"
+ "*뉴스 [정치 / 사회 / 경제 / 세계] : 분야별 주요 뉴스 안내\n"
+ "*주식 [기업 이름] : 입력한 기업의 주식 정보를 안내\n"
+ "*급식 : 등록된 사용자의 학교 급식 정보 안내\n"
+ "*맛집 [음식 이름 or 지역명] : 맛집 정보 안내\n"
+ "\n"
+ "\n"
+ "게임\n"
+ "*숫자야구\n"
+ "*숫자야구종료 or 숫자야구포기\n"
+ "\n"
+ "\n"
+"ⓒ copyright 2021. polrabot all rights reserved.";


function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  
if(msg == "*명령어" || msg == "*도움말" || msg == "*help") {
  replier.reply(cmdguide);
}

if(msg.includes("폴라봇") && msg.includes("명령어")) {
  replier.reply(cmdguide);
}

}
