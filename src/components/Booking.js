// components/Booking.js
'use client';

import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Booking inquiry sent. I will get back to you soon.');
    setFormData({ name: '', email: '', eventType: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="font-display text-6xl font-bold text-primary mb-4">
                BOOK YOUR SHOW
              </h2>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent flex items-center justify-center animate-pulse rounded-full">
                <span className="font-display font-bold text-black text-sm">NOW</span>
              </div>
            </div>
            <p className="text-text-secondary text-xl">
              Lets create some hilarious memories together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="comic-border p-2">
              <div className="comic-border bg-black p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-bold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border-2 border-text-secondary/30 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border-2 border-text-secondary/30 rounded-lg text-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-bold mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border-2 border-text-secondary/30 rounded-lg text-white focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    >
                      <option value="">Select event type</option>
                      <option value="college">College Festival</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="wedding">Wedding</option>
                      <option value="private">Private Party</option>
                      <option value="online">Online Show</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-bold mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-black border-2 border-text-secondary/30 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tell me about your event"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary text-black font-display font-bold text-xl rounded-lg hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-pulse"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND BOOKING REQUEST'}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="comic-border p-2">
                <div className="comic-border bg-black p-8">
                  <h3 className="font-display text-2xl font-bold text-accent mb-6">
                    Direct Contact
                  </h3>
                  
                  <div className="space-y-6">
                    <a
                      href="mailto:bookings@comicarambh.com"
                      className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="font-display font-bold text-black">@</span>
                      </div>
                      <div>
                        <div className="font-bold text-white">Email</div>
                        <div className="text-text-secondary">bookings@comicarambh.com</div>
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/arambh007_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                        <span className="font-display font-bold text-black">IG</span>
                      </div>
                      <div>
                        <div className="font-bold text-white">Instagram</div>
                        <div className="text-text-secondary">@arambh007_</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="comic-border p-2">
                <div className="comic-border bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <h4 className="font-display text-xl font-bold text-white mb-4">
                    Quick Info
                  </h4>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Custom material available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>All India bookings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Virtual shows available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}