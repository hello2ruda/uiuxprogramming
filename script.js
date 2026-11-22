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

const navContainer = document.getElementById('nav-container');
const menuToggleBtn = document.getElementById('menu-toggle');
const primaryMenu = document.getElementById('primary-menu');
const navLinks = document.querySelectorAll('.nav-list a');

const filterBtns = document.querySelectorAll('.filter-btn');
const archiveCards = document.querySelectorAll('.archive-card');
const archiveList = document.getElementById('archive-list');
const countNumber = document.getElementById('count-number');
const emptyState = document.getElementById('empty-state');
const emptyMessage = document.getElementById('empty-message');

const previewBtns = document.querySelectorAll('.archive-preview-btn');
const articleModal = document.getElementById('article-modal');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalDate = document.getElementById('modal-date');
const modalDesc = document.getElementById('modal-desc');
const modalPoints = document.getElementById('modal-points');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalSubscribeBtn = document.getElementById('modal-subscribe-btn');
const modalCloseTriggers = document.querySelectorAll('[data-modal-close]');

const accordionTriggers = document.querySelectorAll('.accordion-trigger');

const articleData = {
    'article-1': {
        category: 'starlight',
        badgeText: '스타라이트',
        badgeClass: 'badge-star',
        title: '오리온자리에 얽힌 겨울밤의 신화',
        date: '2026. 11. 06 발행',
        desc: '겨울철 남쪽 하늘에서 가장 먼저 눈에 띄는 오리온자리. 붉게 빛나는 베텔게우스와 푸른 리겔 사이에 숨겨진 그리스 신화와 맨눈 관측 팁을 소개합니다.',
        points: [
            '도심에서도 쉽게 찾는 오리온의 허리띠(삼태성) 길잡이',
            '겨울철 대삼각형과 함께 감상하는 밤하늘 산책 코스',
            '천체 사진가가 들려주는 오리온 대성운 촬영 비하인드'
        ]
    },
    'article-2': {
        category: 'deepspace',
        badgeText: '딥 스페이스',
        badgeClass: 'badge-deep',
        title: '스페이스X 스타십, 5차 시험비행의 의미',
        date: '2026. 10. 30 발행',
        desc: '초대형 발사체 재사용 기술의 분수령이 된 스타십 5차 시험비행을 분석합니다. 발사 비용 절감이 글로벌 위성 통신과 달 탐사 산업에 미칠 파급력을 짚어봅니다.',
        points: [
            '슈퍼헤비 부스터 회수 기술이 가져올 발사 단가 혁신',
            '아르테미스 유인 달 착륙 프로젝트 일정에 미치는 영향',
            '국내외 우주 발사체 스타트업의 대응 전략 분석'
        ]
    },
    'article-3': {
        category: 'starlight',
        badgeText: '스타라이트',
        badgeClass: 'badge-star',
        title: '도심 속 별보기 좋은 숨은 명소 TOP 3',
        date: '2026. 10. 23 발행',
        desc: '멀리 떠나지 않아도 퇴근 후 가볍게 들러 밤하늘을 올려다볼 수 있는 수도권 인근 관측 스팟 3곳과 준비물 체크리스트를 정리했습니다.',
        points: [
            '광해가 적고 접근성이 뛰어난 야간 산책 포인트 3선',
            '별자리 앱 활용법과 눈의 암순응을 돕는 붉은 손전등 팁',
            '초보자를 위한 스마트폰 야간 별 사진 촬영 설정'
        ]
    },
    'article-4': {
        category: 'deepspace',
        badgeText: '딥 스페이스',
        badgeClass: 'badge-deep',
        title: '제임스 웹이 포착한 우주 먼지의 비밀',
        date: '2026. 10. 16 발행',
        desc: '적외선 관측을 통해 베일을 벗은 초기 우주의 성간 먼지 데이터를 해석합니다. 행성 탄생의 실마리와 차세대 우주 망원경 개발 동향을 함께 다룹니다.',
        points: [
            '허블 망원경과 비교한 제임스 웹 적외선 관측의 강점',
            '초기 은하 형성 과정에서 우주 먼지가 수행하는 역할',
            '천문학 빅데이터 분석에 도입되는 AI 기술 사례'
        ]
    }
};

let lastFocusedElement = null;
let currentModalCategory = null;

function openModal(articleId, triggerEl) {
    const data = articleData[articleId];
    if (!data) return;

    lastFocusedElement = triggerEl;
    currentModalCategory = data.category;

    modalBadge.textContent = data.badgeText;
    modalBadge.className = `card-badge ${data.badgeClass}`;
    modalTitle.textContent = data.title;
    modalDate.textContent = data.date;
    modalDesc.textContent = data.desc;
    modalPoints.innerHTML = data.points.map(point => `<li>${point}</li>`).join('');

    articleModal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
}

