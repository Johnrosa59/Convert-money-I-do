
const button = document.getElementById('button-converter')
const realText = document.getElementById('real-text')
const selectCurrency = document.getElementById('select-currency')
const changeFlag = document.getElementById('flag')
const textCurrency = document.getElementById('text-currency')
const moneyConvert = document.getElementById('money-changed')



const convertMoney = async () => {
    const input = document.getElementById('input-value').value

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())


    const dollar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    if (selectCurrency.value === 'US$ Dólar americano') {

        realText.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(input)


        moneyConvert.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(input / dollar)

    }

    else if (selectCurrency.value === '€ Euro') {
        realText.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(input)


        moneyConvert.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(input / euro)
    }
    else if (selectCurrency.value === 'Bitcoin') {
        moneyConvert.innerHTML = input / bitcoin
    }

}

const changedConvert = () => {
    if (selectCurrency.value === '€ Euro') {
        changeFlag.src = './img/euro.png'
        textCurrency.innerHTML = 'Euro'

    }
    else if (selectCurrency.value === 'US$ Dólar americano') {
        changeFlag.src = './img/USA.png'
        textCurrency.innerHTML = 'Dólar Americano'
    }
    else if (selectCurrency.value === 'Bitcoin') {
        changeFlag.src = './img/bitcoin.png'
        textCurrency.innerHTML = 'Bitcoin'
    }
    convertMoney()

}

button.addEventListener('click', convertMoney)
selectCurrency.addEventListener('change', changedConvert)