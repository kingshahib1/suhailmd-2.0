const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_10_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICA0NCxcbiAgICAgICAgNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDM1LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSDJWWlEyeXc4VFczeTJ1Y3NVK2VBRFFyZ0UvOXBBY243dkNVbkdmMnlKND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSy1RQjNzOUZTTTI4SEZWeUJxQTE0d1wiLFxuICBcInBob25lSWRcIjogXCIwOTJhNzBiMC1lMzlhLTRmNmItYjFhOS1lZDZkMGZlNTIxNjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyMzAsXG4gICAgICAxNjAsXG4gICAgICAxMzMsXG4gICAgICA4NSxcbiAgICAgIDE3MixcbiAgICAgIDIyOSxcbiAgICAgIDE3MyxcbiAgICAgIDE1NixcbiAgICAgIDEyMCxcbiAgICAgIDgxLFxuICAgICAgMjU1LFxuICAgICAgMTk1LFxuICAgICAgMTgzLFxuICAgICAgMTgwLFxuICAgICAgOTEsXG4gICAgICAxNzAsXG4gICAgICAxNCxcbiAgICAgIDIxNSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyMjYsXG4gICAgICAyNTQsXG4gICAgICAyNSxcbiAgICAgIDMyLFxuICAgICAgMjEyLFxuICAgICAgNTUsXG4gICAgICAxMzIsXG4gICAgICAzOSxcbiAgICAgIDEyNyxcbiAgICAgIDU2LFxuICAgICAgMjQ5LFxuICAgICAgMjMxLFxuICAgICAgMjAsXG4gICAgICA2MCxcbiAgICAgIDIyNyxcbiAgICAgIDIxMixcbiAgICAgIDEyNixcbiAgICAgIDQ2LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1gxNkVNWFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMzNjQxODk1OTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hhaHphZGFcXG5cXG5cXG4qXFxuXFxuXFxuKlxcblxcblxcbipcXG5cXG5cXG4qXFxuXFxuXFxuKlxcblxcblxcbipcXG5cXG5cXG4qXFxuXFxuXFxuKlxcblxcblxcbipcXG5cXG5cXG4qXCIsXG4gICAgXCJsaWRcIjogXCIyMDIwNTI5NjE2MjQxNjE6NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU3BzdkVIRU1iSnFyc0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImh5cVZLQWVmK2d0a2RMNzN2OFMybE1Dd2VuMXZWWXRhelhSUlFlbUZSV2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwickpLZ05yWGZMNnpsTjVnQzNNVm1FVXNaWTduWTVDb1RrOHV5dmVCbTFkSm1FbEtqQU5QSUVjR2V2NVBhYUM2Vm1BUzhYUVVDdlhDUzg5emJBNWtBQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXpnRXQ4ZHNYV1ZDTmVOZlh2T3JiYXlhRnp3VStZc1M1T2F0RnFkTVR4ZmcrWU1zUzNubG5XWTNBa2hhSk1KYzFTbnNVRkVMRE9WOGdocHhPTUdxaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzM2NDE4OTU5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA0MjI1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtnb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2dvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVGVKYW5KNkdCMFpkK29GT1pvaUtvY0lXNXkvRncxK1F3ZmtaREc0RlZwVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTE2ODUwODIwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwNDA3NTQ3MzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
