const Discord = require('discord.js');
const { search } = require('yt-search');
const client = new Discord.Client({ partials: ['USER', 'GUILD_MEMBER', 'CHANNEL', 'MESSAGE', 'REACTION'] });
var prefix = 'h/'
const token = 'ODUwMDYwNDQ0MDY4MjE2ODcy.YLkOew._jK3eRq_YL-_-DZCg5M_impIZIY';
const queue = new Map();
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
var imgList = new Array('https://cdn.discordapp.com/attachments/715429319639433289/769930775297523772/Grand_Theft_Auto_V_Screenshot_2020.10.25_-_17.27.30.52.png')
var randomizeColor = 'off';

client.login(token);
client.on('ready', () => {
    console.log('Bot ON');
    client.user.setActivity("Made by DanHere#3868"); 
});

client.on('guildMemberAdd', member => {
  var image = imgList[Math.floor(Math.random() * imgList.length)];
  if(randomizeColor === 'off') {
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
            "url": `${image}`
          },
          "thumbnail": {
            "url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
          }
        }
    })
  } else {
    color = getRandomNumber(100000, 999999);
    member.guild.channels.cache.get("697855703423123526").send({
      "content": `${member}`,
      "embed": 
        {
          "description": "**:performing_arts: Тут вы можете ознакомится с правилами:**\n<#675858836976041984>\n\n**:question: Если вам не выдают роль или есть вопрос пишите в ЛС:**\n<@631115972102586388>\n\n**:busts_in_silhouette: По вопросам вступления:**\n<@287910554129924097>",
          "color": `${color}`,
          "author": {
            "name": "Discord Family Hennessy",
            "icon_url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
          },
          "image": {
            "url": `${image}`
          },
          "thumbnail": {
            "url": "https://sun9-25.userapi.com/impf/TcU6sW5Y-tLOg-gXrbm1wGMFfxbOQgABUyizdw/tMeb8GZ_Rc8.jpg?size=2000x2000&quality=96&sign=1022d5c58b94bdc065e79608a6d483b4&type=album"
          }
        }
    })

  }


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
      deletemessage()
      isAdmin(message.member);
      message = "";
      for(i = 1; i < args.length; i++) {
        message = message + " " + args[i]
      }
      client.channels.cache.get(args[0]).send(message)

  };

  const server_queue = queue.get(message.guild.id);
  if(command === 'play'){
  deletemessage()
  const voiceChannel = message.member.voice.channel;
  if(!voiceChannel) return message.channel.send('<:error:850726590660476928> **Вы должны быть в голосовом канале чтобы использовать эту команду!**');
  const voicePerms = voiceChannel.permissionsFor(message.client.user);
  if(!voicePerms.has('CONNECT')) return message.channel.send('<:error:850726590660476928> **У вас нет прав чтобы использовать данную команду!**');
  if(!voicePerms.has('SPEAK')) return message.channel.send('<:error:850726590660476928> **У вас нет прав чтобы использовать данную команду!**');
  if(!args.length) return message.channel.send('<:error:850726590660476928> **Введите название или ссылку на видео!**');
  let song = {};

  if(ytdl.validateURL(args[0])) {
    const songInfo = await ytdl.getInfo(args[0]);
    song = {title: songInfo.videoDetails.title, author: songInfo.videoDetails.author, url: songInfo.videoDetails.video_url}
  } else {
    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);
      return(videoResult.videos.length > 1) ? videoResult.videos[0]: null;
    }
    const video = await videoFinder(args.join(' '))
    if(video) {
      song = {title: video.title, author: video.author, url: video.url}
    } else {
      message.channel.send('<:error:850726590660476928> **Видео не найдено.**');
    }
  }

