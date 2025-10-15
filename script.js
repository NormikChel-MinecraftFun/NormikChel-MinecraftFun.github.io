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
        // Index Page Specific
        indexHeaderH1: "🛠️ Minecraft Tools Hub",
        indexHeaderP: "All the tools you need for your Minecraft adventure",
        indexFAQText: "F.A.Q.",
        indexBotText: "Helper Bot",
        indexTOSText: "Terms of Service",
        indexPrivacyText: "Privacy Policy",
        indexFooterSubtitle: "All tools for true builders and explorers!",
        indexFooterCreator: "Made with ❤️ for Minecraft players",
        // Tool Cards (1-8)
        tool1_title: "🏠 House Blocks Calculator",
        tool1_desc: "Calculate how many blocks you need to build a house.",
        tool1_input1: "Length (blocks)",
        tool1_input2: "Width (blocks)",
        tool1_input3: "Height (blocks)",
        tool1_btn: "Calculate",
        tool1_result: blocks => `Total blocks: ${Math.ceil(blocks)}`,
        tool2_title: "🌍 Random Coordinates Generator",
        tool2_desc: "Get random coordinates for teleportation.",
        tool2_btn: "Generate",
        tool2_result: (x, y, z) => `Teleport: /tp @s ${x} ${y} ${z}`,
        tool3_title: "⏳ Game Time Converter",
        tool3_desc: "Convert minutes to in-game days and vice versa.",
        tool3_input: "Minutes (in-game)",
        tool3_btn: "Convert",
        tool3_result: mins => `${mins} min = ${(mins / 20).toFixed(2)} in-game days`,
        tool4_title: "✨ XP Calculator",
        tool4_desc: "How many levels will N XP give you?",
        tool4_input: "XP Amount",
        tool4_btn: "Calculate",
        tool4_result: (level, remaining) => `Level: ${level} (remaining: ${remaining} XP)`,
        tool5_title: "🏷️ Item Name Generator",
        tool5_desc: "Create cool names for your items!",
        tool5_btn: "Generate",
        tool5_result: name => `Name: §l${name}`,
        tool6_title: "💥 Creeper Farm Calculator",
        tool6_desc: "How many creepers to kill for N gunpowder?",
        tool6_input: "Gunpowder Needed",
        tool6_btn: "Calculate",
        tool6_result: creepers => `Need to kill ~${creepers} creepers`,
        tool7_title: "🌱 Random Seed Generator",
        tool7_desc: "Get a random seed for a new world.",
        tool7_btn: "Generate",
        tool7_result: seed => `Seed: ${seed}`,
        tool8_title: "🛡️ Armor Durability Calculator",
        tool8_desc: "How many hits will your armor withstand?",
        tool8_select1: "Leather (55)",
        tool8_select2: "Iron (165)",
        tool8_select3: "Diamond (363)",
        tool8_select4: "Netherite (407)",
        tool8_input: "Damage Per Hit (e.g., 2)",
        tool8_btn: "Calculate",
        tool8_result: (hits, damage) => `Withstands ~${hits} hits of ${damage} damage`,
        // Documentation Card
        documentationTitle: "📚 Documentation",
        documentationDesc: "Detailed description of all tools and how to use them.",
        documentationBtn: "Go to Documentation",
        // Bot Page Specific
        botHeaderH1: "🤖 Helper Bot",
        botHeaderP: "Ask me any Minecraft question — I'll try to help!",
        botInputPlaceholder: "E.g.: How to build a Nether portal?",
        botBtn: "Send Question",
        botExampleTitle: "💡 Example questions:",
        botExample1: "How to get diamonds faster?",
        botExample2: "How many blocks to the world border?",
        botExample3: "How to enchant an item?",
        botExample4: "How to build an XP farm?",
        botAnswerDefault: "Hmm... I'm still learning. Try rephrasing or check F.A.Q. 😊",
        botAnswerDiamonds: "⚡ Diamonds spawn at levels 1-15. Best to mine at Y=-58 with Fortune III. Use iron pickaxe or better!",
        botAnswerPortal: "🔥 Nether portal requires 10-14 obsidian blocks in 4x5 door shape (no corners). Light the inside with flint and steel!",
        botAnswerXP: "🌟 Best XP farm: Hoglins in Nether or Creepers/Skeletons in Overworld. Don't forget Power enchantment on bow!",
        botAnswerWorld: "🌍 World generates up to X/Z ±30,000,000, but stable only to ±2,999,984. Beyond that — bugs and lags.",
        botAnswerEnchant: "✨ Use enchanting table with 15 bookshelves around. Level 30 gives best enchants. Or combine items on anvil!",
        // FAQ Page Specific
        faqHeaderH1: "❓ Frequently Asked Questions",
        faqHeaderP: "Here you'll find answers to the most popular questions",
        faqCard1H3: "🔹 What is this site?",
        faqCard1P: "This is a set of free tools for Minecraft players: calculators, generators, converters — everything that makes the game easier.",
        faqCard2H3: "🔹 Is it safe to use?",
        faqCard2P: "Absolutely! All calculations happen in your browser. We do not collect or store your data.",
        faqCard3H3: "🔹 How to add the site to bookmarks?",
        faqCard3P: "Press Ctrl+D (Cmd+D on Mac) or use the browser menu → 'Bookmark'.",
        faqCard4H3: "🔹 Is there a mobile version?",
        faqCard4P: "Yes! The site is fully responsive — open it on your phone or tablet.",
        faqCard5H3: "🔹 Can I suggest a new tool?",
        faqCard5P: "Sure! Write to us via the <a href='bot.html' style='color:#1abc9c;'>helper bot</a> or email (if we add it later).",
        faqCard6H3: "🔹 Why are results sometimes rounded?",
        faqCard6P: "To avoid fractional blocks or creepers 😉 All values are rounded up for safety.",
        // TOS Page Specific
        tosHeaderH1: "📜 Terms of Service",
        tosHeaderP: "Please read the rules carefully",
        tosCard1H3: "1. General Provisions",
        tosCard1P: "By using this site, you agree to these terms. The service is provided 'as is'.",
        tosCard2H3: "2. Liability",
        tosCard2P: "We are not responsible for damage caused by the use or misuse of the tools.",
        tosCard3H3: "3. Privacy",
        tosCard3P: "We do not collect personal data. All calculations are performed locally in your browser.",
        tosCard4H3: "4. Copyrights",
        tosCard4P: "Minecraft is a trademark of Mojang Studios. We are not affiliated with Mojang or Microsoft. This is a fan site.",
        tosCard5H3: "5. Changes",
        tosCard5P: "We may update these terms at any time. It is recommended to periodically re-read them.",
        // Privacy Page Specific
        privacyHeaderH1: "🔒 Privacy Policy",
        privacyHeaderP: "Your data is yours. We don't touch it.",
        privacyCard1H3: "🔸 No Data",
        privacyCard1P: "We do not use cookies, analytics, or trackers. Nothing is sent to the server — everything works in your browser.",
        privacyCard2H3: "🔸 Local Calculations",
        privacyCard2P: "All calculators and generators work locally. Your numbers, coordinates, seeds — no one sees them except you.",
        privacyCard3H3: "🔸 Security",
        privacyCard3P: "The site does not require registration, does not store history, and does not request access to your Minecraft account or world.",
        privacyCard4H3: "🔸 Updates",
        privacyCard4P: "We may add new features, but we will never collect your data without explicit consent (and we won't ask for it 😉).",
        // Language Switcher
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
        // Index Page Specific
        indexHeaderH1: "🛠️ Minecraft Tools Hub",
        indexHeaderP: "Все необходимые инструменты для твоего приключения в Minecraft",
        indexFAQText: "F.A.Q.",
        indexBotText: "Бот-помощник",
        indexTOSText: "Условия использования",
        indexPrivacyText: "Политика конфиденциальности",
        indexFooterSubtitle: "Все инструменты для настоящих строителей и исследователей!",
        indexFooterCreator: "Создано с ❤️ для игроков Minecraft",
        // Tool Cards (1-8)
        tool1_title: "🏠 Калькулятор блоков для дома",
        tool1_desc: "Рассчитай, сколько блоков нужно для постройки дома.",
        tool1_input1: "Длина (блоков)",
        tool1_input2: "Ширина (блоков)",
        tool1_input3: "Высота (блоков)",
        tool1_btn: "Рассчитать",
        tool1_result: blocks => `Всего блоков: ${Math.ceil(blocks)}`,
        tool2_title: "🌍 Генератор случайных координат",
        tool2_desc: "Получи случайные координаты для телепортации.",
        tool2_btn: "Сгенерировать",
        tool2_result: (x, y, z) => `Телепортируйся: /tp @s ${x} ${y} ${z}`,
        tool3_title: "⏳ Конвертер игрового времени",
        tool3_desc: "Конвертируй минуты в игровые дни и обратно.",
        tool3_input: "Минут (игровых)",
        tool3_btn: "Конвертировать",
        tool3_result: mins => `${mins} мин = ${(mins / 20).toFixed(2)} игровых дней`,
        tool4_title: "✨ Калькулятор опыта",
        tool4_desc: "Сколько уровней даст тебе N опыта?",
        tool4_input: "Количество опыта",
        tool4_btn: "Рассчитать",
        tool4_result: (level, remaining) => `Уровень: ${level} (остаток: ${remaining} опыта)`,
        tool5_title: "🏷️ Генератор названий предметов",
        tool5_desc: "Создай крутые названия для своих предметов!",
        tool5_btn: "Сгенерировать",
        tool5_result: name => `Название: §l${name}`,
        tool6_title: "💥 Калькулятор фермы криперов",
        tool6_desc: "Сколько криперов нужно убить для N пороха?",
        tool6_input: "Нужно пороха",
        tool6_btn: "Рассчитать",
        tool6_result: creepers => `Нужно убить ~${creepers} криперов`,
        tool7_title: "🌱 Генератор случайного seed",
        tool7_desc: "Получи случайный seed для нового мира.",
        tool7_btn: "Сгенерировать",
        tool7_result: seed => `Seed: ${seed}`,
        tool8_title: "🛡️ Калькулятор прочности брони",
        tool8_desc: "Сколько ударов выдержит броня?",
        tool8_select1: "Кожаная (55)",
        tool8_select2: "Железная (165)",
        tool8_select3: "Алмазная (363)",
        tool8_select4: "Незеритовая (407)",
        tool8_input: "Урон за удар (например, 2)",
        tool8_btn: "Рассчитать",
        tool8_result: (hits, damage) => `Выдержит ~${hits} ударов по ${damage} урона`,
        // Documentation Card
        documentationTitle: "📚 Документация",
        documentationDesc: "Подробное описание всех инструментов и как их использовать.",
        documentationBtn: "Перейти к документации",
        // Bot Page Specific
        botHeaderH1: "🤖 Бот-помощник",
        botHeaderP: "Задай мне любой вопрос по Minecraft — я постараюсь помочь!",
        botInputPlaceholder: "Например: Как построить портал в Нижний мир?",
        botBtn: "Отправить вопрос",
        botExampleTitle: "💡 Примеры вопросов:",
        botExample1: "Как получить алмазы быстрее?",
        botExample2: "Сколько блоков до края мира?",
        botExample3: "Как зачаровать предмет?",
        botExample4: "Как построить ферму опыта?",
        botAnswerDefault: "Хм... Я ещё учусь. Попробуй переформулировать или посмотри F.A.Q. 😊",
        botAnswerDiamonds: "⚡ Алмазы находятся на уровнях 1-15. Лучше всего копать на Y=-58 с удачей III. Используй железную кирку или лучше!",
        botAnswerPortal: "🔥 Портал в Нижний мир строится из 10-14 блоков обсидиана в форме двери 4x5 (без углов). Зажги середину зажигалкой!",
        botAnswerXP: "🌟 Лучшая ферма опыта — с зоглинами в Нижнем мире или с криперами/скелетами в обычном мире. Не забудь магию 'Точность' на луке!",
        botAnswerWorld: "🌍 Карта генерируется до X/Z ±30,000,000, но стабильно работает до ±2,999,984. Дальше — баги и лаги.",
        botAnswerEnchant: "✨ Используй стол зачарования с 15 книжными шкафами вокруг. Уровень 30 даёт лучшие чары. Или комбинируй предметы на наковальне!",
        // FAQ Page Specific
        faqHeaderH1: "❓ Часто задаваемые вопросы",
        faqHeaderP: "Здесь ты найдёшь ответы на самые популярные вопросы",
        faqCard1H3: "🔹 Что это за сайт?",
        faqCard1P: "Это набор бесплатных инструментов для игроков Minecraft: калькуляторы, генераторы, конвертеры — всё, что упростит игру.",
        faqCard2H3: "🔹 Безопасно ли пользоваться?",
        faqCard2P: "Абсолютно! Все расчёты происходят в твоём браузере. Мы не собираем и не храним твои данные.",
        faqCard3H3: "🔹 Как добавить сайт в закладки?",
        faqCard3P: "Нажми Ctrl+D (Cmd+D на Mac) или используй меню браузера → «Добавить в закладки».",
        faqCard4H3: "🔹 Есть ли мобильная версия?",
        faqCard4P: "Да! Сайт полностью адаптивный — открой его на телефоне или планшете.",
        faqCard5H3: "🔹 Можно ли предложить новый инструмент?",
        faqCard5P: "Конечно! Напиши нам через <a href='bot.html' style='color:#1abc9c;'>бота-помощника</a> или на почту (если добавим позже).",
        faqCard6H3: "🔹 Почему результаты иногда округляются?",
        faqCard6P: "Чтобы избежать дробных блоков или криперов 😉 Все значения округляются в большую сторону для запаса.",
        // TOS Page Specific
        tosHeaderH1: "📜 Условия использования",
        tosHeaderP: "Пожалуйста, внимательно ознакомься с правилами",
        tosCard1H3: "1. Общие положения",
        tosCard1P: "Используя этот сайт, ты соглашаешься с данными условиями. Сервис предоставляется «как есть».",
        tosCard2H3: "2. Ответственность",
        tosCard2P: "Мы не несём ответственности за ущерб, вызванный использованием или неправильным применением инструментов.",
        tosCard3H3: "3. Конфиденциальность",
        tosCard3P: "Мы не собираем личные данные. Все вычисления происходят локально в твоём браузере.",
        tosCard4H3: "4. Авторские права",
        tosCard4P: "Minecraft — торговая марка Mojang Studios. Мы не связаны с Mojang или Microsoft. Это фан-сайт.",
        tosCard5H3: "5. Изменения",
        tosCard5P: "Мы можем обновлять эти условия в любое время. Рекомендуем периодически перечитывать.",
        // Privacy Page Specific
        privacyHeaderH1: "🔒 Политика конфиденциальности",
        privacyHeaderP: "Твои данные — только твои. Мы их не трогаем.",
        privacyCard1H3: "🔸 Никаких данных",
        privacyCard1P: "Мы не используем cookies, аналитику, трекеры. Ничего не отправляется на сервер — всё работает в твоём браузере.",
        privacyCard2H3: "🔸 Локальные вычисления",
        privacyCard2P: "Все калькуляторы и генераторы работают локально. Твои цифры, координаты, seeds — никто не видит, кроме тебя.",
        privacyCard3H3: "🔸 Безопасность",
        privacyCard3P: "Сайт не требует регистрации, не хранит историю, не запрашивает доступ к твоему аккаунту или миру Minecraft.",
        privacyCard4H3: "🔸 Обновления",
        privacyCard4P: "Мы можем добавлять новые функции, но никогда не будем собирать твои данные без явного согласия (а его и не будет запрашивать 😉).",
        // Language Switcher
        langName: "Русский",
        flag: "🇷🇺"
    },
    zh: {
        title: "Minecraft 工具中心 — 建造者与探险家的工具",
        metaDescription: "最好的 Minecraft 工具：计算器、生成器、转换器。助力建造、刷怪、探索等！",
        headerSubtitle: "您 Minecraft 冒险所需的所有工具",
        footerText: "© 2025 Minecraft 工具中心 — 为真正的建造者和探险家提供的所有工具！由 ❤️ 为 Minecraft 玩家制作",
        navHome: "首页",
        navFAQ: "常见问题",
        navBot: "助手机器人",
        navTOS: "服务条款",
        navPrivacy: "隐私政策",
        // Index Page Specific
        indexHeaderH1: "🛠️ Minecraft 工具中心",
        indexHeaderP: "您 Minecraft 冒险所需的所有工具",
        indexFAQText: "常见问题",
        indexBotText: "助手机器人",
        indexTOSText: "服务条款",
        indexPrivacyText: "隐私政策",
        indexFooterSubtitle: "为真正的建造者和探险家提供的所有工具！",
        indexFooterCreator: "由 ❤️ 为 Minecraft 玩家制作",
        // Tool Cards (1-8)
        tool1_title: "🏠 房屋方块计算器",
        tool1_desc: "计算建造房屋所需的方块数量。",
        tool1_input1: "长度 (方块)",
        tool1_input2: "宽度 (方块)",
        tool1_input3: "高度 (方块)",
        tool1_btn: "计算",
        tool1_result: blocks => `总方块数: ${Math.ceil(blocks)}`,
        tool2_title: "🌍 随机坐标生成器",
        tool2_desc: "获取用于传送的随机坐标。",
        tool2_btn: "生成",
        tool2_result: (x, y, z) => `传送: /tp @s ${x} ${y} ${z}`,
        tool3_title: "⏳ 游戏时间转换器",
        tool3_desc: "将分钟转换为游戏内天数，反之亦然。",
        tool3_input: "分钟 (游戏内)",
        tool3_btn: "转换",
        tool3_result: mins => `${mins} 分 = ${(mins / 20).toFixed(2)} 游戏内天数`,
        tool4_title: "✨ 经验计算器",
        tool4_desc: "N 点经验值能让你升多少级？",
        tool4_input: "经验值数量",
        tool4_btn: "计算",
        tool4_result: (level, remaining) => `等级: ${level} (剩余: ${remaining} 经验)`,
        tool5_title: "🏷️ 物品名称生成器",
        tool5_desc: "为你的物品创建酷炫的名称！",
        tool5_btn: "生成",
        tool5_result: name => `名称: §l${name}`,
        tool6_title: "💥 苦力怕刷怪场计算器",
        tool6_desc: "获取 N 个火药需要杀死多少只苦力怕？",
        tool6_input: "所需火药数量",
        tool6_btn: "计算",
        tool6_result: creepers => `需要杀死 ~${creepers} 只苦力怕`,
        tool7_title: "🌱 随机种子生成器",
        tool7_desc: "获取新世界的随机种子。",
        tool7_btn: "生成",
        tool7_result: seed => `种子: ${seed}`,
        tool8_title: "🛡️ 护甲耐久计算器",
        tool8_desc: "护甲能承受多少次攻击？",
        tool8_select1: "皮革 (55)",
        tool8_select2: "铁 (165)",
        tool8_select3: "钻石 (363)",
        tool8_select4: "下界合金 (407)",
        tool8_input: "每次攻击伤害 (例如, 2)",
        tool8_btn: "计算",
        tool8_result: (hits, damage) => `可承受约 ${hits} 次 ${damage} 点伤害`,
        // Documentation Card
        documentationTitle: "📚 文档",
        documentationDesc: "所有工具的详细说明和使用方法。",
        documentationBtn: "前往文档",
        // Bot Page Specific
        botHeaderH1: "🤖 助手机器人",
        botHeaderP: "问我任何 Minecraft 问题 — 我会尽力帮助！",
        botInputPlaceholder: "例如：如何建造下界传送门？",
        botBtn: "发送问题",
        botExampleTitle: "💡 示例问题：",
        botExample1: "如何更快获得钻石？",
        botExample2: "到世界边界有多少方块？",
        botExample3: "如何附魔物品？",
        botExample4: "如何建造经验农场？",
        botAnswerDefault: "嗯... 我还在学习。尝试换个说法或查看常见问题 😊",
        botAnswerDiamonds: "⚡ 钻石在 1-15 层生成。最好在 Y=-58 用时运 III 挖掘。使用铁镐或更好的工具！",
        botAnswerPortal: "🔥 下界传送门需要 10-14 个黑曜石，呈 4x5 门形（不包括角落）。用打火石点燃内部！",
        botAnswerXP: "🌟 最好的经验农场：下界的疣猪兽或主世界的苦力怕/骷髅。别忘了弓上的力量附魔！",
        botAnswerWorld: "🌍 世界生成到 X/Z ±30,000,000，但稳定范围仅到 ±2,999,984。超出范围会遇到 bug 和延迟。",
        botAnswerEnchant: "✨ 在附魔台周围放置 15 个书架。30 级可获得最好的附魔。或者在铁砧上合成物品！",
        // FAQ Page Specific
        faqHeaderH1: "❓ 常见问题",
        faqHeaderP: "在这里你可以找到最受欢迎问题的答案",
        faqCard1H3: "🔹 这是什么网站？",
        faqCard1P: "这是一套 Minecraft 玩家的免费工具：计算器、生成器、转换器 — 一切让游戏更轻松的工具。",
        faqCard2H3: "🔹 使用安全吗？",
        faqCard2P: "绝对安全！所有计算都在你的浏览器中进行。我们不收集或存储你的数据。",
        faqCard3H3: "🔹 如何将网站添加到书签？",
        faqCard3P: "按 Ctrl+D (Mac 上是 Cmd+D) 或使用浏览器菜单 → '书签'。",
        faqCard4H3: "🔹 有移动版本吗？",
        faqCard4P: "是的！网站完全响应式 — 在手机或平板电脑上打开即可。",
        faqCard5H3: "🔹 我可以建议新工具吗？",
        faqCard5P: "当然！通过 <a href='bot.html' style='color:#1abc9c;'>助手机器人</a> 或邮件 (如果以后添加) 联系我们。",
        faqCard6H3: "🔹 为什么结果有时会四舍五入？",
        faqCard6P: "为了避免小数方块或苦力怕 😉 所有数值都向上取整以确保安全。",
        // TOS Page Specific
        tosHeaderH1: "📜 服务条款",
        tosHeaderP: "请仔细阅读规则",
        tosCard1H3: "1. 一般条款",
        tosCard1P: "使用本网站即表示您同意这些条款。服务按\"原样\"提供。",
        tosCard2H3: "2. 责任",
        tosCard2P: "我们对使用或误用工具造成的损害不承担责任。",
        tosCard3H3: "3. 隐私",
        tosCard3P: "我们不收集个人数据。所有计算都在您的浏览器中本地执行。",
        tosCard4H3: "4. 版权",
        tosCard4P: "Minecraft 是 Mojang Studios 的商标。我们与 Mojang 或 Microsoft 无关。这是一个粉丝网站。",
        tosCard5H3: "5. 更改",
        tosCard5P: "我们可能随时更新这些条款。建议定期重新阅读。",
        // Privacy Page Specific
        privacyHeaderH1: "🔒 隐私政策",
        privacyHeaderP: "你的数据就是你的。我们不碰它。",
        privacyCard1H3: "🔸 无数据",
        privacyCard1P: "我们不使用 cookie、分析或跟踪器。没有任何内容发送到服务器 — 一切都在您的浏览器中运行。",
        privacyCard2H3: "🔸 本地计算",
        privacyCard2P: "所有计算器和生成器都在本地运行。你的数字、坐标、种子 — 除了你没人能看到。",
        privacyCard3H3: "🔸 安全",
        privacyCard3P: "网站不需要注册，不存储历史记录，不要求访问你的 Minecraft 账户或世界。",
        privacyCard4H3: "🔸 更新",
        privacyCard4P: "我们可能会添加新功能，但除非明确同意，否则永远不会收集你的数据（而且我们不会要求 😉）。",
        // Language Switcher
        langName: "中文",
        flag: "🇨🇳"
    },
    // === ДРУГИЕ ЯЗЫКИ (ТОЛЬКО ТЕКСТОВЫЕ ФЛАГИ) ===
    es: { langName: "Español", flag: "🇪🇸", title: "Minecraft Tools Hub", headerSubtitle: "Todas las herramientas para tu aventura", navHome: "Inicio", navFAQ: "Preguntas frecuentes", navBot: "Bot asistente", navTOS: "Términos", navPrivacy: "Privacidad", navRedstone: "Calculadora de Redstone", navEnchant: "Optimizador de encantamientos", navBiome: "Buscador de biomas", bot_placeholder: "Ej: ¿Cómo construir un portal al Nether?", bot_send: "Enviar", redstone_btn: "Calcular", enchant_btn: "Sugerir", biome_btn: "Buscar", tool1_btn: "Calcular", tool2_btn: "Generar", tool3_btn: "Convertir", tool4_btn: "Calcular", tool5_btn: "Generar", tool6_btn: "Calcular", tool7_btn: "Generar", tool8_btn: "Calcular" },
    hi: { langName: "हिन्दी", flag: "🇮🇳", title: "Minecraft टूल्स हब", headerSubtitle: "आपके Minecraft साहसिक कार्य के लिए सभी उपकरण", navHome: "मुख्य", navFAQ: "अक्सर पूछे जाने वाले प्रश्न", navBot: "सहायक बॉट", navTOS: "उपयोग की शर्तें", navPrivacy: "गोपनीयता नीति", navRedstone: "रेडस्टोन कैलकुलेटर", navEnchant: "एन्चांट ऑप्टिमाइज़र", navBiome: "बायोम खोजकर्ता", bot_placeholder: "उदा.: नेदर पोर्टल कैसे बनाएं?", bot_send: "भेजें", redstone_btn: "गणना करें", enchant_btn: "सुझाव दें", biome_btn: "खोजें", tool1_btn: "गणना करें", tool2_btn: "उत्पन्न करें", tool3_btn: "परिवर्तित करें", tool4_btn: "गणना करें", tool5_btn: "उत्पन्न करें", tool6_btn: "गणना करें", tool7_btn: "उत्पन्न करें", tool8_btn: "गणना करें" },
    bn: { langName: "বাংলা", flag: "🇧🇩", title: "Minecraft টoolস হাব", headerSubtitle: "আপনার Minecraft অ্যাডভেঞ্চারের জন্য সমস্ত টুল", navHome: "হোম", navFAQ: "প্রায়শই জিজ্ঞাসিত প্রশ্ন", navBot: "সহায়ক বট", navTOS: "শর্তাবলী", navPrivacy: "গোপনীয়তা নীতি", navRedstone: "রেডস্টোন ক্যালকুলেটর", navEnchant: "এনচান্ট অপ্টিমাইজার", navBiome: "বায়োম ফাইন্ডার", bot_placeholder: "যেমন: নেদার পোর্টাল কীভাবে তৈরি করবেন?", bot_send: "পাঠান", redstone_btn: "গণনা করুন", enchant_btn: "পরামর্শ দিন", biome_btn: "খুঁজুন", tool1_btn: "গণনা করুন", tool2_btn: "জেনারেট করুন", tool3_btn: "রূপান্তর করুন", tool4_btn: "গণনা করুন", tool5_btn: "জেনারেট করুন", tool6_btn: "গণনা করুন", tool7_btn: "জেনারেট করুন", tool8_btn: "গণনা করুন" },
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

