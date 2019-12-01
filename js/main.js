/// <reference path="jquery-3.4.1.js" />
$(() => {
    $("#all").click(() => {
        showCountries("all")
    });
    $("#name").click(() => {
        showCountries("name/" + $("#search-input").val())
    });

    function getAjaxData(url, callback) {
        $.ajax({
            method: "GET",
            url: url,
            error: err => alert("somethiing went wrong, please try again ", err.message),
            success: countries => callback(countries)
        });
    }

    function showCountries(filter) {
        getAjaxData("https://restcountries.eu/rest/v2/" + filter, finalData => displayCountries(finalData));
    }

    function displayCountries(countries) {
        console.log(countries)
        $("#stage").empty();
        let content = "";
        for (const item of countries) {
            const country = `
            <div class="card border-secondary col-6">
            <div class="row">
                <div class="col-6">
                    <img src="${item.flag}" class="card-img-top" alt="${item.name}">
                </div>
                <div class="col-6">
                    <div class="card-body ">
                        <h5 class="card-title text-info">Name: ${item.name}</h5>
                        <p class="card-text">Top level domain: ${item.topLevelDomain}</p>
                        <p class="card-text">Capital: ${item.capital}</p>
                        <p class="card-text text-success">Currency:
                            ${item.currencies[0].code}, Name: ${item.currencies[0].name}, Symbol: ${item.currencies[0].symbol}
                        </p>
                    </div>
                </div>
            </div>
        </div>               
                `;
            content += country;
        }
        $("#stage").append(content);
    }
}); //RF