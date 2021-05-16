module.exports = client => {
  client.user.setStatus("idle");
  console.log(`${client.user.username} adı ile giriş yapıldı!`) 
client.user.setActivity(`developed by ' atlas star. ✬#7730`, { type: "LISTENING"});
};