// 🌐 UI языка — ТОЛЬКО SVG ДЛЯ ru/en
function updateLanguageUI(lang) {
    const t = translations[lang];
    const flagSpan = document.getElementById('current-flag');
    const langSpan = document.getElementById('current-lang');
    if (flagSpan) {
        if (lang === 'en') {
            flagSpan.innerHTML = '<svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><rect width="20" height="15"/></clipPath></defs><g clip-path="url(#a)"><rect width="20" height="15" fill="#00247D"/><path d="M0 0h20v15H0z" fill="#00247D"/><path d="M0 0v15l8-6.5L0 2z" fill="#CF142B"/><path d="M20 0v15l-8-6.5L20 2z" fill="#CF142B"/><path d="M0 0h20v2H0z" fill="#fff"/><path d="M0 13h20v2H0z" fill="#fff"/><path d="M0 6h20v3H0z" fill="#fff"/><path d="M8 0h2v15H8z" fill="#fff"/><path d="M10 0l-8 6.5V2L10 8z" fill="#CF142B"/><path d="M10 15l8-6.5V13L10 7z" fill="#CF142B"/></g></svg>';
        } else if (lang === 'ru') {
            flagSpan.innerHTML = '<svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="5" y="0" fill="#fff"/><rect width="20" height="5" y="5" fill="#0033A0"/><rect width="20" height="5" y="10" fill="#D52B1E"/></svg>';
        } else {
            flagSpan.textContent = t.flag || '';
        }
    }
    if (langSpan) langSpan.textContent = t.langName;
}

