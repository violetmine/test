class login{
	constructor (fb,d2,cont){
		this.btn=tools.$(fb);
		this.div=tools.$(d2);
		this.cont=tools.$(cont);
		this.adde();
		
	}
	adde () {	
		this.btn.onclick=()=>{
			this.pop();
		}
	}
		
	pop () {
			this.div.innerHTML=`<h3>发布微博<span>X</span></h3>
				<p>用户名: <input type="text" id="na"/></p>
				<textarea rows="6" cols="48" maxlength="150">
					
				</textarea>
				<input type="button" name="" value="点击发布" id="ok"/>`;
			this.modal=document.createElement("div");
			this.modal.classList.add("mo");
			document.body.appendChild(this.modal);
			
			this.div.classList.add("ac") ;
			this.h3=this.div.querySelector("h3");
			this.span=this.div.querySelector("span");
			this.ok=this.div.querySelector("#ok");
			this.na=this.div.querySelector("#na");
			this.text=this.div.querySelector("textarea");
			
			this.drag();
			this.clos();
			this.subm();
			
	}
	//X按钮
	clos(){
		this.span.onclick=()=>{
			this.div.innerHTML=null;
			this.div.classList.remove("ac") ;
		}
	}
	//拖拽，点到h3
	drag(){
		this.h3.onmousedown=(e)=>{
			let left=e.offsetX;
			let	 top=e.offsetY;
			
			document.onmousemove=(e)=>{
				// e=e||event;
				let lefta=e.clientX-left+"px";
				let	topa=e.clientY-top+"px";
				this.div.style.left=lefta;
				this.div.style.top=topa;
			}
			document.onmouseup=(e)=>{
				document.onmousemove=null;
			}
			return false;
		}
	}
	//发布按钮
	subm(){
		this.modal.classList.remove("mo");
		this.ok.onclick=()=>{
			if(this.text.value=="" || this.na.value===""){
					console.log(1);
					alert("内容不能为空")
				}else{
					this.li=document.createElement("li");
					this.li.innerHTML=this.text.value;
					this.cont.appendChild(this.li);
					this.text.value=null;
					this.div.innerHTML=null;
					this.div.classList.remove("ac");
// 					this.li.oncontextmenu=this.re;
// 					// this._this=this;
				};
				
		};
		
		this.date=new Date();
		this.time=this.date.getTime();

	}
	//两分钟撤回
//     re(){
// 			//this.li
// 		
// 			_this.li.innerHTML=`<p><h6>增加</h6><h6>修改</h6><h6>删除</h6></p>`;
// 			this.right=this._this.li.querySelector("p");
// 			this.right.classList.add("right");
// 			let date2 = new Date();
// 			this.time2=date2.getTime();
// 			let min=this.time2-this.time;
// 			return false;
// 
// 		
// 	}
	

}
new login(".fb",".d2",".cont")
