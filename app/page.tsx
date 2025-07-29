'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ASKText from '@/components/ASKText'
import About from '@/components/About'
import NextMatch from '@/components/NextMatches'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import Partners from '@/components/Partners'

export default function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      {/* <ASKText /> */}
      <About />
      <NextMatch />
      <Gallery />
      <Partners />
      {/* <Footer /> */}
    </div>
  );
}