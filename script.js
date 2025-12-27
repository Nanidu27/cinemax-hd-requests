document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movieRequestForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // ඔබ ලබාදුන් නිවැරදි Google Form ලින්ක් එක මෙතැන ඇත
        const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLScjgHlPdMe47VdreY4fjuUJ63kb79--PD2wK16fa2ZY0jWT3g/viewform?usp=sf_link";

        // Google Form එක අලුත් ටැබ් එකක විවෘත වේ
        window.open(googleFormLink, '_blank');

        alert("ස්තූතියි! කරුණාකර විවෘත වූ Google Form එක පුරවා ඔබේ ඉල්ලීම තහවුරු කරන්න.");
        form.reset();
    });
});
