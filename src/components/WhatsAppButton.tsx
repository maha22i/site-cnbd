"use client";
import Image from "next/image";

const WHATSAPP_NUMBER = "33667360280"; // à adapter si besoin
const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour, je souhaite avoir des informations sur vos services.");
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire sur WhatsApp"
      className="fixed bottom-8 left-8 z-50 p-0.5 rounded-full shadow-lg bg-green-500/90 hover:bg-green-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400/60"
      style={{ boxShadow: "0 8px 32px rgba(37, 211, 102, 0.18)" }}
    >
      <span className="flex items-center justify-center w-14 h-14">
        <Image
          src="/whatsap1.png"
          alt="WhatsApp"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </span>
    </a>
  );
} 