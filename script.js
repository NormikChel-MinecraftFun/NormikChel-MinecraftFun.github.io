// 🌐 Система мультиязычности с анимацией, SVG-флагами и SEO
const translations = {
    en: {
        // Главная страница
        title: "Minecraft Tools Hub — Tools for Builders & Explorers",
        metaDescription: "Best Minecraft tools: calculators, generators, converters. Helps with building, farming, exploring and more!",
        headerSubtitle: "All the tools you need for your Minecraft adventure",
        footerText: "© 2025 Minecraft Tools Hub — All tools for true builders and explorers! Made with ❤️ for Minecraft players",

        // Навигация
        navHome: "Home",
        navFAQ: "F.A.Q.",
        navBot: "Helper Bot",
        navTOS: "Terms of Service",
        navPrivacy: "Privacy Policy",

        // Инструменты
        tool1_title: "🏠 House Blocks Calculator",
        tool1_desc: "Calculate how many blocks you need to build a house.",
        tool1_btn: "Calculate",
        tool1_result: blocks => `Total blocks: ${Math.ceil(blocks)}`,

        tool2_title: "🌍 Random Coordinates Generator",
        tool2_desc: "Get random coordinates for teleportation.",
        tool2_btn: "Generate",
        tool2_result: (x, y, z) => `Teleport: /tp @s ${x} ${y} ${z}`,

        tool3_title: "⏳ Game Time Converter",
        tool3_desc: "Convert minutes to in-game days and vice versa.",
        tool3_btn: "Convert",
        tool3_result: mins => `${mins} min = ${(mins / 20).toFixed(2)} in-game days`,

        tool4_title: "✨ XP Calculator",
        tool4_desc: "How many levels will N XP give you?",
        tool4_btn: "Calculate",
        tool4_result: (level, remaining) => `Level: ${level} (remaining: ${remaining} XP)`,

        tool5_title: "🏷️ Item Name Generator",
        tool5_desc: "Create cool names for your items!",
        tool5_btn: "Generate",
        tool5_result: name => `Name: §l${name}`,

        tool6_title: "💥 Creeper Farm Calculator",
        tool6_desc: "How many creepers to kill for N gunpowder?",
        tool6_btn: "Calculate",
        tool6_result: creepers => `Need to kill ~${creepers} creepers`,

        tool7_title: "🌱 Random Seed Generator",
        tool7_desc: "Get a random seed for a new world.",
        tool7_btn: "Generate",
        tool7_result: seed => `Seed: ${seed}`,

        tool8_title: "🛡️ Armor Durability Calculator",
        tool8_desc: "How many hits will your armor withstand?",
        tool8_btn: "Calculate",
        tool8_result: (hits, damage) => `Withstands ~${hits} hits of ${damage} damage`,

        // Бот
        bot_placeholder: "E.g.: How to build a Nether portal?",
        bot_send: "Send",
        bot_examples: "💡 Example questions:",
        bot_answers: {
            diamonds: "⚡ Diamonds spawn at levels 1-15. Best to mine at Y=-58 with Fortune III. Use iron pickaxe or better!",
            portal: "🔥 Nether portal requires 10-14 obsidian blocks in 4x5 door shape (no corners). Light the inside with flint and steel!",
            xp: "🌟 Best XP farm: Hoglins in Nether or Creepers/Skeletons in Overworld. Don’t forget Power enchantment on bow!",
            world: "🌍 World generates up to X/Z ±30,000,000, but stable only to ±2,999,984. Beyond that — bugs and lags.",
            enchant: "✨ Use enchanting table with 15 bookshelves around. Level 30 gives best enchants. Or combine items on anvil!",
            default: "Hmm... I’m still learning. Try rephrasing or check F.A.Q. 😊"
        },

        // Язык
        langName: "English",
        flag: "🇺🇸"
    },
    ru: {
        // Главная страница
        title: "Minecraft Tools Hub — Инструменты для строителей и исследователей",
        metaDescription: "Лучшие инструменты для Minecraft: калькуляторы, генераторы, конвертеры. Помогут в строительстве, фарме, исследовании мира и не только!",
        headerSubtitle: "Все необходимые инструменты для твоего приключения в Minecraft",
        footerText: "© 2025 Minecraft Tools Hub — Все инструменты для настоящих строителей и исследователей! Создано с ❤️ для игроков Minecraft",

        // Навигация
        navHome: "Главная",
        navFAQ: "F.A.Q.",
        navBot: "Бот-помощник",
        navTOS: "Условия использования",
        navPrivacy: "Политика конфиденциальности",

        // Инструменты
        tool1_title: "🏠 Калькулятор блоков для дома",
        tool1_desc: "Рассчитай, сколько блоков нужно для постройки дома.",
        tool1_btn: "Рассчитать",
        tool1_result: blocks => `Всего блоков: ${Math.ceil(blocks)}`,

        tool2_title: "🌍 Генератор случайных координат",
        tool2_desc: "Получи случайные координаты для телепортации.",
        tool2_btn: "Сгенерировать",
        tool2_result: (x, y, z) => `Телепортируйся: /tp @s ${x} ${y} ${z}`,

        tool3_title: "⏳ Конвертер игрового времени",
        tool3_desc: "Конвертируй минуты в игровые дни и обратно.",
        tool3_btn: "Конвертировать",
        tool3_result: mins => `${mins} мин = ${(mins / 20).toFixed(2)} игровых дней`,

        tool4_title: "✨ Калькулятор опыта",
        tool4_desc: "Сколько уровней даст тебе N опыта?",
        tool4_btn: "Рассчитать",
        tool4_result: (level, remaining) => `Уровень: ${level} (остаток: ${remaining} опыта)`,

        tool5_title: "🏷️ Генератор названий предметов",
        tool5_desc: "Создай крутые названия для своих предметов!",
        tool5_btn: "Сгенерировать",
        tool5_result: name => `Название: §l${name}`,

        tool6_title: "💥 Калькулятор фермы криперов",
        tool6_desc: "Сколько криперов нужно убить для N пороха?",
        tool6_btn: "Рассчитать",
        tool6_result: creepers => `Нужно убить ~${creepers} криперов`,

        tool7_title: "🌱 Генератор случайного seed",
        tool7_desc: "Получи случайный seed для нового мира.",
        tool7_btn: "Сгенерировать",
        tool7_result: seed => `Seed: ${seed}`,

        tool8_title: "🛡️ Калькулятор прочности брони",
        tool8_desc: "Сколько ударов выдержит броня?",
        tool8_btn: "Рассчитать",
        tool8_result: (hits, damage) => `Выдержит ~${hits} ударов по ${damage} урона`,

        // Бот
        bot_placeholder: "Например: Как построить портал в Нижний мир?",
        bot_send: "Отправить вопрос",
        bot_examples: "💡 Примеры вопросов:",
        bot_answers: {
            diamonds: "⚡ Алмазы находятся на уровнях 1-15. Лучше всего копать на Y=-58 с удачей III. Используй железную кирку или лучше!",
            portal: "🔥 Портал в Нижний мир строится из 10-14 блоков обсидиана в форме двери 4x5 (без углов). Зажги середину зажигалкой!",
            xp: "🌟 Лучшая ферма опыта — с зоглинами в Нижнем мире или с криперами/скелетами в обычном мире. Не забудь магию 'Точность' на луке!",
            world: "🌍 Карта генерируется до X/Z ±30,000,000, но стабильно работает до ±2,999,984. Дальше — баги и лаги.",
            enchant: "✨ Используй стол зачарования с 15 книжными шкафами вокруг. Уровень 30 даёт лучшие чары. Или комбинируй предметы на наковальне!",
            default: "Хм... Я ещё учусь. Попробуй переформулировать или посмотри F.A.Q. 😊"
        },

        // Язык
        langName: "Русский",
        flag: "🇷🇺"
    }
};

