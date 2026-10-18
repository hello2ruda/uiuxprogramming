const nameInput = document.getElementById('subscriber-name');
const planSelect = document.getElementById('plan');
const submitBtn = document.querySelector('.primary-button');
const greetingMsg = document.getElementById('greeting-message');

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
        submitBtn.style.background = "linear-gradient(135deg, #70678a, #3a3252)"; // 저채도 보라색 적용
        submitBtn.style.color = "#ffffff"; 
    } else {
        submitBtn.innerText = "보이저스 노트 탑승하기";
        submitBtn.style.background = "linear-gradient(135deg, #475569, #1e293b)"; // 기본 상태 색상
    }
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        this.classList.add('active');
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});