// 🌐 Применяем переводы — УНИВЕРСАЛЬНО и ПОЛНОСТЬЮ
function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    // Получаем имя текущей страницы
    const path = window.location.pathname;
    const currentPage = path.split('/').pop() || 'index.html';

    // --- Обновление заголовка и описания в зависимости от страницы ---
    const headerH1 = document.querySelector('header h1');
    const headerP = document.querySelector('header p');
    
    if (headerH1 && headerP) {
        if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
            headerH1.textContent = t.indexHeaderH1 || t.title.split(' — ')[0];
            headerP.textContent = t.indexHeaderP || t.headerSubtitle;
        } else if (currentPage === 'bot.html') {
            headerH1.textContent = t.botHeaderH1 || "🤖 Helper Bot";
            headerP.textContent = t.botHeaderP || "Ask me any Minecraft question";
        } else if (currentPage === 'faq.html') {
            headerH1.textContent = t.faqHeaderH1 || "❓ Frequently Asked Questions";
            headerP.textContent = t.faqHeaderP || "Here you'll find answers to the most popular questions";
        } else if (currentPage === 'tos.html') {
            headerH1.textContent = t.tosHeaderH1 || "📜 Terms of Service";
            headerP.textContent = t.tosHeaderP || "Please read the rules carefully";
        } else if (currentPage === 'privacy.html') {
            headerH1.textContent = t.privacyHeaderH1 || "🔒 Privacy Policy";
            headerP.textContent = t.privacyHeaderP || "Your data is yours. We don't touch it.";
        }
    }

    // --- Обновление футера ---
    const footerPs = document.querySelectorAll('footer p');
    if (footerPs.length >= 2) {
        footerPs[1].innerHTML = t.footerText || footerPs[1].innerHTML;
    }

    // --- Обновление навигации в футере ---
    const navLinks = document.querySelectorAll('footer a');
    const navKeys = ['navHome', 'navFAQ', 'navBot', 'navTOS', 'navPrivacy'];
    navLinks.forEach((link, index) => {
        if (t[navKeys[index]]) {
            link.textContent = t[navKeys[index]];
        }
    });

    // --- Обновление контента страниц ---
    updatePageContent(currentPage, t);
}

