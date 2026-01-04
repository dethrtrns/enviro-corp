"use strict";
"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const products: { title: string; href: string; description: string }[] = [
  {
    title: "Polludrone",
    href: "#products",
    description: "Low-cost ambient air quality monitoring system for smart cities.",
  },
  {
    title: "Pollusense",
    href: "#products",
    description: "Portable air quality monitor for hot-spot monitoring and surveys.",
  },
  {
    title: "Odosense",
    href: "#products",
    description: "Real-time odour emission tracking for landfills and wastewater.",
  },
  {
    title: "Dustroid",
    href: "#products",
    description: "Automated dust monitoring system for construction and mining.",
  },
];

const sectors: { title: string; href: string; description: string }[] = [
  {
    title: "Urban Air Quality",
    href: "#sectors",
    description: "Data-driven insights for safer breathing conditions in cities.",
  },
  {
    title: "Odour Monitoring",
    href: "#sectors",
    description: "Real-time odour nuisance monitoring and complaint management.",
  },
  {
    title: "Industrial",
    href: "#sectors",
    description: "EHS compliance and safety monitoring for manufacturing plants.",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b bg-white sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 container mx-auto justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight text-slate-900 flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
           </div>
           EnviroCorp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-md shadow-lg border">
                    {products.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Sectors</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-md shadow-lg border">
                    {sectors.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="hidden md:flex gap-4">
             <Link href="#contact" className="inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-8 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50">
                Contact
             </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <div className="md:hidden p-4 bg-white border-t">
              <nav className="flex flex-col gap-4">
                  <span className="font-semibold text-sm text-slate-500 uppercase tracking-wider">Products</span>
                  {products.map(p => <Link key={p.title} href={p.href} className="pl-4 text-slate-900" onClick={() => setIsOpen(false)}>{p.title}</Link>)}
                  <span className="font-semibold text-sm text-slate-500 uppercase tracking-wider mt-2">Sectors</span>
                  {sectors.map(s => <Link key={s.title} href={s.href} className="pl-4 text-slate-900" onClick={() => setIsOpen(false)}>{s.title}</Link>)}
                  <div className="h-px bg-slate-200 my-2"></div>
                   <Link href="#contact" className="text-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50" onClick={() => setIsOpen(false)}>
                    Contact Us
                   </Link>
              </nav>
          </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
