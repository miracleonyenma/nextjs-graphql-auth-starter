"use client";

import SiteAside from "@/components/Site/Aside";
import { usePathname } from "next/navigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links: {
    name: string;
    path: string;
  }[] = [
    // {
    //   name: "Profile",
    //   path: "/account",
    // },
  ];
  const pathname = usePathname();
  return (
    <main className="site-section max-lg:py-6">
      <div className="wrapper flex flex-col gap-4 lg:grid lg:grid-cols-5">
        <SiteAside links={links} pathname={pathname} />
        <div className="lg:col-span-4">{children}</div>
      </div>
    </main>
  );
}
