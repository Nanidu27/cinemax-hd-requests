document.getElementById('movieRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button');
    const movie = document.getElementById('movieName').value;
    const lang = document.getElementById('language').value;

    // බොත්තම "Sending" ලෙස වෙනස් කිරීම
    submitBtn.innerText = "SENDING... ⏳";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;

    // Google Form දත්ත
    const formID = "1FAIpQLSeL0l54Ptq3NCgcuOSml97f3bnLzqJ6wCLpWPYnrVkTtbeELw";
    const entryMovie = "entry.841584894"; 
    const entryLang = "entry.1748281134";

    const formData = new FormData();
    formData.append(entryMovie, movie);
    formData.append(entryLang, lang);

    // Background Submission (Fetch API)
    fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        // සාර්ථක වූ විට පෙන්වන පණිවිඩය
        submitBtn.innerText = "SENT SUCCESSFULLY! ✅";
        submitBtn.style.background = "#25D366"; // කොළ පාට වීම
        
        setTimeout(() => {
            submitBtn.innerText = "SEND REQUEST 🎬";
            submitBtn.style.background = "#e50914"; // නැවත රතු පාට වීම
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
            document.getElementById('movieRequestForm').reset();
        }, 3000);
    }).catch(error => {
        alert("Error! කරුණාකර නැවත උත්සාහ කරන්න.");
        submitBtn.innerText = "SEND REQUEST 🎬";
        submitBtn.disabled = false;
    });
});
