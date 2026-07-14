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
    <section id="contact" className="py-8 lg:py-16 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-12 md:text-center">
        Let's Work Together
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-3 lg:space-y-5">
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:p-4 outline-none focus:border-[#efae1e]"
        />

        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:p-4 outline-none focus:border-[#efae1e] "
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:p-4 outline-none focus:border-[#efae1e] "
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="
            w-full
            h-30
            md:h-36
            bg-white/5
            border
            border-white/10
            rounded-xl
            px-4
            py-3
            md:p-4
            outline-none
            resize-none
            focus:border-[#efae1e]
          "
        />

        <button
          type="submit"
          disabled={loading}
          className=" w-full md:w-auto border border-[#efae1e] bg-[#efae1e] text-black px-6 py-3 rounded-xl font-semibold cursor-pointer
            transition-all duration-300 ease-in-out hover:bg-white hover:border-white hover:scale-105 active:scale-95 disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
