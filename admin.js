<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow"> <!-- 🚫 Не индексировать! -->
    <title>Access Denied</title>
    <style>
        body {
            background: #1a1a2e;
            color: white;
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        .login-card {
            background: #162447;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            text-align: center;
            width: 350px;
        }
        input {
            width: 100%;
            padding: 12px;
            margin: 15px 0;
            border-radius: 8px;
            border: none;
            background: #2a2a4a;
            color: white;
        }
        button {
            width: 100%;
            padding: 12px;
            background: #e94560;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }
        .error {
            color: #ff6b6b;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="login-card">
        <h2>🔐 Admin Access</h2>
        <p>Enter password to continue</p>
        <input type="password" id="password-input" placeholder="Password" autocomplete="off">
        <button onclick="attemptLogin()">Login</button>
        <div id="login-error" class="error"></div>
    </div>

    <script>
        // ⚠️ ЗАМЕНИ ЭТОТ ХЕШ НА СВОЙ ПАРОЛЬ!
        // Сгенерируй здесь: https://www.md5online.org/
        const ADMIN_PASSWORD_HASH = "cf96bce69f409820e4b6bce661eb4e78"; // md5 от "admin123"

        function simpleHash(str) {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash;
            }
            return Math.abs(hash).toString(16);
        }

        function attemptLogin() {
            const password = document.getElementById('password-input').value;
            const hash = simpleHash(password);
            if (hash === ADMIN_PASSWORD_HASH) {
                localStorage.setItem('adminSession', Date.now());
                window.location.href = '#admin'; // или перейти на панель управления
                loadAdminPanel();
            } else {
                document.getElementById('login-error').textContent = "Invalid password.";
                console.log("[ADMIN] Failed login attempt at", new Date().toLocaleString());
            }
        }

        function loadAdminPanel() {
            document.querySelector('.login-card').innerHTML = `
                <h2>🛠️ Welcome, Admin</h2>
                <p>You now have full control over the site.</p>
                <button onclick="logout()">Logout</button>
                <hr style="margin: 20px 0; border-color: #4a4a6a;">
                <!-- Здесь будет интерфейс управления -->
                <div style="text-align: left; color: #1abc9c;">
                    <h3>🔧 Features:</h3>
                    <ul>
                        <li>Edit tool names & descriptions</li>
                        <li>Manage translations (RU/EN)</li>
                        <li>Update FAQ, ToS, Privacy</li>
                        <li>Export/Import config</li>
                    </ul>
                </div>
            `;
            // Здесь будет логика редактирования — по вашему запросу
        }

        function logout() {
            localStorage.removeItem('adminSession');
            location.reload();
        }

        // Проверка сессии каждую минуту
        setInterval(() => {
            const session = localStorage.getItem('adminSession');
            if (session && (Date.now() - session) > 30 * 60 * 1000) {
                logout();
            }
        }, 60000);
    </script>
</body>
</html>
