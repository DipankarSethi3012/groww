function openPopup(){
    var popup=document.createElement('div');
    popup.className = 'popup';
    
    var leftContent=document.createElement('div');
    leftContent.className = 'left-content';
    leftContent.innerHTML = `<h2>Simple, Free Investing</h2>`;
    
    var rightContent=document.createElement('div');
    rightContent.className = 'right-content';
    rightContent.innerHTML = `
    <span class="close" onclick="closePopup()">&times;</span>
    <h1>Welcome to Groww</h1>
    <form class="popup-form">
    
    <button type="button" onclick="continueWithGoogle() class="continue-with-google-button"><img src="./google icon.png" alt="" class="google-img">Continue with Google</button>
     <br>
     <h2>Or</h2> 
     <label for="email"></label>
        <input type="email" id="email" name="email" required placeholder="Type your email here"><br>
    </form>
    `;

    popup.appendChild(leftContent);
    popup.appendChild(rightContent);

    document.body.appendChild(popup);
}

function closePopup(){
    var popup=document.querySelector('.popup');
    popup.parentNode.removeChild(popup);
}
function continueWithGoogle(){
    alert("contiune With Google Clicked");
}

document.getElementById('openPopup').addEventListener('click',openPopup);

function closePopup(){
    var popup=document.querySelector('.popup');
    popup.parentNode.removeChild(popup);
}

document.getElementById('openPopup').addEventListener('click',openPopup);
