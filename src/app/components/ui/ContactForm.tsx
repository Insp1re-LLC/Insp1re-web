"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import CTAButton from "./CTA";

export default function ContactFormSheet() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.agree) newErrors.agree = "You must agree before submitting.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    const updatedValue =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : value;

    setForm({
      ...form,
      [name]: updatedValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!res.ok) throw new Error("Failed to submit");

        setSubmitted(true);
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });
      } catch (err) {
        console.error(err);
        alert("There was a problem submitting the form.");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-heading font-bold text-brand mb-4">
        Contact Us
      </h2>
      {submitted && (
        <div
          role="status"
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 border border-green-300 rounded"
        >
          Thank you! Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate aria-live="polite">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              className={cn(
                "mt-1 block w-full rounded-md border px-3 py-2 border-brand",
                errors.firstName
                  ? "border-red-500"
                  : "border-accent-cream focus:border-brand"
              )}
              aria-invalid={!!errors.firstName}
              aria-describedby="firstName-error"
            />
            {errors.firstName && (
              <p id="firstName-error" className="mt-1 text-sm text-red-600">
                {errors.firstName}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              className={cn(
                "mt-1 block w-full rounded-md border px-3 py-2  border-brand",
                errors.lastName
                  ? "border-red-500"
                  : "border-accent-cream focus:border-brand"
              )}
              aria-invalid={!!errors.lastName}
              aria-describedby="lastName-error"
            />
            {errors.lastName && (
              <p id="lastName-error" className="mt-1 text-sm text-red-600">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={cn(
              "mt-1 block w-full rounded-md border px-3 py-2 border-brand",
              errors.email
                ? "border-red-500"
                : "border-accent-cream focus:border-brand"
            )}
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border  border-brand px-3 py-2 focus:border-brand"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="message" className="block text-sm font-medium">
            Inquiry
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border  border-brand px-3 py-2 focus:border-brand"
          />
        </div>

        <div className="mt-4 flex items-start gap-2">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={handleChange}
            className={cn(
              "h-4 w-4 rounded border-brand text-brand focus:ring-brand",
              errors.agree && "border-red-500"
            )}
            aria-invalid={!!errors.agree}
            aria-describedby="agree-error"
          />
          <label htmlFor="agree" className="text-sm">
            I agree to the terms and privacy policy.{" "}
            <span className="text-red-600">*</span>
          </label>
        </div>
        {errors.agree && (
          <p id="agree-error" className="mt-1 text-sm text-red-600">
            {errors.agree}
          </p>
        )}

        <div className="mt-6">
          <CTAButton
            type="submit"
            variant="primary"
            size="base"
            isLoading={false}
          >
            Submit
          </CTAButton>
        </div>
      </form>
    </div>
  );
}
