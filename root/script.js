const translations = {
  lv: {
    nav_greeting: "Labdien...",
    nav_bio: "Biogrāfija...",
    nav_gallery: "Galerija...",
    nav_contact: "Kontakti...",
    greeting: "Sveiki! Esmu Arturs...",
    short_desc: `Radošs skatījums, precizitāte un emociju notveršana – tas raksturo manu darbu. Esmu pieejams dažādiem sadarbības veidiem, tai skaitā kāzu, pasākumu, produktu un personīgo portretu fotografēšanai.`,
    bio_title: "Biogrāfija",
    bio_text: `Es esmu fotogrāfs no Latvijas ar vairāku gadu pieredzi mirkļu iemūžināšanā. Mana aizraušanās ar fotogrāfiju sākās bērnībā, kad pirmo reizi paņēmu rokās veco video kameru. Laika gaitā esmu attīstījis savu stilu, koncentrējoties uz ainavām, ielu fotogrāfiju un cilvēku portretiem.

Mani darbi ir tapuši dažādos Latvijas nostūros, kā arī ceļojot pa Eiropu. Es uzskatu, ka katrs attēls spēj pastāstīt stāstu – tas ir mans galvenais mērķis katrā kadrā.

Kad nestrādāju ar klientiem vai projektiem, dodos dabā, lai noķertu klusos mirkļus, kas citādi paliktu nepamanīti.`,
    gallery_title: "Galerija",
    contact_title: "💬 Parunāsim...?",
    label_name: "Vārds:",
    label_email: "E-pasts:",
    label_message: "Ziņa:",
    label_robotcheck: "Piekrītu datu apstrādei",
    btn_send: "Sūtīt",
    alert_fill: "Lūdzu aizpildi visus laukus un apstiprini, piekrišanu datu apstrādei.",
    alert_mailto: "Tiek atvērts E-pasta klients..."
  },
  en: {
    nav_greeting: "Greeting...",
    nav_bio: "Biography...",
    nav_gallery: "Gallery...",
    nav_contact: "Contacts...",
    greeting: "Hi! I'm Arthur...",
    short_desc: `Creative vision, attention to detail, and emotional storytelling — that’s what defines my photography. Available for weddings, events, product shoots, and personal portrait sessions.`,
    bio_title: "Biography",
    bio_text: `I’m a photographer from Latvia with many years of experience in capturing unique and meaningful moments. My journey with photography began in childhood, holding my father's old film camera. Since then, I’ve developed a personal style focused on landscapes, street life, and expressive portraits.

My work spans across Latvia and various places in Europe. I believe every photo tells a story — and that’s exactly what I strive to do with each shot.

When I’m not working on client projects, I explore nature to find quiet moments that deserve to be preserved through the lens.`,
    gallery_title: "Gallery",
    contact_title: "💬 Let's Chat!",
    label_name: "Name:",
    label_email: "Email:",
    label_message: "Message:",
    label_robotcheck: "I allow my data processing",
    btn_send: "Send",
    alert_fill: "Please fill all fields and confirm your data processing consent.",
    alert_mailto: "Opening Mail client..."
  }
};

const langSwitcher = document.getElementById("languageSwitcher");
const translatableElements = document.querySelectorAll("[data-translate]");

function translatePage(lang) {
  translatableElements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

langSwitcher.addEventListener("change", e => {
  translatePage(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  translatePage("lv");
  document.getElementById("year").textContent = new Date().getFullYear();

  // Pievieno fona attēlu visam ķermenim
  document.body.style.backgroundImage = "url('photos/background.jfif')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundAttachment = "fixed";

  const galleryContainer = document.getElementById("galleryContainer");
  const galleryItems = [
    { file: "foto1.jpg", desc: "Saulriets pie jūras" },
    { file: "foto2.jpg", desc: "Miglaina meža aina" },
    { file: "foto3.jpg", desc: "Portrets pilsētas ritmā" }
  ];

  galleryItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="photos/${item.file}" alt="${item.desc}" />
      <p>${item.desc}</p>
    `;
    galleryContainer.appendChild(card);
  });

const form = document.getElementById("contactForm");
    form.addEventListener("submit", e => {
    e.preventDefault();
    
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();
    const robotCheck = form.querySelector("#robotCheck").checked;
    const lang = langSwitcher.value;

    if (!name || !email || !message || !robotCheck) {
        alert(translations[lang].alert_fill);
        return;
    }

    // Funkcija nosūtīšanai uz Gmail
    const sendMail = () => {
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=tavs.epasts@piem.lv&su=Ziņa no ${encodeURIComponent(name)}&body=Vārds: ${name}%0AE-pasts: ${email}%0AZiņa:%0A${encodeURIComponent(message)}`;
        window.location.href = mailtoLink; // Atver Gmail vai citu e-pasta klientu
        form.reset(); // Notīra formu pēc nosūtīšanas
    };

    sendMail(); // Izsaucam nosūtīšanas funkciju
    });

});