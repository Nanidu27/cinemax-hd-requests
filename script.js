document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movieRequestForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Form එක submit වීම නවත්වනවා

        // Form fields වලින් data එකතු කරගන්නවා
        const movieName = document.getElementById('movieName').value;
        const releaseYear = document.getElementById('releaseYear').value;
        const language = document.getElementById('language').value;
        const requesterName = document.getElementById('requesterName').value;

        // මෙතනදී ඔබට request එකක් server එකකට යවන්න පුළුවන්.
        // දැනට අපි සරල alert එකක් පෙන්වමු.

        const requestDetails = `
            Movie Request Received!
            ------------------------
            Movie Name: ${movieName}
            Release Year: ${releaseYear || 'N/A'}
            Language: ${language}
            Requester: ${requesterName || 'Anonymous'}
        `;

        alert(requestDetails); // තාවකාලිකව alert එකක් පෙන්වයි

        // ඔබට Form එක clear කිරීමට අවශ්‍ය නම්
        form.reset();

        // සැබෑ Request එකක් යවන්නේ කෙසේද? (උදාහරණ)
        // 1. Google Form එකකට Redirect කරන්න:
        //    window.open('ඔබේ_GOOGLE_FORM_LINK_එක_මෙතැනට_දමන්න', '_blank');
        // 2. Formspree වැනි සේවාවක් භාවිතා කරන්න:
        //    const formData = new FormData(form);
        //    fetch('https://formspree.io/f/your_form_id', {
        //        method: 'POST',
        //        body: formData,
        //        headers: {
        //            'Accept': 'application/json'
        //        }
        //    }).then(response => {
        //        if (response.ok) {
        //            alert('Your request has been sent!');
        //            form.reset();
        //        } else {
        //            alert('There was an error sending your request.');
        //        }
        //    }).catch(error => {
        //        console.error('Error:', error);
        //        alert('An error occurred.');
        //    });
    });
});
