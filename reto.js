const githubActionSearch = document.querySelector("#github-action-search")
const githubInputSearch = document.querySelector("#github-search")




const imgProf = document.querySelector("#img-profile")
const githubName = document.querySelector("#github-name")
const githubUname = document.querySelector("#github-username")
const githubFwers = document.querySelector("#github-followers")
const githubFwing = document.querySelector("#github-following")
const githubRepos = document.querySelector("#github-repos")
const githubUbic = document.querySelector("#github-ubi")
const githubEmail = document.querySelector("#github-gmail")


const obtenerDatosUsers = async(username="isainccorahua")=>{
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if(data.message ==="Not Found"){
        Swal.fire({
            title:"Error",
            text:"No existe el usuario",
            icon:"error"
        })
    }
    selecDate(data);
}





githubActionSearch.onclick= ()=>{
    const username = githubInputSearch.value
    
    githubInputSearch.value =""
    if (username ===""){
        swal.fire({
            title:"Error",
            text:"No puedes ingresar un usuario vacio   ",
            icon:"error"
        });
        return;
    }
    obtenerDatosUsers(username);
}

githubInputSearch.addEventListener("keyup", function(event){
    if (event.key=="Enter"){
        obtenerDatosUsers(event.target.value)
    }
})





const selecDate = (data)=>{
    imgProf.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubUname.innerHTML = `@${data.login}`;
    githubFwers.innerHTML = data.followers;
    githubFwing.innerHTML = data.following;
    githubRepos.innerHTML = data.public_repos;
    githubUbic.innerHTML = data.location;
    githubEmail.innerHTML = data.email;
}
obtenerDatosUsers();

