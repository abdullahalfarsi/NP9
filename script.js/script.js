// Play visible videos
const videos=document.querySelectorAll("video");
function playVisible(){
  videos.forEach(v=>{
    const r=v.getBoundingClientRect();
    if(r.top>=0 && r.bottom<=window.innerHeight)v.play();else v.pause();
  });
}
document.querySelector(".feed").addEventListener("scroll",playVisible);
playVisible();

// Like & comment functionality
document.querySelectorAll(".video-item").forEach(item=>{
  const likeBtn=item.querySelector(".like");
  const commentBtn=item.querySelector(".comment");
  const commentBox=item.querySelector(".comment-box");
  const list=commentBox.querySelector(".list");
  const input=commentBox.querySelector("input");
  let liked=false;

  likeBtn.addEventListener("click",()=>{
    let count=parseInt(likeBtn.querySelector(".count").textContent);
    count=liked?count-1:count+1;
    likeBtn.querySelector(".count").textContent=count;
    liked=!liked;
  });

  commentBtn.addEventListener("click",()=>{commentBox.style.display=commentBox.style.display==="flex"?"none":"flex";});

  input.addEventListener("keydown",e=>{
    if(e.key==="Enter" && input.value.trim()!==""){
      const div=document.createElement("div");
      div.textContent="User: "+input.value.trim();
      list.appendChild(div);
      input.value="";
      list.scrollTop=list.scrollHeight;
    }
  });
});
