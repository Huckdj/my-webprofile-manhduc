"use client";

import { useState } from "react";
import { useLang } from "../hooks/useLang";

export default function ContactPage() {
  const { isVn } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError(isVn ? "Vui lòng điền đầy đủ thông tin!" : "Please fill in all fields!");
      return;
    }
    setError("");
    setSuccess(true);
  };

  const contacts = [
    { label: isVn ? "SĐT" : "Phone", value: "(84) 33.898.8152", href: "tel:+84338988152" },
    { label: "Email", value: "manhduc132003@gmail.com", href: "mailto:manhduc132003@gmail.com" },
    { label: "Facebook", value: "Mạnh Đức", href: "https://www.facebook.com/bmduc03/" },
    { label: "Instagram", value: "manh_duc_03", href: "https://www.instagram.com/manh_duc_03/" },
    { label: "GitHub", value: "Huckdj", href: "https://github.com/Huckdj" },
    { label: "LinkedIn", value: "manhduc-huckdj2003", href: "https://www.linkedin.com/in/manhduc-huckdj2003/" },
  ];

  return (
    <div className="container mx-auto px-4 pb-20 pt-28">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
          {isVn ? "Liên hệ" : "Contact"}
        </p>
        <h1 className="text-4xl font-bold text-white lg:text-5xl">
          {isVn ? "Hãy liên hệ với tôi" : "Get in touch"}
        </h1>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="glass rounded-2xl p-8">
          <h2 className="mb-6 text-xl font-semibold text-white">
            {isVn ? "Thông tin liên hệ" : "Contact Info"}
          </h2>
          <ul className="space-y-4">
            {contacts.map((c) => (
              <li key={c.label}>
                <span className="text-sm text-slate-500">{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block text-blue-400 transition-colors hover:text-blue-300"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-8">
          <h2 className="mb-6 text-xl font-semibold text-white">
            {isVn ? "Gửi tin nhắn" : "Send a message"}
          </h2>
          {success && (
            <p className="mb-4 rounded-lg bg-green-500/10 p-3 text-green-400">
              {isVn ? "Hãy liên hệ qua email trực tiếp!" : "Please contact via email directly!"}
            </p>
          )}
          {error && (
            <p className="mb-4 rounded-lg bg-red-500/10 p-3 text-red-400">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder={isVn ? "Tên của bạn" : "Your name"}
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/50"
            />
            <input
              type="email"
              name="email"
              placeholder={isVn ? "Email của bạn" : "Your email"}
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/50"
            />
            <textarea
              name="message"
              placeholder={isVn ? "Nội dung tin nhắn..." : "Your message..."}
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-blue-500/50"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white transition-all hover:brightness-110"
            >
              {isVn ? "Gửi" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
