class lb{
	constructor(out){
		this.out=tools.$(out);
		this.pic=this.out.querySelector(".pic");
		this.right=this.out.querySelector(".right");
		this.left=this.out.querySelector(".left")
		this.btns=Array.from(this.out.querySelector(".btn").children);
		this.ii=0;
		this.num=0;
		this.pics=Array.from(this.out.querySelector(".pic").children);
		console.log(this.pic);
		this.btns=Array.from(this.out.querySelector(".btn").children);
		console.log(this.btns)
		this.bindevent();
		console.log(this.timer2)
		this.mousechange();
		this.moveright();
		this.moveleft();
	}
	bindevent(){
		let num=0;
		let lastnum=0;
		for( let i=0;i<this.btns.length;i++){
			num=i;
			this.btns[i].onclick = this.clickchange.bind(this,num);
		}
		
		this.autoplay();
	}

	clickchange(num){
		this.btns[this.ii].classList.remove("ac");
		tools.move2(this.pic,"top",-num*300,2000);
		// console.log(this.btns);
		this.btns[num].classList.add("ac");
		this.ii=num;
	}
	//向右的按钮事件，没有添加按钮
	moveright(){
		this.right.onclick=()=>{
			this.btns[this.ii].classList.remove("ac");
			this.num++;
			if(this.num===this.pics.length-1){
				this.num=0;
				this.pic.top=0;
			}
			this.btns[this.num].classList.add("ac");
			tools.move2(this.pic,"top",-this.num*300);
			this.ii=this.num;
		}
	}
	//left
	moveleft(){
		this.left.onclick=()=>{
			this.btns[this.ii].classList.remove("ac");
			this.num--;
			if(this.num===0){
				this.num=3;
				this.pic.top="-1200px";
			}
			this.btns[this.num].classList.add("ac");
			tools.move2(this.pic,"top",this.num*300);
			this.ii=this.num;
		}
	}
	//自动播放
	autoplay(){
		clearInterval(this.timer2);
		this.num=-1;
		this.timer2=setInterval(() =>{
			this.btns[this.ii].classList.remove("ac");
			this.num++;
			if(this.num===this.btns.length){
				this.num=0;
				this.pic.style.top=0;
			}	
			this.btns[this.num].classList.add("ac");
			tools.move2(this.pic,"top",-(this.num+1)*300);
			this.ii=this.num;
		    
		},3000);	
	}
	mousechange(){
		this.out.onmouseenter=()=>{
			console.log(1);
			clearInterval(this.timer2);
		}
		this.out.onmouseleave=()=>{
			this.autoplay();
		}
	}
	
}
new lb(".out")