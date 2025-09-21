// 🌐 Система мультиязычности
const translations = {
    en: {
        // Главная страница
        title: "Minecraft Tools Hub — Tools for Builders & Explorers",
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

        // FAQ
        faq_title: "❓ Frequently Asked Questions",
        faq_intro: "Here you'll find answers to the most popular questions",
        faq_q1: "🔹 What is this site?",
        faq_a1: "It’s a set of free tools for Minecraft players: calculators, generators, converters — everything to make gameplay easier.",
        faq_q2: "🔹 Is it safe to use?",
        faq_a2: "Absolutely! All calculations happen in your browser. We don’t collect or store your data.",
        faq_q3: "🔹 How do I bookmark the site?",
        faq_a3: "Press Ctrl+D (Cmd+D on Mac) or use browser menu → “Bookmark this page”.",
        faq_q4: "🔹 Is there a mobile version?",
        faq_a4: "Yes! The site is fully responsive — open it on your phone or tablet.",
        faq_q5: "🔹 Can I suggest a new tool?",
        faq_a5: "Of course! Write to us via the <a href=\"bot.html\" style=\"color:#1abc9c;\">Helper Bot</a> or email (if we add it later).",
        faq_q6: "🔹 Why are results sometimes rounded?",
        faq_a6: "To avoid fractional blocks or creepers 😉 All values are rounded up for safety margin.",

        // ToS
        tos_title: "📜 Terms of Service",
        tos_intro: "Please read carefully before using",
        tos_1_title: "1. General Terms",
        tos_1_text: "By using this site, you agree to these terms. Service is provided “as is”.",
        tos_2_title: "2. Liability",
        tos_2_text: "We are not responsible for damage caused by use or misuse of tools.",
        tos_3_title: "3. Privacy",
        tos_3_text: "We do not collect personal data. All calculations occur locally in your browser.",
        tos_4_title: "4. Copyright",
        tos_4_text: "Minecraft is a trademark of Mojang Studios. We are not affiliated with Mojang or Microsoft. This is a fan site.",
        tos_5_title: "5. Changes",
        tos_5_text: "We may update these terms at any time. Please review periodically.",

        // Privacy
        privacy_title: "🔒 Privacy Policy",
        privacy_intro: "Your data is yours. We don’t touch it.",
        privacy_1_title: "🔸 No Data",
        privacy_1_text: "We don’t use cookies, analytics, or trackers. Nothing is sent to server — everything runs in your browser.",
        privacy_2_title: "🔸 Local Calculations",
        privacy_2_text: "All calculators and generators work locally. Your numbers, coordinates, seeds — no one sees them but you.",
        privacy_3_title: "🔸 Security",
        privacy_3_text: "Site requires no registration, stores no history, requests no access to your account or Minecraft world.",
        privacy_4_title: "🔸 Updates",
        privacy_4_text: "We may add new features, but will never collect your data without explicit consent (and we won’t ask for it 😉).",

        // Кнопка языка
        langToggle: "🌐 RU"
    },
    ru: {
        // Главная страница
        title: "Minecraft Tools Hub — Инструменты для строителей и исследователей",
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

        // FAQ
        faq_title: "❓ Часто задаваемые вопросы",
        faq_intro: "Здесь ты найдёшь ответы на самые популярные вопросы",
        faq_q1: "🔹 Что это за сайт?",
        faq_a1: "Это набор бесплатных инструментов для игроков Minecraft: калькуляторы, генераторы, конвертеры — всё, что упростит игру.",
        faq_q2: "🔹 Безопасно ли пользоваться?",
        faq_a2: "Абсолютно! Все расчёты происходят в твоём браузере. Мы не собираем и не храним твои данные.",
        faq_q3: "🔹 Как добавить сайт в закладки?",
        faq_a3: "Нажми Ctrl+D (Cmd+D на Mac) или используй меню браузера → «Добавить в закладки».",
        faq_q4: "🔹 Есть ли мобильная версия?",
        faq_a4: "Да! Сайт полностью адаптивный — открой его на телефоне или планшете.",
        faq_q5: "🔹 Можно ли предложить новый инструмент?",
        faq_a5: "Конечно! Напиши нам через <a href=\"bot.html\" style=\"color:#1abc9c;\">бота-помощника</a> или на почту (если добавим позже).",
        faq_q6: "🔹 Почему результаты иногда округляются?",
        faq_a6: "Чтобы избежать дробных блоков или криперов 😉 Все значения округляются в большую сторону для запаса.",

        // ToS
        tos_title: "📜 Условия использования",
        tos_intro: "Пожалуйста, внимательно ознакомься с правилами",
        tos_1_title: "1. Общие положения",
        tos_1_text: "Используя этот сайт, ты соглашаешься с данными условиями. Сервис предоставляется «как есть».",
        tos_2_title: "2. Ответственность",
        tos_2_text: "Мы не несём ответственности за ущерб, вызванный использованием или неправильным применением инструментов.",
        tos_3_title: "3. Конфиденциальность",
        tos_3_text: "Мы не собираем личные данные. Все вычисления происходят локально в твоём браузере.",
        tos_4_title: "4. Авторские права",
        tos_4_text: "Minecraft — торговая марка Mojang Studios. Мы не связаны с Mojang или Microsoft. Это фан-сайт.",
        tos_5_title: "5. Изменения",
        tos_5_text: "Мы можем обновлять эти условия в любое время. Рекомендуем периодически перечитывать.",

        // Privacy
        privacy_title: "🔒 Политика конфиденциальности",
        privacy_intro: "Твои данные — только твои. Мы их не трогаем.",
        privacy_1_title: "🔸 Никаких данных",
        privacy_1_text: "Мы не используем cookies, аналитику, трекеры. Ничего не отправляется на сервер — всё работает в твоём браузере.",
        privacy_2_title: "🔸 Локальные вычисления",
        privacy_2_text: "Все калькуляторы и генераторы работают локально. Твои цифры, координаты, seeds — никто не видит, кроме тебя.",
        privacy_3_title: "🔸 Безопасность",
        privacy_3_text: "Сайт не требует регистрации, не хранит историю, не запрашивает доступ к твоему аккаунту или миру Minecraft.",
        privacy_4_title: "🔸 Обновления",
        privacy_4_text: "Мы можем добавлять новые функции, но никогда не будем собирать твои данные без явного согласия (а его и не будет запрашивать 😉).",

        // Кнопка языка
        langToggle: "🌐 EN"
    }
};

