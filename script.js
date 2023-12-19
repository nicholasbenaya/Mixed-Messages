const phrases = [
  "It is better to fail in originality than to succeed in imitation.",
  "The road to success and the road to failure are almost exactly the same.",
  "Success is getting what you want, happiness is wanting what you get.",
];
const author = [
  "Herman Melville",
  "Colin R. Davis",
  "W. P. Kinsella"
]
console.log("Today's Motivational Phrase:")
const randMessage = () => {
  let rand = Math.floor(Math.random() * 3);
  // console.log(rand);
  switch (rand) {
    case 0:
      return `${phrases[0]} - ${author[0]}`;
      break;
    case 1:
      return `${phrases[1]} - ${author[1]}`;
      break;
    case 2:
      return `${phrases[2]} - ${author[2]}`;
      break;
    default:
      break;
  }
};
console.log(randMessage());
