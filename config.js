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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_45_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjksXG4gICAgICAgIDgxLFxuICAgICAgICAzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTc1LFxuICAgICAgICA5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJldWZnWHdzcy9WNG9oYVhzQW10emxra2xJcnVHYW5yV0F1NGtiK09WdlQ0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4ZnpQR2FrZVJEcWEweVBHak1iMDZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyNzhhNWJiLWM5YmUtNGIxZS1iNWNiLTI5ZGU2NDkyY2NkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAyMjIsXG4gICAgICAxMzUsXG4gICAgICAyMzgsXG4gICAgICAxNDIsXG4gICAgICA1OCxcbiAgICAgIDIzOCxcbiAgICAgIDE3MixcbiAgICAgIDg1LFxuICAgICAgMTA1LFxuICAgICAgMTUxLFxuICAgICAgMTcxLFxuICAgICAgMTkxLFxuICAgICAgMjQzLFxuICAgICAgMjgsXG4gICAgICA4OCxcbiAgICAgIDEyMyxcbiAgICAgIDYsXG4gICAgICA4NSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAyNTIsXG4gICAgICAxMDYsXG4gICAgICAyMzYsXG4gICAgICAxNDEsXG4gICAgICAxMDQsXG4gICAgICAyMCxcbiAgICAgIDQwLFxuICAgICAgMTkwLFxuICAgICAgMTg3LFxuICAgICAgMjAsXG4gICAgICAxMTUsXG4gICAgICA4NyxcbiAgICAgIDE2MyxcbiAgICAgIDEyMixcbiAgICAgIDEzOSxcbiAgICAgIDEzNSxcbiAgICAgIDE0NyxcbiAgICAgIDkyLFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkM0Wlo0WVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMzNjQxODk1OTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU2hhaHphZGFcXG5cXG5cXG4qXFxuXFxuXFxuKlxcblxcblxcbipcXG5cXG5cXG4qXFxuXFxuXFxuKlxcblxcblxcbipcXG5cXG5cXG4qXFxuXFxuXFxuKlxcblxcblxcbipcXG5cXG5cXG4qXCIsXG4gICAgXCJsaWRcIjogXCIyMDIwNTI5NjE2MjQxNjE6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU3BzdkVIRU1lOXFyc0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImh5cVZLQWVmK2d0a2RMNzN2OFMybE1Dd2VuMXZWWXRhelhSUlFlbUZSV2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVTJxTkp5WHBicEhpaURINXFpU21Sb0JKa3hEbGpGMnBDaFVvTG1TdTRoSEZiSlo4dzJRb2drckNJMHVZUXVOekZGZmx5eUlhZHIrSTE3Y1FTY1ZuQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWpQL1l1Z1FtWkNsZjk4VjVXN2tNOHB2ajFMN3hlRXNqNm9sZXZaZ1VUN241QzJweDBGUUZqcGZtbWxKb3lTb20yWUhHSjNtb2NEMTMweEZ5Zkg1Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzM2NDE4OTU5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTA0MDcxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtnblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2duLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ0JMMEFaYkpUbDlyNzh2WmRZUnBEeXY2U1ZmS0pFdzc0elUzK2ZCN0s2ND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTE2ODUwODIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwNDAxMDQzNThcIn0iCn0="  // PUT your SESSION_ID 


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