// 🌐 Обновление контента конкретной страницы
function updatePageContent(page, t) {
    const toolCards = document.querySelectorAll('.tool-card');
    
    switch(page) {
        case 'index.html':
        case '':
        case '/':
            // Обновление инструментов на главной странице
            toolCards.forEach((card, index) => {
                const toolIndex = index + 1;
                if (toolIndex <= 8) { // Только первые 8 инструментов
                    updateToolCard(card, toolIndex, t);
                } else if (toolIndex === 9) {
                    // Документация карточка
                    const h3 = card.querySelector('h3');
                    const p = card.querySelector('p');
                    const a = card.querySelector('a');
                    if (h3) h3.textContent = t.documentationTitle || "📚 Documentation";
                    if (p) p.textContent = t.documentationDesc || "Detailed description of all tools and how to use them.";
                    if (a) a.textContent = t.documentationBtn || "Go to Documentation";
                }
            });
            break;

        case 'faq.html':
            // Обновление FAQ
            toolCards.forEach((card, index) => {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3 && t[`faqCard${index + 1}H3`]) {
                    h3.textContent = t[`faqCard${index + 1}H3`];
                }
                if (p && t[`faqCard${index + 1}P`]) {
                    p.innerHTML = t[`faqCard${index + 1}P`];
                }
            });
            break;

        case 'tos.html':
            // Обновление Terms of Service
            toolCards.forEach((card, index) => {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3 && t[`tosCard${index + 1}H3`]) {
                    h3.textContent = t[`tosCard${index + 1}H3`];
                }
                if (p && t[`tosCard${index + 1}P`]) {
                    p.textContent = t[`tosCard${index + 1}P`];
                }
            });
            break;

        case 'privacy.html':
            // Обновление Privacy Policy
            toolCards.forEach((card, index) => {
                const h3 = card.querySelector('h3');
                const p = card.querySelector('p');
                if (h3 && t[`privacyCard${index + 1}H3`]) {
                    h3.textContent = t[`privacyCard${index + 1}H3`];
                }
                if (p && t[`privacyCard${index + 1}P`]) {
                    p.textContent = t[`privacyCard${index + 1}P`];
                }
            });
            break;

        case 'bot.html':
            // Обновление бота
            toolCards.forEach((card, index) => {
                if (index === 0) {
                    // Форма вопроса
                    const input = card.querySelector('input[type="text"]');
                    const button = card.querySelector('button');
                    const result = card.querySelector('.result');
                    if (input) input.placeholder = t.botInputPlaceholder || "E.g.: How to build a Nether portal?";
                    if (button) button.textContent = t.botBtn || "Send Question";
                } else if (index === 1) {
                    // Примеры вопросов
                    const h3 = card.querySelector('h3');
                    const lis = card.querySelectorAll('li');
                    if (h3) h3.textContent = t.botExampleTitle || "💡 Example questions:";
                    if (lis.length >= 4) {
                        if (t.botExample1) lis[0].textContent = t.botExample1;
                        if (t.botExample2) lis[1].textContent = t.botExample2;
                        if (t.botExample3) lis[2].textContent = t.botExample3;
                        if (t.botExample4) lis[3].textContent = t.botExample4;
                    }
                }
            });
            break;
    }
}

