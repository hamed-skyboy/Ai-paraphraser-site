
document.getElementById("paraphrase-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const inputText = document.getElementById("input-text").value;
    document.getElementById("result").innerText = "نسخه بازنویسی شده: " + inputText; // شبیه‌سازی بازنویسی
});
