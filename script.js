// 🌐 Система мультиязычности с анимацией, SVG-флагами и SEO
const translations = {
    en: {
        title: "Minecraft Tools Hub — Tools for Builders & Explorers",
        metaDescription: "Best Minecraft tools: calculators, generators, converters. Helps with building, farming, exploring and more!",
        headerSubtitle: "All the tools you need for your Minecraft adventure",
        footerText: "© 2025 Minecraft Tools Hub — All tools for true builders and explorers! Made with ❤️ for Minecraft players",

        navHome: "Home",
        navFAQ: "F.A.Q.",
        navBot: "Helper Bot",
        navTOS: "Terms of Service",
        navPrivacy: "Privacy Policy",
        navRedstone: "Redstone Calculator",
        navEnchant: "Enchant Optimizer",
        navBiome: "Biome Finder",

        // Existing tools (1–8)
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

        // NEW: Redstone
        redstone_title: "⚡ Redstone Calculator",
        redstone_subtitle: "Calculate chain length, delay, and repeater count.",
        redstone_tool_title: "🔁 Repeater Calculator",
        redstone_tool_desc: "How many repeaters for a chain of N blocks?",
        redstone_btn: "Calculate",
        redstone_result: (repeaters, delay) => `Repeaters: ${repeaters} (delay: ${delay.toFixed(1)}s)`,

        // NEW: Enchant
        enchant_title: "✨ Enchant Optimizer",
        enchant_subtitle: "What's the best enchant at level N?",
        enchant_tool_title: "📚 Best Enchantment",
        enchant_btn: "Suggest",
        enchant_result: enchant => `Best enchant: ${enchant}`,

        // NEW: Biome
        biome_title: "🌳 Biome Finder",
        biome_subtitle: "Where to find the biome you need?",
        biome_tool_title: "🗺️ Find Biome",
        biome_btn: "Find",
        biome_result: {
            nether: "Enter the Nether via a portal (4x5 obsidian frame).",
            end: "Find a Stronghold, activate End Portal with 12 Eyes of Ender.",
            jungle: "Look near rivers or oceans in warm climates. Use /locate biome minecraft:jungle",
            desert: "Common in dry areas. Use /locate biome minecraft:desert",
            mushroom: "Rare! Found on small islands in oceans. Use /locate biome minecraft:mushroom_fields"
        },

        // Bot
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

        langName: "English",
        flag: "🇺🇸"
    },
    ru: {
        title: "Minecraft Tools Hub — Инструменты для строителей и исследователей",
        metaDescription: "Лучшие инструменты для Minecraft: калькуляторы, генераторы, конвертеры. Помогут в строительстве, фарме, исследовании мира и не только!",
        headerSubtitle: "Все необходимые инструменты для твоего приключения в Minecraft",
        footerText: "© 2025 Minecraft Tools Hub — Все инструменты для настоящих строителей и исследователей! Создано с ❤️ для игроков Minecraft",

        navHome: "Главная",
        navFAQ: "F.A.Q.",
        navBot: "Бот-помощник",
        navTOS: "Условия использования",
        navPrivacy: "Политика конфиденциальности",
        navRedstone: "Редстоун-калькулятор",
        navEnchant: "Оптимизатор зачарований",
        navBiome: "Поиск биомов",

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

        // NEW
        redstone_title: "⚡ Калькулятор редстоуна",
        redstone_subtitle: "Рассчитай длину цепи, задержку и количество повторителей.",
        redstone_tool_title: "🔁 Расчёт повторителей",
        redstone_tool_desc: "Сколько повторителей нужно для цепи длиной N блоков?",
        redstone_btn: "Рассчитать",
        redstone_result: (repeaters, delay) => `Повторителей: ${repeaters} (задержка: ${delay.toFixed(1)}с)`,

        enchant_title: "✨ Оптимизатор зачарований",
        enchant_subtitle: "Какое зачарование получить на уровне N?",
        enchant_tool_title: "📚 Лучшее зачарование",
        enchant_btn: "Посоветовать",
        enchant_result: enchant => `Лучшее зачарование: ${enchant}`,

        biome_title: "🌳 Поиск биомов",
        biome_subtitle: "Где найти нужный биом? Советы и координаты.",
        biome_tool_title: "🗺️ Найти биом",
        biome_btn: "Найти",
        biome_result: {
            nether: "Построй портал из обсидиана (4x5) и зажги его.",
            end: "Найди крепость, активируй портал Края 12 глазами Края.",
            jungle: "Ищи рядом с реками в тёплых регионах. Команда: /locate biome minecraft:jungle",
            desert: "Часто встречается в засушливых зонах. /locate biome minecraft:desert",
            mushroom: "Очень редкий! Только на островах в океане. /locate biome minecraft:mushroom_fields"
        },

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

        langName: "Русский",
        flag: "🇷🇺"
    },

    // === НОВЫЕ ЯЗЫКИ (минимум — базовые переводы) ===
    zh: { langName: "中文", flag: "🇨🇳", title: "Minecraft 工具中心", headerSubtitle: "你冒险所需的一切工具", navHome: "主页", navFAQ: "常见问题", navBot: "助手机器人", navTOS: "使用条款", navPrivacy: "隐私政策", navRedstone: "红石计算器", navEnchant: "附魔优化器", navBiome: "生物群系查找器", bot_placeholder: "例如：如何建造下界传送门？", bot_send: "发送", redstone_btn: "计算", enchant_btn: "建议", biome_btn: "查找", tool1_btn: "计算", tool2_btn: "生成", tool3_btn: "转换", tool4_btn: "计算", tool5_btn: "生成", tool6_btn: "计算", tool7_btn: "生成", tool8_btn: "计算" },
    es: { langName: "Español", flag: "🇪🇸", title: "Minecraft Tools Hub", headerSubtitle: "Todas las herramientas para tu aventura", navHome: "Inicio", navFAQ: "Preguntas frecuentes", navBot: "Bot asistente", navTOS: "Términos", navPrivacy: "Privacidad", navRedstone: "Calculadora de Redstone", navEnchant: "Optimizador de encantamientos", navBiome: "Buscador de biomas", bot_placeholder: "Ej: ¿Cómo construir un portal al Nether?", bot_send: "Enviar", redstone_btn: "Calcular", enchant_btn: "Sugerir", biome_btn: "Buscar", tool1_btn: "Calcular", tool2_btn: "Generar", tool3_btn: "Convertir", tool4_btn: "Calcular", tool5_btn: "Generar", tool6_btn: "Calcular", tool7_btn: "Generar", tool8_btn: "Calcular" },
    hi: { langName: "हिन्दी", flag: "🇮🇳", title: "Minecraft टूल्स हब", headerSubtitle: "आपके Minecraft साहसिक कार्य के लिए सभी उपकरण", navHome: "मुख्य", navFAQ: "अक्सर पूछे जाने वाले प्रश्न", navBot: "सहायक बॉट", navTOS: "उपयोग की शर्तें", navPrivacy: "गोपनीयता नीति", navRedstone: "रेडस्टोन कैलकुलेटर", navEnchant: "एन्चांट ऑप्टिमाइज़र", navBiome: "बायोम खोजकर्ता", bot_placeholder: "उदा.: नेदर पोर्टल कैसे बनाएं?", bot_send: "भेजें", redstone_btn: "गणना करें", enchant_btn: "सुझाव दें", biome_btn: "खोजें", tool1_btn: "गणना करें", tool2_btn: "उत्पन्न करें", tool3_btn: "परिवर्तित करें", tool4_btn: "गणना करें", tool5_btn: "उत्पन्न करें", tool6_btn: "गणना करें", tool7_btn: "उत्पन्न करें", tool8_btn: "गणना करें" },
    bn: { langName: "বাংলা", flag: "🇧🇩", title: "Minecraft টুলস হাব", headerSubtitle: "আপনার Minecraft অ্যাডভেঞ্চারের জন্য সমস্ত টুল", navHome: "হোম", navFAQ: "প্রায়শই জিজ্ঞাসিত প্রশ্ন", navBot: "সহায়ক বট", navTOS: "শর্তাবলী", navPrivacy: "গোপনীয়তা নীতি", navRedstone: "রেডস্টোন ক্যালকুলেটর", navEnchant: "এনচান্ট অপ্টিমাইজার", navBiome: "বায়োম ফাইন্ডার", bot_placeholder: "যেমন: নেদার পোর্টাল কীভাবে তৈরি করবেন?", bot_send: "পাঠান", redstone_btn: "গণনা করুন", enchant_btn: "পরামর্শ দিন", biome_btn: "খুঁজুন", tool1_btn: "গণনা করুন", tool2_btn: "জেনারেট করুন", tool3_btn: "রূপান্তর করুন", tool4_btn: "গণনা করুন", tool5_btn: "জেনারেট করুন", tool6_btn: "গণনা করুন", tool7_btn: "জেনারেট করুন", tool8_btn: "গণনা করুন" },
    pt: { langName: "Português", flag: "🇵🇹", title: "Minecraft Tools Hub", headerSubtitle: "Todas as ferramentas para sua aventura", navHome: "Início", navFAQ: "Perguntas Frequentes", navBot: "Bot Assistente", navTOS: "Termos de Serviço", navPrivacy: "Política de Privacidade", navRedstone: "Calculadora de Redstone", navEnchant: "Otimizador de Encantamentos", navBiome: "Localizador de Biomas", bot_placeholder: "Ex: Como construir um portal do Nether?", bot_send: "Enviar", redstone_btn: "Calcular", enchant_btn: "Sugerir", biome_btn: "Localizar", tool1_btn: "Calcular", tool2_btn: "Gerar", tool3_btn: "Converter", tool4_btn: "Calcular", tool5_btn: "Gerar", tool6_btn: "Calcular", tool7_btn: "Gerar", tool8_btn: "Calcular" },
    ur: { langName: "اردو", flag: "🇵🇰", title: "Minecraft ٹولز ہب", headerSubtitle: "آپ کے Minecraft سفر کے لیے تمام ٹولز", navHome: "ہوم", navFAQ: "اکثر پوچھے گئے سوالات", navBot: "معاون بوٹ", navTOS: "استعمال کی شرائط", navPrivacy: "رازداری کی پالیسی", navRedstone: "ریڈ اسٹون کیلکولیٹر", navEnchant: "جانچ کا بہترین طریقہ", navBiome: "بائیوم تلاش کرنے والا", bot_placeholder: "مثال: نیدر پورٹل کیسے بنائیں؟", bot_send: "بھیجیں", redstone_btn: "حساب کریں", enchant_btn: "تجویز کریں", biome_btn: "تلاش کریں", tool1_btn: "حساب کریں", tool2_btn: "تیار کریں", tool3_btn: "تبدیل کریں", tool4_btn: "حساب کریں", tool5_btn: "تیار کریں", tool6_btn: "حساب کریں", tool7_btn: "تیار کریں", tool8_btn: "حساب کریں" }
};

