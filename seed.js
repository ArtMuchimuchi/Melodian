const   mongoose    =   require("mongoose"),
        Music       =   require("./models/music"),
        User        =   require("./models/user"),
        Artist      =   require("./models/artist");

const seedArtist = [
    {
        name: "BTS",
        artistImage: "/upload/profiles/BTS.jpg",
        followers: 599
    },
    {
        name: "Takayan",
        artistImage: "/upload/profiles/takayan.jpg",
        followers: 236
    },
    {
        "name": "P!nk",
        "artistImage": "/upload/profiles/image-1653406626366.jpg",
        "followers": 563
    },
    {
        "name": "Twice",
        "artistImage": "/upload/profiles/image-1653409039879.jpg",
        "followers": 7234
    },
    {
        "name": "Eve",
        "artistImage": "/upload/profiles/image-1653409160609.jpg",
        "followers": 1563
    },
    {
        "name": "ITZY",
        "artistImage": "/upload/profiles/image-1653409379944.jpg",
        "followers": 2360
    },
    {
        "name": "MAMAMOO",
        "artistImage": "/upload/profiles/image-1653409499866.jpg",
        "followers": 2216
    },
    {
        "name": "Stray Kids",
        "artistImage": "/upload/profiles/image-1653409595216.jpg",
        "followers": 2035
    }
];

