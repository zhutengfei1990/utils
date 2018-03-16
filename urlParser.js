let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log(parseParam(url));

function parseParam(url){
  let obj = {}
  let index = url.indexOf('?') + 1;
  url = url.substring(index);
  let arr = url.split('&');
  arr.forEach(element => {
    let [key, value] = element.split('=');
    value = decodeURIComponent(value === undefined ? true : value);
    value = /^\d+$/.test(value) ? parseFloat(value) : value
    if(obj[key] === undefined){
      obj[key] = value;
    }else{
      let temp = obj[key];
      if(Array.isArray(temp)){
        temp.push(value);
      }else{
        temp = [temp];
        temp.push(value);
      }
      obj[key] = temp;
    }
  });
  return obj;
}
