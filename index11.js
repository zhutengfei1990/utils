function load(){
    return Promise.resolve('sangfor')
        .then(result=>{
            throw result;
        })
        .catch(result=>'error')
}
async function fn(){
    console.log(await load())
}
fn();