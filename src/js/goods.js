jQuery(function($){
    // $(".menus").on("click","a",function(){
    //     // 当前点击标签为a，修改a的href属性值+传入当前点击文本
    //     $(this).attr("href","#");
    // })
     $(".menus").on("click","a",function(){
        // 当前点击标签为a，修改a的href属性值+传入当前点击文本
        $(this).attr("href","goods.html?"+$(this).html());
    })
    var currentCon = decodeURI(location.search).substr(1);  
    console.log(currentCon);
    var search_l = document.querySelector(".search-l");
    search_l.value = currentCon;
    search_l.style.color="#ccc";
    // 发起请求获取数据
    // ****************************************************************
     // $.ajax({ 
     //    type: "get", 
     //    data : {"goodsname": currentCon},
     //    url:"/src/api/goods.php",
     //    success:function(res){
     //        var resObj = JSON.parse(res);
     //        console.log(res);
     //        console.log(typeof(res));
     //       // ================================
     //        // 获取数据渲染页面goodslist
     //        var goodslist = document.querySelector(".goodslist");
     //        console.log(goodslist);
     //        var goodsUL = document.createElement("ul");
     //        goodsUL.classList.add("goodsUL");
     //        var liCon="";
     //         for(var key in resObj){
     //             liCon += `<li id="${resObj[key].id}"class="goodsLI"><img class="goodsIMG" src="${resObj[key].url}"/><span class="goodsSPAN">${resObj[key].price}</span><p class="goodsP">${resObj[key].title}</p></li>`
     //        }
     //        console.log(liCon);
     //        goodsUL.innerHTML = liCon;
     //        goodslist.appendChild(goodsUL);
            // *****************************************************************
        // 页码与数量
        // var page = document.querySelector(".page-l");
            // var page = document.querySelector(".page-l");
                // page.innerHTML = "";
        
        var currentPage = 1;
        var qty = 2;
        $.ajax({ 
        type: "get", 
        data : {"goodsname": currentCon,"currentPage" : currentPage,"qty" : qty}, 
        url:"/src/api/goodsPage.php",
        success:function(res){
            console.log(res);
            var res = JSON.parse(res);
            var goodslist = document.querySelector(".goodslist");
             var goodsUL = document.createElement("ul");
            goodsUL.classList.add("goodsUL");
            goodsUL.innerHTML = res.data.map(function(item){
                return `<li id="${item.id}"class="goodsLI"><img class="goodsIMG" src="${item.url}"/><span class="goodsSPAN">${item.price}</span><p class="goodsP">${item.title}</p></li>`
            }).join("");
            goodslist.appendChild(goodsUL);
            // 计算页码
            var total = Math.ceil(res.len/res.qty);
            var page = document.querySelector(".page-l");
            // console.log(page);
            page.innerHTML = "";
            // goodslist.innerHTML = "";
            for(var i=1;i<total;i++){
                var span = document.createElement("span");
                span.classList.add("pagenumber");
                span.innerHTML = i;
                if(i == res.currentPage){
                    span.classList.add("pageActive");
                }
                page.appendChild(span);
            }

            page.onclick = function(e){
                console.log(e.target);
                if(e.target.className.toLowerCase() == "pagenumber"){
                    goodslist.innerHTML = "";
                    currentPage = e.target.innerHTML;
                    $.ajax({ 
                        type: "get", 
                        data : {"goodsname": currentCon,"currentPage" : currentPage,"qty" : qty}, 
                        url:"/src/api/goodsPage.php",
                        success:function(res){
                            console.log(res);
                            var res = JSON.parse(res);
                            var goodslist = document.querySelector(".goodslist");
                             var goodsUL = document.createElement("ul");
                            goodsUL.classList.add("goodsUL");
                            goodsUL.innerHTML = res.data.map(function(item){
                                return `<li id="${item.id}"class="goodsLI"><img class="goodsIMG" src="${item.url}"/><span class="goodsSPAN">${item.price}</span><p class="goodsP">${item.title}</p></li>`
                            }).join("");
                            goodslist.appendChild(goodsUL);
                            // 计算页码
                            var total = Math.ceil(res.len/res.qty);
                            var page = document.querySelector(".page-l");
                            page.innerHTML = "";
                            for(var i=1;i<total;i++){
                                var span = document.createElement("span");
                                span.classList.add("pagenumber");
                                span.innerHTML = i;
                                if(i == res.currentPage){
                                    span.classList.add("pageActive");
                                }
                                page.appendChild(span);
                            }
                        }
                    });     
                }
            }

            // ****************************************************
            // 排序升序
            var salesTop = document.querySelector(".salesTop");
            salesTop.onclick = function(){
                var goodslist = document.querySelector(".goodslist");
                goodslist.innerHTML = "";
                $.ajax({ 
                    type: "get", 
                    data : {"goodsname": currentCon},
                    url:"/src/api/goodsStorUp.php",
                    success:function(res){
                        // console.log(res);
                        var resObj = JSON.parse(res).slice(0,2);
                        var goodslist = document.querySelector(".goodslist");
                        console.log(goodslist);
                        var goodsUL = document.createElement("ul");
                        goodsUL.classList.add("goodsUL");
                        var liCon="";
                         for(var key in resObj){
                            liCon += `<li id="${resObj[key].id}"class="goodsLI"><img class="goodsIMG" src="${resObj[key].url}"/><span class="goodsSPAN">${resObj[key].price}</span><p class="goodsP">${resObj[key].title}</p></li>`
                        }
                        console.log(liCon); 
                        goodsUL.innerHTML = liCon;
                        goodslist.appendChild(goodsUL);
                        // 
                        //****************************************
                        // var res = JSON.parse(res);
                        // var goodslist = document.querySelector(".goodslist");
                        //  var goodsUL = document.createElement("ul");
                        // goodsUL.classList.add("goodsUL");
                        // goodsUL.innerHTML = res.data.map(function(item){
                        //     return `<li id="${item.id}"class="goodsLI"><img class="goodsIMG" src="${item.url}"/><span class="goodsSPAN">${item.price}</span><p class="goodsP">${item.title}</p></li>`
                        // }).join("");
                        // goodslist.appendChild(goodsUL);



                        // // 计算页码
                        // var total = Math.ceil(res.len/res.qty);
                        // var page = document.querySelector(".page-l");
                        // // console.log(page);
                        // page.innerHTML = "";
                        // // goodslist.innerHTML = "";
                        // for(var i=1;i<total;i++){
                        //     var span = document.createElement("span");
                        //     span.classList.add("pagenumber");
                        //     span.innerHTML = i;
                        //     if(i == res.currentPage){
                        //         span.classList.add("pageActive");
                        //     }
                        //     page.appendChild(span);
                        // } 
                        // *******************************
                        
                    }  
                })   
                console.log(currentCon);  
            }

            // // 降序
            var salesBottom = document.querySelector(".salesBottom");
            salesBottom.onclick = function(){
                var goodslist = document.querySelector(".goodslist");
                goodslist.innerHTML = "";
                $.ajax({ 
                    type: "get", 
                    data : {"goodsname": currentCon},
                    url:"/src/api/goodsStorDown.php",
                    success:function(res){
                        console.log(res);
                        var resObj = JSON.parse(res).slice(0,2);;
                        var goodslist = document.querySelector(".goodslist");
                        console.log(goodslist);
                        var goodsUL = document.createElement("ul");
                        goodsUL.classList.add("goodsUL");
                        var liCon="";
                         for(var key in resObj){
                            liCon += `<li id="${resObj[key].id}"class="goodsLI"><img class="goodsIMG" src="${resObj[key].url}"/><span class="goodsSPAN">${resObj[key].price}</span><p class="goodsP">${resObj[key].title}</p></li>`
                        }
                        console.log(liCon);
                        goodsUL.innerHTML = liCon;
                        goodslist.appendChild(goodsUL);
                    }
                })   
                console.log(currentCon);  
            }
            // // 点击传送当前id
            var $goodslist = $(".goodslist");
            $goodslist.on("click","li",function(){
                location.href = "../html/DetailPages.html?" + $(this).attr("id");
            })
            // console.log(11111111,goodslist,2222222222222,$(".goodslist"))
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