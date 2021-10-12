let num = "";
let key = "";
let sliceEnd = ""

function append( _d )  {
  if(key == "+"||key == "-"||key =="*"||key=="/"||key=="."){
        if(sliceEnd == "+"||sliceEnd == "-"||sliceEnd == "*"||sliceEnd == "/"||sliceEnd == "."){
        
          num = num.substr(0,num.length -1)
          num += "" + _d;
          }else{
             num += ""+_d;
          }
    }else if(key  == "0" || key == "00"){
          if(num == "0"|| num == "00"){
            num = ""+_d;
          }else{
            num += ""+_d;
          }  
    }else{
       num += ""+_d;
    }
    document.querySelector( 'input' ).value = num
    key = _d
     sliceEnd = num.substr( -1,1)
    }

    function calc() {
        num=eval(num)
        num=String(num)
        document.querySelector( 'input' ).value = num
    }
    
   function update()  {
           document.rstBtn.reset() ;
    }
    