// 🌐 Функция установки языка БЕЗ перезагрузки + анимация + SEO
function setLanguage(lang) {
    if (!['en', 'ru'].includes(lang)) return;

    // Сохраняем в localStorage
    localStorage.setItem('language', lang);

    // Обновляем URL без перезагрузки
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', lang);
    window.history.pushState({ lang }, '', newUrl);

    // Анимация fade-out
    document.body.classList.add('language-fade');
    setTimeout(() => {
        applyTranslations(lang);
        updateSEOTags(lang);
        updateLanguageUI(lang);
        document.body.classList.remove('language-fade');
    }, 300);

    // Скрываем дропдаун
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

// 🌐 Обновление SEO-тегов
function updateSEOTags(lang) {
    const t = translations[lang];

    // Title
    document.title = t.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = t.metaDescription;

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = t.title;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = t.metaDescription;

    // Twitter
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.content = t.title;

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.content = t.metaDescription;
}

// 🌐 Обновление UI языка
function updateLanguageUI(lang) {
    const t = translations[lang];
    const flagSpan = document.getElementById('current-flag');
    const langSpan = document.getElementById('current-lang');

    if (flagSpan) {
        if (lang === 'en') {
            flagSpan.innerHTML = '<svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><rect width="20" height="15"/></clipPath></defs><g clip-path="url(#a)"><rect width="20" height="15" fill="#00247D"/><path d="M0 0h20v15H0z" fill="#00247D"/><path d="M0 0v15l8-6.5L0 2z" fill="#CF142B"/><path d="M20 0v15l-8-6.5L20 2z" fill="#CF142B"/><path d="M0 0h20v2H0z" fill="#fff"/><path d="M0 13h20v2H0z" fill="#fff"/><path d="M0 6h20v3H0z" fill="#fff"/><path d="M8 0h2v15H8z" fill="#fff"/><path d="M10 0l-8 6.5V2L10 8z" fill="#CF142B"/><path d="M10 15l8-6.5V13L10 7z" fill="#CF142B"/></g></svg>';
        } else {
            flagSpan.innerHTML = '<svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="5" y="0" fill="#fff"/><rect width="20" height="5" y="5" fill="#0033A0"/><rect width="20" height="5" y="10" fill="#D52B1E"/></svg>';
        }
    }

    if (langSpan) langSpan.textContent = t.langName;
}

// 🌐 Применяем переводы
function applyTranslations(lang) {
    const t = translations[lang];

    // Header
    const headerP = document.querySelector('header p');
    if (headerP) headerP.textContent = t.headerSubtitle;

    // Footer
    const footerP = document.querySelectorAll('footer p');
    if (footerP[1]) footerP[1].innerHTML = t.footerText;

    // Navigation
    const navLinks = document.querySelectorAll('footer a');
    if (navLinks[0]) navLinks[0].textContent = t.navHome;
    if (navLinks[1]) navLinks[1].textContent = t.navFAQ;
    if (navLinks[2]) navLinks[2].textContent = t.navBot;
    if (navLinks[3]) navLinks[3].textContent = t.navTOS;
    if (navLinks[4]) navLinks[4].textContent = t.navPrivacy;

    // Tools
    const toolCards = document.querySelectorAll('.tool-card');
    if (toolCards[0]) {
        toolCards[0].querySelector('h3').textContent = t.tool1_title;
        toolCards[0].querySelector('p').textContent = t.tool1_desc;
        toolCards[0].querySelector('button').textContent = t.tool1_btn;
    }
    if (toolCards[1]) {
        toolCards[1].querySelector('h3').textContent = t.tool2_title;
        toolCards[1].querySelector('p').textContent = t.tool2_desc;
        toolCards[1].querySelector('button').textContent = t.tool2_btn;
    }
    if (toolCards[2]) {
        toolCards[2].querySelector('h3').textContent = t.tool3_title;
        toolCards[2].querySelector('p').textContent = t.tool3_desc;
        toolCards[2].querySelector('button').textContent = t.tool3_btn;
    }
    if (toolCards[3]) {
        toolCards[3].querySelector('h3').textContent = t.tool4_title;
        toolCards[3].querySelector('p').textContent = t.tool4_desc;
        toolCards[3].querySelector('button').textContent = t.tool4_btn;
    }
    if (toolCards[4]) {
        toolCards[4].querySelector('h3').textContent = t.tool5_title;
        toolCards[4].querySelector('p').textContent = t.tool5_desc;
        toolCards[4].querySelector('button').textContent = t.tool5_btn;
    }
    if (toolCards[5]) {
        toolCards[5].querySelector('h3').textContent = t.tool6_title;
        toolCards[5].querySelector('p').textContent = t.tool6_desc;
        toolCards[5].querySelector('button').textContent = t.tool6_btn;
    }
    if (toolCards[6]) {
        toolCards[6].querySelector('h3').textContent = t.tool7_title;
        toolCards[6].querySelector('p').textContent = t.tool7_desc;
        toolCards[6].querySelector('button').textContent = t.tool7_btn;
    }
    if (toolCards[7]) {
        toolCards[7].querySelector('h3').textContent = t.tool8_title;
        toolCards[7].querySelector('p').textContent = t.tool8_desc;
        toolCards[7].querySelector('button').textContent = t.tool8_btn;
    }

    // Results (если уже есть)
    const results = [
        { id: 'result-blocks', key: 'tool1_result', args: [0] },
        { id: 'result-coords', key: 'tool2_result', args: [0,0,0] },
        { id: 'result-time', key: 'tool3_result', args: [0] },
        { id: 'result-xp', key: 'tool4_result', args: [0,0] },
        { id: 'result-itemname', key: 'tool5_result', args: [''] },
        { id: 'result-creepers', key: 'tool6_result', args: [0] },
        { id: 'result-seed', key: 'tool7_result', args: [0] },
        { id: 'result-armor', key: 'tool8_result', args: [0,0] }
    ];

    results.forEach(r => {
        const el = document.getElementById(r.id);
        if (el && el.style.display !== 'none') {
            el.textContent = '';
        }
    });

    // Для страницы бота
    if (window.location.pathname.includes('bot.html')) {
        const input = document.getElementById('user-question');
        if (input) input.placeholder = t.bot_placeholder;
        const btn = document.querySelector('button[onclick="askBot()"]');
        if (btn) btn.textContent = t.bot_send;
        const examplesTitle = document.querySelector('.tool-card h3');
        if (examplesTitle && examplesTitle.textContent.includes('💡')) {
            examplesTitle.textContent = t.bot_examples;
        }
    }
}

// 🌐 Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Обработчики дропдауна
    const toggleBtn = document.getElementById('lang-toggle');
    const dropdown = document.getElementById('lang-dropdown');

    if (toggleBtn && dropdown) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target) && e.target !== toggleBtn) {
                dropdown.style.display = 'none';
            }
        });
    }

    // Определяем язык
    const urlParams = new URLSearchParams(window.location.search);
    const langFromURL = urlParams.get('lang');
    const langFromStorage = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';

    let lang = langFromURL || langFromStorage || browserLang;
    if (!['en', 'ru'].includes(lang)) lang = 'ru';

    localStorage.setItem('language', lang);
    updateLanguageUI(lang);
    applyTranslations(lang);
    updateSEOTags(lang);

    // Для страницы бота
    if (window.location.pathname.includes('bot.html')) {
        const input = document.getElementById('user-question');
        if (input) input.placeholder = translations[lang].bot_placeholder;
        const btn = document.querySelector('button[onclick="askBot()"]');
        if (btn) btn.textContent = translations[lang].bot_send;
    }
});

