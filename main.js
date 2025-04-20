let availableIndexes = [0, 1, 2, 3];
let clickCount = 0;

document.getElementById("nextButton").addEventListener("click", () => {
  if (clickCount >= 3) return;

  showRandomCharacter();
  clickCount++;
  document.getElementById("click-indicator").textContent = "●".repeat(clickCount);

  if (clickCount === 3) {
    const btn = document.getElementById("nextButton");
    btn.textContent = "終わり";
    btn.style.pointerEvents = "none"; // 押せなくするが、見た目は維持
    btn.style.opacity = "1";          // 薄くならないように

    document.getElementById("fixed-message").textContent = "またきてね～♪";  // ← メッセージ変更
  }
});

const characters = [
  { name: "パリー", img: "img/papuru-1.png",
     comment: [
      "誰かが…<br>あなたの うわさをしている…。",
      "あなたは どんどん<br>背中が かゆくなる～…",
      "あなたは なんだか<br>だんだん楽しくなる～♪",
      "あなたは スーパーで<br>買い物したくなる～…" ,
      "よ～し！ 運気上昇だ！<br>でも油断は しないで♪",
      "熱いものは<br>冷ましてから食べて～。",
      "短気は 超 損気なり…。<br>早めに治そう！",
      "謙虚な気持ちを<br>取り戻すんだ！",
      "ラジオ体操の<br>ハーフバージョンやってみる？",
      "ぬるま湯がいいかもね～？",
      "エスカレーターと階段…<br>たまには階段も…",
      "ひらめきパワーが<br>全開モードかも！",
      "迷った時こそ<br>ジャンプのチャンスだよ！",
      "大盛り はやめて<br>普通盛り にしよう！",
      "今あるものを<br>大切にしてみれば？",
      "好きなものに触れて<br>心を整えよう♪",
      "ラッキーワードは<br>ダンス or 野菜だよ～。",
      "パリッとカラッと～♪<br>ピッピラパリ～♬<br><幸運レベル★★★>"
    ]},
  { name: "グーラ", img: "img/papuru-2.png",
     comment: [
      "君は…<br>新たな知識を得るでしょう。",
      "君は…軽い運動をしたくなるでしょう。",
      "君は…自分自身と<br>素直に向き合うでしょう。",
      "君は…何かを検索するでしょう。<br>ぺちっ",
      "ワオッ！！ 信じられない…!<br>君は ついてます！",
      "耳の中がかゆくなるかも…？",
      "誰かが 君を<br>応援しているみたいです。",
      "感謝の気持ちを<br>思い出しましょうか！",
      "ホームラン or アンビリバボー♪",
      "君の努力は<br>きっと報われるでしょう。",
      "君はどっちかを<br>食べたくなるでしょう。<br>すし♪ or お肉♪",
      "好きな音楽で<br>気分チェンジしましょっか♪",
      "ステキな予感が<br>そっと近づいています…！",
      "突然ですが、私はイカが好きです。<br>君はどう…？",
      "明日はなんとなく…<br>ハトと目が合うでしょう…汗",
      "幸運レベル＜★＞<br>ガーン…⤵<br>（ってことは明後日から…♪）",
      "ミスはつきもの。<br>成功の種です。",
      "そのシャンプー…<br>あなたの頭皮に合っていますか？",
      "ピヨヨヨ～ン☆<br>おばちゃんに叱られる…汗"
    ]},
  { name: "ウエッチ", img: "img/papuru-3.png",
     comment: [
      "なんも心配いらんのと ちゃう？",
      "凄い！いろんな意味で、<br>明日は やばいで～♪",
      "ほんっまに ついとるで～！<br>あんたは！！",
      "あちゃ～…こりゃあかん。<br>まぁ、そんな日もあるって。",
      "足の裏…かゆくないか？",
      "落ち込んでる場合ちゃうやろ？<br>お前より苦しいやつ、<br>ごまんとおるわ！",
      "夏なら蚊に刺されるかもな…？<br>冬なら忘れ物に注意や。",
      "暑かったら脱ぐ！<br>寒かったら着る！<br>それだけや。",
      "やっぱり、歯は磨かなアカン…",
      "何度も言うぞ？<br>他人のせいにしたらアカン！<br>自分や自分！",
      "珍しい運がこちらへ<br>向かってきてるで～♪",
      "ふとした出会いが<br>チャンスになる！…かもな？",
      "こりゃ～何が何でも<br>エビ or カニ やで。",
      "少しは休まんかい！<br>メリハリ や メリハリ！",
      "うぅ……わしかて<br>つらい日も あるねん…。<br>グスッ…",
      "新しい卵焼きレシピ<br>作ってみんか？",
      "自分を信じる？<br>ほどほどにしとき～。"
    ]},
  { name: "ダイモ", img: "img/papuru-4.png", 
    comment: [
      "ふんふんふん～♪<br>…呼んだ？",
      "ゲームは１日、８時間～♪<br>モゾッ",
      "明日…<br>5番目に会った人を<br>好きになるかも？",
      "明日…<br>8番目に会った人を<br>応援しよう♪",
      "暴飲暴食だけは絶対やめなさい！<br>モゾッ",
      "誰かに甘えたくなる…<br>かもね～♪",
      "休憩時間を大切に～♪<br>ほんとに大事だよ？",
      "誰かを助ける人を<br>助けてあげると良いかも？",
      "な～んにも心配は要りません。<br>モゾッ",
      "好きの力を信じる…<br>すごい言葉だ…♪",
      "細めのやわらか焼き芋～w<br>食べたいな～♪",
      "真面目な話、<br>誰かに好かれてるっぽいよ。",
      "ちょっぴり冒険も<br>アリな予感…！",
      "笑顔の数だけ<br>ハッピー増加中♪",
      "素直な気持ちが<br>運気を呼びこむよ～♪",
      "うん♪ ちいさな幸せに<br>出会えるかもね～♪",
      "ビューティフォー♪<br>モゾッ",
      "モゾッモゾッモゾッ…<br>ドスンッ、ポタッ…<br>＜幸運レベル★★★★★＞",
      "0.2kgやせるっぽい。<br>モゾッ",
      "誰かの難しい話を<br>少しだけ聞いてみよう。",
      "バランスだと思う。<br>モゾモゾッ"
    ]}
];

function showRandomCharacter() {
  if (availableIndexes.length === 0) return; // 全キャラ表示済なら終了

  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  const selectedIndex = availableIndexes[randomIndex];
  availableIndexes.splice(randomIndex, 1); // 使ったインデックスを除去

  const char = characters[selectedIndex];
  const randomComment = char.comment[Math.floor(Math.random() * char.comment.length)];

  document.getElementById("character").innerHTML = `<img src="${char.img}" alt="キャラ画像" width="300">`;
  document.getElementById("comment").innerHTML = randomComment;
  document.getElementById("charName").textContent = char.name;
}