let num = "";
let key = "";
let sliceEnd = ""
let sliceFirst = ""
let keyP = ""
let keyPlus =""

function append( _d )  {
  if(sliceEnd == "+"||sliceEnd == "-"||sliceEnd == "*"||sliceEnd == "/"||sliceEnd == "."){
      if(keyPlus == "+"){//(key == "+"||key == "-"||key == "*"||key == "/"||key == "."){
        num = sliceFirst+_d
      }else{
         num += ""+_d
    }
 }else if(sliceEnd == "0"||sliceEnd == "00"){
          num += ""+_d
        
  }else if(sliceEnd == ""){
       num += ""+_d
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
    
    
    
    
   // if(key =="+"||key<0){
       // if(sliceEnd == "+"||sliceEnd == "-"||sliceEnd == "*"||sliceEnd == "/"||sliceEnd == "."){
       //    num += ""+_d;
     //    }else{
       //     num = sliceFirst + _d; 
      //   }
//    }else if(key  == "0" || key == "00"){
  //        if(num == "0"|| num == "00"){
    //        num = ""+_d;
      //    }else{
        //    num += ""+_d;
        //  }  
  //  }else if(key <10 && key>=0){      
    //      num += ""+_d;
//    }else{
   //    num = sliceFirst + _d; 
    

    function calc() {
        num=eval(num)
        num=String(num)
        document.querySelector( 'input' ).value = num
    }
    
   function update()  {
           document.rstBtn.reset() ;
    }
    