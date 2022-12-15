// Locked
const locked = document.querySelectorAll(".locked")

// Upgrade buttons
const buySlotButton = document.getElementById("buy-card-slot")
const buyCardButton = document.getElementById("buy-graphics-card")

// Upgrade related
let powerCapacity = 5
let softwareMultiplier = 1
let softwareMultiplierFixed = 1

// Stats
const incomeStat = document.getElementById("income-p")
const moneyStat = document.getElementById("money-p")
const powerStat = document.getElementById("capacity-p")
const consumptionStat = document.getElementById("consumption-p")
const softwareStat = document.getElementById("software-p")

// Income related
let ownedCard = 1
let income = 10
let money = 10000000

// ------------------------------------------------------------------------------------------------

// Unlock one slot (remove locked class)
function unlockSlot() {

    // Check money and slot 12 status
    if (money > 2499 && document.getElementById("slot-12").classList[1] == "locked") {

        // Deduct money
        money = money - 2500

        // Unlock the next slot
        let i = 0
        while (i < 11) {
            if (locked[i].classList == "slot locked") {
                locked[i].classList.remove("locked")
                locked[i].classList.add("slot")
                locked[i].innerText = ""
                break
            }
            i++
        }
    }
}

// ------------------------------------------------------------------------------------------------

// Generate money
function generateMoney() {
    money = money + income
}

setInterval(generateMoney, 1000)

// Update stats
function updateStats() {
    moneyStat.innerText = money + "€"
    consumptionStat.innerText = ownedCard * 100 + "W"
    income = (10 * ownedCard * softwareMultiplierFixed)
    incomeStat.innerText = income.toFixed(0) + "€/s"
    powerStat.innerText = powerCapacity * 100 + "W"
}

setInterval(updateStats, 1)

// ------------------------------------------------------------------------------------------------

// Buy one card
function buyCard() {
    const slotCount1 = document.getElementById("slot-span-1")

    // Check money
    if (money > 999) {

        // Ckeck power capacity
        if (powerCapacity > ownedCard) {

            // Slot 1
            // Check the amount of owned cards
            if (ownedCard < 10) {

                // Add one card and update stats
                ownedCard++
                money = money - 1000
                slotCount1.innerText = ownedCard

                // Slot 2
            } else if (ownedCard < 20 && document.getElementById("slot-2").classList[1] !== "locked") {
                document.getElementById("slot-2").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-2"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-2").innerText = ownedCard - 10

                // Slot 3
            } else if (ownedCard < 30 && document.getElementById("slot-3").classList[1] !== "locked") {
                document.getElementById("slot-3").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-3"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-3").innerText = ownedCard - 20

                // Slot 4
            } else if (ownedCard < 40 && document.getElementById("slot-4").classList[1] !== "locked") {
                document.getElementById("slot-4").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-4"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-4").innerText = ownedCard - 30

                // Slot 5
            } else if (ownedCard < 50 && document.getElementById("slot-5").classList[1] !== "locked") {
                document.getElementById("slot-5").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-5"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-5").innerText = ownedCard - 40

                // Slot 6
            } else if (ownedCard < 60 && document.getElementById("slot-6").classList[1] !== "locked") {
                document.getElementById("slot-6").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-6"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-6").innerText = ownedCard - 50

                // Slot 7
            } else if (ownedCard < 70 && document.getElementById("slot-7").classList[1] !== "locked") {
                document.getElementById("slot-7").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-7"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-7").innerText = ownedCard - 60

                // Slot 8
            } else if (ownedCard < 80 && document.getElementById("slot-8").classList[1] !== "locked") {
                document.getElementById("slot-8").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-8"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-8").innerText = ownedCard - 70

                // Slot 9
            } else if (ownedCard < 90 && document.getElementById("slot-9").classList[1] !== "locked") {
                document.getElementById("slot-9").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-9"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-9").innerText = ownedCard - 80

                // Slot 10
            } else if (ownedCard < 100 && document.getElementById("slot-10").classList[1] !== "locked") {
                document.getElementById("slot-10").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-10"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-10").innerText = ownedCard - 90

                // Slot 11
            } else if (ownedCard < 110 && document.getElementById("slot-11").classList[1] !== "locked") {
                document.getElementById("slot-11").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-11"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-11").innerText = ownedCard - 100

                // Slot 12
            } else if (ownedCard < 120 && document.getElementById("slot-12").classList[1] !== "locked") {
                document.getElementById("slot-12").innerHTML = '<img src="images/rtx 4090.png" alt="4090"><span class="slot-span" id="slot-span-12"></span>'
                ownedCard++
                money = money - 1000
                document.getElementById("slot-span-12").innerText = ownedCard - 110
            }
        }
    }
}

// Upgrade power
function upgradePower() {

    // Check money
    if (money > 499) {

        // Increase power capacity
        powerCapacity++
        money = money - 500
    }
}

// Upgrade software
function upgradeSoftware() {
    if (money > 749 && softwareMultiplierFixed < 10) {
        money = money - 750
        softwareMultiplier = softwareMultiplier + 0.1
        softwareMultiplierFixed = softwareMultiplier.toFixed(1)
        softwareStat.innerText = "x" + softwareMultiplierFixed
    }
}