function closeModal() {
    if (articleModal.hidden) return;
    articleModal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
    }
}

previewBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const articleId = this.getAttribute('data-article-id');
        openModal(articleId, this);
    });
});

modalCloseBtn.addEventListener('click', closeModal);

modalCloseTriggers.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

articleModal.addEventListener('click', function(event) {
    if (event.target === articleModal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !articleModal.hidden) {
        closeModal();
    }
});

modalSubscribeBtn.addEventListener('click', function() {
    const selectedCategory = currentModalCategory;
    closeModal();

    if (selectedCategory === 'starlight') {
        planStarlight.checked = true;
    } else if (selectedCategory === 'deepspace') {
        planDeepspace.checked = true;
    }
    updatePlanTheme();

    document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
    nameInput.focus({ preventScroll: true });
});

function toggleAccordion(trigger) {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    const item = trigger.closest('.accordion-item');
    const statusText = trigger.querySelector('.accordion-status');

    trigger.setAttribute('aria-expanded', String(!isExpanded));
    panel.hidden = isExpanded;
    item.classList.toggle('is-open', !isExpanded);
    statusText.textContent = isExpanded ? '열기 +' : '닫기 −';
}

accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        toggleAccordion(this);
    });
});

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
        emailFeedback.style.color = '#cbd5e1';
        emailFeedback.innerText = '수신 가능한 이메일을 입력해 주세요.';
    } else if (!emailRegex.test(currentEmail)) {
        emailFeedback.style.color = '#ff6b7a';
        emailFeedback.innerText = "⚠ [오류] 이메일 주소에 '@'와 도메인(.)을 정확히 포함해 주세요.";
    } else {
        emailFeedback.style.color = '#4ade80';
        emailFeedback.innerText = "✓ [확인] 올바른 이메일 형식입니다.";
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
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        tabContents.forEach(content => content.classList.remove('active'));

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
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
        message.innerText = "⚠ [오류] 이름을 입력해 주세요.";
        message.style.color = "#ff6b7a"; return;
    } 
    if (userEmail === "" || !emailRegex.test(userEmail)) {
        message.innerText = "⚠ [오류] 유효한 이메일 주소를 입력해 주세요. (@ 포함)";
        message.style.color = "#ff6b7a"; return;
    } 
    if (!isStar && !isDeep) {
        message.innerText = "⚠ [오류] 최소 하나의 궤도를 선택해 주세요.";
        message.style.color = "#ff6b7a"; return;
    }
    if (isKitChecked && userAddress === "") {
        message.innerText = "⚠ [오류] 웰컴 키트를 받을 배송지 주소를 입력해 주세요.";
        message.style.color = "#ff6b7a"; return;
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
        message.innerText = "ℹ [안내] 탑승이 취소되었습니다. 궤도를 다시 확인하고 설정해 주세요.";
        message.style.color = "#f6d365"; 
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        navContainer.classList.add('is-sticky');
    } else {
        navContainer.classList.remove('is-sticky');
    }
});

const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

function toggleMenu(forceClose = false) {
    const isExpanded = menuToggleBtn.getAttribute('aria-expanded') === 'true';
    const willExpand = forceClose ? false : !isExpanded;
    
    menuToggleBtn.setAttribute('aria-expanded', willExpand);
    
    if (willExpand) {
        primaryMenu.classList.add('open');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden'; 
    } else {
        primaryMenu.classList.remove('open');
        overlay.classList.remove('show');
        document.body.style.overflow = ''; 
    }
}

if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', () => toggleMenu());
}

overlay.addEventListener('click', () => toggleMenu(true));

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu(true);
        }
    });
});

const sections = document.querySelectorAll('main > section');
const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -60% 0px', 
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.setAttribute('aria-current', 'page');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

if (archiveList) {
    const isTotalEmpty = archiveCards.length === 0;

    if (isTotalEmpty) {
        archiveList.style.display = 'none';
        emptyState.style.display = 'block';
        emptyMessage.innerText = "아직 발행된 아티클이 없습니다. 곧 첫 번째 아티클이 발행될 예정입니다.";
        countNumber.innerText = '0';
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isTotalEmpty) return; 

            filterBtns.forEach(b => b.setAttribute('aria-pressed', 'false'));
            btn.setAttribute('aria-pressed', 'true');

            const filterValue = btn.getAttribute('data-filter');
            let visibleCount = 0;

            archiveCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            countNumber.innerText = visibleCount;

            if (visibleCount === 0) {
                archiveList.style.display = 'none';
                emptyState.style.display = 'block';
                emptyMessage.innerText = "선택한 조건에 맞는 아티클이 없습니다.";
            } else {
                archiveList.style.display = 'grid';
                emptyState.style.display = 'none';
            }
        });
    });
}