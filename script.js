function calculateIntake() {
    const name = document.getElementById('name').value || "Vampire";
    const drink = document.getElementById('drink').value;
    const amount = parseInt(document.getElementById('amount').value) || 0;
    const sugar = parseInt(document.getElementById('sugar').value) || 0;

    // Approximate caffeine content per 100ml
    const caffeineContent = {
        coffee: 40,
        cappuccino: 30,
        latte: 20,
        espresso: 80
    };

    const caffeine = (caffeineContent[drink] * amount) / 100;

    let caffeineMsg = "";
    if (caffeine < 50) {
        caffeineMsg = "Ah, a relaxing day in the castle for you 🦇";
    } else if (caffeine < 200) {
        caffeineMsg = "A human walking day ahead! 🧛‍♂️ Try to get some fresh air.";
    } else {
        caffeineMsg = "Whoa! Are you Batman? 🦇 Too much caffeine!";
    }

    let sugarMsg = "";
    if (sugar < 3) {
        sugarMsg = "Sugar levels are calm. 🍬";
    } else {
        sugarMsg = "Beware! Diabetes is coming for you! ⚠️";
    }

    const output = `
        <p>Hello, <strong>${name}</strong>!</p>
        <p>You consumed approximately <strong>${caffeine.toFixed(1)} mg</strong> of caffeine and <strong>${sugar} spoon(s)</strong> of sugar today.</p>
        <p>${caffeineMsg}</p>
        <p>${sugarMsg}</p>
    `;

    document.getElementById('output').innerHTML = output;
}
