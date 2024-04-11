document.getElementById('proceedButton').addEventListener('click', function() {
    var navDiv = document.getElementById('aboutMe');
    // Scroll to the nav div
    navDiv.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('homeButton').addEventListener('click', function() {
    var navDiv = document.getElementById('page1');
    // Scroll to the nav div
    navDiv.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutBtn').addEventListener('click', function() {
    var navDiv = document.getElementById('aboutMe');
    // Scroll to the nav div
    navDiv.scrollIntoView({ behavior: 'smooth' });
});


// Get the content inside the <code> tag
var codeText = document.querySelector('#content-code').innerHTML;

// Clear the existing content inside <code> tag
document.querySelector('#content-code').innerHTML = '';

// Function to simulate typing effect
function typeWriter(text, i) {
    if (i < text.length) {
        if (text.charAt(i) === '<') {
            // If the character is '<', find the end of the tag and append it all at once
            var endTagIndex = text.indexOf('>', i);
            var tag = text.substring(i, endTagIndex + 1);
            document.querySelector('#content-code').innerHTML += tag;
            i = endTagIndex + 1;
        } else {
            document.querySelector('#content-code').innerHTML += text.charAt(i);
            i++;
        }
        setTimeout(function() {
            typeWriter(text, i);
        }, 50); // Adjust typing speed here (milliseconds)
    } else {
        // Hide the cursor after typing completion
        document.getElementById('cursor').style.display = 'none';
    }
}

// Call the function with the codeText and initial index 0
typeWriter(codeText, 0);

// Show the cursor initially
document.getElementById('cursor').style.display = 'inline';

// Function to make the cursor blink
setInterval(function() {
    var cursor = document.getElementById('cursor');
    cursor.style.visibility = (cursor.style.visibility === 'hidden' ? 'visible' : 'hidden');
}, 500); // Adjust blinking speed here (milliseconds)

