let currentChar = 1;

document.getElementById("nextButton").addEventListener("click", () => {
showRandomCharacter(); // コメントとキャラ画像をランダム表示
});
const characters = [
  { name: "パリー", img: "img/papuru-1.png",
     comment: [
      "誰かがあなたのうわさをしている・・・",
      "あなたはだんだん<br>背中がかゆくなる～",
      "あなたはだんだん<br>なんだか楽しくなる～♪",
      "あなたはだんだん<br>いつもより腹が減る～" ]},
  { name: "グーラ", img: "img/papuru-2.png",
     comment: [
      "君は…今日か明日、<br>新しい知識を得るでしょう。",
      "君は…軽い運動をしたくなるでしょう。",
      "君は…自分自身と<br>素直に向き合うでしょう。",
      "君は…何かを検索するでしょう。"
    ]},
  { name: "ウエッチ", img: "img/papuru-3.png",
     comment: [
      "なんも心配いらんのとちゃう？",
      "凄い！<br>いろんな意味で、明日はやばいで～♪",
      "ほんまについとるで～！<br>あんたは！！",
      "こりゃ～あかん…。<br>まぁこんな日もあるって。",
      "足の裏…かゆくないか？",
      "落ち込んでる場合ちゃうやろ？<br>お前より苦しいやつ、ごまんとおるわ！",
      "夏なら蚊に刺されるかもな…？<br>冬なら忘れ物に注意せなあかんで！"]},
  { name: "ダイモ", img: "img/papuru-4.png", 
    comment: [
      "るんるんるん～♪\n…呼んだ？",
      "ゲームは１日、８時間～♪",
      "今日…<br>5番目にあった人を好きになるかも～？",
      "今日…<br>8番目にあった人を好きになるかも～？",
      "暴飲暴食だけは絶対やめなさい！！",
      "誰かに甘えたくなる…かもね～♪",
      "休憩時間を大切に～♪<br>ほんとに大事だよ？"
    ]}
];

function showRandomCharacter() {
  const random = Math.floor(Math.random() * characters.length);
  const char = characters[random];

  // ランダムでコメント1つ選択
  const randomComment = char.comment[Math.floor(Math.random() * char.comment.length)];

  document.getElementById("character").innerHTML = `<img src="${char.img}" alt="キャラ画像" width="300">`;
  document.getElementById("comment").innerHTML = randomComment;  // ← ここで改行対応
  document.getElementById("charName").textContent = char.name;
}