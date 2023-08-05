module.exports = function check(str, bracketsConfig) {
  const map = new Map(bracketsConfig);
  let stack = [];
  for (let i = 0; i < str.length; i++){
      if(map.get(stack[stack.length - 1]) === str[i]){
        stack.pop()
      } else {
        stack.push(str[i]);
      }
  }
  if(stack.length === 0){
    return true;
  } else{
    return false;
  }
}