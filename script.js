document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movieRequestForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // පිටුව Refresh වීම නවත්වයි

        // ඔබේ Google Form ලින්ක් එක මෙතැනට දමන්න
        const googleFormLink = "https://docs.google.com/spreadsheets/d/1Uc0WQR5fmWloUiQsDKTmSOj_al5VgTskqjIm9Uk4qe0/edit?usp=drivesdk";

        // නව ටැබ් එකක Google Form එක විවෘත කරයි
        window.open(googleFormLink, '_blank');

        alert("ස්තූතියි! කරුණාකර විවෘත වූ Google Form එක පුරවා ඔබගේ ඉල්ලීම තහවුරු කරන්න.");
        form.reset();
    });
});
