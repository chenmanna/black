jQuery(function($){
    $(".menus").on("click","a",function(){
        // 当前点击标签为a，修改a的href属性值+传入当前点击文本
        $(this).attr("href","../html/goods.html?"+$(this).html());
    })
    var currentId = decodeURI(location.search).substr(1);
    console.log(currentId,location.search);
    // 发送请求获取当前点击的数据
    $.ajax({
        type: "get",
        data: {"currentId" : currentId},
        url: "/src/api/DetailPages.php",
        success: function(res){
            console.log(res);
            var a=1;
            var res = JSON.parse(res);
            var detailtitle = document.querySelector(".detailtitle");
            var detailText = document.querySelector(".detailText");
            var detailTitle = document.querySelector(".detailTitle");
            var imgBig = document.querySelector(".imgBig>div>img");
            var imgSmall = document.querySelector(".imgSmall>div>img");
            var price = document.querySelector(".price>.price1");
            var offprice1 = document.querySelector(".offprice1");
            console.log(price);
            for(var key in res){
                detailTitle.innerHTML = res[key].title;
                imgBig.src = res[key].url;
                imgSmall.src = res[key].url;
                price.innerHTML = res[key].price;
                detailText.innerHTML = res[key].goodsname;
                detailtitle.innerHTML = res[key].title;
                offprice1.innerHTML = res[key].offprice
            }
            
            // 点击加入购物车添加当前商品/数量+1
            var car = document.querySelector(".goodsSelectBottom>.car");
            var carNum = document.querySelector(".carNum");
            car.onclick = function(){
            // console.log(res);        
                for(var key in res){
                    var currentId = res[key].id;
                    var currentTitle = res[key].title;
                    var currentImg = res[key].url;
                    var currentPrice = res[key].price;
                    var currentGoods = res[key].goodsname;
                }
                console.log(currentId,currentPrice,currentImg,currentTitle);
                $.ajax({
                    type: "get",
                    data: {"currentId" : currentId,"currentTitle" : currentTitle,"currentImg" : currentImg,"currentPrice" : currentPrice,"currentGoods" : currentGoods},
                    url: "/src/api/buyCar.php", 
                    success: function(res){
                        var res = JSON.parse(res);
                        console.log(res);
                        for(var key in res){
                            carNum.innerHTML = res[key].qty;
                        }
                    }
                })
            }
            // 点击立即购买跳转页面===================
            var buy = document.querySelector(".goodsSelectBottom>.buy");
            buy.onclick = function(){
                // 同加入购物车同功能
                for(var key in res){
                    var currentId = res[key].id;
                    var currentTitle = res[key].title;
                    var currentImg = res[key].url;
                    var currentPrice = res[key].price;
                    var currentGoods = res[key].goodsname;
                }
                console.log(currentId,currentPrice,currentImg,currentTitle);
                $.ajax({
                    type: "get",
                    data: {"currentId" : currentId,"currentTitle" : currentTitle,"currentImg" : currentImg,"currentPrice" : currentPrice,"currentGoods" : currentGoods},
                    url: "/src/api/buyCar.php", 
                    success: function(res){
                        var res = JSON.parse(res);
                        console.log(res);
                        for(var key in res){
                            carNum.innerHTML = res[key].qty;
                        }
                    }
                })
                // 跳转
                location.href = "../html/shoppingCar.html";
            }

            //放大镜=======================
            var backgroundImg;
             for(var key in res){
                 backgroundImg = res[key].url;
            }
            console.log(backgroundImg);
              // 放大镜
            var top=$("#test1 img").position().top;
            //获得图片离浏览器左端的距离
            var left=$("#test1 img").position().left;
            //鼠标在图片内部移动
            $("#test1 img").mousemove(function(e){
                $("#fang").css({
                   //此时鼠标的位置
                   "top":e.clientY+20+"px",
                   "left":e.clientX+20+"px",
                });
                $(".fdk").css({
                    "background" : `url(${backgroundImg})`,
                  // "background-image":"'" + backgroundImg + "'",
                    "background-size":"1000px 1000px",
                    "background-repeat":"no-repeat",
                   //调整放大镜中的图片的位置
                    "background-position":"-"+(e.clientX-left-30)+"px -"+(e.clientY-top-100)+"px",
                   //放大图片
                    "transform":"scale(1.3,1.3)"
                })
            });
           //鼠标移进图片时显示放大镜
            $("#test1 img").mouseenter(function(){ 
               $(".fdk").show();
            });
            //鼠标移出图片时隐藏放大镜
            $("#test1 img").mouseout(function(){
               $(".fdk").hide();
            });

        }

    })

    // 点击高亮当前span
    $(".selectSpan").on("click","span",function(){
        $(this).addClass("goodsActive").siblings("span").removeClass("goodsActive");
        $(this).removeClass("bordercolor").siblings("span").addClass("bordercolor");
        $(".spanL").removeClass("bordercolor");
    })
   
    // 显示购物车商品数量
    var carNum = document.querySelector("#header .carNum");
    $.ajax({
        type: "get",
        url:"/src/api/shoppingCar.php",
        success:function(res){
            var res=JSON.parse(res);
            var shoppingNum = res.length;
            // console.log(data.length);
            carNum.innerHTML = shoppingNum;

        }
    })



    // // 放大镜
    //  var top=$("#test1 img").position().top;
    //             //获得图片离浏览器左端的距离
    //             var left=$("#test1 img").position().left;
    //             //鼠标在图片内部移动
    //             $("#test1 img").mousemove(function(e){
    //                $("#fang").css({
    //                    //此时鼠标的位置
    //                    "top":e.clientY+20+"px",
    //                    "left":e.clientX+20+"px",
    //                });
    //                $(".fdk").css({
    //                   "background-image":"url(images/1.png)",
    //                    "background-size":"800px 450px",
    //                    "background-repeat":"no-repeat",
    //                    //调整放大镜中的图片的位置
    //                    "background-position":"-"+(e.clientX-left-36)+"px -"+(e.clientY-top-6)+"px",
    //                    //放大图片
    //                    "transform":"scale(1.5,1.5)"
    //                })
    //            });
    //            //鼠标移进图片时显示放大镜
    //            $("#test1 img").mouseenter(function(){
    //                $(".fdk").show();
    //            });
    //            //鼠标移出图片时隐藏放大镜
    //            $("#test1 img").mouseout(function(){
    //                $(".fdk").hide();
    //            });
    
    
}) 