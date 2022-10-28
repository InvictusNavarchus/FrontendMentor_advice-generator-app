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

placeAdvice();