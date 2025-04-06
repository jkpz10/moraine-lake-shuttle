'use client';

import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Social media link props type
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

// Contact item props type
interface ContactItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

// Social media link component
function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// Contact item component
function ContactItem({ icon, children }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      {children}
    </div>
  );
}

// Footer section heading component
function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold mb-4">{children}</h3>;
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  // Social links data
  const socialLinks = [
    {
      href: 'https://facebook.com',
      icon: <Facebook className="h-5 w-5" />,
      label: 'Facebook',
    },
    {
      href: 'https://twitter.com',
      icon: <Twitter className="h-5 w-5" />,
      label: 'Twitter',
    },
    {
      href: 'https://instagram.com',
      icon: <Instagram className="h-5 w-5" />,
      label: 'Instagram',
    },
  ];

  return (
    <footer className="bg-[#f0f7ff] dark:bg-[#1a2b42]">
      <div className="w-full py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Logo and Copyright */}
          <div className="hidden md:flex flex-col justify-center items-start space-y-4 flex-1">
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              tabIndex={0}
            >
              <div className="relative h-28 w-52">
                <Image
                  src="/logo/mlls-logo.png"
                  alt="Moraine Lake Louise Shuttle Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Copyright &copy; {currentYear} Moraine Lake Louise Shuttle. All
              rights reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center items-center space-y-4 flex-1">
            <FooterHeading>Contact Us</FooterHeading>
            <ContactItem
              icon={<Phone className="h-4 w-4 text-muted-foreground" />}
            >
              <span className="text-sm">+1 (403) 555-1234</span>
            </ContactItem>
            <ContactItem
              icon={<Mail className="h-4 w-4 text-muted-foreground" />}
            >
              <a
                href="mailto:info@moraineshuttle.com"
                className="text-sm hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              >
                info@moraineshuttle.com
              </a>
            </ContactItem>
          </div>

          {/* Social Media */}
          <div className="flex flex-col justify-center items-center space-y-4 flex-1">
            <FooterHeading>Follow Us</FooterHeading>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                />
              ))}
            </div>
          </div>

          {/* Logo and Copyright mobile */}
          <div className="flex md:hidden flex-col justify-center items-center space-y-4 flex-1">
            <Link
              href="/"
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              tabIndex={0}
            >
              <div className="relative h-28 w-52">
                <Image
                  src="/logo/mlls-logo.png"
                  alt="Moraine Lake Louise Shuttle Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Copyright &copy; {currentYear} Moraine Lake Louise Shuttle. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
