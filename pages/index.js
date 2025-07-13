import { useState } from "react";

const translations = {
  fr: {
    hero_title: "Lavage auto à domicile",
    hero_desc: "Rapide, Pratique, Professionnel – Où que vous soyez !",
    name_label: "Nom complet :",
    date_label: "Date souhaitée :",
    service_label: "Type de service :",
    time_label: "Créneau horaire :",
    whatsapp_btn: "Réserver via WhatsApp"
  },
  en: {
    hero_title: "Mobile Car Wash",
    hero_desc: "Fast, convenient, professional – wherever you are.",
    name_label: "Full Name:",
    date_label: "Preferred date:",
    service_label: "Service type:",
    time_label: "Time slot:",
    whatsapp_btn: "Book via WhatsApp"
  },
  ar: {
    hero_title: "غسيل سيارات متنقل",
    hero_desc: "سريع، مريح، احترافي – أينما كنت.",
    name_label: "الاسم الكامل:",
    date_label: "التاريخ المطلوب:",
    service_label: "نوع الخدمة:",
    time_label: "الفترة الزمنية:",
    whatsapp_btn: "احجز عبر واتساب"
  }
};

export default function Home() {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];

  const sendToWhatsapp = () => {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;
    const slot = document.getElementById("slot").value;

    if (!name || !date || !service || !slot) {
      alert(lang === "fr"
        ? "Veuillez remplir tous les champs."
        : lang === "en"
        ? "Please fill all fields."
        : "يرجى ملء جميع الحقول.");
      return;
    }

    const msg =
      (lang === "ar" ? "مرحبًا، أود حجز غسيل مع CleanDrive.\n" : "Bonjour, je souhaite réserver un lavage CleanDrive.\n") +
      `${t.name_label} ${name}\n${t.date_label} ${date}\n${t.service_label} ${service}\n${t.time_label} ${slot}`;

    const url = "https://wa.me/21652552112?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 space-y-4">
      {/* Language switch */}
      <div className="flex space-x-4">
        <button onClick={() => setLang("fr")}>FR</button>
        <button onClick={() => setLang("en")}>EN</button>
        <button onClick={() => setLang("ar")}>AR</button>
      </div>

      {/* Hero */}
      <h1 className="text-3xl font-bold text-cyan-400">{t.hero_title}</h1>
      <p>{t.hero_desc}</p>

      {/* Form */}
      <input id="name" placeholder={t.name_label} className="p-2 text-black rounded w-full max-w-md" />
      <input id="date" type="date" className="p-2 text-black rounded w-full max-w-md" />
      <select id="service" className="p-2 text-black rounded w-full max-w-md">
        <option value="ext">Lavage extérieur</option>
        <option value="int">Lavage intérieur</option>
        <option value="full">Lavage complet</option>
      </select>
      <select id="slot" className="p-2 text-black rounded w-full max-w-md">
        <option>08:00 - 10:00</option>
        <option>10:00 - 12:00</option>
        <option>14:00 - 16:00</option>
      </select>

      <button onClick={sendToWhatsapp} className="bg-cyan-600 hover:bg-cyan-800 text-white px-4 py-2 rounded">
        {t.whatsapp_btn}
      </button>
    </div>
  );
}
