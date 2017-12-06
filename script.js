var x=document.getElementById("txt");

function disp(val){
	x.value+=val;
}

function clr(val){
	x.value=val;
}

function sbmit(){
	try{
		clr(eval(x.value));
	}
	catch(disp){
		clr('Error');
	}
}