const musicBTS = [
    {
        "name": "Anpanman",
        "imageCover": "/upload/images/imageCover-1653236710691.jpg",
        "musicSource": "/upload/musics/musicSource-1653236710692.mp3",
        "release": "2018-05-28",
        "lyrics": "Waiting for you, Anpanman\r\nWaiting for you, Anpanman\r\n내겐 없지 알통이나 갑빠\r\n내겐 없지 super car like Batman\r\n되게 멋진 영웅이 내 낭만\r\nBut 줄 수 있는 건 오직 Anpan\r\n꿈꿔왔네 hero like Superman\r\n힘껏 뛰었네 하늘높이 방방\r\n무릎팍 까지는 것 따윈 두렵지 않아\r\n순수한 내 어릴 적의 망상\r\nEh, I'm not a superhero\r\nOoh 많은 것을 바라지마, eh\r\nI can be your hero\r\n이런 말이 가당키나\r\n한 일인지 모르겠어 정말 (정말)\r\n근데 꼭 해야겠어요 엄마\r\n내가 아니면 누가할까\r\nYou can call me, say Anpan\r\nEh, waiting for you Anpanman (lemme hear ya say, lemme hear ya say)\r\nWaiting for you Anpanman (turn it up, turn it up, turn it up)\r\n좀 더 힘을 내볼래 (lemme hear ya say, lemme hear ya say)\r\n너의 힘이 돼줄래 (turn it up, turn it up, turn it up)\r\n계속 돌려 돌려 나의 Anpan\r\nKeep ballin' ballin' still 방탄\r\n눈 뜨니 hero but still in 미로\r\n그 young man, young man, young man\r\n계속 몰래 몰래 상처 만땅\r\nBut ballin' ballin' still 방탄\r\n아파도 hero 두려움은 뒤로 Anpanman panman panman\r\nI'm a new generation Anpanman\r\nI'm a new superhero Anpanman\r\n내가 가진 건 이 노래 한방\r\nLemme say \"all the bad men, cop out\"\r\nI'm a new generation Anpanman\r\nI'm a new superhero Anpanman\r\n내가 가진 건 이 노래 한방\r\nLemme say \"all the bad men, cop out\"\r\n가끔은 이 모든 게 두렵네\r\n사랑하는 게 넘 많이 생겼기에\r\n누군 말해 너도 이제 꼰대 다 됐으\r\n자격 없어 그냥 하던 거나 잘해\r\n그래도 난 영웅이고파\r\n줄 수 있는 건 단팥빵\r\n과 수고했단 말뿐이다만\r\n부름 바로 날라갈게 날 불러줘\r\nWaiting for you Anpanman (lemme hear ya say, lemme hear ya say)\r\nWaiting for you Anpanman (turn it up, turn it up, turn it up)\r\n좀 더 힘을 내볼래 (lemme hear ya say, lemme hear ya say)\r\n너의 힘이 돼줄래 (turn it up, turn it up, turn it up)\r\n계속 돌려 돌려 나의 Anpan\r\nKeep ballin' ballin' still 방탄\r\n눈 뜨니 hero but still in 미로\r\n그 young man, young man, young man\r\n계속 몰래 몰래 상처 만땅\r\nBut ballin' ballin' still 방탄\r\n아파도 hero 두려움은 뒤로\r\nAnpanman panman panman\r\n솔직하게 무서워 넘어지는 게\r\n너희들을 실망시키는 게\r\n그래도 내 온 힘을 다해서라도\r\n나 꼭 너의 곁에 있을게\r\n다시 넘어지겠지만\r\n또다시 실수 하겠지만\r\n또 진흙투성이겠지만\r\n나를 믿어 나는 hero니까 yeah yeah\r\n돌려 돌려 나의 Anpan\r\nKeep ballin' ballin' still 방탄\r\n눈 뜨니 hero but still in 미로\r\n그 young man, young man, young man\r\n계속 몰래 몰래 상처 만땅\r\nBut ballin' ballin' still 방탄\r\n아파도 hero 두려움은 뒤로\r\nAnpanman panman panman\r\nI'm a new generation Anpanman\r\nI'm a new superhero Anpanman\r\n내가 가진 건 이 노래 한방\r\nLemme say \"all the bad men, cop out\"\r\nI'm a new generation Anpanman\r\nI'm a new superhero Anpanman\r\n내가 가진 건 이 노래 한방\r\nLemme say \"all the bad men, cop out\"\r\nWow oh oh oh oh oh",
        "genre": "K-Pop",
        "likes": 48
    },
    {
        "name": "Boy With Luv",
        "imageCover": "/upload/images/imageCover-1653237407659.jpg",
        "musicSource": "/upload/musics/musicSource-1653237407660.mp3",
        "release": "2019-04-12",
        "lyrics": "모든 게 궁금해 how's your day\r\nOh tell me (oh yeah oh yeah, ah yeh ah yeh)\r\n뭐가 널 행복하게 하는지\r\nOh text me (oh yeah oh yeah, oh yeah oh yeah)\r\nYour every picture\r\n내 머리맡에 두고 싶어 oh bae\r\nCome be my teacher\r\n네 모든 걸 다 가르쳐줘\r\nYour one, your two\r\nListen my my baby 나는\r\n저 하늘을 높이 날고 있어\r\n(그때 니가 내게 줬던 두 날개로)\r\n이제 여긴 너무 높아\r\n난 내 눈에 널 맞추고 싶어\r\nYeah you makin' me a boy with love\r\nOh my my my, oh my my my\r\nI've waited all my life\r\n네 전부를 함께하고 싶어\r\nOh my my my, oh my my my\r\nLooking for something right\r\n이제 조금은 나 알겠어\r\nthan a moment, than a moment, love\r\n(Ooh ah ooh ah ooh ah ooh ah ah) I have waited longer\r\n(Ooh ah ooh ah ooh ah ooh ah ooh)\r\nFor a boy with, for a boy with love\r\n널 알게 된 이후 ya 내 삶은 온통 너 ya\r\n사소한 게 사소하지 않게 만들어버린 너라는 별\r\n(Oh yeah) 하나부터 열까지 ay ay 모든 게 특별하지 ay\r\n너의 관심사 걸음걸이 말투와\r\n사소한 작은 습관들까지 (Hope world)\r\nAy 다 말하지 너무 작던 내가 영웅이 된 거라고 (oh nah)\r\n난 말하지 운명 따윈 처음부터 내 게 아니었다고 (oh nah)\r\n세계의 평화 (no way)\r\n거대한 질서 (no way)\r\n그저 널 지킬 거야 난 (boy with love)\r\nListen my my baby 나는\r\n저 하늘을 높이 날고 있어\r\n(그때 니가 내게 줬던 두 날개로)\r\n이제 여긴 너무 높아\r\n난 내 눈에 널 맞추고 싶어\r\nYeah you makin' me a boy with love\r\nOh my my my, oh my my my\r\nYou got me high so fast\r\n네 전부를 함께하고 싶어\r\nOh my my my, oh my my my\r\nYou got me fly so fast\r\n이제 조금은 나 알겠어\r\nthan a boy with love\r\n(Ooh ah ooh ah ooh ah ooh ah ah) love is nothing stronger\r\n(Ooh ah ooh ah ooh ah ooh ah ooh) (than a boy with) than a boy with love\r\n툭 까놓고 말할게\r\n나도 모르게 힘이 들어가기도 했어\r\n높아버린 sky, 커져버린 hall\r\n때론 도망치게 해달라며 기도했어\r\nBut 너의 상처는 나의 상처\r\n깨달았을 때 나 다짐했던걸\r\n니가 준 이카루스의 날개로\r\n태양이 아닌 너에게로\r\nLet me fly\r\nOh my my my, oh my my my\r\nI've waited all my life\r\n네 전부를 함께하고 싶어\r\nOh my my my, oh my my my\r\nLooking for something right\r\n이제 조금은 나 알겠어\r\nthan a moment, than a moment, love\r\n(Ooh ah ooh ah ooh ah ooh ah ah) love is nothing stronger\r\n(Ooh ah ooh ah ooh ah ooh ah ooh) (than a boy with) than a boy with love",
        "genre": "K-Pop",
        "likes": 121
    },
    {
        "name": "Permission to Dance",
        "imageCover": "/upload/images/imageCover-1653389282790.png",
        "musicSource": "/upload/musics/musicSource-1653389282790.mp3",
        "release": "2021-07-09",
        "lyrics": "It's the thought of being young\r\nWhen your heart's just like a drum\r\nBeating louder with no way to guard it\r\nWhen it all seems like it's wrong\r\nJust sing along to Elton John\r\nAnd to that feeling, we're just getting started\r\nWhen the nights get colder\r\nAnd the rhythms got you falling behind\r\nJust dream about that moment\r\nWhen you look yourself right in the eye, eye, eye\r\nThen you say\r\nI wanna dance, the music's got me going\r\nAin't nothing that can stop how we move, yeah\r\nLet's break our plans and live just like we're golden\r\nAnd roll in like we're dancing fools\r\nWe don't need to worry\r\n'Cause when we fall, we know how to land\r\nDon't need to talk the talk, just walk the walk tonight\r\n'Cause we don't need permission to dance\r\nThere's always something that's standing in the way\r\nBut if you don't let it faze ya, you'll know just how to break\r\nJust keep the right vibe, yeah, 'cause there's no looking back\r\nThere ain't no one to prove, we don't got this on lock, yeah\r\nThe wait is over\r\nThe time is now, so let's do it right\r\nYeah, we'll keep going\r\nAnd stay up until we see the sunrise\r\nAnd we'll say\r\nI wanna dance, the music's got me going\r\nAin't nothing that can stop how we move, yeah\r\nLet's break our plans and live just like we're golden\r\nAnd roll in like we're dancing fools\r\nWe don't need to worry\r\n'Cause when we fall, we know how to land\r\nDon't need to talk the talk, just walk the walk tonight\r\n'Cause we don't need permission to dance\r\nDa-na-na-na-na-na-na, da-na-na-na-na-na-na\r\nDa-na-na-na-na-na-na\r\nNo, we don't need permission to dance\r\nDa-na-na-na-na-na-na, da-na-na-na-na-na-na\r\nDa-na-na-na-na-na-na\r\nWell, let me show ya\r\nThat we can keep the fire alive, mmm\r\n'Cause it's not over\r\nTill it's over, say it one more time, say\r\nI wanna dance, the music's got me going (the music's got me going)\r\nAin't nothing that can stop how we move, yeah (hey)\r\nLet's break our plans and live just like we're golden\r\nAnd roll in like we're dancing fools (like we're dancing fools)\r\nWe don't need to worry\r\n'Cause when we fall, we know how to land (we know how to land)\r\nDon't need to talk the talk, just walk the walk tonight\r\n'Cause we don't need permission to dance",
        "genre": "K-Pop",
        "likes": 200
    },
    {
        "name": "DNA",
        "imageCover": "/upload/images/imageCover-1653389590962.jpg",
        "musicSource": "/upload/musics/musicSource-1653389590964.mp3",
        "release": "2018-09-18",
        "lyrics": "첫눈에 널 알아보게 됐어\r\n서롤 불러왔던 것처럼\r\n내 혈관 속 DNA가 말해줘\r\n내가 찾아 헤매던 너라는 걸\r\n우리 만남은 (만남은) 수학의 공식 (수학의 공식)\r\n종교의 율법 (율법) 우주의 섭리 (우주의 섭리)\r\n내게 주어진 운명의 증거, 너는 내 꿈의 출처\r\nTake it, take it 너에게 내민 내 손은 정해진 숙명\r\n걱정하지 마 love\r\n이 모든 건 우연이 아니니까\r\n우린 완전 달라 baby\r\n운명을 찾아낸 둘이니까\r\n우주가 생긴 그 날부터 계속 (계속)\r\n무한의 세기를 넘어서 계속 (계속 계속 ya)\r\n우린 전생에도 (우린 전생에도) 아마 다음 생에도 (아마 다음 생에도)\r\n영원히 함께니까 (DNA)\r\n이 모든 건 우연이 아니니까 (DNA)\r\n운명을 찾아낸 둘이니까 DNA\r\nI want it this love (this love), I want it real love (real love)\r\n난 너에게만 집중해\r\n좀 더 세게 날 이끄네\r\n태초의 DNA (DNA) 가 널 원하는데 (하는데)\r\n이건 필연이야 I love us (love us)\r\n우리만이 true lovers (lovers)\r\n그녀를 볼 때마다 소스라치게 놀라\r\n신기하게 자꾸만 숨이 멎는 게 참 이상해 설마\r\n이런 게 말로만 듣던 사랑이란 감정일까 (oh yeah)\r\n애초부터 내 심장은 널 향해 뛰니까\r\n걱정하지 마 love\r\n이 모든 건 우연이 아니니까\r\n우린 완전 달라 baby\r\n운명을 찾아낸 둘이니까\r\n우주가 생긴 그 날부터 계속 (계속)\r\n무한의 세기를 넘어서 계속 (계속 계속 ya)\r\n우린 전생에도 (우린 전생에도) 아마 다음 생에도 (아마 다음 생에도)\r\n영원히 함께니까 (DNA)\r\n이 모든 건 우연이 아니니까 (DNA)\r\n운명을 찾아낸 둘이니까 DNA\r\n돌아보지 말아\r\n운명을 찾아낸 우리니까\r\n후회하지 말아 baby\r\n영원히 영원히 영원히 영원히\r\n함께니까\r\n걱정하지 마 love\r\n이 모든 건 우연이 아니니까\r\n우린 완전 달라 baby\r\n운명을 찾아낸 둘이니까 DNA\r\nLa la la la la\r\nLa la la la la\r\n우연이 아니니까 (DNA)\r\nLa la la la la\r\nLa la la la la\r\n우연이 아니니까 DNA",
        "genre": "K-Pop",
        "likes": 180
    },
    {
        "name": "Butter",
        "imageCover": "/upload/images/imageCover-1653391140610.png",
        "musicSource": "/upload/musics/musicSource-1653391140611.mp3",
        "release": "2021-05-21",
        "lyrics": "Smooth like butter, like a criminal undercover\r\nGon' pop like trouble breaking into your heart like that (ooh)\r\nCool shade, stunner, yeah, I owe it all to my mother, uh\r\nHot like summer, yeah, I'm making you sweat like that (break it down!)\r\nOoh, when I look in the mirror\r\nI'll melt your heart into two\r\nI got that superstar glow, so\r\nOoh (do the boogie, like)\r\nA side step, right-left, to my beat\r\nHigh like the moon, rock with me, baby\r\nKnow that I got that heat\r\nLet me show you 'cause talk is cheap\r\nSide step, right-left, to my beat\r\nGet it, let it roll\r\nSmooth like butter, pull you in like no other\r\nDon't need no Usher to remind me you got it bad\r\nAin't no other that can sweep you up like a robber\r\nStraight up, I (got ya)\r\nMaking you fall like that (break it down)\r\nOoh, when I look in the mirror\r\nI'll melt your heart into two\r\nI got that superstar glow, so\r\nOoh (do the boogie, like)\r\nSide step, right-left, to my beat\r\nHigh like the moon, rock with me, baby\r\nKnow that I got that heat\r\nLet me show you 'cause talk is cheap\r\nA side step, right-left, to my beat\r\nGet it, let it roll\r\nGet it, let it roll\r\nGet it, let it roll\r\nIce on my wrist, I'm the nice guy\r\nGot the right body and the right mind\r\nRolling up the party, got the right vibe\r\nSmooth like (butter), hate us (love us)\r\nFresh boy, pull up and we lay low\r\nAll the players get moving when the bass low\r\nGot ARMY right behind us when we say so\r\nLet's go\r\nSide step, right-left, to my beat (right-left, to my beat)\r\nHigh like the moon, rock with me, baby\r\nYou know that I got that heat\r\nLet me show you 'cause talk is cheap (you know that talk is cheap)\r\nSide step, right-left, to my beat\r\nGet it, let it roll\r\nSmooth like (butter), cool shade (stunner)\r\nAnd you know we don't stop\r\nHot like (summer), ain't no (bummer)\r\nYou'll be like, \"Oh my God\"\r\nWe gon' make you rock, and you say (yeah)\r\nWe gon' make you bounce, and you say (yeah)\r\nHotter, sweeter, cooler, butter!\r\nGet it, let it roll",
        "genre": "K-Pop",
        "likes": 165
    },
    {
        "name": "Dynamite",
        "imageCover": "/upload/images/imageCover-1653395034110.jpg",
        "musicSource": "/upload/musics/musicSource-1653395034111.mp3",
        "release": "2020-08-21",
        "lyrics": "'Cause I-I-I'm in the stars tonight\r\nSo watch me bring the fire and set the night alight\r\nShoes on, get up in the morn'\r\nCup of milk, let's rock and roll\r\nKing Kong, kick the drum, rolling on like a Rolling Stone\r\nSing song when I'm walking home\r\nJump up to the top, LeBron\r\nDing dong, call me on my phone\r\nIce tea and a game of ping pong, huh\r\nThis is getting heavy\r\nCan you hear the bass boom? I'm ready (woo hoo)\r\nLife is sweet as honey\r\nYeah, this beat cha-ching like money, huh\r\nDisco overload, I'm into that, I'm good to go\r\nI'm diamond, you know I glow up\r\nHey, so let's go\r\n'Cause I-I-I'm in the stars tonight\r\nSo watch me bring the fire and set the night alight (hey)\r\nShining through the city with a little funk and soul\r\nSo I'ma light it up like dynamite, whoa oh oh\r\nBring a friend, join the crowd\r\nWhoever wanna come along\r\nWord up, talk the talk\r\nJust move like we off the wall\r\nDay or night, the sky's alight\r\nSo we dance to the break of dawn\r\nLadies and gentlemen, I got the medicine\r\nSo you should keep ya eyes on the ball, huh\r\nThis is getting heavy\r\nCan you hear the bass boom? I'm ready (woo hoo)\r\nLife is sweet as honey\r\nYeah, this beat cha-ching like money\r\nDisco overload, I'm into that, I'm good to go\r\nI'm diamond, you know I glow up\r\nLet's go\r\n'Cause I-I-I'm in the stars tonight\r\nSo watch me bring the fire and set the night alight (hey)\r\nShining through the city with a little funk and soul\r\nSo I'ma light it up like dynamite, whoa oh oh\r\nDy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite\r\nDy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite\r\nShining through the city with a little funk and soul\r\nSo I'ma light it up like dynamite, whoa oh oh\r\nDy-na-na-na, na-na, na-na, ayy\r\nDy-na-na-na, na-na, na-na, ayy\r\nDy-na-na-na, na-na, na-na, ayy\r\nLight it up like dynamite\r\nDy-na-na-na, na-na, na-na, ayy\r\nDy-na-na-na, na-na, na-na, ayy\r\nDy-na-na-na, na-na, na-na, ayy\r\nLight it up like dynamite\r\n'Cause I-I-I'm in the stars tonight\r\nSo watch me bring the fire and set the night alight\r\nShining through the city with a little funk and soul\r\nSo I'ma light it up like dynamite (this is ah)\r\n'Cause I-I-I'm in the stars tonight\r\nSo watch me bring the fire and set the night alight (alight, oh)\r\nShining through the city with a little funk and soul\r\nSo I'ma light it up like dynamite, whoa (light it up like dynamite)\r\nDy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite\r\nDy-na-na-na, na-na, na-na-na, na-na-na, life is dynamite\r\nShining through the city with a little funk and soul\r\nSo I'ma light it up like dynamite, whoa oh oh",
        "genre": "K-Pop",
        "likes": 176
    }
];