// 🤖 Бот-помощник
function askBot() {
    const lang = localStorage.getItem('language') || 'ru';
    const t = translations[lang];
    const question = document.getElementById('user-question')?.value.trim().toLowerCase();
    const answerDiv = document.getElementById('bot-answer');
    if (!answerDiv) return;

    let answer = t.bot_answers.default;

    if (question?.includes("алмаз") || question?.includes("diamond")) {
        answer = t.bot_answers.diamonds;
    } else if (question?.includes("портал") || question?.includes("portal") || question?.includes("нижний мир") || question?.includes("nether")) {
        answer = t.bot_answers.portal;
    } else if (question?.includes("опыт") || question?.includes("xp") || question?.includes("ферма") || question?.includes("farm")) {
        answer = t.bot_answers.xp;
    } else if (question?.includes("кра") || question?.includes("world") || question?.includes("мир") || question?.includes("edge")) {
        answer = t.bot_answers.world;
    } else if (question?.includes("зачар") || question?.includes("enchant") || question?.includes("чар")) {
        answer = t.bot_answers.enchant;
    }

    answerDiv.style.display = 'block';
    answerDiv.textContent = answer;
}

// 🏠 1. Калькулятор блоков для дома
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
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool1_result(total);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Please enter all values.' : 'Пожалуйста, введите все значения.');
    }
}

