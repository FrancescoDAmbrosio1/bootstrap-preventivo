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
    const nome = nomeForm.value //string
    const surnameForm = document.getElementById('surname')
    const surname = surnameForm.valueemail  //string
    const emailForm = document.getElementById('email')
    const email = emailForm.value   //string
    const workSelectionForm = document.getElementById('work-selection')
    const workSelection = workSelectionForm.value   //string
    const textAreaForm = document.getElementById('text-area')
    // const textArea = textAreaForm.value //string
    const promoCodeForm = document.getElementById('promo-code')
    const promoCode = promoCodeForm.value   //string
    const privacyForm = document.getElementById('privacy')
    const privacy = privacyForm.value   //string
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
    finalPriceElement.innerHTML = `<span id="finalPrice-Output"> &#8364; <strong>${finalPrice.toFixed(2)}</strong></span>`

    return (finalPrice, price)
}

console.log(typeof(workSelection), workSelection);
//funzione per il conteggio dello sconto applicato --> mi ritorno una percentuale che sarà 0 se non è
//      inserito il codice sconto, altrimenti il 25 % se presente. se viene inserito un codice sconto non presente
//      stampare ' codice inserito non valido'
function discountPromoCode(list, InputPromoCode){
    let discount = 0
        list.forEach(element => {
        if(InputPromoCode === element){
            discountCorrection = 0.75
        } else {
            discountCorrection = 1
        }
    })
    return discountCorrection
}