const musicTakayan = [
    {
        "name": "Persecution Complex",
        "imageCover": "/upload/images/imageCover-1653392937550.jpg",
        "musicSource": "/upload/musics/musicSource-1653392937551.mp3",
        "release": "2021-08-15",
        "lyrics": "Show time 病み 到来\r\n別に生きる意味も無い\r\n暗い将来 私よりも\r\nかわいいのなんで？\r\nかっこいいのなんで？\r\n頑張ってるのに\r\n悲しくなるネ\r\nあいつよりもモテてみたいなぁ\r\nいつもよりもはしゃいでいたいわ\r\n内緒にしてた心の中\r\nいつか僕も明るくなれるかな？\r\nずっと泣いて凹んだ日々も\r\n過ぎては何の意味もなくなるの\r\n神様お願いだよ...\r\n教えて！\r\nあとどれくらいの努力をしたら\r\n皆と同じくらいの「普通」になれるの？\r\nしゃあないわ！それなら死ぬまで\r\nこの個性磨いて いつか笑って！\r\n嫉妬する必要もないや\r\nリセットなんて一度もないから\r\nこの世界に一人しかいない\r\n生きれてる奇跡 君と居れりゃ最高！\r\nDon't cry\r\n最悪な別れ方をしても\r\n問題ないよ 次の出会い\r\nゆらりゆらり\r\n君の所為で傷付いたけど\r\n強くなれたし\r\nもう騙されないよ\r\n「臆病で進めない」\r\nそんな私をバカにしているけれど\r\n純粋だって危険沢山！\r\n被害妄想も大事なんだ\r\n何が「正解」か分かんないな\r\n元々存在もしないか笑\r\n昨日にさよなら！\r\n今日にばとんぱす！\r\nあとどれくらいの努力をしたら\r\n皆と同じくらいの「普通」になれるの？\r\nしゃあないわ！それなら死ぬまで\r\nこの個性磨いて いつか笑って！\r\n嫉妬する必要もないや\r\nリセットなんて 一度もないから\r\nこの世界に一人しかいない\r\n生きれてる奇跡 君と居れりゃ最高！",
        "genre": "J-Pop",
        "likes": 54
    },
    {
        "name": "If the face is good",
        "imageCover": "/upload/images/imageCover-1653404795941.jpg",
        "musicSource": "/upload/musics/musicSource-1653404795943.mp3",
        "release": "2021-02-27",
        "lyrics": "誰しも生まれた頃から背負ってる\r\n殺したい程のコンプレックスを\r\n歳を取るにつれて違う目にパーツを笑われる\r\n\r\n毎夜 鏡ばかり眺めて 無心になる\r\n嫌いになって 顔 恨んで、恨んでさ\r\nあいつのたった一言で この泥沼だ 死んでくれ。\r\nでもおさらばだよ ちょっと痛いけど 変えられる魔法があるの\r\nお疲れ自分 眠くなってきた 努力が映える\r\n馬鹿にしてきた奴らは今に見ときな\r\n誰よりも可愛くて 見下す自分へ\r\n顔も心まで 初めは腫れるけど\r\n変わるならどうでもいいよ\r\n量産型の服もストリート系の服も\r\nボブもツインテもロングもセミロングも似合う\r\n数ヶ月後 お姫様になる\r\n\r\nダイエットしようとも 愛想振り撒いても 顔がゴリラなら仕方が無いの\r\n推しに使うバイト代じゃなくて大工するために貯める パパ活\r\n好きな人に告白しても愛想笑いで引きつって「ごめん」って言葉\r\n仲良くなった友達にふと「ここ目立つよね」タチ悪いってマジ\r\nぴぇんって言う けどブサイク でもおかしい、もう数ヶ月経ってる\r\n逆に酷くなってるよ 医者にTelよ　お前も私を見捨てるの！？\r\n\r\nでもおさらばだよ ちょっと痛いけど 変えられる魔法があるの\r\nお疲れ自分 眠くなってきた 努力が映える\r\n馬鹿にしてきた奴らは今に見ときな\r\n誰よりも可愛くて 見下す自分へ\r\n顔も心まで 初めは腫れるけど\r\n変わるならどうでもいいよ\r\n量産型の服もストリート系の服も\r\nボブもツインテもロングもセミロングも似合う\r\n数ヶ月後 お姫様になる",
        "genre": "J-Pop",
        "likes": 12
    },
    {
        "name": "Please do not overdo",
        "imageCover": "/upload/images/imageCover-1653405452150.jpg",
        "musicSource": "/upload/musics/musicSource-1653405452151.mp3",
        "release": "2020-04-11",
        "lyrics": "Baby Don't Cry 虚無な部屋へ逃げて\r\nその問題 錠剤と酒で濁してさ\r\nもうお腹いっぱい 苦しいだけ 変わらない\r\nどうか嫌なら抜け出して 笑って 教えて\r\nクソなアイツも同じ様に死ぬ\r\n些細なことにのめり込まないで\r\n気遣い素敵だ 百倍大人さ\r\n素面でも上がれる貴方を。\r\n「自分は良くても他人はダメ」 亭主関白な恋人\r\n愛する人ができたセフレも 人間壊す社会も\r\n時間の流れ しゃあない でも自分は責めちゃいけない\r\n死にたいなら辛くて報われない人達同士\r\n傷舐め合って遊べば良いじゃん。\r\nBaby Don't Cry 虚無な部屋へ逃げて\r\nその問題 錠剤と酒で濁してさ\r\nもうお腹いっぱい 苦しいだけ 変わらない\r\nどうか嫌なら抜け出して 笑って 教えて",
        "genre": "J-Pop",
        "likes": 64
    },
    {
        "name": "Just disappear",
        "imageCover": "/upload/images/imageCover-1653405711829.jpg",
        "musicSource": "/upload/musics/musicSource-1653405711830.mp3",
        "release": "2020-06-13",
        "lyrics": "消えて無くなるだけ\r\n笑っても泣いても同じだって\r\nさあ生きろ 不思議な矛盾を\r\n感じなくなくなるまで\r\nどうぞお勝手に 身捨て その目に\r\n「嘘」「悩み」「自分」を背負って\r\n金 性欲 人格を変える\r\n考えたくない もうバイバイ\r\n時間忘れ 今だけはバイバイなんだ\r\n人と人は所詮 同類なのに\r\n何故か立場 無駄にマウント取りたがる\r\n「黙れや」 心でずっと叫んでる\r\nちっぽけな独りは もう呆れてる\r\nあの日に貴方は「逢える」と書いた\r\n誰かに見惚れてさ 逢えず 来ない晩\r\nあの場所 自分だけが兵隊\r\n希望・助けは心じゃない スマホの画面の中\r\nお偉いさん 闇 不快じゃん\r\n世界救うのは「エロ」か？\r\n死んでいく意味を教えてくれ\r\n遡っても 元々 意味も無く ただ生まれた\r\n他人に抓られて 自然と崩れた\r\n「本当の気持ち分かってよ」泣く\r\n「居場所未だ見つかんない」\r\nっていうかそれ探すのも意味無くない？\r\n大体、不平等すぎんだよ 全員幸せになってしまえ\r\nさあお勝手に生きて その目に\r\n「過去」「願い」「自分」を背負って\r\n嫌悪 恨み 人格を変える\r\n考えたくない もうバイバイ\r\n時間忘れ 今だけはバイバイなんだ\r\n呆れてました 愚痴も裏切りも興味が無いね\r\n(愛してる) 迷うまま 必死に生きる君が 一番素敵！\r\n楽勝だって！ 欲張ってもっと！\r\n自分で自分を止めてると思うの\r\nまだ急ぐ必要は無いからさ\r\n怖くないよ 一緒に渡る赤信号\r\n人と人は所詮 同類なのに\r\n何故か価値やキャラを比べたがる\r\n「自由がいい」 心でずっと叫んでる\r\nちっぽけな独りは ずっと戦ってる",
        "genre": "J-Pop",
        "likes": 52
    },
    {
        "name": "Look only at me",
        "imageCover": "/upload/images/imageCover-1653405997886.jpg",
        "musicSource": "/upload/musics/musicSource-1653405997887.mp3",
        "release": "2020-01-10",
        "lyrics": "「君以外居ない」って言っておいて\r\nふざけんな こんな結果だよ\r\n性欲が沸いて来た時だけ\r\n優しくて あからさまだよ？\r\nゲームとスマホのが「愛」強いんだ\r\nそれじゃあそいつらとチューをすれば？\r\nデレデレだった君はどこへ？\r\n結局、欲望に負ける うーうー\r\nおい、かまえ、まえ、まえ\r\n向けない前、前、前\r\n変わったお前、前、前\r\n糸が千切れていく\r\nチョロすぎる私も悪いな\r\n優しくされて手を握った\r\n中途半端な奴でごめんね\r\n毎回しつこくてごめんね\r\n可愛けりゃいい？ブスだよばか\r\nエロけりゃいい？デブだよばか\r\n金ありゃいい？持ってねえわばか\r\n恋人を持っていたいだけだろバカ！\r\n「君以外居ない」って言っておいて\r\nふざけんな こんな結果だよ\r\n性欲が沸いて来た時だけ\r\n優しくて あからさまだよ？\r\nゲームとスマホのが「愛」強いんだ\r\nそれじゃあそいつらとチューをすれば？\r\nデレデレだった君はどこへ？\r\n結局、欲望に負ける うーうー\r\nおい、かまえ、まえ、まえ\r\n向けない前、前、前\r\n変わったお前、前、前\r\n糸が千切れていく",
        "genre": "J-Pop",
        "likes": 72
    },
    {
        "name": "Want a boyfriend",
        "imageCover": "/upload/images/imageCover-1653406154741.jpg",
        "musicSource": "/upload/musics/musicSource-1653406154742.mp3",
        "release": "2021-01-12",
        "lyrics": "はぁー今日の私は部屋で一人で自慰行為して\r\n一日が終わります\r\n変な惚気ツイートばっかり嫉妬して\r\nいずれは死にます\r\nYeah てめぇの彼氏自慢なんていらない\r\nさりげなくコソっと言うのが嫌い\r\n例えば他のカップルの彼氏見て\r\n「私のかれぴなら～」って 聞いてないよ!\r\n異性とのキスって何? そもそも付き合った事も無いし\r\n死ぬほど焦ってるよ? 内心 好きな男 目で追うだけの毎日だ!\r\nずっと独りよ? 陰キャで男性怖いもん\r\nビビり過ぎ 心配性で 頼りたいの ドラえもん\r\nお前のスモールライトで好きな男のパンツの中に入って\r\n色々探索したいの!\r\n負け組だけが集まって\r\nサイゼの中ずっと文句を垂れる\r\n最終的には諦めて より届かない推しに命を懸ける\r\n彼氏欲しすぎ症候群\r\nウチら 彼氏欲しすぎ症候群\r\nウチら 彼氏欲しすぎ症候群\r\nもう勘弁してよ! 誰か来て!\r\nあーこのAVめっちゃ面白くない?\r\nうん 面白い面白い\r\nねぇねぇ もっとお勧めないの\r\nうちら虚しい\r\n少しでも優しくされると\r\nチョロいからすぐ 顔 赤くなるの\r\n多分 遊ばれるの その価値も無いの\r\n一緒に居た同士も居なくなるの!\r\n激カワの ツインテ ボブ ロング\r\n好きな人はそいつと一緒にお風呂\r\n身体は綺麗 顔は鬼饅頭\r\n自分の不幸 勝手に怒り出す\r\nおいおい 神様 どうしてこんなにも不平等だ?\r\nおいおいおい 神様 ごめんなさい パートナーをくれないか?\r\n負け組だけが集まって\r\nサイゼの中ずっと文句を垂れる\r\n最終的には諦めて より届かない推しに命を懸ける\r\n彼氏欲しすぎ症候群\r\nウチら 彼氏欲しすぎ症候群\r\nウチら 彼氏欲しすぎ症候群\r\nもう勘弁してよ! 誰か来て!\r\n虚無虚無プリンなう\r\n死にてぇー",
        "genre": "J-Pop",
        "likes": 12
    },
    {
        "name": "I loved you and lost",
        "imageCover": "/upload/images/imageCover-1653406377617.jpg",
        "musicSource": "/upload/musics/musicSource-1653406377618.mp3",
        "release": "2019-11-12",
        "lyrics": "頭に残ってる 優しかった初めてのお前\r\n気持ち分からないクズ\r\n未だに覚えてる ホーム画面の知らんブスの「ありがとう」\r\n馬鹿ばっか 誰も信じれないわ\r\n永遠なんて無いと悟ったあの日\r\n誰でも強欲 移り変わり\r\n乱用するなよ「好き」を沢山\r\n勘違いして 君を愛した\r\n私が惚気ている間 何人の女とキスをした?\r\nブス唇 細菌 聞くと逆ギレ どうしようもないし\r\n今までに無いほどショックを受ける\r\nそれくらい愛せてなく ごめん\r\n簡単に突き放され 今までの時間 なんだっけ?\r\nあの頃の時間 彼方へ ボーっと考える 朝まで\r\nずっと好きだった 君だけ見てた\r\n軽い表情で 言い訳だよ 飽きたって知ってる 嫉妬と涙\r\nバイバイ くそったれ バイバイ くそったれ\r\nバイバイ くそったれ バイバイ\r\n頭に残ってる 優しかった初めてのお前\r\n気持ち分からないクズ\r\n未だに覚えてる ホーム画面の知らんブスの「ありがとう」\r\n馬鹿ばっか 誰も信じれないわ",
        "genre": "J-Pop",
        "likes": 98
    }
];

