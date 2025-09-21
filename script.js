// 1. Калькулятор блоков для дома
function calculateBlocks() {
    const l = parseFloat(document.getElementById('length').value);
    const w = parseFloat(document.getElementById('width').value);
    const h = parseFloat(document.getElementById('height').value);

    if (!isNaN(l) && !isNaN(w) && !isNaN(h)) {
        const walls = 2 * h * (l + w);
        const roof = l * w;
        const floor = l * w;
        const total = walls + roof + floor;

        const resultDiv = document.getElementById('result-blocks');
        resultDiv.style.display = 'block';
        resultDiv.textContent = `Всего блоков: ${Math.ceil(total)}`;
    } else {
        alert('Пожалуйста, введите все значения.');
    }
}

// 2. Генератор координат
function generateCoords() {
    const x = Math.floor(Math.random() * 2000 - 1000);
    const z = Math.floor(Math.random() * 2000 - 1000);
    const y = 64 + Math.floor(Math.random() * 100);

    const resultDiv = document.getElementById('result-coords');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Телепортируйся: /tp @s ${x} ${y} ${z}`;
}

// 3. Конвертер игрового времени
function convertGameTime() {
    const mins = parseFloat(document.getElementById('game-minutes').value);
    if (!isNaN(mins)) {
        const days = mins / 20; // 1 игровой день = 20 минут
        const resultDiv = document.getElementById('result-time');
        resultDiv.style.display = 'block';
        resultDiv.textContent = `${mins} мин = ${days.toFixed(2)} игровых дней`;
    } else {
        alert('Введите число минут.');
    }
}

// 4. Калькулятор опыта
function calculateXP() {
    const xp = parseInt(document.getElementById('xp-amount').value);
    if (!isNaN(xp) && xp >= 0) {
        let level = 0;
        let remaining = xp;
        for (let i = 1; remaining >= 0; i++) {
            const cost = i <= 16 ? i * 2 + 5 : (i <= 31 ? i * 5 - 38 : i * 9 - 158);
            if (remaining < cost) break;
            remaining -= cost;
            level = i;
        }
        const resultDiv = document.getElementById('result-xp');
        resultDiv.style.display = 'block';
        resultDiv.textContent = `Уровень: ${level} (остаток: ${remaining} опыта)`;
    } else {
        alert('Введите корректное количество опыта.');
    }
}

// 5. Генератор названий предметов
function generateItemName() {
    const prefixes = ['Легендарный', 'Проклятый', 'Сияющий', 'Темный', 'Вечный', 'Огненный', 'Ледяной'];
    const suffixes = ['Меча', 'Посоха', 'Щита', 'Лука', 'Кирки', 'Шлема', 'Амулета'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const name = `${prefix} ${suffix}`;

    const resultDiv = document.getElementById('result-itemname');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Название: §l${name}`;
}

// 6. Калькулятор криперов
function calculateCreepers() {
    const needed = parseInt(document.getElementById('gunpowder-needed').value);
    if (!isNaN(needed) && needed > 0) {
        const creepers = Math.ceil(needed / 2); // в среднем 0-2 пороха с крипера
        const resultDiv = document.getElementById('result-creepers');
        resultDiv.style.display = 'block';
        resultDiv.textContent = `Нужно убить ~${creepers} криперов`;
    } else {
        alert('Введите количество пороха.');
    }
}

// 7. Генератор seed
function generateSeed() {
    const seed = Math.floor(Math.random() * 9007199254740991) - 4503599627370495;
    const resultDiv = document.getElementById('result-seed');
    resultDiv.style.display = 'block';
    resultDiv.textContent = `Seed: ${seed}`;
}

// 8. Калькулятор прочности брони
function calculateArmorDurability() {
    const armorDurabilities = {
        leather: 55,
        iron: 165,
        diamond: 363,
        netherite: 407
    };
    const type = document.getElementById('armor-type').value;
    const damage = parseFloat(document.getElementById('damage-per-hit').value);
    if (!isNaN(damage) && damage > 0) {
        const durability = armorDurabilities[type];
        const hits = Math.floor(durability / damage);
        const resultDiv = document.getElementById('result-armor');
        resultDiv.style.display = 'block';
        resultDiv.textContent = `Выдержит ~${hits} ударов по ${damage} урона`;
    } else {
        alert('Введите урон за удар.');
    }
}