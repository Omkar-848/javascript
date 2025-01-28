//Block of scope//

{
    let num=10;
    console.log(num);
}

//Global Scope//

let num=10;
console.log(num);

function fun(){
    console.log(num);

}

fun();

//function scope//

function fun()
{
    let num=10;
    console.log(num);

}
fun();
