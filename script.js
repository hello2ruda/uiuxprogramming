const form = document.querySelector('.subscribe-form');
const nameInput = document.getElementById('subscriber-name');
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('email-feedback'); 
const submitBtn = document.querySelector('.primary-button');
const greetingMsg = document.getElementById('greeting-message');
const message = document.getElementById('result-message');

const planStarlight = document.getElementById('plan-starlight');
const planDeepspace = document.getElementById('plan-deepspace');
const vipArea = document.getElementById('vip-area');
const vipKitCheck = document.getElementById('vip-kit-check');
const addressField = document.getElementById('address-field');
const addressInput = document.getElementById('address');

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const ticketArea = document.getElementById('ticket-area');
const ticketName = document.getElementById('ticket-name');
const ticketPlan = document.getElementById('ticket-plan');
const ticketNumber = document.getElementById('ticket-number');
const cancelTicketBtn = document.getElementById('cancel-ticket-btn');
const ticketEmail = document.getElementById('ticket-email');
const ticketSeat = document.getElementById('ticket-seat');
const ticketHeader = document.getElementById('ticket-header');
const ticketGate = document.getElementById('ticket-gate');
const ticketTime = document.getElementById('ticket-time');

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

emailInput.addEventListener('input', function() {
    let currentEmail = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (currentEmail === "") {
        emailFeedback.style.color = '#94a3b8';
        emailFeedback.innerText = '수신 가능한 이메일을 입력해 주세요.';
    } else if (!emailRegex.test(currentEmail)) {
        emailFeedback.style.color = '#ff4757';
        emailFeedback.innerText = "이메일 주소에 '@'와 도메인(.)을 정확히 포함해 주세요.";
    } else {
        emailFeedback.style.color = '#00ff88';
        emailFeedback.innerText = "올바른 이메일 형식입니다.";
    }
});

function updatePlanTheme() {
    const isStar = planStarlight.checked;
    const isDeep = planDeepspace.checked;
    
    document.body.classList.remove('theme-starlight', 'theme-deepspace');
    
    if (isStar && isDeep) {
        vipArea.style.display = 'block';
        document.body.classList.add('theme-starlight');
        submitBtn.innerText = "통합 궤도(VIP) 탑승하기";
        submitBtn.style.background = "linear-gradient(135deg, #f6d365, #3a7bd5)";
    } else {
        vipArea.style.display = 'none';
        vipKitCheck.checked = false; 
        vipKitCheck.dispatchEvent(new Event('change')); 
        
        if (isStar) {
            document.body.classList.add('theme-starlight');
            submitBtn.innerText = "스타라이트 탑승하기";
            submitBtn.style.background = "linear-gradient(135deg, #f6d365, #fda085)";
        } else if (isDeep) {
            document.body.classList.add('theme-deepspace');
            submitBtn.innerText = "딥 스페이스 탑승하기";
            submitBtn.style.background = "linear-gradient(135deg, #70678a, #3a3252)"; 
        } else {
            submitBtn.innerText = "보이저스 노트 탑승하기";
            submitBtn.style.background = "linear-gradient(135deg, #475569, #1e293b)"; 
        }
    }
}

planStarlight.addEventListener('change', updatePlanTheme);
planDeepspace.addEventListener('change', updatePlanTheme);

vipKitCheck.addEventListener('change', function() {
    if (this.checked) {
        addressField.style.display = 'block';
        addressInput.disabled = false;
    } else {
        addressField.style.display = 'none';
        addressInput.disabled = true;
        addressInput.value = '';
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
    const isStar = planStarlight.checked;
    const isDeep = planDeepspace.checked;
    let isKitChecked = vipKitCheck.checked;
    let userAddress = addressInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (userName === "") {
        message.innerText = "이름을 입력해 주세요.";
        message.style.color = "#ff4757"; return;
    } 
    if (userEmail === "" || !emailRegex.test(userEmail)) {
        message.innerText = "유효한 이메일 주소를 입력해 주세요. (@ 포함)";
        message.style.color = "#ff4757"; return;
    } 
    if (!isStar && !isDeep) {
        message.innerText = "최소 하나의 궤도를 선택해 주세요.";
        message.style.color = "#ff4757"; return;
    }
    if (isKitChecked && userAddress === "") {
        message.innerText = "웰컴 키트를 받을 배송지 주소를 입력해 주세요.";
        message.style.color = "#ff4757"; return;
    }
    
    message.innerText = "";
    
    let originalBtnText = submitBtn.innerText;
    submitBtn.disabled = true;
    submitBtn.innerText = "탑승권 발급 중... 🚀";
    submitBtn.style.opacity = "0.6";
    submitBtn.style.cursor = "not-allowed";

    setTimeout(function() {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";

        form.style.display = 'none';
        greetingMsg.style.display = 'none';
        ticketHeader.classList.remove('header-starlight', 'header-deepspace');
        
        if (isStar && isDeep) {
            ticketPlan.innerText = '통합 궤도 (VIP)';
            ticketHeader.classList.add('header-starlight');
        } else if (isStar) {
            ticketPlan.innerText = '스타라이트 라운지';
            ticketHeader.classList.add('header-starlight');
        } else if (isDeep) {
            ticketPlan.innerText = '딥 스페이스 랩';
            ticketHeader.classList.add('header-deepspace');
        }

        ticketName.innerText = userName;
        ticketEmail.innerText = userEmail; 
        const zones = ['ALPHA', 'NEBULA', 'ORION', 'NOVA', 'ECHO'];
        ticketSeat.innerText = `${zones[Math.floor(Math.random() * zones.length)]} - ${Math.floor(Math.random() * 99) + 1}`;
        ticketNumber.innerText = `VN-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
        const gates = ['G-01', 'G-07', 'G-42', 'H-99', 'S-11'];
        ticketGate.innerText = gates[Math.floor(Math.random() * gates.length)];
        const randomHour = Math.floor(Math.random() * (23 - 5 + 1)) + 5; 
        const randomMinute = ['00', '15', '30', '45'][Math.floor(Math.random() * 4)];
        ticketTime.innerText = `${randomHour.toString().padStart(2, '0')}:${randomMinute}`;
        
        ticketArea.style.display = 'block';
    }, 1500);
});

cancelTicketBtn.addEventListener('click', function() {
    if (confirm("정말 탑승을 취소하시겠습니까?\n취소하더라도 기존에 입력한 정보는 유지됩니다.")) {
        ticketArea.style.display = 'none'; 
        form.style.display = 'flex'; 
        greetingMsg.style.display = 'block';
        message.innerText = "탑승이 취소되었습니다. 궤도를 다시 확인하고 설정해 주세요.";
        message.style.color = "#f6d365"; 
    }
});