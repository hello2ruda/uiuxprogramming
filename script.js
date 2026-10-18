const form = document.querySelector('.subscribe-form');
const nameInput = document.getElementById('subscriber-name');
const emailInput = document.getElementById('email');
const planSelect = document.getElementById('plan');
const submitBtn = document.querySelector('.primary-button');
const greetingMsg = document.getElementById('greeting-message');
const message = document.getElementById('result-message');
const resetBtn = document.getElementById('reset-button');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

nameInput.addEventListener('input', function() {
    let currentName = this.value.trim();
    if (currentName.length > 0) {
        greetingMsg.innerText = `✨ ${currentName}님, 환영합니다! 궤도를 설정해 주세요.`;
        greetingMsg.classList.add('active'); 
    } else {
        greetingMsg.innerText = "이름을 입력하여 궤도를 설정해 보세요!";
        greetingMsg.classList.remove('active');
    }
});

planSelect.addEventListener('change', function() {
    document.body.classList.remove('theme-starlight', 'theme-deepspace');
    
    if (this.value === 'starlight') {
        document.body.classList.add('theme-starlight');
        submitBtn.innerText = "스타라이트 탑승하기";
        submitBtn.style.background = "linear-gradient(135deg, #f6d365, #fda085)";
        submitBtn.style.color = "#ffffff";
    } else if (this.value === 'deepspace') {
        document.body.classList.add('theme-deepspace');
        submitBtn.innerText = "딥 스페이스 탑승하기";
        submitBtn.style.background = "linear-gradient(135deg, #70678a, #3a3252)"; 
        submitBtn.style.color = "#ffffff"; 
    } else {
        submitBtn.innerText = "보이저스 노트 탑승하기";
        submitBtn.style.background = "linear-gradient(135deg, #475569, #1e293b)"; 
    }
});

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        this.classList.add('active');
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    let userName = nameInput.value.trim();
    let userEmail = emailInput.value.trim();
    let selectedPlan = planSelect.value;

    if (userName === "") {
        message.innerText = "이름(닉네임)을 입력해 주세요.";
        message.style.color = "#ff4757"; 
    } else if (userEmail === "") {
        message.innerText = "이메일 주소를 입력해 주세요.";
        message.style.color = "#ff4757";
    } else if (selectedPlan === "") {
        message.innerText = "원하시는 궤도를 선택해 주세요.";
        message.style.color = "#ff4757";
    } else {
        if (selectedPlan === "starlight") {
            message.innerText = `✨ ${userName}님, 스타라이트 라운지 탑승이 완료되었습니다!`;
            message.style.color = "#f6d365"; 
        } else if (selectedPlan === "deepspace") {
            message.innerText = `🚀 ${userName}님, 딥 스페이스 랩 탑승이 완료되었습니다!`;
            message.style.color = "#00d2ff"; 
        }
        submitBtn.innerText = "탑승 완료";
        submitBtn.style.background = "rgba(255, 255, 255, 0.2)";
        submitBtn.disabled = true; 
        resetBtn.style.display = "block";
    }
});

resetBtn.addEventListener('click', function() {
    form.reset();
    message.innerText = "";
    greetingMsg.innerText = "이름을 입력하여 궤도를 설정해 보세요!";
    greetingMsg.classList.remove('active');
    
    submitBtn.innerText = "보이저스 노트 탑승하기";
    submitBtn.style.background = "linear-gradient(135deg, #475569, #1e293b)"; 
    submitBtn.disabled = false;
    resetBtn.style.display = "none";

    document.body.classList.remove('theme-starlight', 'theme-deepspace');
});