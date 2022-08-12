var count = 1
var imgId =""
var text =""

function putBgImageInInput(a) {
    imgId = a;
    if (imgId) {
        text = `id="text${count}"`;
    } else {
        text = "";
    }
    document.getElementById("textArea").style.backgroundImage = "url(" + document.querySelector(`#${a} img`).src + ")";
    document.getElementById("textArea").focus()
}
function deletePost() {
    event.target.parentNode.parentNode.parentNode.remove();
}

function postingInpValue(){
    var value = document.getElementById("textArea").value

if(value !==""){
    document.getElementById("textArea").value =""
    document.getElementById("main").innerHTML +=`
    <div class="js-post">
    <div class="title">
        <div class="js-sec">
            <img class="js-image" width="40px" height="40px" src="./images/dp.jpg" alt="" srcset="">
            <div class="time">
                <p class="js-name">Talha Khan</p>
            </div>
            <i onclick="deletePost()" id="dlt" class="fa-solid fa-trash"></i>
        </div>
    </div>
    <div class="bgPosition" ${text}>
        <p>
            ${value}
        </p>
    </div >
    <div class="applauses">
        <div onclick="thumbChange()" class="like">
            <i class="fa-regular fa-thumbs-up"></i>Like
        </div>
        <div class="comment">
            <i class="fa-solid fa-comment"></i>
            Comment
        </div>
    </div>
    <div class="cmntBox">
        <img class="js2-image" width="40px" height="40px" src="./images/dp.jpg" alt="">
        <input  class="reply" type="text" placeholder="Write a comment..." >
        <i class="share fa-solid fa-share"></i>
    </div>
</div >
        `

if (imgId !==""){
    document.getElementById(`text${count}`).style.backgroundImage = "url(" + document.querySelector(`#${imgId} img`).src + ")";
    count = count + 1;
}

}
else{  
        document.getElementById("error-message").innerHTML = "*Post cannot be submitted empty"
}
}