// 🌐 Функция установки языка
function setLanguage(lang) {
    if (!Object.keys(translations).includes(lang)) return;
    localStorage.setItem('language', lang);
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('lang', lang);
    window.history.pushState({ lang }, '', newUrl);
    document.body.classList.add('language-fade');
    setTimeout(() => {
        applyTranslations(lang);
        updateSEOTags(lang);
        updateLanguageUI(lang);
        document.body.classList.remove('language-fade');
    }, 300);
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.style.display = 'none';
}

// 🌐 Обновление SEO
function updateSEOTags(lang) {
    const t = translations[lang];
    document.title = t.title;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = t.metaDescription || t.headerSubtitle;
}

// 🌐 UI языка
function updateLanguageUI(lang) {
    const t = translations[lang];
    const flagSpan = document.getElementById('current-flag');
    const langSpan = document.getElementById('current-lang');
    if (flagSpan) {
        if (lang === 'en') flagSpan.innerHTML = '<svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><rect width="20" height="15"/></clipPath></defs><g clip-path="url(#a)"><rect width="20" height="15" fill="#00247D"/><path d="M0 0h20v15H0z" fill="#00247D"/><path d="M0 0v15l8-6.5L0 2z" fill="#CF142B"/><path d="M20 0v15l-8-6.5L20 2z" fill="#CF142B"/><path d="M0 0h20v2H0z" fill="#fff"/><path d="M0 13h20v2H0z" fill="#fff"/><path d="M0 6h20v3H0z" fill="#fff"/><path d="M8 0h2v15H8z" fill="#fff"/><path d="M10 0l-8 6.5V2L10 8z" fill="#CF142B"/><path d="M10 15l8-6.5V13L10 7z" fill="#CF142B"/></g></svg>';
        else if (lang === 'ru') flagSpan.innerHTML = '<svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="5" y="0" fill="#fff"/><rect width="20" height="5" y="5" fill="#0033A0"/><rect width="20" height="5" y="10" fill="#D52B1E"/></svg>';
        else flagSpan.textContent = t.flag || '';
    }
    if (langSpan) langSpan.textContent = t.langName;
}

