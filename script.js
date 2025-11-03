const url="https://api.github.com/users";
const input=document.getElementById("input");
const button=document.getElementById("btn");
const image=document.getElementById("img");
const name=document.getElementById("name");
const username=document.getElementById("username");
const about=document.getElementById("abt");
const follower=document.getElementById("followers");
const following=document.getElementById("following");
const repos=document.getElementById("repos");
const profileBtn=document.getElementById("profile-button");
let profile="";
const fetchGithub=async()=>{
    try{
        const res=await fetch(`${url}/${input.value}`);
        const data=await res.json();
        console.log("data",data);
        image.src=data.avatar_url;
        name.innerText=data.name;
        username.innerText=data.login;
        about.innerText=data.bio;
        follower.innerText=data.followers;
        following.innerText=data.following;
        repos.innerText=data.public_repos;
        profile=data.html_url;
    }
    catch(error){
        console.log({error})
    }

}
button.addEventListener("click",()=>{
    fetchGithub();
    
});
profileBtn.addEventListener("click",()=>{
             if(profile){
    window.open(profile, "_blank"); 
  }
        })