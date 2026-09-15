"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interest, setInterest] = useState("");
  const pathname = usePathname();
  const isSchedulePage = pathname === "/schedule";

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    console.log("EmailJS Config Check:", {
      hasPublicKey: !!publicKey,
      hasServiceId: !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      hasTemplateId: !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    });

    if (publicKey) {
      emailjs.init(publicKey);
      console.log("EmailJS initialized successfully");
    } else {
      console.error("EmailJS public key is missing!");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSchedulePage && !interest) {
      alert("Please select a weekend.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    // Validate environment variables
    if (!serviceId || !templateId) {
      console.error("Missing EmailJS configuration:", {
        serviceId,
        templateId,
      });
      alert(
        "Email service is not configured properly. Please contact support.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      console.log("Form data:", Object.fromEntries(formData.entries()));
      const result = await emailjs.sendForm(serviceId, templateId, form);

      console.log("Email sent successfully:", result.text);
      form.reset();
      setInterest("");

      alert("Thank you for your message! We will get back to you soon.");
    } catch (error: any) {
      console.error("Email sending failed:", error);
      console.error("Error details:", {
        message: error?.message,
        text: error?.text,
        status: error?.status,
      });
      alert(
        "Sorry, there was an error sending your message. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-lg bg-accent border p-8 shadow-sm lg:p-10">
      <div className="mb-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-card-foreground">
          {"Send us a message"}
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {"Fill out the form below and we'll get back to you within 24 hours."}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">{"First name"}</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              required
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{"Last name"}</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              required
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{"Email"}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john.doe@example.com"
            required
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">{"Phone number"}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="bg-background"
          />
        </div>

        {isSchedulePage && (
          <div className="space-y-2">
            <Label htmlFor="interest">Select Weekend</Label>

            <Select value={interest} onValueChange={setInterest} required>
              <SelectTrigger id="interest" className="bg-background">
                <SelectValue placeholder="Choose dates" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="January 8, 9, 10">
                  January 8, 9, 10
                </SelectItem>

                <SelectItem value="January 15, 16, 17">
                  January 15, 16, 17
                </SelectItem>
                <SelectItem value="January 22, 23, 24">
                  January 22, 23, 24
                </SelectItem>
                <SelectItem value="January 29, 30, 31">
                  January 29, 30, 31
                </SelectItem>
                <SelectItem value="February 5, 6, 7">
                  February 5, 6, 7
                </SelectItem>
                <SelectItem value="February 12, 13, 14">
                  February 12, 13, 14
                </SelectItem>
                <SelectItem value="February 19, 20, 21">
                  February 19, 20, 21
                </SelectItem>
                <SelectItem value="February 26, 27, 28">
                  February 26, 27, 28
                </SelectItem>
                <SelectItem value="March 5, 6, 7">March 5, 6, 7</SelectItem>
                <SelectItem value="March 12, 13, 14">
                  March 12, 13, 14
                </SelectItem>
                <SelectItem value="March 19, 20, 21">
                  March 19, 20, 21
                </SelectItem>
                <SelectItem value="March 26, 27, 28">
                  March 26, 27, 28
                </SelectItem>
                <SelectItem value="April 2, 3, 4">April 2, 3, 4</SelectItem>
                <SelectItem value="April 9, 10, 11">April 9, 10, 11</SelectItem>
              </SelectContent>
              {/* Native form field that EmailJS will capture */}
            </Select>
          </div>
        )}

        <input type="hidden" name="interest" value={interest || "N/A"} />

        <div className="space-y-2">
          <Label htmlFor="message">{"Message"}</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us more about what you're looking for..."
            rows={5}
            required
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="hover:bg-primary/80 bg-[#1D283F]"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
