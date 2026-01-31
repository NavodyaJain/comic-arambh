// components/Booking.js
'use client';

import { useState } from 'react';

export default function Booking() {
  return (
    <section id="booking" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Lets create some hilarious memories together</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-stretch mt-8">
            {/* DIRECT CONTACT DIV */}
            <div className="flex-1 bg-black border-4 border-cyan-400 p-8 rounded-2xl flex flex-col gap-8 shadow-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-2 tracking-wide">DIRECT CONTACT</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-red-900/80 rounded-lg p-4">
                  <span className="text-2xl">@</span>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-white text-sm">arambh007@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-yellow-700/80 rounded-lg p-4">
                  <span className="text-2xl">IG</span>
                  <div>
                    <div className="text-white font-semibold">Instagram</div>
                    <div className="text-white text-sm">@arambh007_</div>
                  </div>
                </div>
              </div>
            </div>
            {/* QUICK INFO DIV */}
            <div className="flex-1 bg-black border-4 border-cyan-400 p-8 rounded-2xl flex flex-col gap-6 shadow-lg">
              <h3 className="text-xl font-bold text-cyan-400 mb-2 tracking-wide">QUICK INFO</h3>
              <ul className="list-disc list-inside text-white/90 text-base space-y-2 pl-2">
                <li>Response within 24 hours</li>
                <li>Custom material available</li>
                <li>All India bookings</li>
                <li>Virtual shows available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}