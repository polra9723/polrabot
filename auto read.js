const count = {}; 

function response(room, msg, sender, isGroupChat, replier) { 
  if (count[room] === undefined) { 
    count[room] = 0;
     } count[room]++; 
     
  if (count[room] == 1) { 
    replier.markAsRead(); count[room] = 0; 
    } 

}
