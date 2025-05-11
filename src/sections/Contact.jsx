"use client";

import { useForm } from "react-hook-form";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message Sent 🚀");
      reset();
      setSuccess(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.");
      setSuccess(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-7"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="What’s your good name?"
                    className="input-style"
                  />
                  {errors.name && (
                    <p className="error-message">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="What’s your email address?"
                    className="input-style"
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register("message")}
                    placeholder="How can I help you?"
                    className="input-style"
                  />
                  {errors.message && (
                    <p className="error-message">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button type="submit" disabled={isSubmitting}>
                  <div className={`cta-button group ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
                    <div className="bg-circle" />
                    <p className="text">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                {success && (
                  <p className="text-green-500 mt-4">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
