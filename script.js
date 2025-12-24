// --- ⚙️ CONFIGURATION ⚙️ ---
const FORMSPREE_ENDPOINT = "https://formspree.io/f/meejword";;

// --- NAVIGATION ---
function openPage(type) {
	document.getElementById('home-screen').style.display = 'none';
	document.getElementById('back-btn').style.display = 'inline-block';
	document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));

	if (type === 'romantic') {
		document.getElementById('romantic-page').classList.add('active');
		generateCalendar('romantic-calendar', 'romantic');
	} else if (type === 'friendly') {
		document.getElementById('friendly-page').classList.add('active');
		generateCalendar('friendly-calendar', 'friendly');
	} else if (type === 'about') {
		document.getElementById('about-page').classList.add('active');
	}
}

function goHome() {
	document.getElementById('home-screen').style.display = 'flex';
	document.getElementById('back-btn').style.display = 'none';
	document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
}

function slide(direction) {
	const slider = document.getElementById('photo-slider');
	slider.scrollBy({ left: slider.clientWidth * direction, behavior: 'smooth' });
}

function generateCalendar(elementId, type) {
	const container = document.getElementById(elementId);
	container.innerHTML = "";
	const today = new Date();

	for (let i = 0; i < 7; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() + i);
		const dateString = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
		const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
		const fullDateStr = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

		const card = document.createElement('div');
		card.className = `day-card`;
		card.innerHTML = `<div class="day-date">${dateString}</div><div class="day-name">${dayName}</div>`;
		card.onclick = () => openModal(type, fullDateStr);
		container.appendChild(card);
	}
}

// --- UPDATED FORM LOGIC ---
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
	submitBtn.innerText = "Send Invite 🚀";

	if (type === 'romantic') {
		submitBtn.style.background = '#d93644';
		submitBtn.style.boxShadow = '0 6px 0 #9e232e';
	} else {
		submitBtn.style.background = '#004e92';
		submitBtn.style.boxShadow = '0 6px 0 #002c52';
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

	// --- VALIDATION: CHECK IF EMPTY ---
	if (!nameInput.value.trim() || !instaInput.value.trim() || !descInput.value.trim()) {
		statusMsg.style.display = 'block';
		statusMsg.style.color = 'red';
		// This is the specific text you asked for:
		statusMsg.innerText = "You should fill it!";
		return; // Stop code here
	}

	let finalSubject = "";
	let finalBody = "";

	// Build the message with new fields
	const commonInfo = `\n\n👤 Name: ${nameInput.value}\n📸 Insta: ${instaInput.value}\n📝 Bio: ${descInput.value}\n📅 Date: ${currentDate}`;

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
	submitBtn.style.top = "4px";
	submitBtn.style.boxShadow = "none";

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
			statusMsg.style.color = '#e74c3c';
			statusMsg.innerText = "Oops! Something went wrong.";
			resetBtnStyle();
		}
	} catch (error) {
		statusMsg.style.display = 'block';
		statusMsg.style.color = '#e74c3c';
		statusMsg.innerText = "Network error.";
		resetBtnStyle();
	}
}

function resetBtnStyle() {
	const btn = document.getElementById('modal-submit-btn');
	btn.disabled = false;
	btn.innerText = "Try Again";
	btn.style.top = "0";
	if (currentType === 'romantic') btn.style.boxShadow = '0 6px 0 #9e232e';
	else btn.style.boxShadow = '0 6px 0 #002c52';
}