// 🌐 Обновление карточки инструмента
function updateToolCard(card, toolIndex, t) {
    const h3 = card.querySelector('h3');
    const p = card.querySelector('p');
    const inputs = card.querySelectorAll('input');
    const selects = card.querySelectorAll('select');
    const button = card.querySelector('button');

    if (h3 && t[`tool${toolIndex}_title`]) {
        h3.textContent = t[`tool${toolIndex}_title`];
    }
    if (p && t[`tool${toolIndex}_desc`]) {
        p.textContent = t[`tool${toolIndex}_desc`];
    }
    if (button && t[`tool${toolIndex}_btn`]) {
        button.textContent = t[`tool${toolIndex}_btn`];
    }

    // Обновление инпутов
    inputs.forEach((input, inputIndex) => {
        const inputKey = `tool${toolIndex}_input${inputs.length > 1 ? inputIndex + 1 : ''}`;
        if (input.placeholder && t[inputKey]) {
            input.placeholder = t[inputKey];
        }
    });

    // Обновление селектов (для инструмента 8)
    if (toolIndex === 8 && selects.length > 0) {
        const options = selects[0].querySelectorAll('option');
        if (options.length > 0) options[0].textContent = t.tool8_select1 || options[0].textContent;
        if (options.length > 1) options[1].textContent = t.tool8_select2 || options[1].textContent;
        if (options.length > 2) options[2].textContent = t.tool8_select3 || options[2].textContent;
        if (options.length > 3) options[3].textContent = t.tool8_select4 || options[3].textContent;
    }
}

