var s = "MCMXCIV";
// 1994

var romanToInt = function (s) {
  let total = 0;
  for (var i = 0; i < s.length; i++) {
    // if (s[i] === "V" && s[i - 1] !== "I") {
    //   total += 5;
    // } else if (s[i] === "L" && s[i - 1] !== "X") {
    //   total += 50;
    // } else if (s[i] === "D" && s[i - 1] !== "C") {
    //   total += 500;
    // } else if (s[i] === "M" && s[i - 1] !== "C") {
    //   total += 1000;
    //   console.log(total);
    // } else if (s[i] === "I" && s[i + 1] !== "V" && s[i + 1] !== "X") {
    //   total += 1;
    // } else if (s[i] === "I" && s[i + 1] === "V") {
    //   total += 4;
    // } else if (s[i] === "I" && s[i + 1] === "X") {
    //   total += 9;
    //   console.log(total);
    // } else if (s[i] === "X" && s[i + 1] !== "L" && s[i + 1] !== "C") {
    //   total += 10;
    // } else if (s[i] === "X" && s[i + 1] === "L") {
    //   total += 40;
    // } else if (s[i] === "X" && s[i + 1] === "C") {
    //   total += 90;
    //   console.log(total);
    // } else if (s[i] === "C" && s[i + 1] !== "D" && s[i + 1] !== "M") {
    //   total += 100;
    // } else if (s[i] === "C" && s[i + 1] === "D") {
    //   total += 400;
    // } else if (s[i] === "C" && s[i + 1] === "M") {
    //   total += 900;
    // }
  }

  return total;
};

romanToInt(s);
