// Immdiately Invokefunction xpressions(IIFE)


(function chai()  //name IIFE
{
    console.log(`DB Connected`);
}) () ;


// () () 
// Global scope ke pollution se htane ke lie
// many more method
((name) => {
    console.log(`DB two ${name}`);
})('DECODER')
//  chai()