// 🌐 Инициализация
document.addEventListener('DOMContentLoaded', () => {
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
    const browserLang = navigator.language.split('-')[0];
    let lang = langFromURL || langFromStorage || browserLang;
    if (!translations[lang]) lang = 'ru';
    localStorage.setItem('language', lang);
    updateLanguageUI(lang);
    applyTranslations(lang);
    updateSEOTags(lang);
});

// 🤖 Бот (обновленная версия для поддержки переводов)
function askBot() {
    const lang = localStorage.getItem('language') || 'ru';
    const t = translations[lang] || translations.ru;
    const question = document.getElementById('user-question')?.value.trim().toLowerCase();
    const answerDiv = document.getElementById('bot-answer');
    if (!answerDiv) return;

    let answer = t.botAnswerDefault || "Hmm... I'm still learning. Try rephrasing or check F.A.Q. 😊";
    if (question?.includes("алмаз") || question?.includes("diamond")) answer = t.botAnswerDiamonds || answer;
    else if (question?.includes("портал") || question?.includes("portal") || question?.includes("нижний мир") || question?.includes("nether")) answer = t.botAnswerPortal || answer;
    else if (question?.includes("опыт") || question?.includes("xp") || question?.includes("ферма") || question?.includes("experience")) answer = t.botAnswerXP || answer;
    else if (question?.includes("кра") || question?.includes("world") || question?.includes("мир") || question?.includes("border")) answer = t.botAnswerWorld || answer;
    else if (question?.includes("зачар") || question?.includes("enchant") || question?.includes("enchantment")) answer = t.botAnswerEnchant || answer;

    answerDiv.style.display = 'block';
    answerDiv.textContent = answer;
}

