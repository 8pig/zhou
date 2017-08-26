function on(ele,type,fn){
	if(/^self/.test(type)){
		if(!ele[type]){
			ele[type]=[];
		}
		var a =ele[type];
		for(var i=0;i<a.length;i++){
			if(a[i]==fn)return;			
		}
		a.push(fn);
		
	}
		if(ele.addEventListener){
			ele.addEventListener(type,fn,false);
			return;	
		}
		
		if(!ele["aEvent"+type]){
			ele["aEvent"+type]=[];
			ele.attachEvent("on"+type,function(e){run.call(ele,e)});
		
		}
		var a=ele["aEvent"+type];

		for(var i=0;i<a.length;i++){
			if(a[i]==fn)return;
			ele.attachEvent("on"+type,function(e){run.call(ele,e)});
		}
		
		a.push(fn);
		ele.attachEvent("on"+type,function(e){run.call(ele,e)});
		
	}

	
	function run(){
		var e=window.event;
		if(!e.target){
			e.target=e.srcElement;
			e.stopPropagation=function(){e.cancelBubble=true};
			e.preventDefault=function(){e.returnValue=false};
			e.pageX=(document.documentElement.scrollLeft||document.body.scrollLeft)+e.clientX;
			e.pageY=(document.documentElement.scrollTop||document.body.scrollTop)+e.clientY;			
		}
		var a = this["aEvent"+e.type];
		for(var i =0;i<a.length;i++){
			if(typeof a[i] == "function"){
				a[i].call(this,e);
			}else{
				a.splice(i,1);
				i--;	
			}
		}
	
	}

	function selfRun(selfType,e){
		var a=this[selfType];
		if(a){
			for(var i=0;i<a.length;i++){
				if(typeof a[i] == "function"){
					a[i].call(this,e);	
				}
				
			}
			
		}
		
		
		
	}
	function off(ele,type,fn){
		if(/^self/.test(type)){
			var a=ele[type];
			if(a){
				for(var i=0;i<a.length;i++){
					if(a[i]==fn){
						a[i]=null;
						break;
					}	
				}
				
			}
		}
		if(ele.removeEventListener){
			ele.removeEventListener(type,fn,false);
			return;
		}
		var ary=ele["aEvent"+type];
		if(ary){
			for(var i=0;i<ary.length;i++){
				if(ary[i]===fn){
					ary[i]=null;
					return;
				}
			}
		}
	}
	
function processThis(obj,fn){
	return function(e){fn.call(obj,e)}
}