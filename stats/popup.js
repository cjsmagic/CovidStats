document.addEventListener('DOMContentLoaded', function () {
    const casesElement = document.getElementById('cases');
    const deathsElement = document.getElementById('deaths');
    const recoveredElement = document.getElementById('recovered');
    const parser = new DOMParser();

    fetch('https://www.worldometers.info/coronavirus/')
        .then((response) => {
            return response.text();
        })
        .then((html) => {
            const htmlDom = parser.parseFromString(html, "text/html");

            const [cases, deaths, recovered] = htmlDom.querySelectorAll('#maincounter-wrap span');

            casesElement.innerText = cases.innerText;
            deathsElement.innerText = deaths.innerText;
            recoveredElement.innerText = recovered.innerText;
        });
}, false)