// 🌐 Применяем переводы — УНИВЕРСАЛЬНО ДЛЯ ВСЕХ СТРАНИЦ
function applyTranslations(lang) {
    const t = translations[lang];

    // Header
    const headerH1 = document.querySelector('header h1');
    const headerP = document.querySelector('header p');
    if (headerH1 && headerH1.textContent.includes('Redstone')) headerH1.textContent = t.redstone_title;
    else if (headerH1 && headerH1.textContent.includes('Enchant')) headerH1.textContent = t.enchant_title;
    else if (headerH1 && headerH1.textContent.includes('Biome')) headerH1.textContent = t.biome_title;
    if (headerP) {
        if (window.location.pathname.includes('redstone.html')) headerP.textContent = t.redstone_subtitle;
        else if (window.location.pathname.includes('enchant.html')) headerP.textContent = t.enchant_subtitle;
        else if (window.location.pathname.includes('biome.html')) headerP.textContent = t.biome_subtitle;
        else headerP.textContent = t.headerSubtitle;
    }

    // Footer
    const footerP = document.querySelectorAll('footer p');
    if (footerP[1]) footerP[1].innerHTML = t.footerText || footerP[1].innerHTML;

    // Footer links
    const navLinks = document.querySelectorAll('footer a');
    if (navLinks[0]) navLinks[0].textContent = t.navHome;
    if (navLinks[1]) navLinks[1].textContent = t.navFAQ;
    if (navLinks[2]) navLinks[2].textContent = t.navBot;
    if (navLinks[3]) navLinks[3].textContent = t.navTOS;
    if (navLinks[4]) navLinks[4].textContent = t.navPrivacy;

    // Tool cards — универсально
    const toolCards = document.querySelectorAll('.tool-card');
    if (toolCards.length > 0) {
        const page = window.location.pathname;
        if (page.includes('redstone.html') && toolCards[0]) {
            toolCards[0].querySelector('h3').textContent = t.redstone_tool_title;
            toolCards[0].querySelector('p').textContent = t.redstone_tool_desc;
            toolCards[0].querySelector('button').textContent = t.redstone_btn;
        } else if (page.includes('enchant.html') && toolCards[0]) {
            toolCards[0].querySelector('h3').textContent = t.enchant_tool_title;
            toolCards[0].querySelector('button').textContent = t.enchant_btn;
        } else if (page.includes('biome.html') && toolCards[0]) {
            toolCards[0].querySelector('h3').textContent = t.biome_tool_title;
            toolCards[0].querySelector('button').textContent = t.biome_btn;
        }
    }

    // Бот
    if (window.location.pathname.includes('bot.html')) {
        const input = document.getElementById('user-question');
        const btn = document.querySelector('button[onclick="askBot()"]');
        const examplesTitle = document.querySelector('.tool-card h3');
        if (input) input.placeholder = t.bot_placeholder;
        if (btn) btn.textContent = t.bot_send;
        if (examplesTitle && examplesTitle.textContent.includes('💡')) examplesTitle.textContent = t.bot_examples;
    }
}