const musicPink = [
    {
        "name": "Funhouse",
        "imageCover": "/upload/images/imageCover-1653406870041.jpg",
        "musicSource": "/upload/musics/musicSource-1653406870044.mp3",
        "release": "2009-10-26",
        "lyrics": "I dance around this empty house\r\nTear us down\r\nThrow you out\r\nScreaming down the halls\r\nSpinning all around and now we fall\r\nPictures framing up the past\r\nYour taunting smirk behind the glass\r\nThis museum full of ash\r\nOnce a tickle\r\nNow a rash\r\nThis used to be a funhouse\r\nBut now it's full of evil clowns\r\nIt's time to start the countdown\r\nI'm gonna burn it down down down\r\nI'm gonna burn it down\r\nNine, eight, seven, six, five, four, three, two, one, fun\r\nEchoes knocking on locked doors\r\nAll the laughter from before\r\nI'd rather live out on the street\r\nThan in this haunted memory\r\nI've called the movers\r\nCalled the maids\r\nWe'll try to exorcise this place\r\nDrag my mattress to the yard\r\nCrumble tumble house of cards\r\nThis used to be a fun house\r\nBut now it's full of evil clowns\r\nIt's time to start the countdown\r\nI'm gonna burn it down down down\r\nThis used to be a fun house\r\nBut now it's full of evil clowns\r\nIt's time to start the countdown\r\nI'm gonna burn it down down down\r\nI'm gonna burn it down\r\nNine, eight, seven, six, five, four, three, two, one, fun\r\nOh, I'm crawling through the doggy door\r\nMy key don't fit my lock no more\r\nI'll change the drapes\r\nI'll break the plates\r\nI'll find a new place\r\nBurn this fucker down\r\nDo do do do dodo do\r\nDo do do do dodo do\r\nDo do do do dodo do\r\nDo do do do da da da da\r\nDo do do do dodo do\r\nDo do do do dodo do\r\nDo do do do dodo do\r\nDo do do do dodo doo\r\nThis used to be a fun house\r\nBut now it's full of evil clowns\r\nIt's time to start the countdown\r\nI'm gonna burn it down down down\r\nThis used to be a fun house\r\nBut now it's full of evil clowns\r\nIt's time to start the countdown\r\nI'm gonna burn it down down down\r\nI'm gonna burn it down",
        "genre": "R&B/Soul",
        "likes": 438
    },
    {
        "name": "Raise Your Glass",
        "imageCover": "/upload/images/imageCover-1653407114533.jpg",
        "musicSource": "/upload/musics/musicSource-1653407114535.mp3",
        "release": "2010-11-03",
        "lyrics": "Right, right, turn off the lights\r\nWe gonna lose our minds tonight\r\nWhat's the dealio?\r\nI love when it's all too much\r\n5 AM turn the radio up\r\nWhere's the rock and roll?\r\nParty crasher\r\nPanty snatcher\r\nCall me up if you a gangsta\r\nDon't be fancy, just get dancy\r\nWhy so serious?\r\nSo raise your glass if you are wrong\r\nIn all the right ways\r\nAll my underdogs\r\nWe will never be never be, anything but loud\r\nAnd nitty gritty dirty little freaks\r\nWon't you come on and come on and raise your glass\r\nJust come on and come on and raise your glass\r\nSlam slam, oh hot damn\r\nWhat part of party don't you understand\r\nWish you'd just freak out (freak out already)\r\nCan't stop, comin' in hot\r\nI should be locked up right on the spot\r\nIt's so on right now (so fuckin' on right now)\r\nParty crasher\r\nPanty snatcher\r\nCall me up if you a gangsta\r\nDon't be fancy, just get dancy\r\nWhy so serious?\r\nSo raise your glass if you are wrong\r\nIn all the right ways\r\nAll my underdogs\r\nWe will never be never be, anything but loud\r\nAnd nitty gritty dirty little freaks\r\nWon't you come on and come on and raise your glass\r\nJust come on and come on and raise your glass\r\nWon't you come on and come on and raise your glass\r\nJust come on and come on and raise your glass\r\nSo if you're too school for cool (I mean)\r\nAnd you're treated like a fool\r\n(Treated like a fool)\r\nYou can choose to let it go\r\nWe can always, we can always\r\nParty on our own\r\nSo raise your glass if you are wrong\r\nIn all the right ways\r\nAll my underdogs\r\nWe will never be never be, anything but loud\r\nMaybe nitty gritty dirty little freaks\r\nSo raise your glass if you are wrong\r\nIn all the right ways\r\nAll my underdogs\r\nWe will never be never be, anything but loud\r\nAnd nitty gritty dirty little freaks\r\nWon't you come on and come on and raise your glass\r\nJust come on and come on and raise your glass\r\nWon't you come on and come on and raise your glass (for me)\r\nJust come on and come on and raise your glass (for me)",
        "genre": "Pop",
        "likes": 553
    },
    {
        "name": "Perfect",
        "imageCover": "/upload/images/imageCover-1653408711388.jpg",
        "musicSource": "/upload/musics/musicSource-1653408711390.mp3",
        "release": "",
        "lyrics": "Made a wrong turn, once or twice\r\nDug my way out, blood and fire\r\nBad decisions, that's alright\r\nWelcome to my silly life\r\nMistreated, misplaced, misunderstood\r\nMiss knowing it's all good, it didn't slow me down\r\nMistaken, always second guessing, underestimated\r\nLook, I'm still around\r\nPretty, pretty please, don't you ever, ever feel\r\nLike you're less than fuckin' perfect\r\nPretty, pretty please, if you ever, ever feel like you're nothing\r\nYou're fuckin' perfect to me\r\nYou're so mean (you're so mean)\r\nWhen you talk (when you talk)\r\nAbout yourself, you were wrong\r\nChange the voices (change the voices)\r\nIn your head (in your head)\r\nMake them like you instead\r\nSo complicated, look happy, you'll make it\r\nFilled with so much hatred, such a tired game\r\nIt's enough, I've done all I can think of\r\nChased down all my demons, I've seen you do the same, oh\r\nPretty, pretty please, don't you ever, ever feel\r\nLike you're less than fuckin' perfect\r\nPretty, pretty please, if you ever, ever feel like you're nothing\r\nYou're fuckin' perfect to me\r\nThe whole world's scared, so I swallow the fear\r\nThe only thing I should be drinking is an ice cold beer\r\nSo cool in line, and we try, try, try\r\nBut we try too hard and it's a waste of my time\r\nDone looking for the critics 'cause they're everywhere\r\nThey don't like my jeans, they don't get my hair\r\nExchange ourselves and we do it all the time\r\nWhy do we do that, why do I do that?\r\nWhy do I do that?\r\nYeah, oh, oh pretty, pretty please\r\nPretty, pretty please, don't you ever, ever feel\r\nLike you're less than fuckin' perfect\r\nPretty, pretty please, if you ever, ever feel like you're nothing\r\nYou're fuckin' perfect to me, yeah\r\nYou're perfect, you're perfect\r\nPretty, pretty please, if you ever, ever feel like you're nothing\r\nYou're fuckin' perfect to me",
        "genre": "R&B/Soul",
        "likes": 642
    }
];

