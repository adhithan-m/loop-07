var x = parseInt(prompt("Enter the number"));
var y =0 ; 
while(x > 0)
{
 y =(y*10)+(x%10);
 x = parseInt(x/10);
}
 alert(y);
  
