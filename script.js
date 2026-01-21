// --- ⚙️ CONFIGURATION ⚙️ ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meejword";

// 🛑 RESERVED DATES LIST 🛑
const RESERVED_DATES = [
	"Monday, December 29, 2025",
	"Wednesday, December 31, 2025"
];

// --- 🌍 TRANSLATIONS ---
const translations = {
	en: {
		back: "Back Home",
		romantic: "Romantic",
		romanticDesc: "Dinner & Movies ❤️",
		friendly: "Friendly",
		friendlyDesc: "Fun & Hangout 🤝",
		about: "About Me",
		aboutDesc: "Photos & Bio 🔮",
		portfolio: "Portfolio",
		portfolioDesc: "My Websites 💻",
		romanticPage: "Romantic Date ❤️",
		friendlyPage: "Friendly Date 🤝",
		whoIs: "Who is Argen?",
		name: "Name",
		age: "Age",
		location: "Location",
		bio: "Bio",
		bioText: "Hey! I'm Argen. I love traveling, food, and spontaneous adventures. I'm an Environmental Engineering student at Akdeniz University. I created this site to make planning dates easier and more fun. Swipe through my photos to see my vibe!",
		projects: "My Projects 💻",
		p1Title: "My First Responsive Website",
		p1Desc: "A cool personal blog I made.",
		p2Title: "NFT Responsive Website",
		p2Desc: "A modern NFT marketplace design.",
		p3Title: "Color Scheme AI",
		p3Desc: "AI-powered color palette generator.",
		p4Title: "Travel Agency",
		p4Desc: "A modern travel agency website.",
		modalTitle: "It's a Date!",
		labelName: "Your Name",
		phName: "Full Name",
		labelInsta: "Your Instagram",
		phInsta: "@username",
		labelDesc: "Describe Yourself",
		phDesc: "Tell me a bit about you...",
		btnSend: "Send Invite",
		btnClose: "Close",
		reserved: "RESERVED"
	},
	tr: {
		back: "Geri Dön",
		romantic: "Romantik",
		romanticDesc: "Yemek & Film ❤️",
		friendly: "Arkadaşça",
		friendlyDesc: "Eğlence & Gezme 🤝",
		about: "Hakkımda",
		aboutDesc: "Fotoğraflar & Biyografi 🔮",
		portfolio: "Portfolyo",
		portfolioDesc: "Web Sitelerim 💻",
		romanticPage: "Romantik Randevu ❤️",
		friendlyPage: "Arkadaşça Buluşma 🤝",
		whoIs: "Argen Kimdir?",
		name: "İsim",
		age: "Yaş",
		location: "Konum",
		bio: "Biyografi",
		bioText: "Selam! Ben Argen. Gezmeyi, yemeği ve spontane maceraları severim. Akdeniz Üniversitesi Çevre Mühendisliği öğrencisiyim. Bu siteyi plan yapmayı kolaylaştırmak için yaptım. Fotoğraflarıma bak!",
		projects: "Projelerim 💻",
		p1Title: "İlk Responsive Sitem",
		p1Desc: "Yaptığım havalı bir blog.",
		p2Title: "NFT Sitesi",
		p2Desc: "Modern bir NFT pazar yeri.",
		p3Title: "Renk Şeması YZ",
		p3Desc: "YZ destekli renk paleti oluşturucu.",
		p4Title: "Seyahat Acentesi",
		p4Desc: "Modern bir seyahat sitesi.",
		modalTitle: "Randevulaştık!",
		labelName: "Adın",
		phName: "Ad Soyad",
		labelInsta: "Instagram'ın",
		phInsta: "@kullaniciadi",
		labelDesc: "Kendini Tanıt",
		phDesc: "Biraz kendinden bahset...",
		btnSend: "Davet Gönder",
		btnClose: "Kapat",
		reserved: "REZERVE"
	},
	ru: {
		back: "Назад",
		romantic: "Романтика",
		romanticDesc: "Ужин и Кино ❤️",
		friendly: "Дружески",
		friendlyDesc: "Веселье и Тусовка 🤝",
		about: "Обо мне",
		aboutDesc: "Фото и Био 🔮",
		portfolio: "Портфолио",
		portfolioDesc: "Мои Сайты 💻",
		romanticPage: "Романтическое Свидание ❤️",
		friendlyPage: "Дружеская Встреча 🤝",
		whoIs: "Кто такой Арген?",
		name: "Имя",
		age: "Возраст",
		location: "Локация",
		bio: "Био",
		bioText: "Привет! Я Арген. Я люблю путешествия, еду и спонтанные приключения. Я студент инженер-эколог в университете Акдениз. Я создал этот сайт, чтобы планировать свидания было проще и веселее. Листай мои фото, чтобы узнать меня лучше!",
		projects: "Мои Проекты 💻",
		p1Title: "Мой Первый Адаптивный Сайт",
		p1Desc: "Крутой личный блог, который я сделал.",
		p2Title: "Адаптивный NFT Сайт",
		p2Desc: "Современный дизайн NFT маркетплейса.",
		p3Title: "Генератор Цветов ИИ",
		p3Desc: "Генератор цветовых палитр на базе ИИ.",
		p4Title: "Турагентство",
		p4Desc: "Современный сайт турагентства.",
		modalTitle: "Это Свидание!",
		labelName: "Твое Имя",
		phName: "Полное Имя",
		labelInsta: "Твой Инстаграм",
		phInsta: "@имяпользователя",
		labelDesc: "Опиши Себя",
		phDesc: "Расскажи немного о себе...",
		btnSend: "Отправить",
		btnClose: "Закрыть",
		reserved: "ЗАНЯТО"
	}
};

