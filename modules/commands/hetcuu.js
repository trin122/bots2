const fs = require("fs");
module.exports.config = {
  name: "hetcuu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "trunguwu", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "hetcuu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("Xin") == 0 ||
    event.body.indexOf("xin") == 0 ||
    event.body.indexOf("Xin với") == 0 ||
    event.body.indexOf("co cai nit") == 0
  ) {
    var msg = {
      body: "hong pe oi",
      attachment: fs.createReadStream(__dirname + `/noprefix/cocainit.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("Hết cứu") == 0 ||
    event.body.indexOf("hết cíu") == 0 ||
    event.body.indexOf("Hết Cứu") == 0 ||
    event.body.indexOf("het cuu") == 0
  ) {
    var msg = {
      body: "bot cũng ko cứu nổi",
      attachment: fs.createReadStream(__dirname + `/noprefix/hetcuu.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("ảo") == 0 ||
    event.body.indexOf("Ảo") == 0
  ) {
    var msg = {
      body: "Duma ảo ma canada 🙃",
      attachment: fs.createReadStream(__dirname + `/noprefix/ảo.mp4`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
      event.body.indexOf("@Nguyen Huu Trin") == 0 ||
      event.body.indexOf("trin") == 0 ||
      event.body.indexOf("Trin") == 0
    ) {
      // Mảng chứa hai đoạn văn bản để chọn ngẫu nhiên
      var randomTexts = [
        "Ai kêu cậu chủ t đó",
        "Đánh chết cụ m giờ gọi cái gì"
      ];

      // Chọn ngẫu nhiên một trong hai đoạn văn bản
      var randomIndex = Math.floor(Math.random() * randomTexts.length);
      var selectedText = randomTexts[randomIndex];

      var msg = {
        body: selectedText
      };
      api.sendMessage(msg, threadID, messageID);
    }
  else if (
    event.body.indexOf("ngủ") == 0 ||
    event.body.indexOf("ngủ ngon") == 0 ||
    event.body.indexOf("Ngủ ngon") == 0 ||
    event.body.indexOf("pai") == 0
  ) {
    var msg = {
      body: "Ngủ ngon nhó❤️",
      attachment: fs.createReadStream(__dirname + `/noprefix/ngungon.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("cc") == 0 ||
    event.body.indexOf("cmm") == 0 ||
    event.body.indexOf("co cai dai") == 0 ||
    event.body.indexOf("dm") == 0
  ) {
    var msg = {
      body: "m thích chửi thề ko",
      attachment: fs.createReadStream(__dirname + `/noprefix/dmm.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
      event.body.indexOf("Hát") == 0 ||
      event.body.indexOf("hát") == 0
    ) {
      var randomAudio = Math.random() < 0.5 ? "1.mp3" : "2.mp3";
      var msg = {
        body: "chill",
        attachment: fs.createReadStream(__dirname + `/noprefix/${randomAudio}`)
      };
      // Gửi tin nhắn
      api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("mmb") == 0 ||
    event.body.indexOf("Mmb") == 0 ||
    event.body.indexOf("béo") == 0 ||
    event.body.indexOf("moẹ m") == 0
  ) {
    var msg = {
      body: "mmb",
      attachment: fs.createReadStream(__dirname + `/noprefix/mmb.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("Ai hỏi") == 0 ||
    event.body.indexOf("ai hỏi") == 0 ||
    event.body.indexOf("who ask") == 0 ||
    event.body.indexOf("Ai") == 0
  ) {
    var msg = {
      body: "Ai hỏi mà m trả lời",
      attachment: fs.createReadStream(__dirname + `/noprefix/aihoi.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("đợi đấy") == 0 ||
    event.body.indexOf("Đợi đấy") == 0 ||
    event.body.indexOf("mày cứ đợi đấy") == 0 ||
    event.body.indexOf("m cứ đợi đấy") == 0
  ) {
    var msg = {
      body: "...",
      attachment: fs.createReadStream(__dirname + `/noprefix/choday.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("cười") == 0 ||
    event.body.indexOf("Cười") == 0 ||
    event.body.indexOf("cười ỉa") == 0 ||
    event.body.indexOf("cười ẻ") == 0
  ) {
    var msg = {
      body: "dui quá haha",
      attachment: fs.createReadStream(__dirname + `/noprefix/dui.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } else if (
    event.body.indexOf("Xin lỗi") == 0 ||
    event.body.indexOf("mình xin lỗi") == 0 ||
    event.body.indexOf("sorry") == 0 ||
    event.body.indexOf("Sorry") == 0
  ) {
    var msg = {
      body: "xin lỗi được chưa😏",
      attachment: fs.createReadStream(__dirname + `/noprefix/xinloi.mp3`)
    };
    api.sendMessage(msg, threadID, messageID);
  } 
  
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }