function ReadSentence(string) {
  let countWord = 0;
  let countCaracter = 0;
  let countVowels = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    countCaracter++;
    if (string[i] === " " || string[i] === ".") countWord++;
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] === vowels[j]) countVowels++;
    }
  }

  return [string, countWord, countCaracter, countVowels];
}

const exp1 = ReadSentence("The purpose of our lives is to be happy.");
const exp2 = ReadSentence(
  "You only live once, but if you do it right, once is enough."
);
const exp3 = ReadSentence(
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
);

console.log(
  "the sentence is : " +
    exp1[0] +
    "\n" +
    "Number of words is : " +
    exp1[1] +
    "\n" +
    "Number of caracters is : " +
    exp1[2] +
    "\n" +
    "Number of vowels is : " +
    exp1[3] +
    "\n"
);
console.log("******************************************\n");
console.log(
  "the sentence is : " +
    exp2[0] +
    "\n" +
    "Number of words is : " +
    exp2[1] +
    "\n" +
    "Number of caracters is : " +
    exp2[2] +
    "\n" +
    "Number of vowels is : " +
    exp2[3] +
    "\n"
);
console.log("******************************************\n");
console.log(
  "the sentence is : " +
    exp3[0] +
    "\n" +
    "Number of words is : " +
    exp3[1] +
    "\n" +
    "Number of caracters is : " +
    exp3[2] +
    "\n" +
    "Number of vowels is : " +
    exp3[3] +
    "\n"
);