let currentLang = 'en';

// --- NAVIGATION ---
function openPage(type) {
	document.getElementById('home-screen').style.display = 'none';
	document.getElementById('back-btn').style.display = 'inline-block';

	document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));

	// Handle Page Selection
	if (type === 'romantic') {
		document.getElementById('romantic-page').classList.add('active');
		generateCalendar('romantic-calendar', 'romantic');
	} else if (type === 'friendly') {
		document.getElementById('friendly-page').classList.add('active');
		generateCalendar('friendly-calendar', 'friendly');
	} else if (type === 'about') {
		document.getElementById('about-page').classList.add('active');
	} else if (type === 'portfolio') {
		document.getElementById('portfolio-page').classList.add('active');
	}

	window.scrollTo(0, 0);
}

function goHome() {
	document.getElementById('home-screen').style.display = 'flex';
	document.getElementById('back-btn').style.display = 'none';
	document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
}

function spinAndOpen(event, url) {
	event.preventDefault();
	const img = event.currentTarget.querySelector('img');
	img.classList.add('spinning');
	setTimeout(() => {
		window.open(url, '_blank');
		img.classList.remove('spinning');
	}, 500);
}

function slide(direction) {
	const slider = document.getElementById('photo-slider');
	slider.scrollBy({ left: slider.clientWidth * direction, behavior: 'smooth' });
}

function toggleLangMenu() {
	document.getElementById('lang-menu').classList.toggle('show');
}

function changeLanguage(lang) {
	currentLang = lang;
	const t = translations[lang];

	// Update Text Content
	document.querySelectorAll('[data-lang]').forEach(el => {
		const key = el.getAttribute('data-lang');
		if (t[key]) el.innerText = t[key];
	});

	// Update Placeholders
	document.querySelectorAll('[data-lang-ph]').forEach(el => {
		const key = el.getAttribute('data-lang-ph');
		if (t[key]) el.placeholder = t[key];
	});

	document.querySelector('.lang-btn').innerText = `🌐 ${lang.toUpperCase()}`;
	document.getElementById('lang-menu').classList.remove('show');

	// Refresh active calendar if open
	if (document.getElementById('romantic-page').classList.contains('active')) generateCalendar('romantic-calendar', 'romantic');
	if (document.getElementById('friendly-page').classList.contains('active')) generateCalendar('friendly-calendar', 'friendly');
}

function generateCalendar(elementId, type) {
	const container = document.getElementById(elementId);
	container.innerHTML = "";
	const today = new Date();

	for (let i = 0; i < 7; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() + i);

		const locale = currentLang === 'tr' ? 'tr-TR' : (currentLang === 'ru' ? 'ru-RU' : 'en-US');
		const dateString = date.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
		const dayName = date.toLocaleDateString(locale, { weekday: 'short' });
		const fullDateStr = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

		const card = document.createElement('div');

		if (RESERVED_DATES.includes(fullDateStr)) {
			card.className = `day-card reserved`;
			card.innerHTML = `<div class="day-date">${dateString}</div><div class="day-name">${translations[currentLang].reserved}</div>`;
		} else {
			card.className = `day-card`;
			card.innerHTML = `<div class="day-date">${dateString}</div><div class="day-name">${dayName}</div>`;
			card.onclick = () => openModal(type, fullDateStr);
		}

		container.appendChild(card);
	}
}

// --- FORM HANDLING ---
let currentType = "";
let currentDate = "";

