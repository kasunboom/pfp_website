import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_de7b37s",
        "template_n8s138n",
        formRef.current,
        "taUPpdTU7o3DsdS6P"
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setLoading(false);
        formRef.current.reset();
      })
      .catch(() => {
        setSuccess("Failed to send message. Try again.");
        setLoading(false);
      });
  };

  return (
    <div className="flex-[1] w-full">
      <h2 className="text-[1.8rem] font-bold text-white mb-6">
        <span className="opacity-90">Send Us a</span>{" "}
        <span className="text-[#00ff88]">Message</span>
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-6"
      >
        {/* Name & Phone */}
        <div className="flex flex-col sm:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full bg-transparent border border-[#00ff88] text-white p-3 rounded"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            className="w-full bg-transparent border border-[#00ff88] text-white p-3 rounded"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full bg-transparent border border-[#00ff88] text-white p-3 rounded"
        />

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#00ff88] text-black font-bold py-3 px-12 rounded hover:bg-[#00cc6a]"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-[#00ff88] text-sm mt-2">{success}</p>
        )}
      </form>
    </div>
  );
}
