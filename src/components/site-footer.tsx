'use client';

import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
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

const SiteFooter = () => {
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
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
              tabIndex={0}
            >
              <span className="font-bold text-xl">Moraine Shuttle</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Copyright &copy; {currentYear} Moraine Lake Louise Shuttle. All
              rights reserved.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
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
          <div className="flex flex-col space-y-4">
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
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
