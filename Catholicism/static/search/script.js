// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    // Check if form and input are found correctly
    if (!form || !input) {
        console.error('Form or input element not found');
        return;
    }

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const query = input.value.toLowerCase().trim();
        navigateToPage(query);
    });

    // Function to handle navigation based on search input
    function navigateToPage(query) {
        const pages = {
            "saints": "../../../../Catholicism/Saints/index.html",
                "st charbel":"../../../../Saints/Saint Charbel/index.html",
                    "saint charbel":"../../../../Saints/Saint Charbel/index.html",
                    "charbel":"../../../Saints/Saint Charbel/index.html",

                "padre pio":"../../../Saints/Padre Pio/index.html",
                    "saint padre pio":"../../../Saints/Padre Pio/index.html",
                    "pio":"../../../Saints/Padre Pio/index.html",
                    "padre":"../../../Saints/Padre Pio/index.html",

                "st anthony of padua":"../../../Saints/St Anthony of Padua/index.html",
                    "st anthony":"../../../Saints/St Anthony of Padua/index.html",
                    "saint anthony":"../../../Saints/St Anthony of Padua/index.html",
                    "anthony":"../../../Saints/St Anthony of Padua/index.html",

            "prayers": "../../../Prayers/index.html",
                "rosary": "../../../Prayers/Rosary/index.html",
                "nicene creed": "../../../Prayers/Nicene Creed/index.html",

            "papacy": "../../../Papacy/index.html",
                "history of catholic hierarchy": "../../../Papacy/History of Catholic Hierarchy/index.html",
                "line of popes": "../../../Papacy/Line of Popes/index.html",
                "popes": "../../../Papacy/Line of Popes/index.html",

            "the assumption": "../../../Assumption/index.html",
            "confession": "../../../Confession/index.html",
            "eucharist": "../../../Eucharist/index.html"
        };

        // Navigate to the page if the query matches
        if (pages[query]) {
            console.log(`Navigating to: ${pages[query]}`);
            window.location.href = pages[query];
        } else {
            alert("Page not found.");
        }
    }
});