const musicTwice = [
    {
        "name": "Feel Special",
        "imageCover": "/upload/images/imageCover-1653409989188.png",
        "musicSource": "/upload/musics/musicSource-1653409989189.mp3",
        "release": "2019-09-23",
        "lyrics": "그런 날이 있어\r\n갑자기 혼자인 것만 같은 날\r\n어딜 가도 내 자리가 아닌 것만 같고\r\n고갠 떨궈지는 날\r\n그럴 때마다 내게\r\n얼마나 내가 소중한지\r\n말해주는 너의 그 한마디에\r\nEverything's alright\r\n초라한 nobody에서 다시 somebody\r\n특별한 나로 변해\r\nYou make me feel special\r\n세상이 아무리 날 주저앉혀도\r\n아프고 아픈 말들이 날 찔러도\r\n네가 있어 난 다시 웃어\r\nThat's what you do\r\nAgain I feel special\r\n아무것도 아닌 존재 같다가도\r\n사라져도 모를 사람 같다가도\r\n날 부르는 네 목소리에\r\nI feel loved, I feel so special\r\n자꾸 숨고만 싶어서\r\n마주 하기가 싫어서\r\n모든 게 의미를 잃은 듯이\r\n내가 의미를 잃은 듯이 가만히 주저앉아 있을 때\r\n그때 내 앞에 나타난 너의\r\n따뜻한 미소와 손길에 (hey)\r\nEverything's alright\r\n초라한 nobody에서 다시 somebody\r\n특별한 나로 변해\r\nYou make me feel special\r\n세상이 아무리 날 주저앉혀도 (앉혀도)\r\n아프고 아픈 말들이 날 찔러도\r\n네가 있어 난 다시 웃어\r\nThat's what you do\r\nAgain I feel special\r\n아무것도 아닌 존재 같다가도 (같다가도)\r\n사라져도 모를 사람 같다가도\r\n날 부르는 네 목소리에\r\nI feel loved, I feel so special\r\nUh, you make everything alright\r\n구름이 쫙 낀 햇살 한 줌 없는 날\r\n네가 바로 나의 shining light\r\nThat's what you do\r\n아무리 어두운 밤도 다시 낮\r\nI owe it to you\r\nBecause you make me feel special\r\n세상이 아무리 날 주저앉혀도 (앉혀도)\r\n아프고 아픈 말들이 날 찔러도\r\n네가 있어 난 다시 웃어\r\nThat's what you do\r\nAgain I feel special\r\n아무것도 아닌 존재 같다가도 (같다가도)\r\n사라져도 모를 사람 같다가도\r\n날 부르는 네 목소리에\r\nI feel loved, I feel so special",
        "genre": "K-Pop",
        "likes": 1312
    },
    {
        "name": "FANCY",
        "imageCover": "/upload/images/imageCover-1653410299580.jpg",
        "musicSource": "/upload/musics/musicSource-1653410299583.mp3",
        "release": "2019-04-22",
        "lyrics": "지금 하늘 구름 색은 tropical yeah\r\n저 태양 빨간빛 네 두 볼 같아\r\nOh tell me, I'm the only one baby\r\nI fancy you, I fancy you, fancy you (Twice)\r\nIt's dangerous 따끔해 넌 장미 같아\r\n괜찮아 조금도 난 겁나지 않아\r\n더 세게 꼭 잡아 take my hand\r\n좀 위험할거야 더 위험할거야 baby\r\n달콤한 초콜릿 아이스크림처럼\r\n녹아버리는 지금 내 기분 so lovely\r\n깜깜한 우주 속 가장 반짝이는\r\n저 별 저 별 그 옆에 큰 네 별\r\n거기 너 I fancy you 아무나 원하지 않아\r\nHey I love you (love ya)\r\n그래 너 I fancy you 꿈처럼 행복해도 돼\r\n'Cause I need you\r\nWhat? fancy you 누가 먼저 좋아하면 어때\r\nFancy you 지금 너에게로 갈래\r\nFancy, ooh\r\n매일매일 난 정말 아무것도 못하네 oh my\r\nMayday 이러다 큰일 낼 것 같은데\r\nBang bang 머리가 홀린 듯 reset이 돼\r\n어쩌면 좋아 이게 맞는건지 몰라 S.O.S\r\nSwim swim 너란 바다에 잠수함이 돼\r\n매일이 birthday 달콤해 너와 나의 fantasy\r\nDream dream 마치 꿈같아 볼 꼬집어봐\r\n요즘 나의 상태 메세진 랄랄라 baby\r\n달콤한 초콜릿 아이스크림처럼\r\n녹아버리는 지금 내 기분 so lovely\r\n깜깜한 우주 속 가장 반짝이는\r\n저 별 저 별 그 옆에 큰 네 별\r\n거기 너 I fancy you 아무나 원하지 않아\r\nHey I love you (love ya)\r\n그래 너 I fancy you 꿈처럼 행복해도 돼\r\n'Cause I need you\r\nWhat? fancy you 누가 먼저 좋아하면 어때\r\nFancy you 지금 너에게로 갈래\r\nFancy, ooh\r\n연기처럼 훅 사라질까\r\n늘 가득히 담아 두 눈에 담아\r\n생각만으로 포근해져\r\n몰래 뒤에서 안아 널 놓지 않을래\r\n거기 너 I fancy you 아무나 원하지 않아\r\nHey I love you (love ya)\r\n그래 너 I fancy you 꿈처럼 행복해도 돼\r\n'Cause I need you\r\nWhat? fancy you 누가 먼저 좋아하면 어때\r\nFancy you 지금 너에게로 갈래\r\nFancy, ooh",
        "genre": "K-Pop",
        "likes": 1216
    },
    {
        "name": "I CAN'T STOP ME",
        "imageCover": "/upload/images/imageCover-1653410479764.jpg",
        "musicSource": "/upload/musics/musicSource-1653410479765.mp3",
        "release": "2020-10-26",
        "lyrics": "알람이 울려대 ring ring a ling\r\n서로의 눈길이 닿을 때마다\r\n알면서 빙빙 도는데\r\n점점 다가가잖아 I know it's too late\r\n마음속으로는 다 알고 있잖아\r\n결국에는 선을 넘게 될 거라는 걸\r\nI'm warning myself\r\n너 그러면 안 돼\r\n매분, 매초, 내 맘이 내 맘을 추월해\r\nOut of control\r\n나를 감시하는 저 spot spot spotlight\r\n비출수록 어둠 속으로 빨려 들어\r\n끝이 보이는데 I know it's not right\r\nI can't stop me, can't stop me\r\n내 앞에 놓여진 이 red red red line\r\n건너편의 너와 난 이미 눈을 맞춰\r\n느끼고 싶어 짜릿한 highlight\r\nI can't stop me, can't stop me\r\nI can't stop me, can't stop me\r\n눈감아 달라구 ya ya\r\n딱 한 번만 no rules ah ah\r\n모른 척해 줘 lights off tonight\r\n나 참을 수 없을 거 같아 losing myself\r\nYa ya\r\n이제는 turning back\r\n불가능해 난 점점 더 깊은 어둠에\r\n너무나 짜릿해\r\n나 눈을 감을래\r\n다시는 돌아갈 수 없을 것만 같애\r\nOut of control\r\n나를 감시하는 저 spot spot spotlight\r\n비출수록 어둠 속으로 빨려 들어\r\n끝이 보이는데 I know it's not right\r\nI can't stop me, can't stop me\r\n내 앞에 놓여진 이 red red red line\r\n건너편의 너와 난 이미 눈을 맞춰\r\n느끼고 싶어 짜릿한 highlight\r\nI can't stop me, can't stop me\r\nRisky risky wiggy 위기\r\nThis is an emergency\r\nHelp me, help me, somebody stop me\r\n'Cause I know I can't stop me\r\n답은 알고 있잖아\r\n근데 가고 있잖아\r\n이러고 싶지 않아\r\n내 안에 내가 또 있나 봐\r\n나는 원하는데\r\n원하는 게 안돼\r\nGuilty 난 싫은데\r\nI can't stop me, can't stop me, can't stop me\r\n나를 감시하는 저 spot spot spotlight\r\n비출수록 어둠 속으로 빨려 들어\r\n끝이 보이는데 I know it's not right\r\nI can't stop me, can't stop me\r\n내 앞에 놓여진 이 red red red line\r\n건너편의 너와 난 이미 눈을 맞춰\r\n느끼고 싶어 짜릿한 highlight\r\nI can't stop me, can't stop me\r\nI can't stop me, can't stop me",
        "genre": "K-Pop",
        "likes": 1250
    }
];

const musicEve = [
    {
        "name": "Kaikai Kitan",
        "imageCover": "/upload/images/imageCover-1653411030852.jpg",
        "musicSource": "/upload/musics/musicSource-1653411030854.mp3",
        "release": "2020-11-20",
        "lyrics": "有象無象 人の成り\r\n虚勢 心象 人外 物の怪みたいだ\r\n虚心坦懐 命宿し\r\nあとはぱっぱらぱな中身なき人間\r\n寄せる期待 不平等な人生\r\n才能もない 大乗 非日常が\r\n怨親平等に没個性\r\n辿る記憶 僕に居場所などないから\r\n夢の狭間で泣いてないで\r\nどんな顔すればいいかわかってる\r\nだけどまだ応えてくれよ\r\n闇を祓って 闇を祓って\r\n夜の帳が下りたら合図だ\r\n相対して 廻る環状戦\r\n戯言などは 吐き捨ていけと\r\nまだ止めないで まだ止めないで\r\n誰よりも聡く在る街に生まれし\r\nこの正体を今はただ\r\n呪い呪われた僕の未来を創造して\r\n走って 転んで 消えない痛み抱いては\r\n世界が待ってる この一瞬を\r\n抒情的 感情が 揺らいでいくバグ\r\n従順に従った欠陥の罰\r\n死守選択しかない愛に無常気\r\n声も出せないまま\r\n傀儡な誓いのなき百鬼夜行\r\n数珠繋ぎなこの果てまでも\r\n極楽往生 現実蹴って 凪いで\r\n命を投げ出さないで\r\n内の脆さに浸って\r\nどんな顔すればいいかわかんないよ\r\n今はただ応えてくれよ\r\n五常を解いて 五常を解いて\r\n不確かな声を紡ぐアイデア\r\n相殺して 廻る感情線\r\nその先に今 立ち上がる手を\r\nただ追いかけて ただ追いかけて\r\n誰よりも強く在りたいと願う\r\n君の運命すら今はただ\r\n仄暗い夜の底に深く深く落ちこんで\r\n不格好に見えたかい\r\nこれが今の僕なんだ\r\n何者にも成れないだけの屍だ 嗤えよ\r\n目の前の全てから\r\n逃げることさえやめた\r\nイメージを繰り返し\r\n想像の先をいけと\r\n闇を祓って 闇を祓って\r\n夜の帳が下りたら合図だ\r\n相対して 廻る環状戦\r\n戯言などは 吐き捨ていけと\r\nまだ止めないで まだ止めないで\r\n誰よりも聡く在る街に生まれし\r\nこの正体を今はただ\r\n呪い呪われた僕の未来を創造して\r\n走って 転んで 消えない痛み抱いては\r\n世界が待ってる この一瞬を",
        "genre": "J-Pop",
        "likes": 968, 
    },
    {
        "name": "How to Eat Life",
        "imageCover": "/upload/images/imageCover-1653411310348.jpg",
        "musicSource": "/upload/musics/musicSource-1653411310350.mp3",
        "release": "2020-05-22",
        "lyrics": "足りないもの探して バックパッカー\r\nかっとなっては やっちまった\r\n急展開に期待しなくたって\r\nきっと君は来ないってないってば\r\n\"ビビディバビデブー\"\r\nおまじないみたいなもんさ\r\n帰りを今も待ち望んでは\r\nその感動はまた走り去った\r\nこれじゃないと あれじゃないと 焦りだけが募るようだ\r\n隣に握りしめる手が欲しかった\r\n温もりを知らぬまま\r\n心まで貧しくなって\r\nグレイの海を彷徨った\r\n美は満ち溢れているんだ\r\n見過ごすな\r\n夜が明ける前に酔いを醒まして\r\n時間がないんだ君には\r\n盲目でいたいの 退屈な今日を\r\n超えていきたいんだきっと\r\n声が届くまで想いをぶつけて\r\nふらふらになってしまうまで\r\n僕らにそれを忘れることを許さないから\r\n考えることすらやめてしまいな\r\n真夜中踊りだすマッドハッター\r\nあっというまに 経っちまった\r\n空想上に期待したくなって\r\nきっと君はこないってないってば\r\n現実との狭間で泣いて\r\n腹を裂かれるこの思いで\r\n飲み干した言葉の棘が刺さる\r\nその滑稽さだけが残った\r\nお気に入りの カトラリーは 至福だけを運ぶようだ\r\nテーブルをみんなで囲みたかったんだ\r\nナイフを突き立てては\r\n君の喉仏を裂いて\r\n指先を湿らせたんだ\r\nフォークの使い方なんて\r\n誰にも教わらなかった\r\n真理を見ようとしないで\r\n命の重さを量った\r\n揺らめく篝火の中 何をみた\r\n夜が明ける前に酔いを醒まして\r\n時間がないんだ君には\r\n盲目でいたいの 退屈な今日を\r\n超えていきたいんだきっと\r\n声が届くまで想いをぶつけて\r\nふらふらになってしまうまで\r\n僕らにそれを忘れることを許さないから\r\n考えることすらやめてしまいな\r\n僕が食べる前に僕を見つけて",
        "genre": "J-Pop",
        "likes": 863,
    },
    {
        "name": "Dramaturgy",
        "imageCover": "/upload/images/imageCover-1653411543358.jpg",
        "musicSource": "/upload/musics/musicSource-1653411543360.mp3",
        "release": "2017-10-11",
        "lyrics": "頭でわかっては嘆いた 転がってく様子を嗤った\r\n寂しいとか愛とかわかんない 人間の形は投げだしたんだ\r\n抱えきれない 言葉だらけの存在証明を\r\nこの小さな劇場から出らんない 気づいたら最後逃げ出したい\r\n僕ら全員演じていたんだ エンドロールに向かってゆくんだ\r\nさあ皆必死に役を演じて傍観者なんていないのさ\r\n'ワタシ'なんてないの どこにだって居ないよ\r\nずっと僕は 何者にもなれないで\r\n僕ら今 さあさあ 喰らいあって 延長戦 サレンダーして\r\nメーデー 淡い愛想 垂れ流し 言の愛憎\r\nドラマチックな展開をどっか期待してんだろう\r\n君も yes yes 息を呑んで 采配は そこにあんだ\r\nヘッドショット 騒ぐ想いも その心 撃ち抜いて さあ\r\nまだ見ぬ糸を引いて 黒幕のお出ましさ\r\nその目に映るのは\r\n触れたら壊れてしまった 間違ってく様子を黙った\r\n僕ら全員無垢でありました いつのまにやら怪物になったんだ\r\nその全てを肯定しないと前に進めないかい\r\n「まあ君にはきっと無理なんだ」\r\n「だから君にはきっと無理なんだ」\r\nいつのまにやら外野にいたんだ\r\nそんなガヤばっかり飛ばしてきたんだ\r\n皆必死に自分を守って救いの手を待ってるのさ\r\n考えたくはないよ 馬鹿になっていたいもん\r\nずっと僕は 何者にもなれないで\r\nだから今 前線上に立って その旗は高く舞って\r\n劣勢 頼る相棒 言葉すら必要ないよ\r\nドラマチックな展開はドットヒートしてくだろう\r\n君も yes yes 息を呑んで 再会を誓いあって\r\nワンチャンスしかない僕の 一瞬をかけるのさ\r\nクライマックスみたいな 手に汗を握るのさ\r\nぽつりと鳴いた\r\n隠してきた真実はどこにもない\r\n嗤ってきた奴らに居場所はない\r\n思い出してぽいってして感情はない\r\n流した涙 理由なんてない\r\n優しさに温度も感じられない\r\n差し伸べた手に疑いしかない\r\n穴が空いて愛は垂れてしまいになったんだ\r\n倒れそうな僕を覗き込んだんだ\r\n諦めかけた人の前にアンタは\r\nいつも嘲笑うようにおでましさ\r\n君にはどんな風に見えてるんだい\r\n呼吸を整えて さあ さあ\r\nずっと僕は 何者にもなれないで\r\n僕ら今 さあさあ 喰らいあって 延長戦 サレンダーして\r\nメーデー 淡い愛想 垂れ流し 言の愛憎\r\nドラマチックな展開をどっか期待してんだろう\r\n君も yes yes 息を呑んで 采配は そこにあんだ\r\nヘッドショット 騒ぐ想いも その心 撃ち抜いて さあ\r\nまだ見ぬ糸を引いて 黒幕のお出ましさ\r\n'その目に映るのは'",
        "genre": "J-Pop",
        "likes": 912
    }
];

