
  const placeNames = ['United States', 'India', 'France', 'Germany', 'Japan', 'Australia'];
        let currentIndex = 0;

        setInterval(() => {
            document.getElementById('placeName').innerText = placeNames[currentIndex];
            currentIndex = (currentIndex + 1) % placeNames.length;
        }, 200);

function bookNow() {
    var form = document.getElementById('bookingForm');
    if (form.checkValidity()) {
        alert('Booking successful!');
    } else {
        alert('Please fill in all the fields.');
    }
}

function bookPackage(packageId) {
    alert('Booking Package ' + packageId + ' successful!');
}



function updateCounter() {
    var textarea = document.getElementById('description');

    var counter = document.getElementById('counter');

    var remainingCharacters = textarea.maxLength - textarea.value.length;

    counter.textContent = (remainingCharacters > 450) ? ('Characters needed: ' + (50 - textarea.value.length)) : ('Characters remaining: ' + remainingCharacters);

    if (remainingCharacters < textarea.minLength) {
        counter.classList.add('error');
    } else {
        counter.classList.remove('error');
    }
}




window.onload = function () {

    //Rating Stars
    const containers = document.querySelectorAll('.star-container');

    containers.forEach((container, index) => {
        // Set the initial rating for each container
        let currentRating = container.getAttribute('data-rating');

        // Create stars dynamically and append to the container
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.classList.add('star');
            star.innerHTML = '&#9733;';

            // Check if the star should be filled
            star.classList.toggle('filled', i < currentRating);

            // Append the star to the container
            container.appendChild(star);
        }

        // Get all stars for the current container
        const stars = container.querySelectorAll('.star');
    });

}




function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var defaultEmail = "info@gotravel.com";
    var defaultPassword = "Password";

    if (email === defaultEmail && password === defaultPassword) {
        return true; // Proceed with form submission
    } else {
        alert("Incorrect email or password. Please try again.");
        return false; // Prevent form submission
    }
}