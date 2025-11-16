import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xnnlogvl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Bericht succesvol verstuurd!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Er ging iets mis. Probeer het opnieuw.");
      }
    } catch (error) {
      setStatus("Er ging iets mis. Probeer het opnieuw.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Naam</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
          placeholder="Jouw naam"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
          placeholder="jouw@email.com"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Telefoon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
          placeholder="06-12345678"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Bericht</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
          placeholder="Vertel me over jouw doelen..."
          required
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#ba974d] hover:bg-[#99742c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
      >
        Verstuur Bericht
      </button>

      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
}