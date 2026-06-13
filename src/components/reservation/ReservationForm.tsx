"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { fr } from "react-day-picker/locale";
import { Loader2, CheckCircle, Calendar } from "lucide-react";

const TIME_SLOTS = [
  "11h00", "11h30", "12h00", "12h30", "13h00", "13h30",
  "14h00", "14h30", "15h00", "15h30", "16h00", "16h30",
  "17h00", "17h30", "18h00", "18h30", "19h00", "19h30",
  "20h00", "20h30", "21h00", "21h30", "22h00",
];

const OCCASIONS = [
  "Aucune",
  "Anniversaire",
  "Anniversaire de mariage",
  "Fiançailles",
  "Repas d'affaires",
  "Repas de famille",
  "Autre",
];

interface ConfirmationData {
  confirmationNumber: string;
  first_name: string;
  last_name: string;
  date: string;
  time: string;
  party_size: number;
}

function ConfirmationView({ data }: { data: ConfirmationData }) {
  return (
    <div className="text-center bg-white rounded-2xl p-10 shadow-lg max-w-md mx-auto">
      <CheckCircle className="mx-auto text-green-500 mb-5" size={64} />
      <h2 className="font-serif text-3xl text-[#2C1810] font-bold mb-2">
        Réservation confirmée !
      </h2>
      <p className="text-gray-500 mb-8">
        Un email de confirmation vous a été envoyé.
      </p>

      <div className="bg-[#FAFAF7] rounded-xl p-6 text-left space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Numéro de réservation</span>
          <span className="font-mono font-bold text-[#2C1810]">#{data.confirmationNumber}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Nom</span>
          <span className="font-medium">{data.first_name} {data.last_name}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Date</span>
          <span className="font-medium">{data.date}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Heure</span>
          <span className="font-medium">{data.time}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Personnes</span>
          <span className="font-medium">{data.party_size}</span>
        </div>
      </div>

      <p className="text-gray-400 text-xs mt-6">
        Pour modifier ou annuler votre réservation, appelez-nous au (819) 555-0123
      </p>
    </div>
  );
}

export default function ReservationForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    time: "",
    party_size: "2",
    special_occasion: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<ConfirmationData | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.first_name.trim()) e.first_name = "Le prénom est requis";
    if (!form.last_name.trim()) e.last_name = "Le nom est requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Email invalide";
    if (!form.phone.trim()) e.phone = "Le numéro de téléphone est requis";
    if (!selectedDate) e.date = "Veuillez sélectionner une date";
    if (!form.time) e.time = "Veuillez choisir une heure";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    const dateStr = selectedDate
      ? selectedDate.toLocaleDateString("fr-CA", { year: "numeric", month: "2-digit", day: "2-digit" })
      : "";

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, date: dateStr }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors de la réservation");

      setConfirmation({
        confirmationNumber: data.confirmationNumber,
        first_name: form.first_name,
        last_name: form.last_name,
        date: dateStr,
        time: form.time,
        party_size: Number(form.party_size),
      });
    } catch (err) {
      setErrors({ submit: err instanceof Error ? err.message : "Une erreur est survenue" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (confirmation) return <ConfirmationView data={confirmation} />;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Calendar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-serif text-xl text-[#2C1810] font-bold mb-1 flex items-center gap-2">
            <Calendar size={20} className="text-[#C9A84C]" />
            Choisissez une date
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Sélectionnez le jour souhaité
          </p>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            locale={fr}
            disabled={{ before: new Date() }}
            className="w-full"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-2">{errors.date}</p>
          )}

          {/* Time selection */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Heure souhaitée *
            </label>
            <div className="grid grid-cols-4 gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => {
                    setForm((p) => ({ ...p, time: slot }));
                    if (errors.time) setErrors((p) => ({ ...p, time: "" }));
                  }}
                  className={`py-2 text-xs font-medium rounded transition-all ${
                    form.time === slot
                      ? "bg-[#2C1810] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-[#2C1810]/10"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Right: Form fields */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-serif text-xl text-[#2C1810] font-bold mb-4">
            Vos informations
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                    errors.first_name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.first_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom *
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                    errors.last_name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.last_name && (
                  <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] ${
                  errors.phone ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="(819) 555-0000"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de personnes *
              </label>
              <select
                name="party_size"
                value={form.party_size}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "personne" : "personnes"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occasion spéciale
              </label>
              <select
                name="special_occasion"
                value={form.special_occasion}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] bg-white"
              >
                {OCCASIONS.map((o) => (
                  <option key={o} value={o === "Aucune" ? "" : o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C] resize-none"
                placeholder="Allergie alimentaire, demande particulière…"
              />
            </div>
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm mt-4 text-center">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-[#C9A84C] text-white font-semibold py-3.5 rounded hover:bg-[#a8872f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? "Envoi en cours…" : "Confirmer ma réservation"}
          </button>
        </div>
      </div>
    </form>
  );
}
