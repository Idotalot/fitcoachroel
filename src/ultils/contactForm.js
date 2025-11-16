import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Bericht succesvol verstuurd!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Er ging iets mis: " + error.text);
        }
      );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
          Naam
        </label>
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

      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
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

      <div>
        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
          Telefoon
        </label>
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

      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
          Bericht
        </label>
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

      <button
        type="submit"
        className="w-full bg-[#ba974d] hover:bg-[#99742c] text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
      >
        Verstuur Bericht
      </button>
    </form>
  );
}
