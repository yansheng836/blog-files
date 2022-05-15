const ap1 = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
        name: '一直很安静',
        artist: '阿桑',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/一直很安静 - 阿桑.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/一直很安静 - 阿桑.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/一直很安静 - 阿桑.mp3'
    },
    {
        name: '亲爱的旅人啊（Cover：木村弓）',
        artist: '周深',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/亲爱的旅人啊（Cover：木村弓） - 周深.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/亲爱的旅人啊（Cover：木村弓） - 周深.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/亲爱的旅人啊（Cover：木村弓） - 周深.mp3'
    },
    {
        name: '大鱼',
        artist: '周深',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/大鱼 - 周深.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/大鱼 - 周深.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/大鱼 - 周深.mp3'
    },
    {
        name: '无羁',
        artist: 'Silu Wang-陈情令',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/无羁 - Silu Wang-陈情令.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/无羁 - Silu Wang-陈情令.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/无羁 - Silu Wang-陈情令.mp3'
    },
    {
        name: '盗将行',
        artist: '花粥,马雨阳',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/盗将行 - 花粥,马雨阳.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/盗将行 - 花粥,马雨阳.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/盗将行 - 花粥,马雨阳.mp3'
    },
    {
        name: '心如止水',
        artist: 'Ice Paper',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/心如止水 - Ice Paper.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/心如止水 - Ice Paper.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/心如止水 - Ice Paper.mp3'
    },
    {
        name: '我的梦',
        artist: '张靓颖',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/我的梦 - 张靓颖.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/我的梦 - 张靓颖.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/我的梦 - 张靓颖.mp3'
    },
    {
        name: 'Dream It Possible',
        artist: '张靓颖',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/Dream It Possible - 张靓颖.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/Dream It Possible - 张靓颖.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/Dream It Possible - 张靓颖.mp3'
    },
    {
        name: 'Let Her Go',
        artist: 'J.Fla',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/Let Her Go - J.Fla.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/Let Her Go - J.Fla.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/Let Her Go - J.Fla.mp3'
    },
    {
        name: '我很快乐',
        artist: '刘惜君',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/我很快乐 - 刘惜君.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/我很快乐 - 刘惜君.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/我很快乐 - 刘惜君.mp3'
    },
    {
        name: '南山南',
        artist: '马頔',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/南山南 - 马頔.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/南山南 - 马頔.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/南山南 - 马頔.mp3'
    },
    {
        name: '起风了',
        artist: '买辣椒也用券',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/起风了 - 买辣椒也用券.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/起风了 - 买辣椒也用券.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/起风了 - 买辣椒也用券.mp3'
    },
    {
        name: '恋人心',
        artist: '魏新雨',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/恋人心 - 魏新雨.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/恋人心 - 魏新雨.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/恋人心 - 魏新雨.mp3'
    },
    {
        name: '断桥残雪',
        artist: '许嵩',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/断桥残雪 - 许嵩.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/断桥残雪 - 许嵩.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/断桥残雪 - 许嵩.mp3'
    },
    {
        name: '曾经的你',
        artist: '许巍',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/曾经的你 - 许巍.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/曾经的你 - 许巍.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/曾经的你 - 许巍.mp3'
    },
    {
        name: '烟影如画',
        artist: '重小烟',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/烟影如画 - 重小烟.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/烟影如画 - 重小烟.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/烟影如画 - 重小烟.mp3'
    },
    {
        name: '成都',
        artist: '赵雷',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/成都 - 赵雷.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/成都 - 赵雷.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/成都 - 赵雷.mp3'
    },
    {
        name: '一个人',
        artist: '夏婉安',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/一个人 - 夏婉安.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/一个人 - 夏婉安.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/一个人 - 夏婉安.mp3'
    },
    {
        name: '送别',
        artist: '朴树',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/送别 - 朴树.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/送别 - 朴树.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/送别 - 朴树.mp3'
    },
    {
        name: '风起时',
        artist: '胡歌',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/风起时 - 胡歌.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/风起时 - 胡歌.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/风起时 - 胡歌.mp3'
    },
    {
        name: '追光者',
        artist: '岑宁儿',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/追光者 - 岑宁儿.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/追光者 - 岑宁儿.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/追光者 - 岑宁儿.mp3'
    },
    {
        name: '炽热的青春',
        artist: '贾乃亮',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/炽热的青春 - 贾乃亮.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/炽热的青春 - 贾乃亮.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/炽热的青春 - 贾乃亮.mp3'
    },
    {
        name: '逆流成河',
        artist: '金南玲',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/逆流成河 - 金南玲.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/逆流成河 - 金南玲.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/逆流成河 - 金南玲.mp3'
    },
    {
        name: 'Rage your dream',
        artist: 'm.o.v.e',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/Rage your dream - m.o.v.e.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/Rage your dream - m.o.v.e.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/Rage your dream - m.o.v.e.mp3'
    },
    {
        name: 'いつも何度でも',
        artist: '宗次郎',
        lrc: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/lrc/いつも何度でも - 宗次郎.lrc',
        cover: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/cover/いつも何度でも - 宗次郎.jpg',
        url: 'https://cdn.jsdelivr.net/gh/yansheng836/blog-files/music/mp3/いつも何度でも - 宗次郎.mp3'
    }]
});