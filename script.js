const inputTotalValue = document.querySelector("#totalValue");
const inputDailyTimeInvested = document.querySelector("#dailyTimeInvested");
const inputEffectiveDays = document.querySelector("#effectiveDays");
const inputVacationDays = document.querySelector("#vacationDays");
const result = document.querySelector("#result")

function calc(){
    let totalValue = inputTotalValue.value;
    let dailyTimeInvested = inputDailyTimeInvested.value;
    let effectiveDays = inputEffectiveDays.value;
    let vacationDays = inputVacationDays.value;

    let hourValue = (totalValue / (effectiveDays * 4 * dailyTimeInvested)) + (( vacationDays * effectiveDays * dailyTimeInvested))

    result.innerHTML = `<p>O valor do seu freelance será de <strong>R$${hourValue.toFixed(2)}</strong></p>`
}



