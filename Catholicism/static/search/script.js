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
                "st charbel": "../../../Catholicism/Saints/Saint Charbel/Saints/saint_charbel.html",
                    "saint charbel": "../../../Catholicism/Saints/Saint Charbel/Saints/saint_charbel.html",
                    "charbel": "../../../Catholicism/Saints/Saint Charbel/Saints/saint_charbel.html",

                "padre pio": "../../../Catholicism/Saints/Padre Pio/padre_pio.html",
                    "saint padre pio": "../../../Catholicism/Saints/Padre Pio/padre_pio.html",
                    "pio": "../../../Catholicism/Saints/Padre Pio/padre_pio.html",
                    "padre": "../../../Catholicism/Saints/Padre Pio/padre_pio.html",

                //"st anthony of padua": "../../../Catholicism/Saints/St Anthony of Padua/st_anthony_of_padua.html",
                    //"st anthony": "../../../Catholicism/Saints/St Anthony of Padua/st_anthony_of_padua.html",
                    //"saint anthony": "../../../Catholicism/Saints/St Anthony of Padua/st_anthony_of_padua.html",
                    //"anthony": "../../../Catholicism/Saints/St Anthony of Padua/st_anthony_of_padua.html",

            "prayers": "../../../Catholicism/Prayers/prayers.html",
                "rosary": "../../../Catholicism/Prayers/Rosary/rosary.html",
                "nicene creed": "../../../Catholicism/Prayers/Nicene Creed/nicene_creed.html",

            //"papacy": "../../../Catholicism/Papacy/papacy.html",
                //"history of catholic hierarchy": "../../../Catholicism/Papacy/History of Catholic Hierarchy/history_of_catholic_hierarchy.html",
                //"line of popes": "../../../Catholicism/Papacy/Line of Popes/line_of_popes.html",
                //"popes": "../../../Catholicism/Papacy/Line of Popes/line_of_popes.html",

            "the assumption": "../../../Catholicism/Catholicism/Assumption/assumption.html",
                "assumption": "../../../Catholicism/Catholicism/Assumption/assumption.html",
            "confession": "../../../Catholicism/Catholicism/Confession/confession.html",
            "eucharist": "../../../Catholicism/Catholicism/Eucharist/eucharist.html",
            "glossary": "../../../Catholicism/Catholicism/Glossary/glossary.html"
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
