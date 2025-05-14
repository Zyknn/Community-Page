/*
 * This code was written by Azuan — with love, bugs, and late-night heartbreaks.
 * Supported by XiezuMedia, who believed in the chaos.
 *
 * © 2025 Zykuan & XiezuMedia. All rights reserved.
 * Feel free to use or cherish it, like a good ex...
 * But remove this watermark? That's like forgetting who loved you first.
 * And trust me — we notice.
 *
 * Don't ghost the author.
 * www.instagram.com/zuanxfnd
 */
const groups = [
  {
    title: 'Calestia's Number 💖',
    header: 'Reach Your Favorite Bot',
    description: 'The easiest way to reach your favorite bot! Start chatting and let the magic begin.',
    image: 'https://files.catbox.moe/7sgzsu.jpg  ',
    url: 'https://wa.me/6282133532380  ',
    icon: 'fa-phone',
    color: 'bg-pink-500',
    buttonText: 'Chat With Bot',
    buttonIcon: 'fa-comment-dots'
  },
  {
    title: 'Official Group 🌟',
    header: 'Join Our Official Community',
    description: 'Join the official group where all Calestars unite. Stay connected and be part of something amazing!',
    image: 'https://files.catbox.moe/wwfco3.png  ',
    url: 'https://chat.whatsapp.com/HDockZJ48S82HUhsxu85kH  ',
    icon: 'fa-users',
    color: 'bg-purple-500',
    buttonText: 'Join Community',
    buttonIcon: 'fa-user-friends'
  },
  {
    title: 'Group Chat 💬',
    header: 'Chat and Bond with Calestars',
    description: 'A cozy space to chat, bond, and meet other Calestars. All are welcome to join the fun!',
    image: 'https://files.catbox.moe/wwfco3.png  ',
    url: 'https://chat.whatsapp.com/FP7AinRnbtYIKYksELwsL3  ',
    icon: 'fa-comments',
    color: 'bg-yellow-500',
    buttonText: 'Join Group Chat',
    buttonIcon: 'fa-comments'
  },
  {
    title: 'Official Channel 📢',
    header: 'Stay Updated with Us',
    description: 'Stay updated with all the latest news and announcements in our official channel. No distractions, just the essentials!',
    image: 'https://files.catbox.moe/u4d541.jpg  ',
    url: 'https://whatsapp.com/channel/0029VapSsRCGJP8CHvDLT11f  ',
    icon: 'fa-bullhorn',
    color: 'bg-blue-500',
    buttonText: 'Follow to Channel',
    buttonIcon: 'fa-bullhorn'
  },
  {
    title: 'Premium/Sewa Price List 🌸',
    header: 'Explore Our Services & Prices',
    description: 'Looking for premium or rental services? Check out the price list and discover all available options!',
    image: 'https://files.catbox.moe/o37b3u.jpg  ',
    url: 'https://www.xiezumedia.xyz  ',
    icon: 'fa-gem',
    color: 'bg-rose-400',
    buttonText: 'View Price List',
    buttonIcon: 'fa-list'
  }
];
let activeIndex = null;

function initGroups() {
  const groupsContainer = document.getElementById('groups');
  // Pastikan container ada sebelum mencoba mengisinya
  if (!groupsContainer) return;
  
  groupsContainer.innerHTML = '';
  groups.forEach((group, index) => {
    const card = document.createElement('div');
    card.id = `group-${index}`;
    card.className = `group-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 mb-4 hover:shadow-lg cursor-pointer ${activeIndex === index ? 'ring-2 ring-blue-500' : ''}`;
    card.style.opacity = '1'; // Langsung tampilkan tanpa animasi untuk mencegah masalah
    card.style.transform = 'translateY(0)';

    card.innerHTML = `
      <div class="p-5">
        <div class="flex items-center gap-4">
          <div class="relative">
            <img src="${group.image}" alt="${group.title}" class="w-14 h-14 rounded-xl object-cover border-2 border-white shadow-sm">
            <span class="absolute -bottom-1 -right-1 ${group.color} w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
              <i class="fas ${group.icon}"></i>
            </span>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-gray-800">${group.title}</h3>
            <p class="text-sm text-gray-500 mt-1">${group.header.substring(0, 60)}...</p>
          </div>
          <i class="fas fa-chevron-down text-gray-400 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}"></i>
        </div>
      </div>
      <div id="detail-${index}" class="transition-all duration-300 overflow-hidden max-h-0">
        <div class="px-5 pb-5 pt-0 border-t border-gray-100">
          <p class="text-gray-600 text-sm mb-4">${group.description}</p>
          <a href="${group.url}" target="_blank" 
             class="inline-flex items-center justify-center w-full ${group.color.replace('500', '500')} hover:${group.color.replace('500', '600')} text-white py-2 px-4 rounded-lg shadow-sm transition-all">
            <i class="fas ${group.buttonIcon} mr-2"></i>
            ${group.buttonText}
          </a>
        </div>
      </div>
    `;

    groupsContainer.appendChild(card);

    // Add event listener untuk klik pada seluruh card
    card.addEventListener('click', function(event) {
      // Cek apakah klik terjadi pada link atau child dari link
      if (event.target.tagName === 'A' || event.target.closest('a')) {
        return; // Biarkan link berfungsi normal
      }
      toggleGroupDetail(index);
    });
  });
}

