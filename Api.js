const apiUrl = "https://api.covid19api.com/summary";

async function get(url) {

    const response = await fetch(url);

    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
get(apiUrl);

function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    var tab = `
    <table>
        <tbody>
            <tr>
                <th>New Confirmed</th>
                <th>New Recovered</th>
                <th>New Deaths</th>
            </tr>
            <tr>
                <td>${data.Global.NewConfirmed}</td>
                <td>${data.Global.NewRecovered}</td>
                <td>${data.Global.NewDeaths}</td>
            </tr>
            <tr>
                <th>Total Confirmed</th>
                <th>Total Recovered</th>
                <th>Total Deaths</th>
            </tr>
            <tr>
                <td>${data.Global.TotalConfirmed}</td>
                <td>${data.Global.TotalRecovered}</td>
                <td>${data.Global.TotalDeaths}</td>
            </tr>
        </tbody>
    </table>
    `;

    document.getElementById("tabledata").innerHTML = tab;
}