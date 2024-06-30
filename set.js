const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'zokk'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tLdjRhM0xmYzdvRVBXSDIxQ1REVUpLWGFIa3pjblUwREw5RzlqV0Frcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibStGREVUbXBSU0RVMG5hbEdFcXh6NjUrQ3NSakZGZ0ErcEJBRkhIUWYzST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRmlTd09ocWo1ZjdGZDNKdDZOSWxLbUs1V3hmV0JPWTNiK2FqMUs1dGtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxY29hWmYzWWlPSktCUC82NXB0UFBmWjFXRnZqR3N4Qk42eWN1L1hvQVVVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRERWlIRG5tNzhDUVpUWEVKQmI5MXQ2NnNYTnFPMHAxMHQ3eUJmZTcrVms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVYblN3dDloQnljb1BqZWpmYjQzZkZoSGtpcDBBU2FJN1BmV0tKNEJEUm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd1UTlySjljRThSMWY4QXh4bnVLQ2J4bXhlQXU0SlFTb2NNOGlSVm1FND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2dhYnE0NVFpNUJNQ2V5b1VyQnBKNlJjdnRKUHpTZkhVVjdMcStuQ2Jtdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFjK3pkTGRtYWlvNzJ5QmNJbW41ZDNKMjJwZGQ1OG9ldFZpKzIyMEZra3RhQkV0RW11K2tySVVoYXBIclVQNjlvQThvR21NQ25kTzlhN2dVMlIwcGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiNzRKVldQaEFGQW5ZSExXQ00zT1BVcCtrcWxrODZTQVAyRUJ3Wis0eUxzYz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicUxSVTc4c0RRWUdsLWZETTVHZWVIZyIsInBob25lSWQiOiJkNDE2NzZhNy1hODNjLTRlZTctOTA4MC00MmVjN2VhNzc5NDIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM2FNZlZNZk5BSkdhMmJvZ2FQZ2hqQUl2UjI0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVVNVZKU0lCY1hBZVZ4c0YvbDhOMEtHd2gybz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaTE45RlNaQyIsIm1lIjp7ImlkIjoiMjMzNTMxNzI1MTYwOjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKR241TjhCRUtmQ3M3TUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCZHprZE5ycHpNTDlJT3FKcmM1L2NZYlY3NGpXRFhBNXRqcXpzbm5TbFhnPSIsImFjY291bnRTaWduYXR1cmUiOiJkUVd4UGFkK0JueGdvNnZGVE95eWdUMWVFMHZyRXA5aDluRkxtc0NnYngvMXd1WUZQSFRXbVpkWVJNVjJobVUvSmQ3U1JwVFhxRUpDY2U4Q0hxdVREUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYSs3Q3JhbmNCKytHeDVnMVc2bDlpaklQS2dCZ2Y5eGJiWkoyL2FqalA5UytFTVhZeUYvNnY1VExzbVdoKzdLRUhQeGJVUUhWSlVTYWkrUFJxUi9Yamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1MzE3MjUxNjA6NTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVhjNUhUYTZjekMvU0RxaWEzT2YzR0cxZStJMWcxd09iWTZzN0o1MHBWNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODQxMTU3MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJcDYifQ==,
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '❌‿❌➳ᴹᴿ᭄ⅅÇ⚔️ ℒøℛⅅ ℬℛëëℤᎽ✧❤乂',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'recording',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