const musicItzy = [
    {
        "name": "WANNABE",
        "imageCover": "/upload/images/imageCover-1653412273136.jpg",
        "musicSource": "/upload/musics/musicSource-1653412273137.mp3",
        "release": "2020-03-09",
        "lyrics": "잔소리는 stop it, 알아서 할 게\r\n내가 뭐가 되든 내가 알아서 할 테니까 좀\r\nI do what I wanna, 평범하게 살든 말든 내버려 둘래?\r\n어차피 내가 살아 내 인생 내 거니까\r\nI'm so bad, bad, 차라리 이기적일래\r\n눈치 보느라 착한 척 상처받는 것보다 백번 나아\r\nI'm just on my way, 간섭은, no, no 해\r\n말해버릴지도 몰라 너나 잘하라고\r\n누가 뭐라 해도 난 나야\r\n난 그냥 내가 되고 싶어 (I wanna be me, me, me)\r\n굳이 뭔가 될 필요는 없어\r\n난 그냥 나일 때 완벽하니까 (I wanna be me, me, me)\r\nI don't wanna be somebody\r\nJust wanna be me, be me (I wanna be me, me, me)\r\nI don't wanna be somebody\r\nJust wanna be me, be me (I wanna be me, me, me)\r\n이래라, 저래라, 모두 한마디씩 (hey, don't touch me, hey)\r\nAh, yeah, yeah-yeah-yeah-yeah, 내 앞가림은 내가 해\r\nI'ma do my thing, just do your thang 'cause I'm the one and only\r\n사람들은 남 말하기를 좋아해 (라라라)\r\n남의 인생에 뭔 관심이 많아 왜? (라라라)\r\n저기 미안하지만, 신경 좀 꺼줄래요?\r\nIt's none of your business, I do my own business\r\n누가 뭐라 해도 난 나야\r\n난 그냥 내가 되고 싶어 (I wanna be me, me, me)\r\n굳이 뭔가 될 필요는 없어\r\n난 그냥 나일 때 완벽하니까 (I wanna be me, me, me)\r\nNo matter if you love me or hate me\r\n(Hey, hey)\r\nI wanna be me, one and only me\r\nIf you feel me (hey), turn this beat up (hey)\r\nI wanna be me, me, me\r\n누가 뭐라 해도 난 나야\r\n난 그냥 내가 되고 싶어 (I wanna be me, me, me)\r\n굳이 뭔가 될 필요는 없어\r\n난 그냥 나일 때 완벽하니까 (I wanna be me, me, me)\r\nI don't wanna be somebody\r\nJust wanna be me, be me (I wanna be me, me, me)\r\nI don't wanna be somebody\r\nJust wanna be me, be me (I wanna be me, me, me)",
        "genre": "K-Pop",
        "likes": 850
    },
    {
        "name": "Not Shy",
        "imageCover": "/upload/images/imageCover-1653412508671.jpg",
        "musicSource": "/upload/musics/musicSource-1653412508674.mp3",
        "release": "2020-08-23",
        "lyrics": "Not shy, not me (ITZY)\r\n난 다 원해 다, 다 (yeah)\r\nNot shy, not me\r\n난 빨리, 빨리 원하는 걸 말해\r\n못 가지면 어때 괜히\r\n망설이다 시간만 가니\r\nYeah, 다 말할래 'cause I like it, 'cause I like it, like it\r\n기다려 왜? 기다려서 뭐해?\r\n내가 내 맘을 왜, 왜 말하면 안 돼? Yeah\r\n그냥 탁, 그냥 탁탁탁탁탁\r\nNot shy to say I want you\r\nHey there, hey there\r\n우리는 great pair, great pair\r\n네 맘이 뭔지 모르지만, ah\r\n내 생각이 맞아 그러니까, ah\r\nYeah, yeah, 내 맘은 내 거 그러니까\r\n좋아한다고 자유니까\r\n네 맘은 네 거 맞으니까\r\n말해봐 다, 어서 다 'cause I'm not shy\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\nGive me 다, 다다다다다, 다다\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\n너를 원해, 뭐 어때? 'Cause I'm not shy\r\n넌 빨리, 빨리 대답할 필욘 없어\r\n어차피 내 거니까, ooh\r\n날 보고 있기만 하면 돼\r\nYeah, you will like it 'cause you like it, 'cause you like it, like it\r\n내가 미워? 아니라면 비워\r\n다른 건 다 지워, 내가 네 only one, yeah\r\n그냥 싹 지워, 싹싹싹싹싹\r\nNot shy to say I want you\r\nHey there, hey there\r\n우리는 great pair, great pair\r\n네 맘이 뭔지 모르지만, ah\r\n내 생각이 맞아 그러니까, ah\r\nYeah, yeah, 내 맘은 내 거 그러니까\r\n좋아한다고 자유니까\r\n네 맘은 네 거 맞으니까\r\n말해봐 다, 어서 다 'cause I'm not shy\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\nGive me 다, 다다다다다, 다다\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\n너를 원해, 뭐 어때? 'Cause I'm not shy\r\n후회하긴 싫으니까\r\n엔딩 상관없으니까\r\nGo, go, go 모두 쏟아내\r\nNo, yes, no, 뭐든지 어때\r\nYeah, 이러면 저러면 어때\r\n어차피 안 될 거 빼고 다 돼\r\nLet's just be who we are, do what we do\r\n네 맘대로 해 (let the beat drop)\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\n말해봐 다, 어서 다 'cause I'm not shy\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\nGive me 다, 다다다다다, 다다\r\nNot shy, not me (ITZY)\r\n난 다 원해 다, 다 (not shy)\r\nNot shy, not me\r\n너를 원해, 뭐 어때? 'Cause I'm not shy",
        "genre": "K-Pop",
        "likes": 823
    },
    {
        "name": "LOCO",
        "imageCover": "/upload/images/imageCover-1653412693924.jpg",
        "musicSource": "/upload/musics/musicSource-1653412693925.mp3",
        "release": "2021-08-27",
        "lyrics": "Loco\r\n미친다는 말이 이해 간달까\r\nI'm gettin' loco, loco\r\nOh gosh 이건 달콤한 독 같아\r\nI'm gettin' loco, loco\r\n출구 없는 방 안에 사방이 너란 거울이야\r\n굳이 쉽게 말하자면\r\nI feel like I was born to love ya\r\n오아시스 찾는 kitty 난 네 주위를 맴돌지\r\n콩깍지 껴 버린 내 두 눈은 yellow\r\n켜줘 네 손으로 불 꺼진 내 심장\r\nIt's too late, want you so bad\r\n너를 갖고 싶어졌어\r\n몰라 이젠 이미 난 blind 끝까지 가볼래\r\n넌 날 반쯤 미치게 만들어\r\nYou got me like cray-cray-crazy in love\r\n대체 네가 뭔데\r\n미쳐 날뛰어 기분이 up and down\r\nYou got me like cray-cray-crazy in love\r\n나도 내가 outta control\r\nI'm gettin' loco, loco\r\nI'm gettin' loco, loco\r\n내게 대체 넌 뭘 원해\r\n미친 이 마음은 다 갖다 퍼 줘도 I'm OK\r\n하루는 천국을 갔다 왔다 가도\r\n나락 끝까지 날 밀어버려\r\nSo dangerous, so, so, so dangerous, uh-oh\r\n날 더 망가뜨려도 널 믿을 수밖에 없게 해줘\r\n오아시스 찾은 kitty\r\n난 네 옆 자릴 넘보지\r\nBreak 따윈 잊었어 끝까지 가볼래\r\n넌 날 반쯤 미치게 만들어\r\nYou got me like cray-cray-crazy in love\r\n대체 네가 뭔데\r\n미쳐 날뛰어 기분이 up and down\r\nYou got me like cray-cray-crazy in love\r\n나도 내가 outta control\r\nLoco\r\nI'm gettin' loco-loco-co\r\nI'm gettin' loco-loco-co-oh-oh-oh\r\nI'm gettin' loco-loco-co\r\nI'm gettin' loco-loco-co-oh-oh-oh\r\n넌 날 완전 미치게 만들어\r\nYou got me like cray-cray-crazy in love\r\n대체 네가 뭔데\r\n미쳐 날뛰어 기분이 up and down\r\nYou got me like cray-cray-crazy in love\r\n나도 내가 outta control\r\nI'm gettin' loco, loco\r\nI'm gettin' loco, loco",
        "genre": "K-Pop",
        "likes": 846
    }
];