// === СТАРЫЕ ФУНКЦИИ (1–8) ===
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
        alert(lang === 'en' ? 'Please enter all values.' : (lang === 'zh' ? '请输入所有值。' : 'Пожалуйста, введите все значения.'));
    }
}

function generateCoords() {
    const x = Math.floor(Math.random() * 2000 - 1000);
    const z = Math.floor(Math.random() * 2000 - 1000);
    const y = 64 + Math.floor(Math.random() * 100);
    const resultDiv = document.getElementById('result-coords');
    resultDiv.style.display = 'block';
    const lang = localStorage.getItem('language') || 'ru';
    resultDiv.textContent = translations[lang].tool2_result(x, y, z);
}

function convertGameTime() {
    const mins = parseFloat(document.getElementById('game-minutes').value);
    if (!isNaN(mins)) {
        const resultDiv = document.getElementById('result-time');
        resultDiv.style.display = 'block';
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool3_result(mins);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter minutes.' : (lang === 'zh' ? '请输入分钟数。' : 'Введите число минут.'));
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
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool4_result(level, remaining);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter valid XP.' : (lang === 'zh' ? '请输入有效的经验值。' : 'Введите корректное количество опыта.'));
    }
}

function generateItemName() {
    const lang = localStorage.getItem('language') || 'ru';
    const prefixes = lang === 'ru' 
        ? ['Легендарный', 'Проклятый', 'Сияющий', 'Темный', 'Вечный', 'Огненный', 'Ледяной']
        : lang === 'en'
        ? ['Legendary', 'Cursed', 'Shining', 'Dark', 'Eternal', 'Fiery', 'Frosty']
        : ['传奇的', '被诅咒的', '闪亮的', '黑暗的', '永恒的', '炽热的', '冰冷的']; // Chinese
    const suffixes = lang === 'ru'
        ? ['Меча', 'Посоха', 'Щита', 'Лука', 'Кирки', 'Шлема', 'Амулета']
        : lang === 'en'
        ? ['Sword', 'Staff', 'Shield', 'Bow', 'Pickaxe', 'Helmet', 'Amulet']
        : ['剑', '法杖', '盾', '弓', '镐', '头盔', '护符']; // Chinese
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
        const lang = localStorage.getItem('language') || 'ru';
        resultDiv.textContent = translations[lang].tool6_result(creepers);
    } else {
        const lang = localStorage.getItem('language') || 'ru';
        alert(lang === 'en' ? 'Enter gunpowder amount.' : (lang === 'zh' ? '请输入火药数量。' : 'Введите количество пороха.'));
    }
}

