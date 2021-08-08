function log(target,key,description){
    console.log(`${key} was called`);
    console.log(`${key}`);
}
class MyDecor{
    @log
    show(){
        console.log('log details');
    }
}
const decor=new MyDecor();
decor.show();