const musicMamamoo = [
    {
        "name": "HIP",
        "imageCover": "/upload/images/imageCover-1653412942433.jpg",
        "musicSource": "/upload/musics/musicSource-1653412942434.mp3",
        "release": "2019-11-14",
        "lyrics": "All I wanna be is 멋짐\r\n내 마음대로 골라 kick it\r\n머리 어깨 무릎 다 hip 해\r\nDo it, do it like me do it\r\n나를 따라 해 kick it\r\nClapping clapping 모두 같이 hip (hip, hip, hip)\r\nI love you 네가 뭐라든 간에\r\nRespect you 네가 뭘 하든 간에 (she's crazy)\r\n늘 따끈따끈해 그 관심이 따끔따끔해\r\n또 힐끔 힐끔 힐끔\r\n이젠 모든 일이 가뿐해 veteran\r\n성공을 썰어 먹어 마치 Michelin\r\n누구보다 빠른 걸음을 걸었네 비시즌\r\n잊은 지도 오래야 뒷걸음\r\nAll I wanna be is 멋짐\r\n내 멋대로 골라 kick it\r\n머리 어깨 무릎 다 hip (hip, hip, hip)\r\n삐삐삐 논란이 돼 my fashion (oh)\r\n별로 신경 안 써 그저 action (yeah)\r\n자꾸 click me click me\r\n홀린 듯이 zoom\r\nClose up, close up, close up\r\nHip 해 hip hip\r\n머리 어깨 무릎 hip\r\nHip hip, hip hip hip hip 해 hip hip\r\n머리 어깨 무릎 hip\r\nHip hip hip hip 해 hip (hip, hip, hip)\r\n어딜 가든 넌\r\n(Reflection) 빛날 수 있어 yeah\r\n세상에 넌 하나뿐인 걸\r\n근데 왜이래 네 얼굴에 침 뱉니 (칵투)\r\n날 자극한 여러분 감사\r\n거기서 멈춘 찌질이 반사\r\n덕분에 나의 멘탈은 단단해\r\n난 다음 앨범 만들러 갈게\r\nAll you wanna be is trendy\r\n어그로 끌기 gimmick 때찌!\r\n그런 애들 끼리끼리 hip (hip, hip, hip)\r\n삐삐삐 논란이 돼 my fashion (oh)\r\n별로 신경 안 써 그저 action (yeah)\r\n자꾸 click me, click me\r\n홀린 듯이 zoom\r\nClose up, close up, close up\r\nHip 해 hip hip\r\n머리 어깨 무릎 hip\r\nHip hip, hip hip hip hip 해 hip hip\r\n머리 어깨 무릎 hip\r\nHip hip hip hip 해 hip (hip, hip, hip)\r\n코 묻은 티\r\n삐져나온 입\r\n떡진 머리, 난 상관없지\r\n코 묻은 티\r\n삐져나온 입\r\n떡진 머리, 내가 하면 hip\r\n코 묻은 티\r\n삐져나온 팬티\r\n떡진 머리, 난 상관없지\r\n코 묻은 티\r\n삐져나온 팬티\r\n떡진 머리, 내가 하면 hip\r\n삐삐삐 논란이 돼 my fashion (oh)\r\n별로 신경 안 써 그저 action (yeah)\r\n자꾸 click me, click me\r\n홀린 듯이 zoom\r\nClose up, close up, close up\r\nHip 해 hip hip\r\n머리 어깨 무릎 hip\r\nHip hip, hip hip hip hip 해 hip hip\r\n머리 어깨 무릎 hip\r\nHip hip hip hip 해 hip (hip, hip, hip)",
        "genre": "K-Pop",
        "likes": 762
    },
    {
        "name": "Dingga",
        "imageCover": "/upload/images/imageCover-1653413118611.jpg",
        "musicSource": "/upload/musics/musicSource-1653413118612.mp3",
        "release": "2020-10-18",
        "lyrics": "딩가딩가할래 (ayy), 친구들 모아 (ooh), 한잔 할래\r\nDrink like a, like a, like a fish (fish), 딩가딩, 링가링\r\n노는 게 좋아, ayy, 딩가딩가, 딩가딩가\r\nIce cream 먹으러 갈래? (Yeah; 나나나나나, 딩가딩가)\r\n유유자적해, 여기 방구석에\r\n언제부터인지 사회와의 거리가 꽤나 멀지\r\n이 여름이 다 지났네, 차가운 땀이 나네\r\n밤이나 또 낮이나 제자리만 돌고 돌아 (alright)\r\n부족해 비타민 D (yah), 아까워요 delivery fee (-very fee)\r\n하필 완벽하네 날씨, 청개구리 난 원래 집순이야\r\n내 친구는 날파리고, 외로움만 쌓이죠\r\n해독할 시간이 필요해\r\n딩가딩가할래, 친구들 모아 (모아), 한잔 할래\r\nDrink like a, like a, like a fish (fish), 딩가딩 (딩가딩, 링가링)\r\n노는 게 좋아, yeah, 딩가딩가, 딩가딩가\r\nIce cream 먹으러 갈래? (Yeah; 나나나나나)\r\nOne, two, three, four, 네 앞을 봐, 왜 다들 화나 있어?\r\n요즘 너무 삭막해, 그저 달콤한 휴식이 필요해\r\nI need to love myself, all I need is your heart\r\nOh me, oh my, ayy, oh (get on my back)\r\n드라마만 정주행해, 드라이브는 못 가네 (찌뿌둥해)\r\n폰 게임으로 주행, time is ticking, ticking, don't hold your breath\r\n젊은 날이 fade out, 어디 가니 친구야?\r\n쌓인 먼지 털어, 우리끼리 걸어, let's role play\r\n딩가딩가할래 (ayy), 친구들 모아 (모아), 한잔 할래\r\nDrink like a, like a, like a fish (fish), 딩가딩 (딩가딩, 링가링)\r\n노는 게 좋아, yeah, 딩가딩가, 딩가딩가\r\nIce cream 먹으러 갈래? (Yeah)\r\n우리같이\r\n딩가딩가할래, we all gotta get away\r\n외쳐, ooh-ah, ooh-ah (break it)\r\n딩가딩가할래, baby, do you wanna dance?\r\nUh, ooh-ah\r\n나나나나나\r\n나나나나나\r\n나나나나나\r\n딩가딩가해\r\n딩가딩가할래, 친구들 모아, 한잔 할래\r\nDrink like a, like a, like a fish, 딩가딩, 링가링\r\n노는 게 좋아, ayy, 딩가딩가, 딩가딩가\r\nIce cream 먹으러 갈래? (Yeah)\r\n우리같이\r\n딩가딩가할래, we all gotta get away\r\n외쳐, ooh-ah, ooh-ah (break it)\r\n딩가딩가할래, baby, do you wanna dance?\r\nUh, ooh-ah (나나나나나, 딩가딩가)",
        "genre": "K-Pop",
        "likes": 742
    },
    {
        "name": "AYA",
        "imageCover": "/upload/images/imageCover-1653413275507.png",
        "musicSource": "/upload/musics/musicSource-1653413275519.mp3",
        "release": "2020-11-03",
        "lyrics": "Aya\r\nEh ya\r\nHey ya\r\n비긴 것 같아\r\n애초에 이길 생각 따윈 없어\r\n봐 너나 나나 다 끝난 마당에 (으르렁 어이)\r\nA-yo a-yo\r\nYou got me jumping like a crazy clown\r\n뭐해\r\n썩은 이빨 뽑아내야지 아야\r\nI love you\r\n세상을 다 줄 것처럼 말하고\r\nHate you\r\n이젠 서로 화살을 겨눠\r\n뻔하디뻔한 bad ending\r\n님 얼굴에 침을 뱉어\r\n오점 하나 생겨 우린 남이 됐다\r\n못된 사랑놀이에 미쳐\r\n이기적인 넌 이젠 지쳐\r\n눈물인지 또 빗물인지 oh\r\n넌 내게 모욕감을 줬어\r\n눈물이 뚝 떨어진다 no, no, no, eh, oh oh eh, dong do-do-do-dong dong\r\n툭 떨어진다\r\n눈물이야 빗물이야 아야\r\n눈물이야 빗물이야 아야\r\n눈물이 툭\r\n들었다 놨다\r\n이제 그만해\r\n너나 나나 아냐 어린애\r\n아야야 꼴도 보기 싫어\r\nI'm so done\r\n너는 내 killer\r\n영화 속 villain\r\n사랑을 속이는 dealer\r\n숨겨봤자 수면 위로\r\nYou're a criminal\r\n늦었어 이미 넌\r\n방아쇠는 내 손에 gun shot shot\r\nA-yo, a-yo\r\nYou got me jumping like a crazy clown\r\n뭐해\r\n썩은 이빨 뽑아내야지 아야\r\n못된 사랑놀이에 미쳐\r\n이기적인 넌 이젠 지쳐\r\n눈물인지 또 빗물인지 oh\r\n넌 내게 모욕감을 줬어\r\n눈물이 뚝 떨어진다 no no no, no no, dong do-do-do-dong dong\r\n툭 떨어진다\r\n눈물이야 빗물이야 아야\r\n눈물이야 빗물이야 아야\r\n눈물이 툭\r\nAnd it's over 끝났어\r\n더이상 못하겠어\r\n남은 감정도 없어 (oh na na na)\r\n이건 아냐 sad ending\r\n널 만난 내 잘못이야\r\n눈물이 툭\r\n아야 툭 떨어진다\r\n뚝뚝뚝뚝뚝뚝뚝뚝\r\nDrop drop drop drop drop drop drop\r\n뚝뚝뚝뚝뚝뚝뚝뚝\r\n뚝 떨어진다\r\n눈물이야 빗물이야 아 아 아야\r\nHappy ending 뚝 떨어진다\r\n눈물이야 빗물이야 아 아 아야\r\n정나미가 뚝 떨어진다\r\nAya",
        "genre": "K-Pop",
        "likes": 754
    }
];

