const messages = {
  rain: [
    "CITY mein TEMPC baarish ho rhi hai — lgta hai kisi ka yaar haas rha hai! Raje Shah waali feeling aa gayi chat mein!",
    "CITY mein TEMPC aur baarish — yaar Imran Khan ka Mausam wala gaana chal rha hai kya? Aasman bhi ro rha hai!",
    "Are CITY mein TEMPC pe baarish! Dil Dhadakne Do wala scene — sab ghar jao chhata lo yaar!"
  ],
  freezing: [
    "CITY mein TEMPC — Ik ik kar hath pair thithar rahe ne yaar! Rajai odh ke baith, Katrina waali jacket nahi chalegi tenu!",
    "TEMPC CITY mein — itni thand ke Baba Ramdev bhi sweater pehen ke yoga kar rha hoga! Ghar se nikal mat yaar!",
    "CITY TEMPC — Dilwale Dulhaniya waala scene nahi hoga yaar, pehle jacket pehen fir station pe ja!"
  ],
  cool: [
    "CITY mein TEMPC — Mausam bada suhana hora hai yaar! Sidhu Moosewala waali thand, full vibes on ne!",
    "TEMPC CITY mein — aise mausam mein chai pee, Rahat Fateh Ali Khan suno, life is good yaar!",
    "CITY mein TEMPC — Jab We Met wali Geet ka mausam chal rha hai! Baahar ja kuch toh kar yaar!"
  ],
  perfect: [
    "CITY mein TEMPC — Naa garmi naa thand, Imtiaz Ali ki film wala scene chal rha hai yaar! Nikal baahar!",
    "TEMPC CITY mein — perfect mausam! Rocky aur Rani ki Prem Kahani wala vibe, bas mast reh yaar!",
    "CITY mein TEMPC — Yeh toh Kuch Kuch Hota Hai ka interval scene hai yaar, mausam ekdum sahi hai!"
  ],
  cloudy: [
    "CITY mein TEMPC aur baadal bhi ne — garmi itni ke AC bhi bol rha tera kya hoga yaar!",
    "TEMPC CITY mein baadal chhaye — yaar Devdas waala scene hai, pata nahi baarish ho ya na ho!",
    "CITY TEMPC pe baadal — Dil Se waala mausam, kuch bhi ho sakta hai yaar, taiyar reh!"
  ],
  hot: [
    "CITY mein TEMPC — Garmi itni ke chacha ne bola underwear bhi garmi kar rha hai! Halat kharab hai bhai!",
    "TEMPC CITY mein — Salman Khan bhi bina shirt ke bahar nahi niklega is garmi mein! AC on kar ghar baith!",
    "CITY mein TEMPC — itni garmi ke RCB bhi bol rha playoffs nahi bas ghar pe AC mein baitho yaar!"
  ]
};

module.exports = (req, res) => {
  const t = parseInt(req.query.t) || 0;
  const rain = parseFloat(req.query.rain) > 0;
  const cloud = parseInt(req.query.cloud) > 50;
  const city = decodeURIComponent(req.query.city || "Moga");
  const user = req.query.user ? " @" + req.query.user : "";

  let cat;
  if (rain) cat = "rain";
  else if (t <= 10) cat = "freezing";
  else if (t <= 18) cat = "cool";
  else if (t <= 28) cat = "perfect";
  else if (cloud) cat = "cloudy";
  else cat = "hot";

  const list = messages[cat];
  const msg = list[Math.floor(Math.random() * list.length)];
  const final = msg.replace(/CITY/g, city).replace(/TEMP/g, t) + user;

  res.setHeader("Content-Type", "text/plain");
  res.send(final);
};
