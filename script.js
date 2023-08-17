console.log("Loaded javascript can't")
function submitform(event) {

    event.preventDefault();

    let field1Value = document.getElementById('title').value;
    let field2Value = document.getElementById('Raiting').value;
    
    console.log('Field 1', field1Value);
    console.log('Field 2', field2Value);

}

function greeting(firstname, lastname, mat) {
    console.log("Hej" , firstname, lastname, mat)
}

greeting("Anton" , "Karlsson" , "Pizza")


// document.onload = (() => {

//     let form = document.getElementById("form")
//     console.log(form)
//     form.addEventListener("submit" , submitform)
// })