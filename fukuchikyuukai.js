// 簡易的な会員データ（例）
const members = {
    "F001": "pass123",
    "F002": "abc456"
};

function login() {
    const id = document.getElementById("member-id").value;
    const pass = document.getElementById("member-pass").value;
    const msg = document.getElementById("login-msg");
    const content = document.getElementById("members-content");

    if(members[id] && members[id] === pass){
        msg.textContent = "ログイン成功！";
        msg.style.color = "green";
        document.getElementById("login-form").style.display = "none";
        content.style.display = "block";
    } else {
        msg.textContent = "会員番号またはパスワードが違います。";
        msg.style.color = "red";
    }
}
