for (var i = 0; i < 100; i++) {
	var num = i+1;
	var putnum="";
	putnum=(num%3==0 && num%5==0)?"fizz - buzz":(num%3==0)?"fizz":(num%5==0)?"buzz":num;

	document.write(putnum + "<br>");
}