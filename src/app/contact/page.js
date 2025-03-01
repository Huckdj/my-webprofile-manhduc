"use client";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [currentlang, setCurrentLang] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const curentlangs = localStorage.getItem("lang");
      setCurrentLang(curentlangs);
    }
  }, []);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <div className="text-black">
      {currentlang === "vn" || currentlang === "" ? (
        <div
          className="grid grid-cols-1 lg:grid-cols-2
        gap-4 container mx-auto mt-10"
        >
          <div>
            <h2 className="font-semibold text-2xl uppercase justify-center flex">
              Thông tin liên hệ
            </h2>
            <ul className="list-disc font-mono space-y-2 text-2xl mt-6">
              <li>
                <strong>SĐT</strong>:{" "}
                <a href="telto:0338988152">(84)33.898.8152</a>
              </li>
              <li>
                <strong>Email</strong>:{" "}
                <a href="mailto:manhduc132003@gmail.com">
                  manhduc132003@gmail.com
                </a>
              </li>
              <li>
                <strong>facebook:</strong>:{" "}
                <a href="https://www.facebook.com/bmduc03/">Mạnh Đức</a>
              </li>
              <li>
                <strong>instagram:</strong>:{" "}
                <a href="https://www.instagram.com/manh_duc_03/">manh_duc_03</a>
              </li>
              <li>
                <strong>GitHub:</strong>:{" "}
                <a href="https://github.com/Huckdj">
                  https://github.com/Huckdj
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Liên Hệ</h2>
              {success && <p className="text-green-600">Hãy Liên Hệ Qua Email</p>}
              {error && <p className="text-red-600">{error}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Tên của bạn"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email của bạn"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="message"
                  placeholder="Nội dung tin nhắn..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Gửi
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
