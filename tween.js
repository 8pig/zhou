/*
参数说明：
参数1、ele:表示做动画效果的那个元素
参数2、obj：是一个JSON对象，表示在ele元素在那几个方向运动。格式如下
	obj={height:600,width:600,top:433,left:399,opacity:0.1}
参数3：nDuration，表示完成动画所需要的总时间。
参数3、effectType:可选参数，表示四种运动效果中的一个，分别为

	第一种情况
		：1表示匀速运动
		：2表示缓冲运动
		：3是弹性运动
		: 4表示反弹运动
	第二种情况：
		可以传一个函数，表示是回调方法
	第三种情况：
		什么也不传，则以匀速方式做运动。
	第四种情况，传一个数组，类似['Back','easeIn']，表示某种定义好的算法
参数4、fnCallback:可选参数。表示是回调方法

	
*/
//0表示减速 1表示加速 2表示elastic弹性的 3表示back返回式  4表示bounce反弹
//再用0减速效果为默认效果


//以下是动画的算法
var zhufengEffect = {
	//当前时间*变化量/持续时间+初始值
	zfLinear: function(t,b,c,d){ return c*t/d + b; },
	Quad: {//二次方的缓动（t^2）；
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
	},
	Cubic: {//三次方的缓动（t^3）
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		}
	},
	Quart: {//四次方的缓动（t^4）；
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		}
	},
	Quint: {//5次方的缓动（t^5）；
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		}
	},
	Sine: {//正弦曲线的缓动（sin(t)）
		easeIn: function(t,b,c,d){
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOut: function(t,b,c,d){
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		}
	},
	Expo: {//指数曲线的缓动（2^t）；
		easeIn: function(t,b,c,d){
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOut: function(t,b,c,d){
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	},
	Circ: {//圆形曲线的缓动（sqrt(1-t^2)）；
		easeIn: function(t,b,c,d){
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		}
	},
	Elastic: {//指数衰减的正弦曲线缓动；
		easeIn: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
		},
		easeInOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		}
	},
	Back: {//超过范围的三次方缓动（(s+1)*t^3 - s*t^2）；
		easeIn: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158; 
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		}
	},
	zfBounce: {//指数衰减的反弹缓动。
		easeIn: function(t,b,c,d){
			return c - zhufengEffect.zfBounce.easeOut(d-t, 0, c, d) + b;
		},
		easeOut: function(t,b,c,d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOut: function(t,b,c,d){
			if (t < d/2) return zhufengEffect.zfBounce.easeIn(t*2, 0, c, d) * .5 + b;
			else return zhufengEffect.zfBounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	}
};
////////////////////以上都是算法
function toOffset(attr){
	switch(attr){
		case 'left':
			var direction='offsetLeft';
			break;
		case 'top':
			var direction='offsetTop';
			break;
		case 'width':
			var direction='offsetWidth';
			break;
		case 'height':
			var direction='offsetHeight';
			break;
		default:
			alert('不支持此方向的动画效果！');
			throw new Error('不支持此方向的动画效果！');		
	}
	return  direction;		
}
/*
1、ele.style.opacity;//0--1
	ele.style.filter='alpha(opacity=50)'//1-100
2、不存在offsetOpacity
	ele.currentStyle.opacity
	computedStyle(ele,null).opacity
	var opcityValue=ele.cureentStyle?ele.currentStyle.opacity:getComputedStyle(ele,null).opacity
	可以获取到写在css里的opacity的值，
3、根本就没有写css中的opacity的值
	if(typeof opacityValue!='number'){
	 ele.style.opacity=1;
	 ele.style.filter='alpha(opacity=100)'
	}else{
		 ele.style.opacity=opacityValue;
		 ele.style.filter='alpha(opacity='+opacityValue*100+')'
		
	}
	 
	 
*/


function animate(ele,obj,nDuration,effectType,fnCallback){
	
	if(!(ele&&ele.nodeType==1)){
		alert('第一个参数ele错误！');
		throw new Error('第一个参数ele错误！');	
	}
	if(typeof obj !='object'){
		alert('第二个参数obj错误！');
		throw new Error('参数obj错误！');	
	}
	var reg=/^\d+$/
	if(reg.test(nDuration)){
		
	}else if(typeof nDuration =='undefined'){
		nDuration=700;
	}else{
		alert('第三个参数nDuration错误！');
		throw new Error('第三个参数nDuration错误！');
	}
	//effectType 1,2,3,4
	if(!effectType){
		var fn=zhufengEffect.zfLinear;//直线，匀速的 1
		
	}else if(typeof effectType =='number'){
		switch(effectType){
			case 1:
				var fn=zhufengEffect.zfLinear;//直线，匀速的 1
				break;
			case 2:
				var fn=zhufengEffect.Quart.easeInOut;//直线，匀速的 1
				break;
			case 3:
				var fn=zhufengEffect.Elastic.easeOut;//直线，匀速的 1
				break;
			case 4:
				var fn=zhufengEffect.zfBounce.easeOut;//直线，匀速的 1
				break;
			default:
			 	alert('目前不支持此数字类型的运动效果！');
				throw new Error('目前不支持此数字类型的运动效果！');
			
			
			
		}
	}else if(effectType instanceof Array){
		if(effectType[0]=='zfLinear'){
		var fn=zhufengEffect.zfLinear;	
		}else{			
			var fn=zhufengEffect[effectType[0]][effectType[1]];		
		}		
	}else if(typeof effectType=='function'){
		var fn=zhufengEffect.zfLinear;		
		fnCallback=effectType;
	}
	var d=nDuration;//总的时间
	var oBegin={};
	var oChange={};
	oChange.length=0;	 
	
	for(var attr in obj){
		if(attr=='opacity'){
			
			if(obj.opacity>1||obj.opacity<0){
				alert('opacity的值超过范围！');
				throw new Error('opacity的值超过范围！');
			}
			if(ele.currentStyle){
				var opacityValue=ele.currentStyle.opacity;//IE
			 }else{
				 var opacityValue=window.getComputedStyle(ele,null).opacity;//标准浏览器
			 }
			 //以上是取opacityValue的值，如果没有写CSS样式的opacity的值，则取不到
			//console.log('opacityValue:'+opacityValue);
			// console.log('type:'+typeof opacityValue);
			 if(typeof opacityValue !='undefined'){//当取不到
				 ele.style.opacity=opacityValue;
				 ele.style.filter='alpha(opacity='+opacityValue*100+')';
			 }else{
				  ele.style.opacity=1;
				 ele.style.filter='alpha(opacity=100)';
			 }
			 //以上这些是初始化不透明度
			 var b=ele.style.opacity;
		 	 var c=obj.opacity-b;
			//处理不透明度的	
		}else{
			var direction=toOffset(attr);
			var b=ele[direction];//起点	
			//需要一个总的移动距离
			var c=obj[attr]-b;//总的移动距离=目的地-起始的位置
				
		}
		if(c){//如果移动的距离不是0，则把各个方向的起始位置和移动的距离存到这两个对象上
				oChange[attr]=c;//在这个方向上移动的总距离
				oBegin[attr]=b;//在这个方向上开始的位置	
				oChange.length++;//如果这个方向上需要运动，则让length大于0;只要length大于0，则运动的一个条件成立。
			}
	}
	var t=0;
	if(document.all)
		var nInterval=15;//IE里用15ms为间隔时间。nInterval可以随意设。
	else
		var nInterval=13;
	_move();//执行动画
	
	function _move(){
		window.clearTimeout(ele.timer);//防止动画积累
		if(t<d&&oChange.length){//运动的条件
			t+=nInterval;
			if(t/d>=1){
				t=d;
			}
			for(var attr in oBegin){
				if(attr=='opacity'){
					var v=fn(t,parseFloat(oBegin[attr]),parseFloat(oChange[attr]),d);
					ele.style[attr]=v;
					ele.style.filter='alpha(opacity='+v*100+')';
				}else{
					ele.style[attr]=(fn(t,oBegin[attr],oChange[attr],d))+'px';
				}
			}
			ele.timer=window.setTimeout(_move,nInterval);
		}else{
			ele.timer=null;
			if(fnCallback){//如果回调方法存在，则执行
				
				fnCallback.call(ele);	
			}
		}
			
	};
	
}