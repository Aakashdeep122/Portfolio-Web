import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully 🚀");

      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 max-w-4xl mx-auto px-6">
      <h2 className="text-5xl font-bold mb-12 text-center">
        Let's Work Together
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-5">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#efae1e]"
        />

        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#efae1e] "
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-[#efae1e] "
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="
            w-full
            bg-white/5
            border border-white/10
            rounded-xl
            p-4
            outline-none
            resize-none
            focus:border-[#efae1e]
          "
        />

        <button
          type="submit"
          disabled={loading}
          className="
            border border-[#efae1e]
            bg-[#efae1e]
            text-black
            px-6
            py-3
            rounded-xl
            font-semibold
            cursor-pointer
            transition-all
            duration-300
            ease-in-out
            hover:bg-white
            hover:border-white
            hover:scale-105
            disabled:opacity-70
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
