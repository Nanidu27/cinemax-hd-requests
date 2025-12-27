document.getElementById('movieRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button');
    const movie = document.getElementById('movieName').value;
    const lang = document.getElementById('language').value;

    // බොත්තම Disable කර "Sending..." ලෙස පෙන්වීම (වැඩි වේගයක් දැනෙන්නට)
    submitBtn.innerText = "SENDING... ⏳";
    submitBtn.style.opacity = "0.7";
    submitBtn.disabled = true;

    // ඔබ ලබාගත් Google Form එකේ Entry IDs මෙතැනට දමන්න
    // (මේකෙන් වෙන්නේ User ට පේන්නේ නැතුව Background එකේ Form එක Submit වෙන එක)
    const formID = "YOUR_GOOGLE_FORM_ID"; // උදා: 1FAIpQLS...
    const entryMovie = "entry.XXXXXXX"; // Movie Name එකට අදාළ Entry ID එක
    const entryLang = "entry.YYYYYYY";  // Language එකට අදාළ Entry ID එක

    const formData = new FormData();
    formData.append(entryMovie, movie);
    formData.append(entryLang, lang);

    // Background Fetch හරහා දත්ත යැවීම
    fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        // සාර්ථකව යැවූ පසු ලැබෙන ප්‍රතිචාරය
        submitBtn.innerText = "SENT SUCCESSFULLY! ✅";
        submitBtn.style.background = "#25D366";
        
        setTimeout(() => {
            submitBtn.innerText = "SEND REQUEST 🎬";
            submitBtn.style.background = "#e50914";
            submitBtn.style.opacity = "1";
            submitBtn.disabled = false;
            document.getElementById('movieRequestForm').reset();
        }, 3000);
    }).catch(error => {
        alert("Error! නැවත උත්සාහ කරන්න.");
        submitBtn.disabled = false;
    });
});
