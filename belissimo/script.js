const items = document.querySelector('.carousel-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const modal = document.getElementById('modal'); // Modal element
const selectButtons = document.querySelectorAll('.select-button'); // "Tanlash" tugmalari
const closeModal = document.getElementById('closeModal');


let index = 0;

function updateCarousel() {
  items.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : 0;
  updateCarousel();
});

next.addEventListener('click', () => {
  index = (index < items.children.length - 1) ? index + 1 : index;
  updateCarousel();
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.btn.active').classList.remove('active');
      button.classList.add('active');
    });
  });

  const buttons = document.querySelectorAll('.btn');
const infoBox = document.getElementById('infoBox');

// Tugmani bosganda
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Hozirgi active tugmani o‘chirish
    document.querySelector('.btn.active').classList.remove('active');
    button.classList.add('active');

    // Info-boxni o‘zgartirish
    if (button.getAttribute('data-type') === 'pickup') {
      infoBox.classList.add('pickup');
      infoBox.innerHTML = '<span class="info-text">Filialni tanlang</span><span class="edit-icon">✏️</span>';
    } else {
      infoBox.classList.remove('pickup');
      infoBox.innerHTML = '<span class="info-text">Yetkazib berish manzilini tanlang</span><span class="edit-icon">✏️</span>';
    }
  });
});



// "Tanlash" tugmasiga modalni ochish eventini qo'shish
selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex: '; // Modalni ko'rsatish
    });
});

// Modalni yopish (X tugmasi bosilganda)
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Modalni yashirish
});

// Modal tashqi qismini bosilganda yopish
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Modalni yashirish
    }
});
