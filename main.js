var reverseWords = function(s) {
   let array = s.trim().split(' ').reverse();
   return array.filter(value => value !== "").join(" ");
};
