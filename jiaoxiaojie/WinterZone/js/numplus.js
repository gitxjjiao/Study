
    var flag=true;
    window.onscroll = function() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t>200 && flag==true) {
            zeng();
            flag=false;
            }
    
    };
    function zeng(){
    var numBox1 = document.getElementById('tm0');
     var numBox2 = document.getElementById('tm1');
      var numBox3 = document.getElementById('tm2');
       var numBox4 = document.getElementById('tm3');
       
      
       function numRunFun(num,maxNum,numBox){
       	var numText = num;
       	var golb; // 为了清除requestAnimationFrame
       	function numSlideFun(){
       		numText+=20; // 速度的计算可以为小数
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
       numRunFun(0,829,numBox1);
       numRunFun(0,152,numBox2);
       numRunFun(0,554,numBox3);
      numRunFun(0,25,numBox4);
      };
          