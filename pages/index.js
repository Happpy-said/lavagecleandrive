import { useState } from "react";

const translations = {
  fr: {
    hero_title: "Lavage auto à domicile",
    hero_desc: "Rapide, pratique, professionnel — où que vous soyez !",
    name_label: "Nom complet",
    date_label: "Date souhaitée",
    service_label: "Type de service",
    time_label: "Créneau horaire",
    whatsapp_btn: "Réserver via WhatsApp",
  },
  en: {
    hero_title: "Mobile Car Wash",
    hero_desc: "Fast, convenient, professional — wherever you are.",
    name_label: "Full Name",
    date_label: "Preferred Date",
    service_label: "Service Type",
    time_label: "Time Slot",
    whatsapp_btn: "Book via WhatsApp",
  },
  ar: {
    hero_title: "غسيل سيارات متنقل",
    hero_desc: "سريع، عملي، احترافي — أينما كنت!",
    name_label: "الاسم الكامل",
    date_label: "التاريخ المطلوب",
    service_label: "نوع الخدمة",
    time_label: "الفترة الزمنية",
    whatsapp_btn: "احجز عبر واتساب",
  },
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
      alert(
        lang === "fr"
          ? "Veuillez remplir tous les champs."
          : lang === "en"
          ? "Please fill all fields."
          : "يرجى ملء جميع الحقول."
      );
      return;
    }

    const msg =
      (lang === "ar"
        ? "مرحبًا، أود حجز غسيل مع CleanDrive.\n"
        : "Bonjour, je souhaite réserver un lavage CleanDrive.\n") +
      `${t.name_label} : ${name}\n${t.date_label} : ${date}\n${t.service_label} : ${service}\n${t.time_label} : ${slot}`;

    const url = "https://wa.me/21652552112?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white relative"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/yd3YLJXh/78134252-lavage-de-voitures-blue-background-concept-mosa-que-th-me-du-v-hicule-de-nettoyage.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center animate-fadeIn">
        {/* language switcher */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setLang("fr")}
            className={`px-4 py-1 rounded ${
              lang === "fr" ? "bg-cyan-400 text-black" : "bg-gray-700 hover:bg-cyan-700"
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1 rounded ${
              lang === "en" ? "bg-cyan-400 text-black" : "bg-gray-700 hover:bg-cyan-700"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("ar")}
            className={`px-4 py-1 rounded ${
              lang === "ar" ? "bg-cyan-400 text-black" : "bg-gray-700 hover:bg-cyan-700"
            }`}
          >
            AR
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2 drop-shadow-lg">{t.hero_title}</h1>
        <p className="text-lg max-w-xl text-gray-200 drop-shadow-md mb-6">{t.hero_desc}</p>

        {/* form */}
        <div className="bg-black/70 rounded-xl p-6 w-full max-w-md space-y-4 shadow-xl">
          <input
            id="name"
            type="text"
            placeholder={t.name_label}
            className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            id="date"
            type="date"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <select
            id="service"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="ext">Lavage extérieur</option>
            <option value="int">Lavage intérieur</option>
            <option value="full">Lavage complet</option>
          </select>
          <select
            id="slot"
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option>08:00 - 10:00</option>
            <option>10:00 - 12:00</option>
            <option>14:00 - 16:00</option>
          </select>

          <button
            onClick={sendToWhatsapp}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-md transition duration-300"
          >
            {t.whatsapp_btn}
          </button>
        </div>

        <footer className="mt-10 text-sm text-gray-400">© {new Date().getFullYear()} CleanDrive</footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
      `}</style>
    </div>
  );
}