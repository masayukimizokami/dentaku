 function update( _d ) 
    {
        document.querySelector( 'input' ).value = _d
    }

    function append( _d ) 
    {
        document.querySelector( 'input' ).value += _d
    }

    function calc() 
    {
        const v = document.querySelector( 'input' ).value
        const f = new Function( 'return ' + v )
        update( f().toString() )
    }