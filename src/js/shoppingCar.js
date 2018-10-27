jQuery(function($){
     $(".menus").on("click","a",function(){
        // 当前点击标签为a，修改a的href属性值+传入当前点击文本
        $(this).attr("href","../html/goods.html?"+$(this).html());
    })
    $.ajax({
        type: "get",
        url: "/src/api/shoppingCar.php",
        success: function(res){
            var goodsNumber = document.querySelector(".goodsNumber");
            getRes(res);
            var deletegoods = document.querySelector(".deletegoods");
            // 删除商品+添加减少商品数量========================
            goodsNumber.onclick = function(e){
                console.log(55,e.target);
                // 点击删除当前商品数据******
                if(e.target.className=="deletegoods"){
                    console.log(55);
                    var currentId = e.target.parentElement.parentElement.getAttribute("guid");
                    console.log(currentId);
                    $.ajax({
                        type: "get",
                        data: {"currentId" : currentId},
                        url: "/src/api/deletegoods.php",
                        success: function(res){
                            // 页面渲染
                            getRes(res);
                            if(res == "[]"){
                                goodsNumber.innerHTML = '';
                                var totalPrice = document.querySelector(".totalPrice");
                                totalPrice.innerHTML = '';
                                window.location.reload();
                            }
                        }
                    })

                }
                // 点击增加减少数量
                // if(e.target.className == "numJian"){
                //     var qty = e.target.nextElementSibling;
                //     console.log(e.target,11111111,qty);
                //     if(qty.value<=0){
                //         return;
                //     }else{
                //         qty.value = (qty.value*1)-1;
                //         getprice(e,qty);
                //     }   
                // }else if(e.target.className == "numJia"){
                //     var qty = e.target.previousElementSibling;
                //     qty.value = (qty.value*1)+1;
                //     getprice(e,qty);   
                // }
                // 
                // 点击增加减少数量*******
                if(e.target.className == "numJian"){
                    var currentId = e.target.parentElement.parentElement.parentElement.getAttribute("guid");
                    console.log(currentId);
                    var qty = e.target.nextElementSibling;
                    console.log(e.target,11111111,qty);
                    if(qty.value<=0){
                        return;
                    }else{
                        qty.value = (qty.value*1)-1;
                        // 发送请求修改数据库qty-1****
                        $.ajax({
                            type: "get",
                            data: {"currentId" : currentId},
                            url: "/src/api/shoppingCargoodsNum.php",
                            success: function(res){
                                console.log(res);
                            }
                        })    
                        getprice(e,qty);
                    } 
                // 点击增加添加数量*******   
                }else if(e.target.className == "numJia"){
                    var currentId = e.target.parentElement.parentElement.parentElement.getAttribute("guid");
                    var qty = e.target.previousElementSibling;
                    qty.value = (qty.value*1)+1;
                    // 修改数据库qty+1数量****
                    $.ajax({
                        type: "get",
                        data: {"currentId" : currentId,"jia":1},
                        url: "/src/api/shoppingCargoodsNum.php",
                        success: function(res){
                            console.log(res);
                        }
                    })    
                    getprice(e,qty);   
                }
            }

            // 获取res渲染页面===================
            function getRes(res){
                res = JSON.parse(res);
                //页面渲染****
                for(var i=0;i<res.length;i++){
                    var lis="";
                    for(var key in res){
                        lis += `<ul class="ulList" guid="${res[key].uid}"><li class="goodsImgTitle"><div class="F_left"><img src="${res[key].url}" alt="" /></div><p class="F_left">${res[key].title}</p></li><li class="goodsprice1">${res[key].price}</li><li><div class="goodsbuyNum"><input type="button" value = "-" class="numJian"/><input type="text" value= "${res[key].qty}" class="goodsQty"/><input type="button" value = "+" class="numJia"/></div></li><li class="oneTotal">${res[key].qty*res[key].price}</li><li><p>移入收藏夹</p><p class="deletegoods">删除</p></li></ul>`           
                    }
                    goodsNumber.innerHTML = lis; 
                    // 单价保留两位小数****
                    var oneTotal = document.querySelector(".oneTotal");
                    console.log(oneTotal);
                    oneTotal.innerHTML = (oneTotal.innerHTML*1).toFixed(2);  
                }
                // 计算总价****
                var totalPrice = document.querySelector(".totalPrice");
                var oneTotal = document.querySelectorAll(".oneTotal");
                var momey = 0;
                for(var i=0;i<oneTotal.length;i++){
                   momey += oneTotal[i].innerHTML*1;
                }
                totalPrice.innerHTML = momey;
            }    
            
            getRes(res);
             // getprice();
            // 计算价格======================
            function getprice(e,qty){
                var currentLi = e.target.parentElement.parentElement;
                var currentprice = currentLi.previousElementSibling;
                var currentOneTotal = currentLi.nextElementSibling;
                currentOneTotal.innerHTML = (currentprice.innerHTML * qty.value).toFixed(2);
                var totalPrice = document.querySelector(".totalPrice");
                var oneTotal = document.querySelectorAll(".oneTotal");
                var momey = 0;
                for(var i=0;i<oneTotal.length;i++){
                   momey += oneTotal[i].innerHTML*1;
                }
                totalPrice.innerHTML = momey;
            }
            // 点击结算
            var buyMomey = document.querySelector(".buyMomey");
            buyMomey.onclick = function(){
                if(res=="[]"){
                    alert("hei！购物车没有商品噢！快去加购吧!");
                }else{
                    location.href = "../html/login.html";
                }
            }


            // 轮播图
             // 1.等待图片加载完毕后，获取图片宽度。focus的宽度是一张图片的宽度，ul是所有图片总宽度（图片宽度*图片的数量）.
            // 2.复制索引为0的图片，放在最后面。记住在获取轮播图图片数量前复制。
            // 3.当索引为长度的时候，其实是索引为1。
            // 4.生成页码，小圆点，小圆点个数为len-1
            // 5.根据轮播图滚动，对应页码高亮
            // 6.鼠标移入停止轮播，鼠标移出重新开始
            // 7.点击页码小圆点，通过改变idx，切换图片及对应的小圆点
            // var bannerLi = document.querySelector(".shoppingCar .bannerLi");
            // var banner = document.querySelector(".shoppingCar .banner");
            // var bannerlist = document.querySelector(".shoppingCar .bannerlist");
            //  firstImg.onload = function(){
            //     imgWidth = firstImg.offsetWidth;
            //     focus.style.width = imgWidth + 'px';
            //     ul.style.width = imgWidth * len + 'px';
            // };

        }
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
})