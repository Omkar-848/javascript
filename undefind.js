// undefined represents a variable that has been 
//declared but has not been assigned a value 
//variables are by default initialized to undefined 

//let x= null;
//console.log(x);

function func () {
    //symbol without any parameter 
    const sym1 = symbol();

    //symbol with parameter 
    const sym2 = symbol(9);

    //symbol with string
    const sym3 = symbol("GFG");

    console.log(sym2.tostring());
    
    // Type of symbol 1
    console.log(typeof sym1);

    //check symbol is equal to "GFG"or not
    console.log(sym3 == "GFG");

}
func();