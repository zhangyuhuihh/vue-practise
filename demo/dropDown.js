// var cc=function(){
// return {xx:2}}
// var ff=function(){
// return {xx:2}}
// var dd=cc();
// var gg=ff()
// console.log(gg==dd)
// var cc=2;
// var ff=2;
// console.log(cc===ff)

// var dd=[1,2,3,4,5,6,7,8];
// var cc=dd.splice(1,3);
// console.log(cc)
// console.log(dd)

// call应用
function cat (){
}
cat.prototype={
    food:'fish',
    say:function(){
        console.log(this.food)
    }
}
var blackcat=new cat();
// blackcat.say();
var whitedog={
    // name:"youyou",
    food:'bone'
}
//say方法的this对象改变了，改为了call里面的对象，不然原来这里的say方法的this对象应该是blackcat
blackcat.say.call(whitedog)


function a(){
    var i=0;
    function b(){
        i++
    };
    b();
    console.log(typeof(i))
    return i
}
var result=a();//这里是没有闭包的,i是number简单类型，然后b函数并没有被外面引用


function a(){
    var i={'name':'zhangyuhui'};
    function b(){
        i.name="zhangyuhui22"
    };
    b();
    console.log(typeof(i))
    return i
}
var result=a();//这里依然没有闭包，因为b函数并没有被a函数外面引用

function a(){
    var i={'name':'zhangyuhui'};
    var b=function(){
        i.name="zhangyuhui22"
    };
    return b
}
var result=a();//这里产生闭包，因为b函数在被外面全局的result变量引用，所以a函数下的i是不会被释放的


function a(){
    var i={'name':'zhangyuhui'};
    var b=function(){
        i.name="zhangyuhui22"
    };
    return b()
}
var result=a();//这里不产生闭包，,result为undefined,简直不符合逻辑
console.log(result)
   