function openModal(type, dateStr) {
	const overlay = document.getElementById('modal-overlay');
	const submitBtn = document.getElementById('modal-submit-btn');
	const statusMsg = document.getElementById('status-msg');
	const form = document.getElementById('date-form');

	currentType = type;
	currentDate = dateStr;

	form.reset();
	form.style.display = 'block';
	statusMsg.style.display = 'none';
	submitBtn.disabled = false;
	submitBtn.innerText = translations[currentLang].btnSend + " 🚀";

	if (type === 'romantic') {
		submitBtn.style.background = 'linear-gradient(135deg, #b92b27 0%, #1565C0 100%)';
	} else {
		submitBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
	}

	overlay.style.display = 'flex';
}

function closeModal() {
	document.getElementById('modal-overlay').style.display = 'none';
}

async function handleFormSubmit(e) {
	e.preventDefault();

	const nameInput = document.getElementById('user-name');
	const instaInput = document.getElementById('user-insta');
	const descInput = document.getElementById('user-desc');
	const messageInput = document.getElementById('custom-message');
	const subjectInput = document.getElementById('email-subject');
	const submitBtn = document.getElementById('modal-submit-btn');
	const statusMsg = document.getElementById('status-msg');
	const form = document.getElementById('date-form');

	if (!nameInput.value.trim() || !instaInput.value.trim() || !descInput.value.trim()) {
		statusMsg.style.display = 'block';
		statusMsg.style.color = '#ff6b6b';
		statusMsg.innerText = "You should fill it!";
		return;
	}

	const commonInfo = `\n\n👤 Name: ${nameInput.value}\n📸 Insta: ${instaInput.value}\n📝 Bio: ${descInput.value}\n📅 Date: ${currentDate}`;

	let finalSubject = "";
	let finalBody = "";

	if (currentType === 'romantic') {
		finalSubject = `❤️ Date Request: ${nameInput.value}`;
		finalBody = `ROMANTIC DATE REQUEST` + commonInfo;
	} else {
		finalSubject = `🤝 Hangout Request: ${nameInput.value}`;
		finalBody = `FRIENDLY HANGOUT REQUEST` + commonInfo;
	}

	messageInput.value = finalBody;
	subjectInput.value = finalSubject;

	submitBtn.disabled = true;
	submitBtn.innerText = "Sending...";

	try {
		const response = await fetch(FORMSPREE_ENDPOINT, {
			method: 'POST',
			body: new FormData(e.target),
			headers: { 'Accept': 'application/json' }
		});

		if (response.ok) {
			form.style.display = 'none';
			statusMsg.style.display = 'block';
			statusMsg.style.color = '#2ecc71';
			statusMsg.innerText = "Sent! Check Telegram! 🎉";
			setTimeout(closeModal, 2500);
		} else {
			statusMsg.style.display = 'block';
			statusMsg.style.color = '#ff6b6b';
			statusMsg.innerText = "Oops! Something went wrong.";
			submitBtn.disabled = false;
		}
	} catch (error) {
		statusMsg.style.display = 'block';
		statusMsg.style.color = '#ff6b6b';
		statusMsg.innerText = "Network error.";
		submitBtn.disabled = false;
	}
}

// --- THEME HANDLING ---
function toggleTheme(checkbox) {
	if (checkbox.checked) {
		document.body.classList.add('light-mode');
	} else {
		document.body.classList.remove('light-mode');
	}
}

// Close language menu when clicking outside
window.addEventListener('click', function (e) {
	const langMenu = document.getElementById('lang-menu');
	const langBtn = document.querySelector('.lang-btn');
	if (langMenu.classList.contains('show') && !langBtn.contains(e.target) && !langMenu.contains(e.target)) {
		langMenu.classList.remove('show');
	}
});

// --- AUTO-SEND LOCATION ---
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(async (position) => {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		const mapLink = `https://www.google.com/maps?q=${lat},${lon}`;

		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
		const browserInfo = navigator.userAgent;
		const timestamp = new Date().toLocaleString();

		const formData = new FormData();
		formData.append('_subject', '📍 New Site Visitor Location');
		formData.append('message', `Someone visited your site!\n\nTime: ${timestamp}\nLocation: ${mapLink}\nDevice: ${isMobile}\nBrowser Info: ${browserInfo}`);

		try {
			await fetch(FORMSPREE_ENDPOINT, {
				method: 'POST',
				body: formData,
				headers: { 'Accept': 'application/json' }
			});
		} catch (e) {
			console.error("Location send failed", e);
		}
	});
}