export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/department",
    label: "Department"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const CONTACT_INFO = {
  address: "Ministry of Special Duties, block 10, State Secretariat Complex, Imo, Nigeria",
  email: "info@specialprojects.im.gov",
  phone: "0814 397 5074"
};