function toggleGroupDetail(index) {
  const detail = document.getElementById(`detail-${index}`);
  if (!detail) return; // Pastikan elemen ada
  
  const allCards = document.querySelectorAll('.group-card');
  const allArrows = document.querySelectorAll('.fa-chevron-down');
  
  // Tutup semua kartu lain yang terbuka
  document.querySelectorAll('[id^="detail-"]').forEach((el, i) => {
    if (i !== index && el.classList.contains('max-h-[300px]')) {
      el.classList.remove('max-h-[300px]');
      el.classList.add('max-h-0');
      if (allCards[i]) allCards[i].classList.remove('ring-2', 'ring-blue-500');
      if (allArrows[i]) allArrows[i].classList.remove('rotate-180');
    }
  });

  // Buka/tutup kartu yang dipilih
  if (detail.classList.contains('max-h-[300px]')) {
    // Jika sudah terbuka, tutup
    detail.classList.remove('max-h-[300px]');
    detail.classList.add('max-h-0');
    if (allCards[index]) allCards[index].classList.remove('ring-2', 'ring-blue-500');
    if (allArrows[index]) allArrows[index].classList.remove('rotate-180');
    activeIndex = null;
  } else {
    // Jika tertutup, buka
    detail.classList.remove('max-h-0');
    detail.classList.add('max-h-[300px]');
    if (allCards[index]) allCards[index].classList.add('ring-2', 'ring-blue-500');
    if (allArrows[index]) allArrows[index].classList.add('rotate-180');
    activeIndex = index;
  }
}

const pageLoader = document.getElementById('page-loader');

function showLoader() {
  document.documentElement.style.scrollBehavior = 'auto';
  const scrollPosition = window.scrollY;
  document.body.style.top = `-${scrollPosition}px`;
  document.body.classList.add('fixed', 'w-full');

  if (pageLoader) {
    pageLoader.style.display = 'flex';
    setTimeout(() => {
      pageLoader.style.opacity = '1';
    }, 10);
  }
}

function hideLoader() {
  if (pageLoader) {
    pageLoader.style.opacity = '0';
    setTimeout(() => {
      pageLoader.style.display = 'none';
      document.body.classList.remove('fixed', 'w-full');
      const scrollPosition = parseInt(document.body.style.top || '0') * -1;
      document.body.style.top = '';
      document.documentElement.style.scrollBehavior = 'smooth';
      window.scrollTo({ top: scrollPosition, behavior: 'auto' });

      initGroups();
    }, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Langsung inisialisasi grup tanpa loader untuk mencegah looping
  initGroups();
  
  // Sembunyikan loader jika masih ada
  if (pageLoader) {
    pageLoader.style.display = 'none';
  }
});

// Fungsi untuk toggle detail group (versi global)
window.toggleGroupDetail = toggleGroupDetail;

// Inisialisasi dark mode
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Tambahkan kelas transisi pada toggle button
toggleBtn.querySelector('span').classList.add('transition-all');

// Cek apakah dark mode aktif dari localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Terapkan dark mode jika diperlukan
if (isDarkMode) {
  body.classList.add('dark-mode');
  toggleBtn.querySelector('span').style.transform = 'translateX(22px)';
  toggleBtn.querySelector('i').className = 'fas fa-sun text-xs text-yellow-300';
}

// Fungsi untuk update warna teks sesuai mode gelap/terang
function updateDarkTextElements(isDark) {
  document.querySelectorAll('[data-dark-text]').forEach(el => {
    // Hapus kelas text sebelumnya
    const classList = Array.from(el.classList).filter(
      cls => !cls.startsWith('text-')
    );
    
    const defaultClass = classList.join(' ');
    const darkClass = el.getAttribute('data-dark-text');

    if (isDark) {
      el.className = `${defaultClass} ${darkClass}`;
    } else {
      el.className = defaultClass;
    }
  });
}

// Panggil fungsi update warna saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  updateDarkTextElements(isDarkMode);
});

