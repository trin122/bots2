module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Kiểm tra thông tin admin.",
  commandCategory: "Admin",
  usages: "adm",
  cooldowns: 0,
  dependencies: {
    "request": "",
    "fs-extra": "", 
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  var callback = () => api.sendMessage({
    body: `🌺梁ADMIN梁🌺
    👀 Tên: 𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑯𝒖̛̃𝒖 𝑻𝒓𝒊𝒏(Thin)
    💮 Biệt danh: Không có
    ❎ Tuổi: ????
    👤 Giới tính: Nam
    💘 Mối quan hệ: ế lòi con cu
    🌎 Quê quán: ??
    👫 Gu: Ghệ đích bự
    🌸 Tính cách: trung thực 100%
    🌀 Sở thích: đạo dụ
    💻Contact💻
    ☎ SĐT&Zalo:09167?????
    🌐 https://www.facebook.com/trin.1905
    ✉️ Email:huutrinnguyen@gmail.com
    🌸Lưu ý : 『 𝙆𝙝ô𝙣𝙜 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩,𝙆𝙝ô𝙣𝙜 𝙘𝙝ử𝙞 𝙗𝙤𝙩,𝙆𝙝ô𝙣𝙜 𝙠𝙞𝙘𝙠 𝙗𝙤𝙩 𝙩ù𝙮 𝙩𝙞ệ𝙣 𝙠𝙞𝙘𝙠 𝙣𝙝ớ 𝙣ó𝙞 𝙖𝙙𝙢,𝙎𝙥𝙖𝙢 𝙗𝙤𝙩 𝙩ự 𝙗𝙖𝙣,𝙆𝙝ô𝙣𝙜 𝙧𝙚𝙥𝙤𝙧𝙩 𝙖𝙘𝙘 𝙗𝙤𝙩』`
  }, event.threadID);

  // Không sử dụng biến link nữa
  return request(encodeURI("https://imgur.com/a/EA3zArs"), (error, response, body) => {
    // Xử lý dữ liệu ở đây nếu cần
  });
};
