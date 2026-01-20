import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact__form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          required
        />

        <button
          type="submit"
          className="btn btn--outline"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
          <p className="success">Message sent successfully ✅</p>
        )}

        {status === "error" && (
          <p className="error">Something went wrong ❌</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
