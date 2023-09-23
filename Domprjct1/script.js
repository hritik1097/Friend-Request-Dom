const stranger = document.querySelector("#stranger");
const add = document.querySelector("#add");
const pic = document.querySelector("#pic");
// const remove = document.querySelector("#removes");
var flag = true;

add.addEventListener("click", function () {
    if (flag) {
        stranger.innerHTML = "You're friends"
        stranger.style.color = "green"
        add.innerHTML = "Remove"
        pic.src = "https://plus.unsplash.com/premium_photo-1672762542894-caaa8d4f0a77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1971&q=80";
        flag = false;
    }
    else {

        stranger.innerHTML = "Stranger"
        stranger.style.color = "red"
        add.innerHTML = "Add Friend"
        pic.src = "https://plus.unsplash.com/premium_photo-1694475061874-c3ed70a61e33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
        flag = true;

        // add.style.backgroundcolor = "#dadada"

    }

})

// remove.addEventListener("click", function () {
//     stranger.innerHTML = "Stranger"
//     stranger.style.color = "red"
// })
