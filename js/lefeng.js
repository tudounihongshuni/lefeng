/**
 * Created by Administrator on 2016/12/4.
 */
/*封装*/
/*window.$=HTMLElement.prototype.$=function(selector){
    var elems=(this==window?document:this)
        .querySelectorAll(selector);
    return elems==null?null:
        elems.length==1?elems[0]:
            elems;
}*/
/*下拉菜单功能*/
// $(".left_header").addEventListener("mouseover mouseout",function(){
//     var e=window.event||argruments[0];
//     console.log(e);
    // var span=$(this);
    // var list=$(".area_sell");
    // if(span.is(".toggle")){
    //     span.removeClass("toggle");
    //     list.hide();
    // }else{
    //     span.addClass('toggle');
    //     list.show();
    // }
//})
/*广告轮播数组*/
/*var imgsList=[
    {"i":0,"img":"img/banner01.png"},
    {"i":1,"img":"img/banner02.png"},
    {"i":2,"img":"img/banner03.png"},
    {"i":3,"img":"img/banner04.png"},
    {"i":4,"img":"img/banner05.png"}
];
var adv={
    LIWIDTH:1366,
    init:function(){
        var self=this;
        self.updateView();
    },
    updateView:function(){
        var imgs=document.querySelector(".imgs");
        var index=document.querySelector(".index");
        var hover=document.querySelector(".index>.hover");
       //console.log("updateView调用成功")
       /*imgs.style.width=this.LIWIDTH*imgsList.length+"px";
        for(var i=0,lis=[],idxs=[];i<imgsList.length;i++){
            lis[i]="<li data-i='"+imgsList[i].i+"'><a href='#'><img src='"+imgsList[i].img+"'></a></li>";
            idxs[i]="<li></li>";
        }
        imgs.innerHTML=lis.join("");
        index.innerHTML=idxs.join("");

    //    清除class为hover的li
        //hover.className="";
        //indexLi[imgsList[0].i].className="hover";
    }
}
window.onload=function(){
    //console.log('页面加载完毕');
    adv.init();
}
    */
