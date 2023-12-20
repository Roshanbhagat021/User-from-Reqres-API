let fetch_button = document.querySelector(".comic-button");
let fetch_container=document.querySelector(".main")
let Users_container=document.querySelector(".container")
let header=document.querySelector("header")

function getData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      return response.json();
    })
    .then((finalres) => {
        data = finalres.data;
        displayData(data)
    })
    .catch((error) => {
      console.log(error);
    });

   
}


function displayData(data){
    fetch_container.style.display="none";
    header.style.display="block"


    data.forEach(function(user){

        // Create a card div 
        let Users_card_div=document.createElement("div")
    
        // Create a image Element 
        let User_imgage=document.createElement("img")
        User_imgage.src=user.avatar;

        // Create a h4 element for user name
        let User_name=document.createElement("h4");
        User_name.innerText=`${user.first_name} ${user.last_name}`;


        let User_email=document.createElement("h5");
        User_email.innerText=`${user.email}`
    
        Users_card_div.append(User_imgage,User_name,User_email)
        Users_container.append(Users_card_div)
    })
    



}

fetch_button.addEventListener("click", getData);
