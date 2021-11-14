var input1 = document.getElementById("input"),
	
	p1 = document.getElementById("par1"),
	p2 = document.getElementById("par2"),
	p3 = document.getElementById("par3"),
	p4 = document.getElementById("par4");
	
	function test1(){
	
	var string1 = input.value;
	
  if(string1.length==4   && string1[3]==0){
  p1.innerHTML = "صفر";
  
  }else if(string1.length==4 && string1[3]==1){
  p1.innerHTML = "واحد";

  }else if(string1.length==4 && string1[3]==2){
  p1.innerHTML = "اثنين";

  }else if(string1.length==4 && string1[3]==3){
  p1.innerHTML ="ثلاثة";

  }else if(string1.length==4 && string1[3]==4){
  p1.innerHTML = "اربعة";

  }else if(string1.length==4 && string1[3]==5){
  p1.innerHTML = "خمسة";

  }else if(string1.length==4 && string1[3]==6){
  p1.innerHTML = "ستة";

  }else if(string1.length==4 && string1[3]==7){
  p1.innerHTML = "سبعة";

  }else if(string1.length==4 && string1[3]==8){
  p1.innerHTML = "ثمانية";

  }else if(string1.length==4 && string1[3]==9){
  p1.innerHTML ="تسعة";
  }
  
  
   if(string1.length==4 && string1[2]==0){
  p2.innerHTML ="صفر";

  }else if(string1.length==4 && string1[2]==1){
  p2.innerHTML ="عشرة";
  }else if(string1.length==4 && string1[2]==2){
  p2.innerHTML ="عشرين";
  }else if(string1.length==4 && string1[2]==3){
  p2.innerHTML = "ثلاثين";

  }else if(string1.length==4 && string1[2]==4){
  p2.innerHTML = "اربعين";

  }else if(string1.length==4 && string1[2]==5){
  p2.innerHTML = "خمسين";

  }else if(string1.length==4 && string1[2]==6){
  p2.innerHTML = "ستين";

  }else if(string1.length==4 && string1[2]==7){
  p2.innerHTML = "سبعين";

  }else if(string1.length==4 && string1[2]==8){
  p2.innerHTML ="ثمانين";

  }else if(string1.length==4 && string1[2]==9){
  p2.innerHTML = "تسعين";
  }

  if(string1.length==3 && string1[2]==1){
  p1.innerHTML ="صفر";
  p4.innerHTML = "";
  
  }else if(string1.length==3  && string1[2]==1){
  p1.innerHTML ="واحد";
  p4.innerHTML = "";

  }else if(string1.length==3  && string1[2]==2){
  p1.innerHTML ="اثنين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==3){
  p1.innerHTML = "ثلاثة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==4){
  p1.innerHTML = "اربعة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==5){
  p1.innerHTML = "خمسة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==6){
  p1.innerHTML = "ستة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==7){
  p1.innerHTML = "سبعة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==8){
  p1.innerHTML ="ثمانة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[2]==9){
  p1.innerHTML = "تسعة";
  p4.innerHTML = "";
  }


  if(string1.length==3 && string1[2]==0){
  p2.innerHTML ="صفر";
  p4.innerHTML = ""

  }else if(string1.length==3 && string1[1]==1){
  p2.innerHTML ="عشرة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==2){
  p2.innerHTML ="عشرين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==3){
  p2.innerHTML = "ثلاثين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==4){
  p2.innerHTML = "اربعين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==5){
  p2.innerHTML = "خمسين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==6){
  p2.innerHTML = "ستين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==7){
  p2.innerHTML = "سبعين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==8){
  p2.innerHTML ="ثمانين";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[1]==9){
  p2.innerHTML = "تسعين";
  p4.innerHTML = "";
  }
  
  if(string1.length==4 && string1[1]==0){
  p3.innerHTML ="صفر";

  }else if(string1.length==4  && string1[1]==1){
  p3.innerHTML ="مئة";

  }else if(string1.length==4  && string1[1]==2){
  p3.innerHTML ="مئتان";

  }else if(string1.length==4 && string1[1]==3){
  p3.innerHTML = "ثلاث مئة";

  }else if(string1.length==4 && string1[1]==4){
  p3.innerHTML = "اربع مئة";

  }else if(string1.length==4 && string1[1]==5){
  p3.innerHTML = "خمس مئة"

  }else if(string1.length==4 && string1[1]==6){
  p3.innerHTML = "ست مئة";

  }else if(string1.length==4 && string1[1]==7){
  p3.innerHTML = "سبع مئة"

  }else if(string1.length==4 && string1[1]==8){
  p3.innerHTML ="ثمان مئة";

  }else if(string1.length==4 && string1[1]==9){
  p3.innerHTML = "تسع مئة";
  }

  
  
  if(string1.length==2 && string1[1]==0){
  p1.innerHTML ="صفر";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2  && string1[1]==1){
  p1.innerHTML ="واحد";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2  && string1[1]==2){
  p1.innerHTML ="اثنين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==3){
  p1.innerHTML = "ثلاثة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==4){
  p1.innerHTML = "اربعة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==5){
  p1.innerHTML = "خمسة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==6){
  p1.innerHTML = "ستة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==7){
  p1.innerHTML = "سبعة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==8){
  p1.innerHTML ="ثمانة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[1]==9){
  p1.innerHTML = "تسعة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  }
  
  if(string1.length==4 && string1[0]==0){
  p4.innerHTML ="صفر";

  }else if(string1.length==4 && string1[0]==1){
  p4.innerHTML ="الفين";

  }else if(string1.length==4 && string1[0]==2){
  p4.innerHTML ="الفين";

  }else if(string1.length==4 && string1[0]==3){
  p4.innerHTML = "ثلاثة الف";

  }else if(string1.length==4 && string1[0]==4){
  p4.innerHTML = "اربعة الف";

  }else if(string1.length==4 && string1[0]==5){
  p4.innerHTML = "خمسة الف";

  }else if(string1.length==4 && string1[0]==6){
  p4.innerHTML = "ستة الف";

  }else if(string1.length==4 && string1[0]==7){
  p4.innerHTML = "سبة الف";

  }else if(string1.length==4 && string1[0]==8){
  p4.innerHTML ="ثمانة الف";
  
  }else if(string1.length==4 && string1[0]==9){
  p4.innerHTML = "تسعة الف";
  }

  if(string1.length==3 && string1[0]==0){
  p3.innerHTML ="صفر";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[0]==1){
  p3.innerHTML ="مئة";
  p4.innerHTML = "";


  }else if(string1.length==3 && string1[0]==2){
  p3.innerHTML ="مئتان";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[0]==3){
  p3.innerHTML = "ثلاث مئة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[0]==4){
  p3.innerHTML = "اربع مئة";
  p4.innerHTML = ""

  }else if(string1.length==3 && string1[0]==5){
  p3.innerHTML = "خمس مئة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[0]==6){
  p3.innerHTML = "ست مئة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[0]==7){
  p3.innerHTML = "سبع مئة";
  p4.innerHTML = "";

  }else if(string1.length==3 && string1[0]==8){
  p3.innerHTML ="ثمان مئة";
  p4.innerHTML = "";
  
  }else if(string1.length==3 && string1[0]==9){
  p3.innerHTML = "تسع مئة";
  p4.innerHTML = "";
  }


  if(string1.length==2 && string1[0]==0){
  p2.innerHTML ="صفر";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==1){
  p2.innerHTML ="عشرة";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==2){
  p2.innerHTML ="عشرين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==3){
  p2.innerHTML = "ثلاثين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==4){
  p2.innerHTML = "اربعين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==5){
  p2.innerHTML = "خمسين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==6){
  p2.innerHTML = "تسعين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==7){
  p2.innerHTML = "سبعين";
  p4.innerHTML = "";
  p3.innerHTML = "";

  }else if(string1.length==2 && string1[0]==8){
  p2.innerHTML ="ثمانين";
  p4.innerHTML = "";
  p3.innerHTML = "";
  
  }else if(string1.length==2 && string1[0]==9){
  p2.innerHTML = "تسعين";
  p4.innerHTML = "";
  p3.innerHTML = "";
  }

  if(string1.length==1 && string1[2]==0){
  p1.innerHTML ="صفر";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1  && string1[0]==1){
  p1.innerHTML ="واحد";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";
  
  }else if(string1.length==1  && string1[0]==2){
  p1.innerHTML ="اثنين";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==3){
  p1.innerHTML = "ثلاثة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==4){
  p1.innerHTML = "اربعة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==5){
  p1.innerHTML = "خمسة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==6){
  p1.innerHTML = "ستة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==7){
  p1.innerHTML = "سبعة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==8){
  p1.innerHTML ="ثمانة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";

  }else if(string1.length==1 && string1[0]==9){
  p1.innerHTML = "تسعة";
  p4.innerHTML = "";
  p3.innerHTML = "";
  p2.innerHTML = "";
  }
}