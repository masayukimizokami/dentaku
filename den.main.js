 function update( _d ) 
    {
            document.querySelector( 'input' ).value = _d
    }

var view = document.querySelector('input')

function append( _d )  {
    if(view === "0"||"*"||"/"||"."){
       return;
    }else{
    document.querySelector( 'input' ).value += _d
    }}
    
    function calc() 
    {
        const v = document.querySelector( 'input' ).value
        const f = new Function( 'return ' + v )
        update( f().toString() )
    }
    
  