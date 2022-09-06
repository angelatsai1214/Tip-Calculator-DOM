let billAmount = document.getElementById('billTotal')
let tipAmount = document.getElementById('tip')
let people = document.getElementById('numberOfPeople').innerText

calculateBill = () => {
  let billValue = Number(billAmount.value)
  let tipPercent = Number(tipAmount.value)/100
  billValue += billValue*(tipPercent)
  billValue /= people
  perPersonTotal.innerHTML=`$${billValue.toFixed(2)}`
}

increasePeople = () => {
  people++
  numberOfPeople.innerHTML = people
  calculateBill()
}

decreasePeople = () => {
  if( people > 1 ){
    people--
    numberOfPeople.innerHTML = people
    calculateBill()
  }
}