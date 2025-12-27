document.getElementById('movieRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button');
    const movie = document.getElementById('movieName').value;
    const lang = document.getElementById('language').value;

    submitBtn.innerText = "SENDING... ⏳";
    submitBtn.disabled = true;

    // ඔබ අලුතින් හැදූ Form එකේ විස්තර
    const formID = "1FAIpQLSdzcFUUbKxlfEXqkK_DpLS-H7gIsZtNw-PWS5OzzCB6MM-0iQ";
    const entryMovie = "entry.590210214"; 
    const entryLang = "entry.540118671";

    const formData = new FormData();
    formData.append(entryMovie, movie);
    formData.append(entryLang, lang);

    fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(() => {
        submitBtn.innerText = "SENT SUCCESSFULLY! ✅";
        submitBtn.style.background = "#25D366";
        
        setTimeout(() => {
            submitBtn.innerText = "SEND REQUEST 🎬";
            submitBtn.style.background = "#e50914";
            submitBtn.disabled = false;
            document.getElementById('movieRequestForm').reset();
        }, 3000);
    }).catch(error => {
        submitBtn.innerText = "TRY AGAIN ❌";
        submitBtn.disabled = false;
    });
});
