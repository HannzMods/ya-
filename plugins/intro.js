let handler = async m => {

conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Namalu     :* 
│ *Bapacklu   :* 
│ *Umurlu     :* 
│ *Emaklu     :* 
│ *Kakaklu    :* 
│ *Adeklu     :* 
│ *Agamalu    :* 
| *Statuslu   :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
wa.me/0
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})

}
handler.command = /^(intro)$/i

module.exports = handler
