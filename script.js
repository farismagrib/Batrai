const batteryLevel = document.getElementById("battery-level");

function animateBattery() {
    let level = 0;
    const animationInterval = setInterval(() => {
        level += 5;
        batteryLevel.style.width = `${level}%`;
        if (level === 100) {
            clearInterval(animationInterval);
        }
    }, 500); // Ubah kecepatan animasi sesuai kebutuhan
}

animateBattery();