const musicStrayKids = [
    {
        "name": "MANIAC",
        "imageCover": "/upload/images/imageCover-1653413561507.jpg",
        "musicSource": "/upload/musics/musicSource-1653413561508.mp3",
        "release": "2022-03-18",
        "lyrics": "Let's go\r\n정상인 척 다들 힘 좀 빼\r\n짓고 있는 미소들은 쎄해\r\nLock이 풀리면 다 똑같지\r\n눈은 날 못 속여 ho!\r\n본체는 풀렸네 (uh, uh)\r\n정신을 간신히 잡지 (yup, yup)\r\n눈 한번 깜빡이고 back\r\n다시 세상이 정한 정상인 코스프레 준비 pow\r\nMash up, mind blown 정신은 back up\r\nPrototype 내 속은 언제나 freaky monster\r\n유행 같은 친절함은 철이 지나 rotten\r\n내 통수에 다 시원하게 욕해도 다 먹금\r\nPoppin'\r\n순진하게만 보다가 크게 다침\r\n호의가 계속되면 권리인 줄 아네 toxic\r\n이러니 돌지 warning\r\nManiac\r\n나사 빠진 것처럼 미쳐\r\nManiac\r\n핑핑 돌아버리겠지\r\nManiac\r\nFrankenstein처럼 걸어\r\nManiac, maniac ha, ha\r\nManiac (oh)\r\n나사 빠진 것처럼 웃어\r\nManiac (you can't stop the smoke)\r\n핑핑 돌아버리겠지 (thick as fog)\r\nManiac\r\n비정상투성이 집단 (we're maniacs)\r\nManiac, maniac\r\n다 터진 인형 실밥처럼\r\nHah! 결국 본색이 드러나지\r\n편하지 않은 이 life\r\nIt ain't \"live\", it's \"holding on\" yeah\r\n정상인 척 다들 척 좀 빼\r\n짓고 있는 미소 no fresh 해\r\nLocket 풀면 다들 똑같지\r\n눈은 날 못 속여 ho\r\nUh, 내가 걷는 이 거리는 다 지뢰밭\r\n다 언제 터질지 모르는 dormant volcano\r\n얌전했던 바람도 언제 바뀔지 몰라\r\n다들 숨긴 채 살아가 like a sealed tornado\r\nPoppin'\r\n순진하게만 보다가 크게 다침\r\n호의가 계속되면 권리인 줄 아네 toxic\r\n이러니 돌지 warning\r\nManiac\r\n나사 빠진 것처럼 미쳐\r\nManiac\r\n핑핑 돌아버리겠지\r\nManiac\r\nFrankenstein처럼 걸어\r\nManiac, maniac ha, ha\r\nManiac (oh)\r\n나사 빠진 것처럼 웃어\r\nManiac (you can't stop the smoke)\r\n핑핑 돌아버리겠지 (thick as fog)\r\nManiac\r\n비정상투성이 집단 (we're maniacs)\r\nManiac, maniac\r\n가득해 두 눈은 lunatic\r\n모든 감각이 날 서 있지\r\n예쁘게 포장한 대로 매번 가둬 놓으니\r\n흘러가다 보면 결국 드러나겠지\r\n숨겨진 내면의 그 모습이 yeah\r\nManiac\r\nManiac (maniac)\r\nManiac\r\nManiac, maniac\r\nYou cannot stop with this feeling (ha, ha)\r\nManiac (oh)\r\n나사 빠진 것처럼 웃어\r\nManiac (you can't stop the smoke)\r\n핑핑 돌아버리겠지 (thick as fog)\r\nManiac\r\n비정상투성이 집단 (we're maniacs)\r\nManiac, maniac",
        "genre": "K-Pop",
        "likes": 689
    },
    {
        "name": "Back Door",
        "imageCover": "/upload/images/imageCover-1653413711614.jpg",
        "musicSource": "/upload/musics/musicSource-1653413711615.mp3",
        "release": "2020-09-14",
        "lyrics": "Hey, you wanna come in?\r\n다 치워 이제 들어가\r\n저번 건 입가심 umm\r\n이젠 본편으로 party\r\n감당 안 됨 빠지지 yeah\r\n에고 어기어차 참 뻐근한 거\r\n다 풀고 맘대로 즐겨 누구라도\r\n불 끄고 눈 밝혀라 밤새\r\n억눌렀던 흥을 끌어모아 방생\r\n손잡이를 돌려 내가 원하던 걸 다 볼래\r\n이 문 앞에서 들리는 음악 소리\r\n내 목소리가 터지도록 외쳐\r\n멈칫할 시간 따윈 없어\r\nHey\r\nCome inside now\r\nHey\r\n관계자 외 출입금지 여긴 back door\r\n관계자 외 출입금지 여긴 back door\r\n관계자 외 출입금지 여긴 back door\r\n관계자가 되고 싶다면\r\nEy 여기까지가 끝인가 보오\r\n머리 쓸 시간 ready to go\r\n고생했어 주인 잘못 만난 몸\r\n호강 시켜 줄게 따라와라와라 back door\r\n세콤 아니니까 괜찮네\r\n지금 들려오는 이 소리는 팡파르\r\n밤새 놀아보자 필요한 건 more caffeine\r\n오려면 오든가 암호는 열려라 참깨\r\n달라 보여 모든 게 완벽해지는 이 순간\r\n두 눈앞에서 펼쳐지는 fantasy\r\n내 목소리가 터지도록 외쳐 멈칫\r\n할 시간 따윈 없어\r\nHey\r\nCome inside now\r\nHey\r\n관계자 외 출입금지 여긴 back door\r\n관계자 외 출입금지 여긴 back door\r\n관계자 외 출입금지 여긴 back door\r\n관계자가 되고 싶다면\r\nKnock knock\r\nLights out\r\nYeah 시간이 지나갈수록 더 화려해지는 이 순간\r\nYeah we gon' do it right now, do it right now baby\r\n이제부터 정신 차려\r\n이 세계를 눈에 담아\r\n심장 울려 rum pum pum pum\r\nMake 'em say wow wow wow yeah\r\n다들 불러와 와 와 ey\r\n노래 불러라 라 라 hey\r\n3 2 1\r\n관계자 외 출입금지 여긴 back door\r\n관계자 외 출입금지 여긴 back door\r\n관계자 외 출입금지 여긴 back door\r\n관계자가 되고 싶다면\r\nKnock knock\r\n종 때리고 미쳐 날뛰어\r\n오늘도 we do our thang\r\n종 때리고 미쳐 날뛰어\r\n오늘 밤도 짖어 ey\r\n종 때리고 미쳐 날뛰어\r\n오늘도 we do our thang\r\n종 때리고 미쳐 날뛰어\r\nHey, you wanna come in?",
        "genre": "K-Pop",
        "likes": 690
    },
    {
        "name": "Get Cool",
        "imageCover": "/upload/images/imageCover-1653413810280.jpg",
        "musicSource": "/upload/musics/musicSource-1653413810280.mp3",
        "release": "2018-11-14",
        "lyrics": "Ya, ya, ya\r\nOh wait\r\n꿀벌들도 get 꿀 get 꿀\r\n난 지루해 데굴데굴 데구리\r\n맛난 꿀 나도 먹고 싶어\r\n오늘은 안될 게 뭐 있어\r\n오랜만에 꺼낸 바지에선 돈이\r\n오늘 점심값은 굳었다 save ma 용돈님\r\n아침부터 운수대통 오늘따라 기분 좋아 (좋아, 좋아)\r\nEy 소소한 고민도 없는 날 love it\r\n웬일이야 오늘 정말\r\n내가 가지고 있던 운을 다 써버린 걸까\r\n많은 고민하지 말자 오늘만큼은 이런 나도\r\nGet Cool\r\n이 좋은 날 뭐가 더 필요해\r\nGet Cool\r\n내일 걱정 안 하며 날아갈 거야\r\n오늘 난 fly into the sky, fly into the sky, fly fly fly\r\n다 잘돼 오늘 뭔가 달라\r\n더 높게 fly into the sky, fly into the sky, fly fly\r\nSo so 하지만 운수 좋은 날\r\nGet cool, get cool, get cool 절로 노래가 나와 (la la la)\r\n사뿐 사뿐 사뿐 마치 구름 위 같아\r\n모르고 고르고 산 음료수\r\nGet 이득 원플러스원\r\n막내 오다 주웠다 훗\r\n이게 형 클라스죠\r\n(그날 밤) 치느님 영접 직전 개봉했더니 헐 다리가 3개\r\n먹고 난 직후 누군가가 집 벨을 눌러 바로 택배\r\nEy, ready, ready, ready babe 오늘 아마 내게 lucky day\r\n오늘따라 더 행복해져 get cool, get cool day yeah\r\n웬일이야 오늘 정말\r\n내가 가지고 있던 운을 다 써버린 걸까\r\n많은 고민하지 말자 오늘만큼은 이런 나도\r\nGet Cool\r\n이 좋은 날 뭐가 더 필요해\r\nGet Cool\r\n내일 걱정 안 하며 날아갈 거야\r\n오늘 난 fly into the sky, fly into the sky, fly fly fly\r\n다 잘돼 오늘 뭔가 달라\r\n더 높게 fly into the sky, fly into the sky, fly fly\r\nSo so 하지만 운수 좋은 날\r\n작은 것으로 절경이고 장관인 걸 신이 주신 선물이야\r\n부족 하지 않잖아 만족하는 걸\r\n이게 바로 get cool이야\r\nEy, small things that matter\r\nEy, little things that matter\r\nEvery once in a while I'ma feel so fly\r\nThat's 'cause there are subtle things like (whoo)\r\nKicking the leaves in the Autumn breeze\r\nDon't forget about the sound they make\r\nDoesn't matter if the world is a cold place\r\n'Cause I'm getting cooler (get cool)\r\nGet Cool\r\n이 좋은 날 뭐가 더 필요해\r\nGet Cool\r\n내일 걱정 안 하며 날아갈 거야\r\n오늘 난 fly into the sky, fly into the sky, fly fly fly\r\n다 잘돼 오늘 뭔가 달라\r\n더 높게 fly into the sky, fly into the sky, fly fly\r\nSo so 하지만 운수 좋은 날",
        "genre": "K-Pop",
        "likes": 650
    }
];

function seedDB() {
    User.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        else {

        }
    });
    Artist.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        else {
            seedArtist.forEach(function(artist){
                Artist.create(artist, function(err, newArtist) {
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("New artist added!");
                    }
                });
            });
            Music.remove({}, function(err) {
                if(err) {
                    console.log(err);
                }
                else {
                    connectMusicWithArtist(seedArtist[0].name, musicBTS);
                    connectMusicWithArtist(seedArtist[1].name, musicTakayan);
                    connectMusicWithArtist(seedArtist[2].name, musicPink);
                    connectMusicWithArtist(seedArtist[3].name, musicTwice);
                    connectMusicWithArtist(seedArtist[4].name, musicEve);
                    connectMusicWithArtist(seedArtist[5].name, musicItzy);
                    connectMusicWithArtist(seedArtist[6].name, musicMamamoo);
                    connectMusicWithArtist(seedArtist[7].name, musicStrayKids);
                }
            });
        }
    }); 
}

function connectMusicWithArtist (artistName, musicsArray) {
    Artist.findOne({ name: artistName.toString() }, function(err, foundArtist) {
        if(err) {
            console.log(err);
        }
        else {
            musicsArray.forEach(function(music){
                let tempMusic = music;
                tempMusic.artist = foundArtist;
                Music.create(music, function(err, newMusic){
                    if(err) {
                        console.log(err);
                    }
                    else {
                        console.log("New music added!");
                    } 
                });
            });
        }
    }); 
}

module.exports = seedDB;