// 🌐 Определяем текущий язык
function getLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromURL = urlParams.get('lang');
    const langFromStorage = localStorage.getItem('language');
    const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';

    let lang = langFromURL || langFromStorage || browserLang;
    if (!['en', 'ru'].includes(lang)) lang = 'ru';

    localStorage.setItem('language', lang);
    if (langFromURL !== lang) {
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('lang', lang);
        window.history.replaceState({}, '', newUrl);
    }

    return lang;
}

// 🌐 Применяем переводы
function applyTranslations(lang) {
    const t = translations[lang];

    // Обновляем title
    document.title = t.title;

    // Обновляем header
    const headerP = document.querySelector('header p');
    if (headerP) headerP.textContent = t.headerSubtitle;

    // Обновляем footer
    const footerP = document.querySelectorAll('footer p');
    if (footerP[1]) footerP[1].innerHTML = t.footerText;

    // Обновляем навигацию
    const navLinks = document.querySelectorAll('footer a');
    if (navLinks[0]) navLinks[0].textContent = t.navHome;
    if (navLinks[1]) navLinks[1].textContent = t.navFAQ;
    if (navLinks[2]) navLinks[2].textContent = t.navBot;
    if (navLinks[3]) navLinks[3].textContent = t.navTOS;
    if (navLinks[4]) navLinks[4].textContent = t.navPrivacy;

    // Обновляем инструменты
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

    // Обновляем кнопку языка
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) langBtn.textContent = t.langToggle;

    // Для страниц FAQ, Bot, ToS, Privacy — можно добавить аналогично
    // (если нужно — расширим)
}

// 🌐 Переключение языка
function toggleLanguage() {
    const currentLang = getLanguage();
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', newLang);

    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', newLang);
    window.location.href = newUrl.toString();
}

