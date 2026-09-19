/**
 * "Does My Identity Have Space?" Online Exhibition
 * Core JavaScript: Lightbox Modal, Interactive Audio & Video Placeholders, and Switcher
 */

const ARTWORKS_DATABASE = [
  {
    id: "01",
    code: "DMIS# 01",
    student: "Jan",
    title: "Artwork by Jan",
    grade: "Grade 11 Visual Arts",
    medium: "Burnt Flag, Candle Wax & Mixed Media Assemblage",
    image: "assets/images/artworks/student-01-jan.jpg",
    rationale: "My work explores how people around me often reject my identity as a gay young individual. I thus burnt the flag and also surrounded it with wax. I burnt the flag to show that it is a source of pain and rejection for me, and I surrounded it with wax as a way to try and hide it and project it. The part of my identity that is accepted is the fact that I am a strong academic achiever. I dashed the colourful wax all over my page to speak of celebration, as this part of my identity is constantly being praised.",
    quote: "I dashed the colourful wax all over my page to speak of celebration, as this part of my identity is constantly being praised."
  },
  {
    id: "02",
    code: "DMIS# 02",
    student: "KayKay",
    title: "Artwork by KayKay",
    grade: "Grade 11 Visual Arts",
    medium: "Burnt Report Card, Soft Red Wax & Assemblage",
    image: "assets/images/artworks/student-02-kaykay.jpg",
    rationale: "I burnt the edges of my report card with all my brilliant marks, as it is something that people accept and praise about me, but it is something which I wish to reject. I am a strong believer in Jesus, and I want to pursue this in my life, so I used a soft red wax on the card in the right-hand corner to speak of my desire to centre my life around Jesus. I often feel like rejecting my academics because people tell me I am smart and becoming a pastor or evangelist for the Lord would be a waste, but I do not agree with this.",
    quote: "I used a soft red wax on the card in the right-hand corner to speak of my desire to centre my life around Jesus."
  },
  {
    id: "03",
    code: "DMIS# 03",
    student: "Dineo",
    title: "Artwork by Dineo",
    grade: "Grade 11 Visual Arts",
    medium: "Pencil, Red & White Wax & Sculpting Knife Assemblage",
    image: "assets/images/artworks/student-03-dineo.jpg",
    rationale: "I am the pencil the creator smothered in the wax. As the creator, I feel like I am constantly trying to work on myself. The red and white wax holds me down, just like the people who constantly try to change me. The sculping knife also speaks to people chipping away at me and trying to adjust who I am.",
    quote: "The sculping knife also speaks to people chipping away at me and trying to adjust who I am."
  },
  {
    id: "04",
    code: "DMIS# 04",
    student: "Tammy",
    title: "Artwork by Tammy",
    grade: "Grade 11 Visual Arts",
    medium: "Asthma Pump, Sculpted Wax Flowers & Hair Clip",
    image: "assets/images/artworks/student-04-tammy.jpg",
    rationale: "I smothered the Asma pump in a lot of wax, as I was always bullied for this deficit in my life. The flowers which I sculpted from the wax lie on top of the pump and a small hair clip. This speaks to the fact that my hair has always been a source of pride and is accepted by society and although I was mocked for my asma I leant to embrace it so that is why I also added the flower on the pump.",
    quote: "My hair has always been a source of pride and is accepted by society and although I was mocked for my asma I leant to embrace it."
  },
  {
    id: "05",
    code: "DMIS# 05",
    student: "Bond",
    title: "Artwork by Bond",
    grade: "Grade 11 Visual Arts",
    medium: "Found Rock, Candle Wax & Paint Tubs",
    image: "assets/images/artworks/student-05-bond.jpg",
    rationale: "I used the rock because I have a very hard/rocky personality and often struggle to connect with people. This is why I choose to cover the rock almost entirely in wax, as it's the part of my identity that I struggle the most with. The paint tubs represent how when I was younger people loved my art, and I have always felt like this is a part of my identity that I can be proud of because others are aswell.",
    quote: "The paint tubs represent how when I was younger people loved my art, and I have always felt like this is a part of my identity that I can be proud of."
  },
  {
    id: "06",
    code: "DMIS# 06",
    student: "Kity",
    title: "Artwork by Kity",
    grade: "Grade 11 Visual Arts",
    medium: "Perfume Bottle, Wax & Hair Assemblage",
    image: "assets/images/artworks/student-06-kity.jpg",
    rationale: "The bottle of perfume is covered in a way that is meant to be appealing, as this is the part of my identity that is complemented the most. My sweet perfume is a part of my identity because I wear it every day and am excited to wear it because of the compliments I get. My hair is meant to be covered in a unattractive manner, as it's a part of my identity that I have been told is not good enough.",
    quote: "The bottle of perfume is covered in a way that is meant to be appealing, as this is the part of my identity that is complemented the most."
  },
  {
    id: "07",
    code: "DMIS# 07",
    student: "Leane",
    title: "Artwork by Leane",
    grade: "Grade 11 Visual Arts",
    medium: "Glass, Pink Flowers, Wax & Preserved Hair",
    image: "assets/images/artworks/student-07-leane.jpg",
    rationale: "I used a small glass and added two pink flowers to it with some wax. The flowers and the glass represent how I interact with the world. I believe my glass is always overflowing, so I am normally quite happy, and people usually praise me for this. My hair is a point of friction for me. I enjoy dyeing it, and I often find that people do not like the dark colour I select to dye it, so I used the wax to secure a piece of my own hair to the artwork.",
    quote: "I believe my glass is always overflowing, so I am normally quite happy, and people usually praise me for this."
  },
  {
    id: "08",
    code: "DMIS# 08",
    student: "Nezz",
    title: "Artwork by Nezz",
    grade: "Grade 11 Visual Arts",
    medium: "Perfume Bottle, Hair Brush & Wax Assemblage",
    image: "assets/images/artworks/student-08-nezz.jpg",
    rationale: "The bottle represents the fear of my mom telling me that I had a strong body odour, and this made me feel like I would be rejected by people in society. If I did not smell nice, I would always have a perfume, which I used to smell nice. The brush on the other hand which is not so heavily covered in the wax represents my hair and the hard work that I put into it so that it looks good, and as a result, I get complimented on it a lot, and thus it is a part of my identity that I feel is accepted.",
    quote: "The brush represents my hair and the hard work that I put into it so that it looks good, and as a result, I get complimented on it a lot."
  },
  {
    id: "09",
    code: "DMIS# 09",
    student: "Yema",
    title: "Artwork by Yema",
    grade: "Grade 11 Visual Arts",
    medium: "Headset, Soccer Ball & Layered Wax",
    image: "assets/images/artworks/student-09-yema.jpg",
    rationale: "The headset represents my great taste in music that people embrace and always complement me about. The soccer ball represents the rejection I feel from my family and friends because I do not play sport even though physically I am able to. I covered the headsets and ball in wax because they are both part of my identity.",
    quote: "The headset represents my great taste in music that people embrace and always complement me about."
  },
  {
    id: "10",
    code: "DMIS# 10",
    student: "Nadie",
    title: "Artwork by Nadie",
    grade: "Grade 11 Visual Arts",
    medium: "Soft Material, Pen & Red Wax Assemblage",
    image: "assets/images/artworks/student-10-nadie.jpg",
    rationale: "The soft-said material represents the soft suede of my identity that people easily accept. The pen represents my history and is also the source of my rejection. My history and backstory are the parts that people reject about me. I used the red wax to try and cover the pen, and it represents the rejected part of my identity, and I used the red wax to surround the soft material, as it represents that part of me that people embrace.",
    quote: "The soft-said material represents the soft suede of my identity that people easily accept."
  }
];

