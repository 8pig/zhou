function EventEmitter(){};
EventEmitter.prototype.on=function(type,fn){
    if(!this[type]){
        this[type]=[];
    }
    var a=this[type];
    for(var i=0;i<a.length;i++){
        if(a[i]==fn)return ;
    }
    a.push(fn);

};
EventEmitter.prototype.run=function(type,e){
    var a=this[type];
    if(a){
        for(var i=0;i<a.length;i++){
            if(typeof a[i]=="function"){
                a[i].call(this,e);
            }else{
                a.splice(i,1);
                i--;
            }
        }
    }
};
EventEmitter.prototype.off=function(type,fn){
    var a=this[type];
    if(a){
        for(var i=0;i<a.length;i++){
            if(a[i]==fn){
                a[i]=null;
                break;
            }
        }
    }
};


function Drag(ele){
    this.ele=ele;
    this.x=null;
    this.y=null;
    this.mx=null;
    this.my=null;

    this.DOWN=processThis(this,this.down);
    this.MOVE=processThis(this,this.move);
    this.UP=processThis(this,this.up);
    on(ele,"mousedown",this.DOWN);
}
Drag.prototype=new EventEmitter;
Drag.prototype.down=function(e){
    this.x=this.ele.offsetLeft;
    this.y=this.ele.offsetTop;
    this.mx=e.pageX;
    this.my=e.pageY;

    if(this.ele.setCapture){
        this.ele.setCapture();
        on(this.ele,"mousemove",this.MOVE);
        on(this.ele,"mouseup",this.UP);
    }else{
        on(document,"mousemove",this.MOVE);
        on(document,"mouseup",this.UP);
    }
    e.preventDefault();
    this.run("dragstart",e);
};
Drag.prototype.move=function(e){
    this.ele.style.left=this.x+(e.pageX-this.mx)+"px";
    this.ele.style.top=this.y+(e.pageY-this.my)+"px";

    this.run("drag",e);
};

Drag.prototype.up=function(e){
    if(this.ele.releaseCapture){
        this.ele.releaseCapture();
        off(this.ele,"mousemove",this.MOVE);
        off(this.ele,"mouseup",this.UP);
    }else{
        off(document,"mousemove",this.MOVE);
        off(document,"mouseup",this.UP);
    }
    this.run("dragend",e);
};
Drag.prototype.addBorder=function(){
    this.ele.style.border="2px red dashed";

};
Drag.prototype.removeBorder=function(){
    this.ele.style.border="";
};
Drag.prototype.border=function(){
    this.on("dragstart",this.addBorder);
    this.on("dragend",this.removeBorder);
};