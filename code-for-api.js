let exchangerates = []
    function getLatest(options) {
        fetch(`https://v6.exchangerate-api.com/v6/ac460c7eee861afbf2aa94ab/latest/SGD`)
            .then(function(resp) {
                return resp.json();
            })
            .then(function(data){
                console.log(data)
                exchangerates = data.conversion_rates;})
            
    }

    getLatest()
    function getOption() {
    selectElement = document.querySelector('#country');
    output = selectElement.value;
    
    let num2 = parseInt(document.getElementById('initial-price').textContent);
    if (isNaN(num2)) {
        console.error("Invalid initial price");
        return;
    }
    if (exchangerates.length === 0) {
        console.error("Exchange rates not available yet");
        return;
    }
    document.getElementById('product-prices').textContent =(exchangerates[output] * num2).toFixed(2);
}