const ARTIST_WORKS_DATABASE = [
  {
    id: "s01",
    code: "SM# 01",
    student: "Snelihle Maphumulo",
    title: "Izizukulwane (Detail: Sculpted Ear)",
    grade: "Visiting Sculptor",
    medium: "Sculpted Candle Wax, Cured Sheep Hide & Wool",
    image: "assets/images/artist/sne-01-ear-sculpture.jpg",
    rationale: "In Izizukulwane, Maphumulo sculpts anatomical forms from translucent candle wax, bedding them into cured sheep hide and unspun wool. The artwork explores generational listening, tactile ancestry, and how traditional materials hold spiritual vulnerability.",
    quote: "Tradition is elastic—it can stretch to give every identity space without losing its sacred core."
  },
  {
    id: "s02",
    code: "SM# 02",
    student: "Snelihle Maphumulo",
    title: "Izizukulwane (Installation View)",
    grade: "Visiting Sculptor • Sasol New Signatures Merit Award",
    medium: "Boxed Soil, Sheep Ears, Hides & Wax Assemblage",
    image: "assets/images/artist/sne-02-izizukulwane.jpg",
    rationale: "A panoramic gallery installation wrapping around corners, displaying natural soil, found objects, candle wax, and sheep ears mounted in terracotta and earth-rendered shadow boxes. The work demonstrates how contemporary art challenges traditional white-wall gallery display.",
    quote: "Her practice encouraged learners to consider how the texture, history and symbolism of an object strengthen its meaning."
  },
  {
    id: "s03",
    code: "SM# 03",
    student: "Snelihle Maphumulo",
    title: "Archive Photographic Transfers on Hide",
    grade: "Visiting Sculptor",
    medium: "Photographic Emulsion Transfers on Cured Sheep Hide & Wool",
    image: "assets/images/artist/sne-03-photo-transfers.jpg",
    rationale: "Archival childhood and ancestral family photographs transferred directly onto raw, cured sheep hide surfaces edged with natural wool. The piece investigates how familial memory and female vulnerability are embedded in physical skin.",
    quote: "Experimenting with materials beyond traditional art-making practices."
  },
  {
    id: "s04",
    code: "SM# 04",
    student: "Snelihle Maphumulo",
    title: "UMNIKELO (Offering — Detail)",
    grade: "Visiting Sculptor",
    medium: "Cured Cowhide, Ready-made Milk Crates & Sculpted Wax Bowls",
    image: "assets/images/artist/sne-04-umnikelo-detail.jpg",
    rationale: "Close detail of Umnikelo showcasing ready-made plastic milk crates draped in organic cowhide, bearing hand-sculpted wax offering bowls. Highlights the dialogue between industrial everyday ready-mades and sacred spiritual rituals.",
    quote: "We recently learnt about ready-mades, inquiring whether unconventional objects classify as sacred offerings."
  },
  {
    id: "s05",
    code: "SM# 05",
    student: "Snelihle Maphumulo",
    title: "UMNIKELO (Floor Installation)",
    grade: "Visiting Sculptor",
    medium: "Large-scale Gallery Installation (Crates, Hides, Wax & Yokes)",
    image: "assets/images/artist/sne-05-umnikelo-installation.jpg",
    rationale: "Expansive floor installation featuring rows of wooden yokes leading toward crates veiled with cured hides and wax offerings. Inspired learners to recognise that an artwork does not necessarily have to hang on a white gallery wall to be considered art.",
    quote: "Her installations were not traditionally displayed on gallery walls, inspiring learners to experiment with space."
  },
  {
    id: "s06",
    code: "SM# 06",
    student: "Snelihle Maphumulo",
    title: "Snelihle Maphumulo in the Studio",
    grade: "Visiting Sculptor",
    medium: "Studio Production, Candle Wax Casts & Assemblage",
    image: "assets/images/artist/sne-06-portrait-studio.jpg",
    rationale: "Snelihle Maphumulo photographed during the creative production process in her studio, hand-crafting cast candle wax bowls, stacking organic materials, and preparing sculptural assemblages for exhibition.",
    quote: "Enjoyed engaging with the work of a young South African artist successfully pursuing a career in the arts."
  }
];