// 🚀 Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguage();
    applyTranslations(lang);

    // Если страница — bot.html, обновим плейсхолдер
    if (window.location.pathname.includes('bot.html')) {
        const input = document.getElementById('user-question');
        if (input) {
            input.placeholder = translations[lang].bot_placeholder;
        }
        const btn = document.querySelector('button[onclick="askBot()"]');
        if (btn) {
            btn.textContent = translations[lang].bot_send;
        }
    }

    // Для FAQ, ToS, Privacy — можно добавить аналогично
});

// 🤖 Бот — обновлённый (работает на обоих языках)
function askBot() {
    const lang = getLanguage();
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

// ⚙️ Остальные функции (калькуляторы) — без изменений
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
        const lang = getLanguage();
        resultDiv.textContent = translations[lang].tool1_result(total);
    } else {
        alert('Please enter all values.' + (getLanguage() === 'ru' ? ' Пожалуйста, введите все значения.' : ''));
    }
}

function generateCoords() {
    const x = Math.floor(Math.random() * 2000 - 1000);
    const z = Math.floor(Math.random() * 2000 - 1000);
    const y = 64 + Math.floor(Math.random() * 100);

    const resultDiv = document.getElementById('result-coords');
    resultDiv.style.display = 'block';
    const lang = getLanguage();
    resultDiv.textContent = translations[lang].tool2_result(x, y, z);
}

function convertGameTime() {
    const mins = parseFloat(document.getElementById('game-minutes').value);
    if (!isNaN(mins)) {
        const resultDiv = document.getElementById('result-time');
        resultDiv.style.display = 'block';
        const lang = getLanguage();
        resultDiv.textContent = translations[lang].tool3_result(mins);
    } else {
        alert('Enter minutes.' + (getLanguage() === 'ru' ? ' Введите число минут.' : ''));
    }
}

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
        const lang = getLanguage();
        resultDiv.textContent = translations[lang].tool4_result(level, remaining);
    } else {
        alert('Enter valid XP.' + (getLanguage() === 'ru' ? ' Введите корректное количество опыта.' : ''));
    }
}

function generateItemName() {
    const lang = getLanguage();
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

function calculateCreepers() {
    const needed = parseInt(document.getElementById('gunpowder-needed').value);
    if (!isNaN(needed) && needed > 0) {
        const creepers = Math.ceil(needed / 2);
        const resultDiv = document.getElementById('result-creepers');
        resultDiv.style.display = 'block';
        const lang = getLanguage();
        resultDiv.textContent = translations[lang].tool6_result(creepers);
    } else {
        alert('Enter gunpowder amount.' + (getLanguage() === 'ru' ? ' Введите количество пороха.' : ''));
    }
}

function generateSeed() {
    const seed = Math.floor(Math.random() * 9007199254740991) - 4503599627370495;
    const resultDiv = document.getElementById('result-seed');
    resultDiv.style.display = 'block';
    const lang = getLanguage();
    resultDiv.textContent = translations[lang].tool7_result(seed);
}

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
        const lang = getLanguage();
        resultDiv.textContent = translations[lang].tool8_result(hits, damage);
    } else {
        alert('Enter damage per hit.' + (getLanguage() === 'ru' ? ' Введите урон за удар.' : ''));
    }
}

// 🌐 Функция смены языка через селект
function changeLanguage(lang) {
    localStorage.setItem('language', lang);

    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', lang);
    window.location.href = newUrl.toString();
}

// 🌐 Устанавливаем выбранный язык в селекте при загрузке
function initLanguageSelector() {
    const lang = getLanguage();
    const select = document.getElementById('language-select');
    if (select) {
        select.value = lang;
    }
}

// 🚀 Обновим инициализацию
document.addEventListener('DOMContentLoaded', () => {
    const lang = getLanguage();
    applyTranslations(lang);
    initLanguageSelector(); // <-- инициализируем селект

    // Если страница — bot.html, обновим плейсхолдер
    if (window.location.pathname.includes('bot.html')) {
        const input = document.getElementById('user-question');
        if (input) {
            input.placeholder = translations[lang].bot_placeholder;
        }
        const btn = document.querySelector('button[onclick="askBot()"]');
        if (btn) {
            btn.textContent = translations[lang].bot_send;
        }
    }
});