// 🌍 2. Генератор координат
function generateCoords() {
    const x = Math.floor(Math.random() * 2000 - 1000);
    const z = Math.floor(Math.random() * 2000 - 1000);
    const y = 64 + Math.floor(Math.random() * 100);

    const resultDiv = document.getElementById('result-coords');
    resultDiv.style.display = 'block';
    const lang = localStorage.getItem('language') || 'ru';
    resultDiv.textContent = translations[lang].tool2_result(x, y, z);
}

// ⏳ 3. Конвертер игрового времени
function convertGameTime() {
    const mins = parseFloat(document.getElementById('game-minutes').value);
    if (!isNaN(mins)) {
        const resultDiv = document.getElementById('result-time');
        resultDiv.style.display = 'block';
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool3_result(mins);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter minutes.' : 'Введите число минут.');
    }
}

// ✨ 4. Калькулятор опыта
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
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool4_result(level, remaining);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter valid XP.' : 'Введите корректное количество опыта.');
    }
}

// 🏷️ 5. Генератор названий предметов
function generateItemName() {
    const lang = localStorage.getItem('language') || 'ru';
    const prefixes = lang === 'ru' 
        ? ['Легендарный', 'Проклятый', 'Сияющий', 'Темный', 'Вечный', 'Огненный', 'Ледяной']
        : ['Legendary', 'Cursed', 'Shining', 'Dark', 'Eternal', 'Fiery', 'Frosty'];
    const suffixes = lang === 'ru'
        ? ['Меча', 'Посоха', 'Щита', 'Лука', 'Кирки', 'Шлема', 'Амулета']
        : ['Sword', 'Staff', 'Shield', 'Bow', 'Pickaxe', 'Helmet', 'Amulet'];

    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const name = `${prefix} ${suffix}`;

    const resultDiv = document.getElementById('result-itemname');
    resultDiv.style.display = 'block';
    resultDiv.textContent = translations[lang].tool5_result(name);
}

