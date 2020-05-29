let githubserver = `https://api.github.com/users`;
window.fetch(githubserver)
.then((data) => {
   data.json()
   .then((gitUsers) => {
       let output = [];
       for(let user of gitUsers) {
           //console.log(user);
           output += `
           <div>
               <img src="${user.avatar_url}" alt="">
               <h1>User: ${user.login}</h1>
               <a href="${user.html_url}" target="_blank">Details</a>
           </div>s
           `;
       }
       document.getElementById("template").innerHTML = output;
   })
   .catch((err) => console.log(err));
})
.catch((err) => console.log(err));