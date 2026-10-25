const upvotebtn = document.querySelectorAll(".upvote");
const downvotebtn = document.querySelectorAll(".downvote");
const votepara = document.querySelector(".voting p");
const voteui = document.querySelector(".voting ul");
const votelist = document.querySelectorAll(".voting ul li");
upvotebtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        alert("Thanks for upvoting my idea i am happy now");
    })
})
downvotebtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        alert("You downvoted my idea i am sad now");
    })
})
votelist.forEach((li)=>{
    li.addEventListener("click",()=>{
        votepara.style.display = "block";
        voteui.style.display = "none";  
    })
});