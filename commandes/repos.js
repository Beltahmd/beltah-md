"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "repo", reaction: "", nomFichier: __filename }, async (dest, zk, commandeOptions) => {


const githubRepo = 'https://api.github.com/repos/Beltahmd/beltah-md';
const img = 'https://telegra.ph/file/6fcaf547aebbf7d08d8d1.jpg';


    const response = await fetch(githubRepo); 
        const data = await response.json(); 
 
        if (data) {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login,
               
            };
const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

const gitdata = `👋Hello, This is Beltah-Md. \nA Multidevice Whatsapp User Bot.

Fork and give a star to our Respiratory. 


✨STARS: ${repoInfo.stars} 
⏣FORKS:* ${repoInfo.forks} 
⏣RELEASE: ${releaseDate}
⏣Repo: ${data.html_url}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
👨‍💻 *OWNER:* *BELTAH*
__________________________________
            *Made With* 🤍`;


await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });

} else {
console.log("Could not fetch data")

}


});

   /*let z = 'Hello This is  *FLASH-MD* \n\n ' + "The Following is *FLASH-MD Repo.*";
    let d = './Sprinter';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");*/