function generateSeed() {
    const seed = Math.floor(Math.random() * 9007199254740991) - 4503599627370495;
    const resultDiv = document.getElementById('result-seed');
    resultDiv.style.display = 'block';
    const lang = localStorage.getItem('language') || 'ru';
    resultDiv.textContent = translations[lang].tool7_result(seed);
}

function calculateArmorDurability() {
    const armorDurabilities = { leather: 55, iron: 165, diamond: 363, netherite: 407 };
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
        alert(lang === 'en' ? 'Enter damage per hit.' : (lang === 'zh' ? '请输入每次攻击伤害。' : 'Введите урон за удар.'));
    }
}

// 🔧 ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ДЛЯ АДМИН-ПАНЕЛИ
window.toolsData = [
    {
        id: 1,
        name: { ru: "Калькулятор блоков для дома", en: "House Blocks Calculator", zh: "房屋方块计算器" },
        description: { 
            ru: "Рассчитай, сколько блоков нужно для постройки дома.", 
            en: "Calculate how many blocks you need to build a house.",
            zh: "计算建造房屋所需的方块数量。"
        },
        url: "#",
        icon: "🏠"
    },
    {
        id: 2, 
        name: { ru: "Генератор случайных координат", en: "Random Coordinates Generator", zh: "随机坐标生成器" },
        description: { 
            ru: "Получи случайные координаты для телепортации.", 
            en: "Get random coordinates for teleportation.",
            zh: "获取用于传送的随机坐标。"
        },
        url: "#",
        icon: "🌍"
    }
];
window.renderTools = function(lang = 'ru') {
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
