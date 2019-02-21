 $(document).ready(function(){
               $(".ocl").click(function(){
                  
                  $(".lorem").slideDown("slow");
                  $(".lorem1").css("display","none");
                  $(".lorem2").css("display","none");
    
                });
               $(".ocl1").click(function(){
                  $(".lorem1").slideDown("slow");
                  $(".lorem").css("display","none");
                  $(".lorem2").css("display","none");
                });
            $(".ocl2").click(function(){
               $(".lorem2").slideDown("slow");
               $(".lorem").css("display","none");
               $(".lorem1").css("display","none");
             }); 
            
      //第一个数字滚动
             var numBox = document.getElementById('nm');
             /**
              * 数字滚动
              * @param {Object} num 		开始值
              * @param {Object} maxNum	最大值,最终展示的值
              */
             function numRunFun(num,maxNum){
             	var numText = num;
             	var golb; // 为了清除requestAnimationFrame
             	function numSlideFun(){
             		numText+=700; // 速度的计算可以为小数
             		if(numText >= maxNum){
             			numText = maxNum;	
             			cancelAnimationFrame(golb);
             		}else {
             			golb = requestAnimationFrame(numSlideFun);
             		}
             		numBox.innerHTML = ~~(numText)
             		
             	}
             	numSlideFun();
             }
             // 运行
             numRunFun(0,11700)
             
             
       //第二个数字滚动
                   var numBox1 = document.getElementById('nm1');
                   /**
                    * 数字滚动
                    * @param {Object} num 		开始值
                    * @param {Object} maxNum	最大值,最终展示的值
                    */
                   function numRunFun1(num,maxNum){
                   	var numText = num;
                   	var golb; // 为了清除requestAnimationFrame
                   	function numSlideFun(){
                   		numText+=400; // 速度的计算可以为小数
                   		if(numText >= maxNum){
                   			numText = maxNum;	
                   			cancelAnimationFrame(golb);
                   		}else {
                   			golb = requestAnimationFrame(numSlideFun);
                   		}
                   		numBox1.innerHTML = ~~(numText)
                   		
                   	}
                   	numSlideFun();
                   }
                   // 运行
                   numRunFun1(0,5700)
                    
          //第三个数字滚动
                        var numBox2 = document.getElementById('nm2');
                        /**
                         * 数字滚动
                         * @param {Object} num 		开始值
                         * @param {Object} maxNum	最大值,最终展示的值
                         */
                        function numRunFun2(num,maxNum){
                        	var numText = num;
                        	var golb; // 为了清除requestAnimationFrame
                        	function numSlideFun(){
                        		numText+=400; // 速度的计算可以为小数
                        		if(numText >= maxNum){
                        			numText = maxNum;	
                        			cancelAnimationFrame(golb);
                        		}else {
                        			golb = requestAnimationFrame(numSlideFun);
                        		}
                        		numBox2.innerHTML = ~~(numText)
                        		
                        	}
                        	numSlideFun();
                        }
                        // 运行
                        numRunFun2(0,4800)
                          
           //第三个数字滚动
                        var numBox3 = document.getElementById('nm3');
                        /**
                         * 数字滚动
                         * @param {Object} num 		开始值
                         * @param {Object} maxNum	最大值,最终展示的值
                         */
                        function numRunFun3(num,maxNum){
                        	var numText = num;
                        	var golb; // 为了清除requestAnimationFrame
                        	function numSlideFun(){
                        		numText+=700; // 速度的计算可以为小数
                        		if(numText >= maxNum){
                        			numText = maxNum;	
                        			cancelAnimationFrame(golb);
                        		}else {
                        			golb = requestAnimationFrame(numSlideFun);
                        		}
                        		numBox3.innerHTML = ~~(numText)
                        		
                        	}
                        	numSlideFun();
                        }
                        // 运行
                        numRunFun3(0,25900)
                             
             
    $("#ce1").fadeIn();
    $("#ce2").fadeIn("slow");
    $("#ce3").fadeIn(3000);   
    $("#ce4").fadeIn(5000);         
    $("#ce5").fadeIn(7000);        
    $("#ce6").fadeIn(8000);         
             
            });  