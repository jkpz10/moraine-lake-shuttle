'use client';

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { smoothScroll } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-[#1A2230] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={'/logo/mlls-logo.png'}
                alt={'moraine lake louise shuttle'}
                width={200}
                height={64}
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Providing reliable shuttle service to Moraine Lake, Lake Louise
              and other destinations in Banff National Park since 2024.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#F2994A] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-[#F2994A] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#F2994A] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  onClick={e => smoothScroll(e, '#')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#service"
                  onClick={e => smoothScroll(e, '#service')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#route"
                  onClick={e => smoothScroll(e, '#route')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Routes & Schedules
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  onClick={e => smoothScroll(e, '#process')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Booking Process
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  onClick={e => smoothScroll(e, '#faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F2994A] mt-0.5" />
                <span className="text-gray-400">
                  Unit 2 3935 3a St.
                  <br />
                  Ne Calgary AB, T2E 6S7
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#F2994A]" />
                <Link
                  href="tel:+1-888-316-6724"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1-888-316-6724
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#F2994A]" />
                <Link
                  href="mailto:info@mountainshuttle.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@morainelakelouiseshuttle.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#2A3341] border-[#3A4351] text-white placeholder:text-gray-500"
                />
                <Button className="bg-[#F2994A] hover:bg-[#F2994A]/90 text-white">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A4351] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Moraine Lake Louise. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
