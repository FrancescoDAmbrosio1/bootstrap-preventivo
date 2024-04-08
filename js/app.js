//dichiaro array con in codici sconto
const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']
        console.log(promoCodes);



const form = document.getElementById('form-calculation')
form.addEventListener('submit', priceCalculation)
const finalPriceElement = document.getElementById('finalPrice-Output')

//funzione calcolo del prezzo
function priceCalculation(e) {
    //interrompo il submit
    e.preventDefault()
    //prendo i campi dal form e li salvo in una variabile
    const nomeForm = document.getElementById('name')
    let nome = nomeForm.value //string
    const surnameForm = document.getElementById('surname')
    let surname = surnameForm.value  //string
    const emailForm = document.getElementById('email')
    let email = emailForm.value   //string
    const workSelectionForm = document.getElementById('work-selection')
    let workSelection = workSelectionForm.value   //string
    const textAreaForm = document.getElementById('text-area')
    let textArea = textAreaForm.value //string
    const promoCodeForm = document.getElementById('promo-code')
    let promoCode = promoCodeForm.value   //string
    const privacyForm = document.getElementById('privacy')
    let privacy = privacyForm.value   //string
    //dichiaro variabile delle ore di lavoro e prezzo iniziale = 0
    const jobHours = 10     //number
    let finalPrice = 0   //number
    let price = 0   //number
    //richiamo la funzione per il calcolo dello sconto
    const discount = discountPromoCode(promoCodes, promoCode)
    //SE il valore della selection inserito = 1 --> Prezzo BE (20.50 * varOreLavoro) -->
    //      verifico se prente sconto e stampo prezzo
    //ALTRIMENTI SE il valore della selection = 2 --> Prezzo FE (15.30 * varOreLavoro) -->
    //      verifico se prente sconto e stampo prezzo
    //ALTRIMENTI SE il valore della selection = 3 --> Prezzo AnProg (33.60 * varOreLavoro) -->
    //      verifico se prente sconto e stampo prezzo
    //ALTRIMENTI il valore della selection inserito = 0 --> stampo 'Selezionare un tipo di lavoro dall'elenco'
    if(workSelection == 1){
        priceAtHour = 20.50  //number
    } else if (workSelection == 2){
        priceAtHour = 15.30  //number
    } else if(workSelection == 3){
        priceAtHour = 33.60     //number
    } else {
        alert('Selezionare un tipo di lavoro valido')
    }
    price= (priceAtHour * jobHours)    //number
    finalPrice = price * discount   //number
    const printedFinalPrice = splitResult(finalPrice)

    //reset del form
    nomeForm.value = ''
    surnameForm.value = ''
    emailForm.value = ''
    workSelectionForm.value = 0   
    textAreaForm.value = ''
    promoCodeForm.value = ''
    privacyForm.value = ''
}

//funzione per il conteggio dello sconto applicato --> mi ritorno una percentuale che sarà 0 se non è
//      inserito il codice sconto, altrimenti il 25 % se presente. se viene inserito un codice sconto non presente
//      stampare ' codice inserito non valido'
function discountPromoCode(list, InputPromoCode){
        let discountBoolean = false   //boolean
        for(let i = 0; i < list.length; i++){
            const currentItem = list[i]
                console.log(typeof(currentItem), currentItem);
            if(currentItem === InputPromoCode){
            discountBoolean = true  //boolean

            }
                console.log(typeof(discountBoolean), discountBoolean);
    }
    if( discountBoolean === true){
        discountCorrection = 0.75
    } else{
        discountCorrection = 1
        alert('Non è stato inserito nessun codice sconto valido ed il prezzo finale verrà calcolato senza applicare sconti')
    }
    return discountCorrection
}

//funzione che divide il numero intero dal decimale
function splitResult(result){
    console.log('questo è il risultato: ', result);
    fixedResult = result.toFixed(2)
    const integerResult = Math.trunc(fixedResult)
    const stringIntegerResult = integerResult.toString()
        console.log(typeof(stringIntegerResult), stringIntegerResult);
    const decimalResult = (result - integerResult) * 100
    const stringDecimalResult = decimalResult.toString()
        console.log(typeof(stringDecimalResult), stringDecimalResult);
    if (stringDecimalResult.length < 2){
        finalPriceElement.innerHTML = `<span id="finalPrice-Output"> &#8364; <strong>${stringIntegerResult}</strong>,${stringDecimalResult}0</span>`
    } else{
        finalPriceElement.innerHTML = `<span id="finalPrice-Output"> &#8364; <strong>${stringIntegerResult}</strong>,${stringDecimalResult}</span>`
    }
}