// 🌐 Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Языковое меню
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

        // Заполняем дропдаун языками
        const langs = ['ru', 'en', 'zh', 'es', 'hi', 'bn', 'pt', 'ur'];
        langs.forEach(langCode => {
            const langData = translations[langCode];
            if (!langData) return;
            const div = document.createElement('div');
            div.style.padding = '10px';
            div.style.cursor = 'pointer';
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.gap = '8px';
            div.style.transition = 'background 0.2s';
            div.style.borderTop = dropdown.children.length ? '1px solid #2c3e50' : 'none';
            div.onmouseenter = () => div.style.background = '#3d566e';
            div.onmouseleave = () => div.style.background = 'transparent';
            div.onclick = () => setLanguage(langCode);
            div.innerHTML = `<span>${langData.flag || ''}</span> ${langData.langName}`;
            dropdown.appendChild(div);
        });
    }

    // Определяем язык
    const urlParams = new URLSearchParams(window.location.search);
    const langFromURL = urlParams.get('lang');
    const langFromStorage = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    let lang = langFromURL || langFromStorage || browserLang;
    if (!translations[lang]) lang = 'ru';
    localStorage.setItem('language', lang);
    updateLanguageUI(lang);
    applyTranslations(lang);
    updateSEOTags(lang);
});

// 🤖 Бот
function askBot() {
    const lang = localStorage.getItem('language') || 'ru';
    const t = translations[lang] || translations.ru;
    const question = document.getElementById('user-question')?.value.trim().toLowerCase();
    const answerDiv = document.getElementById('bot-answer');
    if (!answerDiv) return;
    let answer = t.bot_answers?.default || "I don't know.";
    if (question?.includes("алмаз") || question?.includes("diamond")) answer = t.bot_answers?.diamonds || answer;
    else if (question?.includes("портал") || question?.includes("portal") || question?.includes("nether")) answer = t.bot_answers?.portal || answer;
    else if (question?.includes("опыт") || question?.includes("xp") || question?.includes("ферма")) answer = t.bot_answers?.xp || answer;
    else if (question?.includes("кра") || question?.includes("world") || question?.includes("мир")) answer = t.bot_answers?.world || answer;
    else if (question?.includes("зачар") || question?.includes("enchant")) answer = t.bot_answers?.enchant || answer;
    answerDiv.style.display = 'block';
    answerDiv.textContent = answer;
}

