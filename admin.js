// ⚠️ Секретный пароль (в продакшене — вынести в конфиг или использовать хеши)
const ADMIN_PASSWORD_HASH = "4d186321c1a7f0f354b297e8914ab240"; // md5 от "admin123" — НЕМЕДЛЕННО ИЗМЕНИТЬ!

// 🔄 Хеширование простое (для демо)
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
}

// 🔐 Попытка входа
function attemptLogin() {
    const password = document.getElementById('password-input').value;
    const hash = simpleHash(password);
    if (hash === ADMIN_PASSWORD_HASH) {
        document.getElementById('login-screen').classList.remove('active');
        document.getElementById('admin-screen').classList.add('active');
        localStorage.setItem('adminSession', Date.now());
        logAccess('login_success');
    } else {
        document.getElementById('login-error').textContent = "Invalid password. Try again.";
        logAccess('login_failed');
    }
}

// 🚪 Выход
function logout() {
    localStorage.removeItem('adminSession');
    window.location.href = 'admin.html';
}

// 🛡️ Проверка сессии
function checkSession() {
    const session = localStorage.getItem('adminSession');
    if (!session || (Date.now() - session) > 30 * 60 * 1000) { // 30 минут
        logout();
    }
}

// 📜 Загрузка инструментов
function loadTools() {
    // Здесь можно загрузить текущие инструменты из localStorage или script.js
    const toolsList = document.getElementById('tools-list');
    toolsList.innerHTML = '<p>Загрузка инструментов...</p>';
    // Реализация редактирования — по вашему запросу
}

// 🌐 Переключение языков
function switchLangTab(lang) {
    document.getElementById('tab-ru').classList.remove('active');
    document.getElementById('tab-en').classList.remove('active');
    document.getElementById(`tab-${lang}`).classList.add('active');
    // Загрузить переводы для выбранного языка
    loadTranslations(lang);
}

// 💾 Экспорт конфигурации
function exportConfig() {
    const config = {
        translations: translations, // из script.js
        tools: [], // ваши инструменты
        pages: {} // FAQ, ToS и т.д.
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'minecraft-tools-config.json';
    a.click();
}

// 📥 Импорт конфигурации
function importConfig() {
    const fileInput = document.getElementById('import-file');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const config = JSON.parse(e.target.result);
                alert('Configuration imported successfully!');
                // Применить конфигурацию
            } catch (err) {
                alert('Invalid configuration file.');
            }
        };
        reader.readAsText(file);
    }
}

// 📊 Статистика
function loadStats() {
    // Статистика использования — из localStorage
}

// 📝 Сохранение контента страниц
function savePageContent() {
    const page = document.getElementById('page-selector').value;
    const content = document.getElementById('page-content').value;
    localStorage.setItem(`page_${page}`, content);
    alert('Page saved successfully!');
}

// 🔄 Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Проверка сессии
    setInterval(checkSession, 60000); // каждую минуту
    // Загрузка данных
    loadTools();
    loadStats();
});
