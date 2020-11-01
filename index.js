const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('OPEN.');
  client.user.setPresence({ game: { name: 'FBI OPEN UP!' }, status: 'online' })
});

client.on('message', (message) => {
  if(message.author.bot) return;
  
  if(message.content == '-ping') {
    return message.reply('pong');
  }
})

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '-lol') {
    return message.reply('lol');
  }

  if(message.content == '-spectacle') {
    let img = 'https://i.imgur.com/M226hm8.png';
    let embed = new Discord.RichEmbed()
      .setTitle('Spectacle')
      .setURL('http://www.naver.com')
      .setAuthor('MADE BY KEUYUL', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('MADE BY KEUYUL', img)

    message.channel.send(embed)
  } else if(message.content == '-help') {
    let helpImg = 'https://i.imgur.com/M226hm8.png';
    let commandList = [
      {name: '-help', desc: '도움말보기'},
      {name: '-ping', desc: 'pong'},
      {name: '-lol', desc: 'lol'},
      {name: '-spectalce', desc: 'spectacle bot 정보 보기'},
      {name: '-전체공지', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
      {name: '-청소', desc: '텍스트 지움'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of spectacle BOT', helpImg)
      .setColor('#00ffff')
      .setFooter(`spectacle BOT`)
      .setTimestamp()
    
    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }
})

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);
