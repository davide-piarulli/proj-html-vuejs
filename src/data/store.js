import { reactive } from "vue";

export const store = reactive({
  headerNav: [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Process",
      url: "/process",
    },
    {
      title: "Testimonials",
      url: "/testimonials",
    },
    // {
    //   title: '<i class="fa-solid fa-user"></i>',
    //   url: "/profile",
    // },
  ],

  contactInfo: [
    {
      address: "Main Avenue, 987",
    },
    {
      phone: "+1 (305) 1234-5678",
    },
    {
      email: "hello@example.com",
    },
  ],

  socialIcons: [
    {
      name: '<i class="fa-brands fa-facebook-f"></i>',
      href: "#",
    },
    {
      name: '<i class="fa-brands fa-x-twitter"></i>',
      href: "#",
    },
    {
      name: '<i class="fa-brands fa-linkedin-in"></i>',
      href: "#",
    },
  ],

  footerNav: [
    {
      title: "About",
      submenu: [
        {
          title: "The Company",
          url: "#",
        },
        {
          title: "Institutional",
          url: "#",
        },
        {
          title: "Social & Events",
          url: "#",
        },
        {
          title: "Innovation",
          url: "#",
        },
        {
          title: "Environment",
          url: "#",
        },
        {
          title: "Technology",
          url: "#",
        },
      ],
    },
    {
      title: "Transport",
      submenu: [
        {
          title: "Industrialized",
          url: "#",
        },
        {
          title: "Chemicals",
          url: "#",
        },
        {
          title: "Packaged Liquids",
          url: "#",
        },
        {
          title: "Construction",
          url: "#",
        },
        {
          title: "Laminated Wood",
          url: "#",
        },
        {
          title: "And others",
          url: "#",
        },
      ],
    },
    {
      title: "Support",
      submenu: [
        {
          title: "Responsibility",
          url: "#",
        },
        {
          title: "Term of Use",
          url: "#",
        },
        {
          title: "About Cookies",
          url: "#",
        },
        {
          title: "Privacy Policy",
          url: "#",
        },
        {
          title: "Accessibility",
          url: "#",
        },
        {
          title: "Information",
          url: "#",
        },
      ],
    },
  ],
});
