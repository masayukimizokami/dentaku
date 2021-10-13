
let num = "";
let key = "";
let sliceEnd = ""
let sliceFirst = ""
let keyP = ""
let keyPlus =""

function append( _d )  {
  if(sliceEnd == "0"||sliceEnd == "00"){
          num = ""+_d
  }else{
    num += ""+_d
  }     
    document.querySelector( 'input' ).value = num
    key = _d
    keyP = num + _d+_d
    keyPlus = keyP.substr( -1,1)
     sliceEnd = num.substr( -1,1)
     sliceFirst = num.substr(0,num.length -1)
     sliceEnd2 = sliceFirst.substr( -1,1)
     sliceFirst2 = num.substr(0,num.length -2)
    }
    
    
    
    
    function symbol( _d )  {
  if(sliceEnd == "+"||sliceEnd == "-"||sliceEnd == "*"||sliceEnd == "/"||sliceEnd == "."){
        num = sliceFirst+_d
  }else if(sliceEnd == ""){
       num = ""+_d
  }else{
    num += ""+_d
  }     
    document.querySelector( 'input' ).value = num
    key = _d
    keyP = num + _d+_d
    keyPlus = keyP.substr( -1,1)
     sliceEnd = num.substr( -1,1)
     sliceFirst = num.substr(0,num.length -1)
     sliceEnd2 = sliceFirst.substr( -1,1)
     sliceFirst2 = num.substr(0,num.length -2)
    }
    
    
    
    
    
   
    

    function calc() {
        num=eval(num)
        num=String(num)
        document.querySelector( 'input' ).value = num
    }
    
   function update()  {
           document.rstBtn.reset() ;
    }
    