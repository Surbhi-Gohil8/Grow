"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);

  const onSubmit = (data: FormData) => {
    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    console.log("Form submitted:", { ...data, captchaToken: captchaValue });

    // You can now send the data and captchaToken to your backend
  };

  return (
    <div className="min-h-screen bg-[#f5f1e9] flex items-center justify-center px-4">
      <div className="bg-[#f1efe9] border border-gray-300 rounded-xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-serif text-center text-green-900 font-semibold mb-2">
          Get In Touch
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              type="tel"
              placeholder="1234567890"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              What brings you here?
            </label>
            <textarea
              {...register("message", { required: "This field is required" })}
              rows={3}
              placeholder="Tell us how we can help"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.message && (
              <p className="text-sm text-red-600 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred time to reach you
            </label>
            <input
              {...register("preferredTime", {
                required: "Please specify a preferred time",
              })}
              type="text"
              placeholder="e.g., Mornings, Evenings"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            {errors.preferredTime && (
              <p className="text-sm text-red-600 mt-1">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          {/* reCAPTCHA */}
          <div>
         <ReCAPTCHA
  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  onChange={(value: string | null) => {
    setCaptchaValue(value);
    setCaptchaError(false);
  }}
/>

            {captchaError && (
              <p className="text-sm text-red-600 mt-1">
                Please complete the CAPTCHA
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-900 text-white py-2 rounded-md hover:bg-green-800 transition"
          onClick={() => alert("Submitted")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