// Event listener untuk toggle dark mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isActive = body.classList.contains('dark-mode');

  // Ganti ikon dan posisi toggle
  const sunIcon = 'fas fa-sun text-xs text-yellow-300';
  const moonIcon = 'fas fa-moon text-xs text-gray-700';

  toggleBtn.querySelector('i').className = isActive ? sunIcon : moonIcon;
  toggleBtn.querySelector('span').style.transform = isActive ? 'translateX(22px)' : 'translateX(0.5px)';

  // Simpan preferensi ke localStorage
  localStorage.setItem('darkMode', isActive);

  // Update warna teks di musik player
  updateDarkTextElements(isActive);
});

// Music Player Logic
const audio = new Audio("https://files.catbox.moe/rrwrw6.mp3 "); // Ganti dengan URL musikmu
const playBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const cover = document.getElementById('album-cover');

const progressBar = document.getElementById('progress-bar');
const progressPointer = document.getElementById('progress-pointer');
const progressContainer = document.getElementById('progress-container'); // Pastikan ID ini ada di HTML

const currentTimeEl = document.getElementById('current-time');
const totalDurationEl = document.getElementById('total-duration');

let isPlaying = false;
let isDragging = false;

// Format durasi ke MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update UI saat durasi tersedia
audio.addEventListener('loadedmetadata', () => {
  totalDurationEl.textContent = formatTime(audio.duration);
});

// Update progress bar & pointer
function updateProgress() {
  if (!isNaN(audio.duration)) {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressPointer.style.left = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
}

// Toggle play/pause
playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play();
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    isPlaying = true;
  } else {
    audio.pause();
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
    isPlaying = false;
  }
});

// Update progress setiap detik
setInterval(updateProgress, 1000);

// Drag pointer untuk seek
progressPointer.addEventListener('mousedown', (e) => {
  e.preventDefault(); // Hindari drag seleksi
  isDragging = true;
});

// Saat mouse bergerak (drag)
document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    seek(e);
  }
});

// Saat melepas klik (mouseup)
document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    seek({ clientX: progressPointer.getBoundingClientRect().left + 5 }); // Update posisi akhir
  }
});

// Untuk touch device (ponsel/tablet)
progressContainer.addEventListener('touchstart', (e) => {
  isDragging = true;
  seek(e.touches[0]);
});

progressContainer.addEventListener('touchmove', (e) => {
  if (isDragging) {
    seek(e.touches[0]);
  }
});

progressContainer.addEventListener('touchend', () => {
  if (isDragging) {
    isDragging = false;
    seek({ clientX: progressPointer.getBoundingClientRect().left + 5 });
  }
});

// Fungsi utama untuk mencari posisi lagu
function seek(event) {
  const rect = progressContainer.getBoundingClientRect();
  let offsetX = event.clientX - rect.left;

  // Batas kiri dan kanan
  if (offsetX < 0) offsetX = 0;
  if (offsetX > rect.width) offsetX = rect.width;

  const percent = offsetX / rect.width;
  const newTime = percent * audio.duration;

  // Update UI sambil dragging
  if (isDragging) {
    progressBar.style.width = `${percent * 100}%`;
    progressPointer.style.left = `${percent * 100}%`;
    currentTimeEl.textContent = formatTime(newTime);
  } else {
    // Set waktu lagu jika bukan drag
    audio.currentTime = newTime;
    updateProgress();
  }
}

// Klik langsung di progress bar untuk geser durasi
progressContainer.addEventListener('click', (e) => {
  if (!isDragging) {
    seek(e);
  }
});

// Stop musik jika tab ditutup
window.addEventListener('beforeunload', () => {
  audio.pause();
});