// Current modal state tracker
let currentActiveDataset = ARTWORKS_DATABASE;
let currentArtworkIndex = 0;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupMobileNav();
  setupArtworkModal();
  setupAudioPlayers();
  setupVideoPlaceholders();
});

/**
 * Setup Mobile Navigation Drawer & Hamburger Toggle
 */
function setupMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const navLinks = document.querySelector('.ccac-nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close drawer when any link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close drawer when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Auto-close on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Setup Artwork Modal Lightbox
 */
function setupArtworkModal() {
  const studentCards = document.querySelectorAll('[data-artwork-id]');
  const artistCards = document.querySelectorAll('[data-artist-work-id]');
  const modalOverlay = document.getElementById('artworkModal');
  if (!modalOverlay) return;

  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');
  const floatPrevBtn = document.getElementById('modalFloatPrev');
  const floatNextBtn = document.getElementById('modalFloatNext');

  // Student artworks click (shows artwork + student written rationale)
  studentCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.getAttribute('data-artwork-id');
      const idx = ARTWORKS_DATABASE.findIndex(a => a.id === id);
      if (idx !== -1) {
        currentActiveDataset = ARTWORKS_DATABASE;
        currentArtworkIndex = idx;
        openArtworkModal(currentArtworkIndex);
      }
    });
  });

  // Artist works click (blows up image ONLY, removes all descriptions)
  artistCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.getAttribute('data-artist-work-id');
      const idx = ARTIST_WORKS_DATABASE.findIndex(a => a.id === id);
      if (idx !== -1) {
        currentActiveDataset = ARTIST_WORKS_DATABASE;
        currentArtworkIndex = idx;
        openArtworkModal(currentArtworkIndex);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeArtworkModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    // In image-only mode, clicking anywhere except the image or nav buttons closes the modal
    if (modalOverlay.classList.contains('image-only-mode')) {
      if (e.target !== document.getElementById('modalImg') && 
          !e.target.closest('.modal-floating-btn') && 
          !e.target.closest('.modal-close-btn')) {
        closeArtworkModal();
      }
    } else if (e.target === modalOverlay) {
      closeArtworkModal();
    }
  });

  const navigatePrev = () => {
    currentArtworkIndex = (currentArtworkIndex - 1 + currentActiveDataset.length) % currentActiveDataset.length;
    openArtworkModal(currentArtworkIndex);
  };

  const navigateNext = () => {
    currentArtworkIndex = (currentArtworkIndex + 1) % currentActiveDataset.length;
    openArtworkModal(currentArtworkIndex);
  };

  if (prevBtn) prevBtn.addEventListener('click', navigatePrev);
  if (nextBtn) nextBtn.addEventListener('click', navigateNext);
  if (floatPrevBtn) floatPrevBtn.addEventListener('click', navigatePrev);
  if (floatNextBtn) floatNextBtn.addEventListener('click', navigateNext);

  document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeArtworkModal();
    if (e.key === 'ArrowLeft') navigatePrev();
    if (e.key === 'ArrowRight') navigateNext();
  });
}

