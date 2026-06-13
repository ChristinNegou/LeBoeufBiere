"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");
      setSuccess(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler directement.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <CheckCircle className="mx-auto text-green-500 mb-3" size={48} />
        <h3 className="font-serif text-xl text-[#2C1810] font-bold mb-1">
          Message envoyé !
        </h3>
        <p className="text-gray-500 text-sm">
          Nous vous répondrons dans les 24–48h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Nom complet *
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Sujet *
        </label>
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent bg-white"
        >
          <option value="">Choisir un sujet</option>
          <option value="reservation">Réservation de groupe (+12 personnes)</option>
          <option value="evenement">Événement privé</option>
          <option value="traiteur">Service traiteur</option>
          <option value="feedback">Commentaires / retour d&apos;expérience</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent resize-none"
          placeholder="Comment pouvons-nous vous aider ?"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#2C1810] text-white font-semibold py-3 rounded hover:bg-[#4a2e20] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}