// 💥 6. Калькулятор фермы криперов
function calculateCreepers() {
    const needed = parseInt(document.getElementById('gunpowder-needed').value);
    if (!isNaN(needed) && needed > 0) {
        const creepers = Math.ceil(needed / 2);
        const resultDiv = document.getElementById('result-creepers');
        resultDiv.style.display = 'block';
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool6_result(creepers);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter gunpowder amount.' : 'Введите количество пороха.');
    }
}

// 🌱 7. Генератор seed
function generateSeed() {
    const seed = Math.floor(Math.random() * 9007199254740991) - 4503599627370495;
    const resultDiv = document.getElementById('result-seed');
    resultDiv.style.display = 'block';
    const lang = localStorage.getItem('language') || 'ru';
    resultDiv.textContent = translations[lang].tool7_result(seed);
}

// 🛡️ 8. Калькулятор прочности брони
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
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool8_result(hits, damage);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter damage per hit.' : 'Введите урон за удар.');
    }
}

// 🔧 ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ДЛЯ АДМИН-ПАНЕЛИ (добавьте в конец script.js)

// Делаем функции и данные доступными глобально
window.toolsData = [
    {
        id: 1,
        name: { ru: "Калькулятор блоков для дома", en: "House Blocks Calculator" },
        description: { 
            ru: "Рассчитай, сколько блоков нужно для постройки дома.", 
            en: "Calculate how many blocks you need to build a house." 
        },
        url: "#",
        icon: "🏠"
    },
    {
        id: 2, 
        name: { ru: "Генератор случайных координат", en: "Random Coordinates Generator" },
        description: { 
            ru: "Получи случайные координаты для телепортации.", 
            en: "Get random coordinates for teleportation." 
        },
        url: "#",
        icon: "🌍"
    },
    // ... остальные инструменты по аналогии
];

window.renderTools = function(lang = 'ru') {
    // Ваша функция отрисовки инструментов (если есть)
    console.log('Render tools function called');
};

window.currentLang = localStorage.getItem('language') || 'ru';

// Функции для админ-панели
window.enableAdmin = function() {
    document.getElementById('simple-admin').style.display = 'block';
    console.log('🔓 Админ-панель активирована через консоль');
    return 'Админка включена! Используй adminShowTools()';
};

window.disableAdmin = function() {
    document.getElementById('simple-admin').style.display = 'none';
    console.log('🔒 Админ-панель скрыта');
    return 'Админка выключена!';
};

window.adminShowTools = function() {
    const content = document.getElementById('admin-content');
    if (!content) return 'Админ-панель не найдена!';
    
    content.innerHTML = '<h4>Доступные инструменты:</h4>' + 
        JSON.stringify(window.toolsData, null, 2)
            .replace(/\n/g, '<br>')
            .replace(/ /g, '&nbsp;');
    return 'Данные инструментов показаны';
};

window.adminEditTool = function(toolId, lang, field, newValue) {
    const tool = window.toolsData.find(t => t.id === toolId);
    if (tool) {
        tool[field][lang] = newValue;
        console.log(`✅ Инструмент ${toolId} обновлен:`, tool);
        return `Значение обновлено: ${newValue}`;
    }
    return 'Инструмент не найден';
};

// Автоматическое включение админки если в localStorage
if (localStorage.getItem('adminConsoleMode') === 'true') {
    setTimeout(() => {
        if (typeof enableAdmin === 'function') enableAdmin();
    }, 1000);
}

console.log('🔧 Админ-функции загружены. Используй в консоли:');
console.log('enableAdmin() - показать панель');
console.log('adminShowTools() - показать данные инструментов');
console.log('adminEditTool(1, "ru", "name", "Новое название") - редактировать');
