async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
    const { slip } = await res.json();
    const { advice } = slip;
    return advice;
}

async function placeAdvice() {
    const advice = await getAdvice();
    const adviceContent = document.querySelector("#advice_content");
    adviceContent.textContent = advice;
}

function switchState(dice:HTMLElement) {
    dice.classList.toggle("diceButton-standby");
    dice.classList.toggle("diceButton-fetching");
}

async function activateDice() {
    const diceButton:HTMLElement = document.querySelector("#diceButton");
    switchState(diceButton);
    await placeAdvice();
    switchState(diceButton);
}

placeAdvice();