if(!server_queue) {
  const queueConstructor = {
    voice_channel: voiceChannel,
    text_channel: message.channel,
    connection: null,
    songs: []
  };
  queue.set(message.guild.id, queueConstructor)
  queueConstructor.songs.push(song)

  try {
    const connection = await voiceChannel.join();
    queueConstructor.connection = connection;
    videoPlayer(message.guild, queueConstructor.songs[0])
  } catch(err) {
    queue.delete(message.guild.id)
    message.channel.send('<:error:850726590660476928> **Ошибка при подключении.**');
    console.log(err);
  } 
} else {
  server_queue.songs.push(song);
  message.channel.send(`<:queue:850726004297302046> **Песня __${song.title}__ добавлена в очередь на __${server_queue.songs.length}__ месте.**`);
}

} else if(command === 'stop'){
    deletemessage()
    stopSong(message, server_queue)
} else if(command === 'skip'){
    deletemessage()
    skipSong(message, server_queue)
  };

if(command === 'd'){
    isAdmin(message.member);
    message.delete();
    message.channel.bulkDelete(args[0]).catch(error => console.log(error.stack))
    console.log(`Cleared ${args[0]} messages.`)
}

if(command === 'addimg'){
  isAdmin(message.member);
  deletemessage()
if(!args[0]) return message.channel.send('<:error:850726590660476928> **Недостаточно аргументов!**');
if(args.length > 1) {
for(i = 0; i < args.length; i++) {
  imgList.push(args[i])
  message.channel.send(`<:checkmark:850726004649099264> **Картина ${i+1} добавлена в рандомайзер!**`)
}
} else if(args.length = 1) {
  imgList.push(args[0])
  message.channel.send('<:checkmark:850726004649099264> **Картина добавлена в рандомайзер!**')
}
}

if(command === 'saveimg') {
  isAdmin(message.member);
  deletemessage();
  var message = "https://cdn.discordapp.com/attachments/715429319639433289/769930775297523772/Grand_Theft_Auto_V_Screenshot_2020.10.25_-_17.27.30.52.png";
  if(imgList.length > 1) {
    for(i = 1; i < imgList.length; i++) {
      message = message + " " + imgList[i]
    }
    console.log(message);
  }
}

if(command === 'rc') {
  isAdmin(message.member);
  deletemessage();
  if(!args[0]) return message.channel.send('<:error:850726590660476928> **Недостаточно аргументов!**');
  if(args.length > 1) return message.channel.send('<:error:850726590660476928> **Слишком много аргументов!**')
  if(args[0] === "on") {
    randomizeColor = "on";
    message.channel.send('<:checkmark:850726004649099264> **Рандомайзер цвета включен!**')
  } else if (args[0] === "off") {
    message.channel.send('<:checkmark:850726004649099264> **Рандомайзер цвета выключен!**')
    randomizeColor = "off";
  } else {
    message.channel.send('<:error:850726590660476928> **Неправильные аргументы!**')
  }
}


});

const videoPlayer = async (guild, song) => {
  const song_queue = queue.get(guild.id);
    if (!song) {
        song_queue.voice_channel.leave();
        song_queue.text_channel.send(`<:queue:850726004297302046> **Очередь музыки закончилась.**`);
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        videoPlayer(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`<:music:850726004078149672> **Ебашу песню под названием - __${song.title}__**`);
}

const skipSong = (message, server_queue) => {
  if(!message.member.voice.channel) return message.channel.send('<:error:850726590660476928> **Вы должны быть в голосовом канале чтобы использовать эту команду!**');
  if(!server_queue) return message.channel.send('<:error:850726590660476928> **Ничего не было добавлено в очередь.**');
  message.channel.send(`**<:skip:850730256712466433> Переключаюсь на следующею композицию.**`);
  server_queue.connection.dispatcher.end();
}

const stopSong = (message, server_queue) => {
  if(!message.member.voice.channel) return message.channel.send('<:error:850726590660476928> **Вы должны быть в голосовом канале чтобы использовать эту команду!**');
  if(!server_queue) return message.channel.send('<:error:850726590660476928> **Ничего не было добавлено в очередь.**');
  message.channel.send(`**<:stop:850730472333508608> Остановил проигравание всех песен.**`);
  server_queue.song = [];
  server_queue.connection.dispatcher.end();
}

function isAdmin(user) {
  if(!user.hasPermission('ADMINISTRATOR')) return message.channel.send("<:error:850726590660476928> **У вас недостаточно прав!**")
}

function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}