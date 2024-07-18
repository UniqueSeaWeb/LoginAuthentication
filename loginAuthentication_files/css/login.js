/* ログイン */
// 非同期でログイン認証する関数
async function login(userId, password) {
    const newUrl = setParams(WEBAPPURL, { action: 'login' });
    console.log('POST開始');
    try {
        const response = await fetch(newUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({
                userId: userId,
                password: password
            }),
            timeout: TIMEOUT
        });
        const result = await response.json();
        console.log('typeof(result): ' + typeof(result));
        console.log('Object.keys(result)');
        console.log(Object.keys(result));
        console.log('Object.values(result)');
        console.log(Object.values(result));
        console.log('フロントサイド成功');
        console.log('サーバーサイド結果');
        console.log('result');
        console.log(result);
        console.log('resultCode: ' + result.resultCode);
        console.log('resultMessage: ' + result.resultMessage);
    } catch (e) {
        console.error(e.message);
    } finally {
        console.log('POST終了');
    }
}

window.addEventListener('DOMContentLoaded', function () {
    // 要素を取得
    const userId = document.getElementById('l_userId'); // ユーザーID入力欄
    const password = document.getElementById('l_password'); // パスワード入力欄
    const loginBtn = document.getElementById('l_loginBtn'); // ログインボタン

    // ログインボタン押下時の処理
    loginBtn.addEventListener('click', function (e) {
        // サブミットをキャンセル
        e.preventDefault();

        // 要素を取得
        const userId = document.getElementById('l_userId'); // ユーザーID入力欄
        const password = document.getElementById('l_password'); // パスワード入力欄

        login(userId.value, password.value);
    });
});