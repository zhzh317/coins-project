"use client"

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Youtube, Link as LinkIcon } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");
    // Here you would typically handle the form submission,
    // e.g., send the data to an API endpoint.
    // For this example, we'll just simulate a success message.
    setTimeout(() => {
      setStatus("Your message has been sent successfully!");
      (event.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Reach out with any questions, partnership inquiries, or feedback.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">General Inquiries</h4>
                      <a href="mailto:info@coinsciphers.com" className="text-muted-foreground hover:text-primary">
                        info@coinsciphers.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <LinkIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">Tiktok</h4>
                      <a href="https://www.tiktok.com/@aitosea?_t=ZT-8yrsFHUQKrt&_r=1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary break-all">
                        @aitosea
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Youtube className="w-6 h-6 text-primary" />
                    <div>
                      <h4 className="font-semibold">YouTube</h4>
                      <a href="mailto:hezhuangzeng@gmail.com" className="text-muted-foreground hover:text-primary">
                        hezhuangzeng@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Name</label>
                      <Input id="name" name="name" type="text" placeholder="Your Name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                      <Input id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                      <Input id="subject" name="subject" type="text" placeholder="Subject" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                      <Textarea id="message" name="message" placeholder="Your message..." required rows={5} />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                  {status && <p className="mt-4 text-center text-sm text-muted-foreground">{status}</p>}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
