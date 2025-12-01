"use client"

import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[]

}

const navLink: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop", href: '/UI-Components/Shop', dropdown: [
      { label: "shop", href: "/UI-Components/Shop", },
      { label: "Shop Details", href: "", }
    ],
  },
  {
    label: "Pages", href: '#', dropdown: [
      { label: "Cart", href: "/UI-Components/Pages/Cart", },
      { label: "Wishlist", href: "/UI-Components/Pages/wishlist", },
      { label: "Checkout", href: "/UI-Components/Pages/Checkout", },
      { label: "Account", href: "/UI-Components/Pages/account", },


    ],
  },

  {
    label: "Blog",
    href: "#",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Shop" },
      { label: "Blog Details", href: "" }
    ]
  },

  { label: "Contact Us", href: "/UI-Components/Pages/contact" }

]

const BottomeNav = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDopdowns] = useState<Record<string, boolean>>({})

  return (
    <div>BottomeNav</div>
  )
}

export default BottomeNav