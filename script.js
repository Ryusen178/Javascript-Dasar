// Simulasi data cuaca (dummy, tanpa API)
const weatherData = {
    "Jakarta": {
      temperature: 30,
      condition: "Cerah"
    },
    "Bandung": {
      temperature: 25,
      condition: "Hujan Ringan"
    },
    "Surabaya": {
      temperature: 33,
      condition: "Panas Terik"
    },
    "Samarinda": {
      temperature: 28,
      condition: "Mendung"
    },
    "Tenggarong": {
        temperature: 50,
        condition: "Matahari 2"
    },
    }
  
  // Elemen
  const input = document.getElementById('cityInput');
  const showBtn = document.getElementById('showBtn');
  const resultBox = document.getElementById('result');
  const cityNameEl = document.getElementById('cityName');
  const tempEl = document.getElementById('temp');
  const condEl = document.getElementById('condition');
  
  function showWeather(){
    const raw = input.value.trim();
    if(!raw){
      alert("Masukkan nama kota terlebih dahulu!");
      return;
    }
  
    // Cari data (case sensitive sesuai object di atas)
    const data = weatherData[raw];
  
    if(!data){
      alert(`Kota "${raw}" tidak ditemukan di data dummy.`);
      resultBox.classList.add('hidden');
      return;
    }
  
    // Tampilkan di UI
    cityNameEl.textContent = `Cuaca di ${raw}:`;
    tempEl.textContent = `Suhu: ${data.temperature}°C`;
    condEl.textContent = `Kondisi: ${data.condition}`;
    resultBox.classList.remove('hidden');
  
    // Tampilkan di console log (sesuai contoh di gambar)
    console.log(`Cuaca di ${raw}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
  }
  
  // Event listener
  showBtn.addEventListener('click', showWeather);
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter') showWeather();
  });
  
  