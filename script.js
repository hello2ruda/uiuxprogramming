    const form = document.querySelector('.subscribe-form');
    const nameInput = document.getElementById('subscriber-name');
    const emailInput = document.getElementById('email');
    const planSelect = document.getElementById('plan');
    const message = document.getElementById('result-message');
    const submitBtn = document.querySelector('.primary-button');

    form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let userName = nameInput.value.trim();
    let userEmail = emailInput.value.trim();
    let selectedPlan = planSelect.value;

    if (userName === "") {
        message.innerText = "이름(닉네임)을 입력해 주세요.";
        message.style.color = "#ff4757"; 
    } 
    else if (userEmail === "") {
        message.innerText = "이메일 주소를 입력해 주세요.";
        message.style.color = "#ff4757";
    } 
    else if (selectedPlan === "") {
        message.innerText = "원하시는 궤도를 선택해 주세요.";
        message.style.color = "#ff4757";
    } 
    else if (selectedPlan === "starlight") {
        message.innerText = `✨ ${userName}님, 스타라이트 라운지 탑승이 완료되었습니다!`;
        message.style.color = "#f6d365"; 
        submitBtn.innerText = "탑승 완료";
        submitBtn.style.background = "rgba(255, 255, 255, 0.2)";
        submitBtn.disabled = true; 
    } 
    else if (selectedPlan === "deepspace") {
        message.innerText = `🚀 ${userName}님, 딥 스페이스 랩 탑승이 완료되었습니다!`;
        message.style.color = "#00d2ff"; 
        
        submitBtn.innerText = "탑승 완료";
        submitBtn.style.background = "rgba(255, 255, 255, 0.2)";
        submitBtn.disabled = true; 
    }
});