function openArtworkModal(index) {
  const data = currentActiveDataset[index];
  if (!data) return;

  const modal = document.getElementById('artworkModal');
  const modalImg = document.getElementById('modalImg');
  const modalNum = document.getElementById('modalNum');
  const modalTitle = document.getElementById('modalTitle');
  const modalStudent = document.getElementById('modalStudent');
  const modalMedium = document.getElementById('modalMedium');
  const modalRationale = document.getElementById('modalRationale');
  const modalQuote = document.getElementById('modalQuote');

  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = data.title || 'Artwork image';
  }

  if (currentActiveDataset === ARTIST_WORKS_DATABASE) {
    // Artist gallery: Blow up the image ONLY. Remove any description.
    modal.classList.add('image-only-mode');
  } else {
    // Student collection: Standard split modal with verbatim student rationale
    modal.classList.remove('image-only-mode');

    const total = currentActiveDataset.length;
    const numStr = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;
    const totalStr = total < 10 ? `0${total}` : `${total}`;

    if (modalNum) modalNum.textContent = `Work ${numStr} of ${totalStr} • ${data.code}`;
    if (modalTitle) modalTitle.textContent = `${data.student} — Rationale`;
    if (modalStudent) modalStudent.textContent = `Artist: ${data.student} • ${data.grade}`;
    if (modalMedium) modalMedium.textContent = `Medium: ${data.medium}`;
    if (modalRationale) modalRationale.textContent = data.rationale;
    if (modalQuote) modalQuote.textContent = `“${data.quote}”`;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArtworkModal() {
  const modal = document.getElementById('artworkModal');
  if (modal) {
    modal.classList.remove('active');
    modal.classList.remove('image-only-mode');
    document.body.style.overflow = '';
  }
}

/**
 * HTML5 Audio Player Controller (Snelihle Maphumulo Interview Excerpt)
 */
function setupAudioPlayers() {
  const players = document.querySelectorAll('.custom-audio-player');
  players.forEach(player => {
    let audio = player.querySelector('audio');
    if (!audio) {
      audio = document.createElement('audio');
      audio.src = 'assets/audio/artist-interview-excerpt.mp3';
      audio.preload = 'metadata';
      player.appendChild(audio);
    }

    const playBtn = player.querySelector('.audio-play-btn');
    const fill = player.querySelector('.audio-progress-fill');
    const durationEl = player.querySelector('.audio-track-duration');
    const progressContainer = player.querySelector('.audio-progress-container');

    if (!playBtn) return;

    function formatTime(seconds) {
      if (isNaN(seconds) || !isFinite(seconds) || seconds < 0) return '00:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateTimeDisplay() {
      if (durationEl) {
        const cur = formatTime(audio.currentTime);
        const dur = (audio.duration && isFinite(audio.duration)) ? formatTime(audio.duration) : '20:07';
        durationEl.textContent = `${cur} / ${dur}`;
      }
    }

    audio.addEventListener('loadedmetadata', updateTimeDisplay);
    if (audio.readyState >= 1) {
      updateTimeDisplay();
    } else {
      if (durationEl) durationEl.textContent = '00:00 / 20:07';
    }

    // Play/Pause button
    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        // Pause any other audio on the page
        document.querySelectorAll('audio').forEach(other => {
          if (other !== audio && !other.paused) other.pause();
        });
        document.querySelectorAll('.custom-audio-player.playing').forEach(otherP => {
          if (otherP !== player) {
            otherP.classList.remove('playing');
            const otherBtn = otherP.querySelector('.audio-play-btn');
            if (otherBtn) {
              otherBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
              `;
              otherBtn.setAttribute('aria-label', 'Play Audio');
            }
          }
        });

        audio.play().then(() => {
          player.classList.add('playing');
          playBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"></rect>
              <rect x="14" y="4" width="4" height="16" rx="1"></rect>
            </svg>
          `;
          playBtn.setAttribute('aria-label', 'Pause Audio');
        }).catch(err => {
          console.warn('Playback error:', err);
        });
      } else {
        audio.pause();
        player.classList.remove('playing');
        playBtn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21"></polygon>
          </svg>
        `;
        playBtn.setAttribute('aria-label', 'Play Audio');
      }
    });

    // Time update (scrub bar & numbers)
    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        if (fill) fill.style.width = `${percent}%`;
        updateTimeDisplay();
      }
    });

    // Seek on progress bar click
    if (progressContainer) {
      progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const fraction = Math.max(0, Math.min(1, clickX / rect.width));
        if (audio.duration) {
          audio.currentTime = fraction * audio.duration;
          if (fill) fill.style.width = `${fraction * 100}%`;
          updateTimeDisplay();
        }
      });
    }

    // On ended
    audio.addEventListener('ended', () => {
      player.classList.remove('playing');
      audio.currentTime = 0;
      if (fill) fill.style.width = '0%';
      playBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21"></polygon>
        </svg>
      `;
      playBtn.setAttribute('aria-label', 'Play Audio');
      updateTimeDisplay();
    });
  });
}

/**
 * YouTube Video Placeholder Fallback (if any remaining)
 */
function setupVideoPlaceholders() {
  const videoContainers = document.querySelectorAll('.video-placeholder-wrap');
  videoContainers.forEach(container => {
    container.addEventListener('click', () => {
      container.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/mry2r_EsqoA?autoplay=1" 
          title="Snelihle Maphumulo: Video Interview" 
          style="width:100%;height:100%;border:0;" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      `;
    });
  });
}
