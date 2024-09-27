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
            "saints": "../../../Catholicism/Saints/index.html",
                "st charbel": "../../../Catholicism/Saints/Saint Charbel/index.html",
                    "saint charbel": "../../../Catholicism/Saints/Saint Charbel/index.html",
                    "charbel": "../../../Catholicism/Saints/Saint Charbel/index.html",

                "padre pio": "../../../Catholicism/Saints/Padre Pio/index.html",
                    "saint padre pio": "../../../Catholicism/Saints/Padre Pio/index.html",
                    "pio": "../../../Catholicism/Saints/Padre Pio/index.html",
                    "padre": "../../../Catholicism/Saints/Padre Pio/index.html",

                "st anthony of padua": "../../../Catholicism/Saints/St Anthony of Padua/index.html",
                    "st anthony": "../../../Catholicism/Saints/St Anthony of Padua/index.html",
                    "saint anthony": "../../../Catholicism/Saints/St Anthony of Padua/index.html",
                    "anthony": "../../../Catholicism/Saints/St Anthony of Padua/index.html",

            "prayers": "../../../Catholicism/Prayers/index.html",
                "rosary": "../../../Catholicism/Prayers/Rosary/index.html",
                "nicene creed": "../../../Catholicism/Prayers/Nicene Creed/index.html",

            "papacy": "Papacy/index.html",
                "history of catholic hierarchy": "Papacy/History of Catholic Hierarchy/index.html",
                "line of popes": "../../../Catholicism/Papacy/Line of Popes/index.html",
                "popes": "../../../Catholicism/Papacy/Line of Popes/index.html",

            "the assumption": "../../../Catholicism/Catholicism/Assumption/index.html",
                "assumption": "../../../Catholicism/Catholicism/Assumption/index.html",
            "confession": "../../../Catholicism/Catholicism/Confession/index.html",
            "eucharist": "../../../Catholicism/Catholicism/Eucharist/index.html"
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