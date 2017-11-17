const textForm = document.getElementById("text-form");

if(textForm){
    const textElement=document.getElementById("inputText");
    const errorContainer = document.getElementById("error-container");
    const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

    textForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        try{
            errorContainer.classList.add("hidden");

            let textElementValue =textElement.value;
            if (textElementValue) {
                let li = document.createElement("li");
                li.className = isPalindrome(textElementValue);
                let textNode = document.createTextNode(textElementValue);
                li.appendChild(textNode);
        
                document.getElementById("listAll").appendChild(li);
                document.getElementById("inputText").value = "";
            }else {
                errorTextElement.textContent = "Textarea can not be empty.";
                errorContainer.classList.remove("hidden");
            }
        }catch(e){
            errorTextElement.textContent = e;
            errorContainer.classList.remove("hidden");
        }    
    });
}


function isPalindrome(text) {
    let string=simpify(text);
    let reversedString = string.split("").reverse().join("");
    if (string === reversedString || string===""){
        return 'is-palindrome';
    } else {
        return 'not-palindrome';
    }
}
//console.log(isPalindrome("?$?"));

function simpify(text) {
    if(text===undefined || text.length===0 || text==="")  throw "Must provide a text.";
    if(typeof text!=="string")  throw "Must provide valid text";
    
    let t=text.trim().toLowerCase();
    t=t.replace(/[^0-9a-zA-Z]/g,""); 
    return t;   
}
//console.log("simp"+simpify("?$?"));
