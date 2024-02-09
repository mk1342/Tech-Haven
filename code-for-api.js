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
    var count = 0
    function getOption() {
    selectElement = document.querySelector('#country');
    output1 = selectElement.value;
    let new_num = document.getElementById('product-price1')
    let num1 = parseInt(document.getElementById('initial-price1').textContent);
    if (isNaN(num2)) {
        console.error("Invalid initial price");
        return;
    }
    if (exchangerates.length === 0) {
        console.error("Exchange rates not available yet");
        return;
    }
    var to_remove_num = document.getElementById(list_of_ids[2]);
    to_remove_num.remove();
    new_num.textContent = (exchangerates[output] * num1).toFixed(2);
    document.getElementById('output1').textContent = '$' + output1
    count += 3
}