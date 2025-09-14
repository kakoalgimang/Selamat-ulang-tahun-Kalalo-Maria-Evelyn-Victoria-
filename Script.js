const konfetiCanvas = document.getElementById('konfeti');
const ctx = konfetiCanvas.getContext('2d');
const namaOrangSpan = document.getElementById('namaOrang');
const tombolUlang = document.getElementById('tombolUlang');
const inputNama = document.getElementById('inputNama');
const simpanNamaButton = document.getElementById('simpanNama');

konfetiCanvas.width = konfetiCanvas.offsetWidth;
konfetiCanvas.height = konfetiCanvas.offsetHeight;

let konfeti = [];
for (let i = 0; i < 100; i++) {
	konfeti.push({
		x: Math.random() * konfetiCanvas.width,
		y: Math.random() * konfetiCanvas.height,
		r: Math.random() * 5 + 2,
		color: `hsl(${Math.random() * 360}, 100%, 50%)`,
		speed: Math.random() * 2 + 1
	});
}

function gambarKonfeti() {
	ctx.clearRect(0, 0, konfetiCanvas.width, konfetiCanvas.height);
	konfeti.forEach(p => {
		ctx.fillStyle = p.color;
		ctx.beginPath();
		ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
		ctx.fill();
		p.y += p.speed;
		if (p.y > konfetiCanvas.height) p.y = -p.r;
	});
	requestAnimationFrame(gambarKonfeti);
}

gambarKonfeti();

tombolUlang.addEventListener('click', () => {
	konfeti.forEach(p => {
		p.y = Math.random() * konfetiCanvas.height;
		p.x = Math.random() * konfetiCanvas.width;
	});
});

simpanNamaButton.addEventListener('click', () => {
	const nama = inputNama.value.trim();
	if (nama) {
		namaOrangSpan.textContent = nama;
		inputNama.value = '';
	} else {
		alert('Masukkan nama!');
	}
});