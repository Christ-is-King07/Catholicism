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
            "saints": "../Saints/saints.html",
                "st charbel": "../Saints/saint_charbel.html",
                    "saint charbel": "../Saints/saint_charbel.html",
                    "charbel": "../Saints/saint_charbel.html",

                "padre pio": "../Saints/padre_pio.html",
                    "saint padre pio": "../Saints/padre_pio.html",
                    "pio": "../Saints/padre_pio.html",
                    "padre": "../Saints/padre_pio.html",

                "st anthony of padua": "../Saints/st_anthony_of_padua.html",
                    "st anthony": "../Saints/st_anthony_of_padua.html",
                    "saint anthony": "../Saints/st_anthony_of_padua.html",
                    "anthony": "../Saints/st_anthony_of_padua.html",

            "prayers": "../Prayers/prayers.html",
                "rosary": "../Prayers/rosary.html",
                "nicene creed": "../Prayers/nicene_creed.html",

            "papacy": "../Papacy/papacy.html",
                "hierarchy of the catholic church": "../Papacy/hierarchy_of_the_catholic_church.html",
                    "hierarchy": "../Papacy/hierarchy_of_the_catholic_church.html",
                "line of popes": "../Papacy/line_of_popes.html",
                "popes": "../Papacy/line_of_popes.html",
                "st peter": "../Papacy/st_peter.html",
                    "peter": "../Papacy/st_peter.html",

            "the assumption": "../Catholicism/assumption.html",
                "assumption": "../Catholicism/assumption.html",
            "confession": "../Catholicism/confession.html",
            "eucharist": "../Catholicism/eucharist.html",
            "glossary": "../Catholicism/glossary.html"
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

// Select all toggle buttons and content sections
const toggleButtons = document.querySelectorAll('.toggleButton');
const contents = document.querySelectorAll('.content');

// Loop through each button and add a click event listener
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Toggle the corresponding content div based on the index
        const content = contents[index];
        content.classList.toggle('hidden'); // Toggle visibility
    });
});

