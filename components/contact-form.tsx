"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Option 1: Mailto (Client-side only, no backend required)
    // This opens the user's email client.
    const subject = encodeURIComponent(`${formData.subject}`);
    const body = encodeURIComponent(
      `${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    // Option 2: Formspree (Uncomment and use this if you have a Formspree ID)
    /*
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      })
    }
    */

    setIsSubmitting(false);
    toast({
      title: "Email Client Opened",
      description: "Please send the email from your default mail client.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-xs font-bold uppercase tracking-wide"
        >
          Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="rounded-none border-2 border-primary bg-transparent px-2 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-xs font-bold uppercase tracking-wide"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="rounded-none border-2 border-primary bg-transparent px-2 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="subject"
          className="text-xs font-bold uppercase tracking-wide"
        >
          Subject
        </Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Inquiry regarding..."
          required
          className="rounded-none border-2 border-primary bg-transparent px-2 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-xs font-bold uppercase tracking-wide"
        >
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          required
          className="min-h-[100px] rounded-none border-2 border-primary bg-transparent px-2 py-2 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-none border-2 border-primary bg-primary py-6 font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
      >
        {isSubmitting ? "Opening Mail Client..." : "Send Message"}
      </Button>
    </form>
  );
}
