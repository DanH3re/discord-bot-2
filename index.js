const Discord = require('discord.js')
const client = new Discord.Client({ partials: ['USER', 'GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION'] });
var prefix = '/'
const token = 'ODUwMDYwNDQ0MDY4MjE2ODcy.YLkOew._jK3eRq_YL-_-DZCg5M_impIZIY';
client.login(token);
client.on('ready', () => {
    console.log('Bot ON');
    client.user.setActivity("Made by DanHere#3868"); 
});

client.on('guildMemberAdd', member => {
  member.guild.channels.cache.get("697855703423123526").send({
    "content": `${member}`,
    "embed": 
      {
        "description": "**:performing_arts: Тут вы можете ознакомится с правилами:**\n<#675858836976041984>\n\n**:question: Если вам не выдают роль или есть вопрос пишите в ЛС:**\n<@631115972102586388>\n\n**:busts_in_silhouette: По вопросам вступления:**\n<@287910554129924097>",
        "color": 336699,
        "author": {
          "name": "Discord Family Hennessy",
          "icon_url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/715429319639433289/769930775297523772/Grand_Theft_Auto_V_Screenshot_2020.10.25_-_17.27.30.52.png"
        },
        "thumbnail": {
          "url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
        }
      }
  })

});

client.on("message", async message => {
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    function deletemessage() {
        if(message.channel.type !== 'dm') {
            message.delete()
        }


    
    }
    if(command === 'test'){
        deletemessage()
        message.guild.channels.cache.get("697855703423123526").send({
          "content": `${message.author}`,
          "embed": 
            {
              "description": "**:performing_arts: Тут вы можете ознакомится с правилами:**\n<#675858836976041984>\n\n**:question: Если вам не выдают роль или есть вопрос пишите в ЛС:**\n<@631115972102586388>\n\n**:busts_in_silhouette: По вопросам вступления:**\n<@287910554129924097>",
              "color": 336699,
              "author": {
                "name": "Discord Family Hennessy",
                "icon_url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
              },
              "image": {
                "url": "https://cdn.discordapp.com/attachments/715429319639433289/769930775297523772/Grand_Theft_Auto_V_Screenshot_2020.10.25_-_17.27.30.52.png"
              },
              "thumbnail": {
                "url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
              }
            }
        })
    };

    if(command === 'm'){
      message = "";
      for(i = 1; i < args.length; i++) {
        message = message + " " + args[i]
      }
      client.channels.cache.get(args[0]).send(message)

  };

});