const form = document.querySelector('.subscribe-form');
const nameInput = document.getElementById('subscriber-name');
const emailInput = document.getElementById('email');
const planSelect = document.getElementById('plan');
const submitBtn = document.querySelector('.primary-button');
const greetingMsg = document.getElementById('greeting-message');
const message = document.getElementById('result-message');
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
        message.innerText = "이름을 입력해 주세요.";
        message.style.color = "#ff4757"; 
    } else if (userEmail === "") {
        message.innerText = "이메일 주소를 입력해 주세요.";
        message.style.color = "#ff4757";
    } else if (selectedPlan === "") {
        message.innerText = "원하시는 궤도를 선택해 주세요.";
        message.style.color = "#ff4757";
   } else {
        form.style.display = 'none';
        greetingMsg.style.display = 'none';

        ticketHeader.classList.remove('header-starlight', 'header-deepspace');
        
        if (selectedPlan === 'starlight') {
            ticketPlan.innerText = '스타라이트 라운지';
            ticketHeader.classList.add('header-starlight');
        } else if (selectedPlan === 'deepspace') {
            ticketPlan.innerText = '딥 스페이스 랩';
            ticketHeader.classList.add('header-deepspace');
        }

        ticketName.innerText = userName;
        ticketEmail.innerText = userEmail; 
        const zones = ['ALPHA', 'NEBULA', 'ORION', 'NOVA', 'ECHO'];
        const randomZone = zones[Math.floor(Math.random() * zones.length)];
        const randomSeatNum = Math.floor(Math.random() * 99) + 1;
        ticketSeat.innerText = `${randomZone} - ${randomSeatNum.toString().padStart(2, '0')}`;
        const randomNum = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        ticketNumber.innerText = `VN-${randomNum}`;
        const gates = ['G-01', 'G-07', 'G-42', 'H-99', 'S-11'];
        ticketGate.innerText = gates[Math.floor(Math.random() * gates.length)];
        const randomHour = Math.floor(Math.random() * (23 - 5 + 1)) + 5; 
        const randomMinute = ['00', '15', '30', '45'][Math.floor(Math.random() * 4)];
        ticketTime.innerText = `${randomHour.toString().padStart(2, '0')}:${randomMinute}`;
        ticketArea.style.display = 'block';
    }
});

cancelTicketBtn.addEventListener('click', function() {
    let confirmCancel = confirm("정말 탑승을 취소하시겠습니까?\n취소하더라도 기존에 입력한 정보는 유지됩니다.");
    
    if (confirmCancel) {
        ticketArea.style.display = 'none'; 
        
        form.style.display = 'flex'; 
        greetingMsg.style.display = 'block';
        
        submitBtn.disabled = false;
        message.innerText = "탑승이 취소되었습니다. 궤도를 다시 확인하고 설정해 주세요.";
        message.style.color = "#f6d365"; 

        planSelect.dispatchEvent(new Event('change'));
    }
});
