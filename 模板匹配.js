/**
 * 模板字符串
 * @param {模板字符串} template 
 * @param {any} map 
 */
function substitude(template,map){
    if(!template) return "";
    if(!map) return template;
    if(typeof template!=='string') throw 'invalid template';
    return template.replace(new RegExp('{\\w+}','gmi'),function(property){
        var prop=property.substr(1,property.length-2);
        return prop in map?map[prop].toString():'';
    })
}
console.log(substitude('bla bla {placeholder} haha', {placeholder: 'test'}));