const submitButton = document.querySelector('#submit-button');
const time = document.querySelector('#time');
time.onchange = e => {
    const userImage = document.querySelector('#user-image');
    const hyperLink = document.querySelector('#hyper-link');

  
}



submitButton.onclick = e => {
   ;
    const userImage = document.querySelector('#user-image');
    const hyperLink = document.querySelector('#hyper-link');
    const paragraph = document.querySelector('#recommendation');
    
   
    
    if (time.value === '8') {
        userImage.src = '../img/result/' + '8_10.PNG';
        paragraph.textContent= 'The best online meeting on this time is Webex'
        hyperLink.textContent= 'visit webex website'
        hyperLink.href= 'https://www.webex.com/ '
        

    } else if (time.value === '10') {
        userImage.src = '../img/result/' + '10_12.PNG';
        paragraph.textContent= 'The best online meeting on this time is Zoom'
        hyperLink.textContent= 'visit Zoom website'
        hyperLink.href= 'https://zoom.us/'

    } else if (time.value === '2') {
        userImage.src = '../img/result/' + '2_4.PNG';
        paragraph.textContent= 'The best online meeting on this time is Google Meet'
        hyperLink.textContent= 'visit Google Meet website'
        hyperLink.href= 'https://apps.google.com/meet/'

    } else if (time.value === '4') {
        userImage.src = '../img/result/' + '4_6.PNG';
        paragraph.textContent= 'The best online meeting on this time is Microsoft Teams'
        hyperLink.textContent= 'visit Microsoft Team website'
        hyperLink.href= 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software '

    }
}


// if (time.value === '8') {
//     hyperLink.textContent = 'aaa'
// } else if (time.value === '10') {
//     hyperLink.textContent = 'bbb'
// }


 // const userName = document.querySelector('#user-name');
    // const userImage = document.querySelector('#user-image');
    // const hyperLink = document.querySelector('#hyper-link');
    // hyperLink.textContent = 'aaa'
    // hyperLink.href = 'https://google.com'
    // userImage.src = '../img/' + userName.value;



     // if (time.value === '8') {
    //     userImage.src = '../img/' + 'service1.jpg';
    // } else if (time.value === '10') {
    //     userImage.src = '../img/' + 'service2.jpg';
    // } else if (time.value === '2') {
    //     userImage.src = '../img/' + 'service3.jpg';
    // } else if (time.value === '4') {
    //     userImage.src = '../img/' + 'service4.jpg';
    // }