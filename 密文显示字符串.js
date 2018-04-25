//密文显示
//abcdefg --> ab****g
function formatter(text){
  text = text.replace(/^(\w{2})(\w*)(\w{1})$/, function(all, u1, u2, u3){
    return u1 + '*'.repeat(u2.length) + u3;
  })
  return text;
}