// === СТАРЫЕ ФУНКЦИИ (1–8) — ОСТАВЛЕНЫ БЕЗ ИЗМЕНЕНИЙ ===
// ... (вставь сюда твой существующий код от calculateBlocks() до calculateArmorDurability()) ...
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

// === НОВЫЕ ФУНКЦИИ ===

function calculateRepeaters() {
    const len = parseInt(document.getElementById('redstone-length')?.value);
    const lang = localStorage.getItem('language') || 'ru';
    const t = translations[lang] || translations.ru;
    if (!isNaN(len) && len > 0) {
        const repeaters = Math.ceil(len / 15);
        const delay = repeaters * 0.1;
        const resultDiv = document.getElementById('result-repeaters');
        if (resultDiv) {
            resultDiv.style.display = 'block';
            resultDiv.textContent = t.redstone_result ? t.redstone_result(repeaters, delay) : `Repeaters: ${repeaters}`;
        }
    } else {
        alert(t.tool1_result ? (lang === 'en' ? 'Enter valid length.' : 'Введите корректную длину.') : 'Error');
    }
}

function suggestEnchant() {
    const item = document.getElementById('item-type')?.value;
    const level = parseInt(document.getElementById('enchant-level')?.value);
    const lang = localStorage.getItem('language') || 'ru';
    const t = translations[lang] || translations.ru;
    if (isNaN(level) || level < 1 || level > 30) {
        alert(lang === 'en' ? 'Enter level 1–30.' : 'Введите уровень от 1 до 30.');
        return;
    }
    let suggestion = '';
    if (lang === 'en') {
        if (item === 'sword') suggestion = level >= 25 ? 'Sharpness V or Smite V' : level >= 15 ? 'Sharpness IV' : 'Bane of Arthropods III';
        else if (item === 'bow') suggestion = level >= 25 ? 'Power V + Infinity' : level >= 15 ? 'Power IV' : 'Flame';
        else if (item === 'pickaxe') suggestion = level >= 25 ? 'Efficiency V + Fortune III' : level >= 15 ? 'Efficiency IV' : 'Unbreaking III';
        else if (item === 'armor') suggestion = level >= 25 ? 'Protection IV or Thorns III' : level >= 15 ? 'Protection III' : 'Blast Protection II';
    } else {
        if (item === 'sword') suggestion = level >= 25 ? 'Острота V или Небесная кара V' : level >= 15 ? 'Острота IV' : 'Бич членистоногих III';
        else if (item === 'bow') suggestion = level >= 25 ? 'Мощь V + Бесконечность' : level >= 15 ? 'Мощь IV' : 'Пламя';
        else if (item === 'pickaxe') suggestion = level >= 25 ? 'Эффективность V + Удача III' : level >= 15 ? 'Эффективность IV' : 'Прочность III';
        else if (item === 'armor') suggestion = level >= 25 ? 'Защита IV или Шипы III' : level >= 15 ? 'Защита III' : 'Взрывоустойчивость II';
    }
    const resultDiv = document.getElementById('result-enchant');
    if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = t.enchant_result ? t.enchant_result(suggestion) : suggestion;
    }
}

function findBiome() {
    const biome = document.getElementById('target-biome')?.value;
    const lang = localStorage.getItem('language') || 'ru';
    const t = translations[lang] || translations.ru;
    let tip = t.biome_result?.[biome] || (lang === 'en' ? 'Try another biome.' : 'Попробуй другой биом.');
    const resultDiv = document.getElementById('result-biome');
    if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = tip;
    }
}

// === БУРГЕР-МЕНЮ ===
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.style.display = 'none';
}
document.getElementById('menu-toggle')?.addEventListener('click', toggleSidebar);
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeSidebar();
});
// Показываем бургер на мобилках
if (window.innerWidth <= 768) {
    const toggle = document.getElementById('menu-toggle');
    if (toggle) toggle.style.display = 'block';
}
