var x=document.getElementById("txt");

function zero(){
	var string=x.value;
	string=string+"0";
	x.value=string;
}

function one(){
        var string=x.value;
        string=string+"1";
        x.value=string;
}

function two(){
        var string=x.value;
        string=string+"2";
        x.value=string;
}

function three(){
        var string=x.value;
        string=string+"3";
        x.value=string;
}

function four(){
        var string=x.value;
        string=string+"4";
        x.value=string;
}

function five(){
        var string=x.value;
        string=string+"5";
        x.value=string;
}

function six(){
        var string=x.value;
        string=string+"6";
        x.value=string;
}

function seven(){
        var string=x.value;
        string=string+"7";
        x.value=string;
}

function eight(){
        var string=x.value;
        string=string+"8";
        x.value=string;
}

function nine(){
        var string=x.value;
        string=string+"9";
        x.value=string;
}

function point(){
        var string=x.value;
        string=string+".";
        x.value=string;
}

var sum="";
var type=1;
var skip=0;

function add(){
        var string=x.value;
	if(skip==1){
		skip=0;
		sum=x.value;
	}
	else{
	if(type==1)
                sum=(1*sum+1*string);
	if(type==2)
                sum=sum-string;
	if(type==3)
                sum=sum*string;
	if(type==4)
                sum=sum/string;
	}
	type=1;
        x.value="";
}

function sub(){
	var string=x.value;
	if(skip==1){
		skip=0;
		sum=x.value;
	}
	else{
        if(type==1)
                sum=(1*sum+1*string);
        if(type==2)
                sum=sum-string;
        if(type==3)
                sum=sum*string;
        if(type==4)
                sum=sum/string;
	}
        type=2;
        x.value="";
}

function mul(){
	var string=x.value;
	if(skip==1){
                skip=0;
		sum=x.value;
	}
        else{
        if(type==1)
                sum=(1*sum+1*string);
        if(type==2)
                sum=sum-string;
        if(type==3)
                sum=sum*string;
        if(type==4)
                sum=sum/string;
	}
	type=3;
        x.value="";
}

function div(){
	var string=x.value;
	if(skip==1){
                skip=0;
		sum=x.value;
	}
        else{
        if(type==1)
                sum=(1*sum+1*string);
        if(type==2)
                sum=sum-string;
        if(type==3)
                sum=sum*string;
        if(type==4)
                sum=sum/string;
	}
	type=4;
        x.value="";
}

function clr(){
        x.value="";
	sum="";
	skip=0;
	type=1;
}

function sbmit(){
        var string=x.value;
	if(skip==1){
                skip=0;
		sum=x.value;
	}
        else{
        if(type==1)
                sum=(1*sum+1*string);
        if(type==2)
                sum=sum-string;
        if(type==3)
                sum=sum*string;
        if(type==4)
                sum=sum/string;
	}
	if(sum=="Infinity")
                sum="error:infinity";
	x.value=sum;
	skip=1;
}
