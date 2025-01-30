"use client";
import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import useElementHeight from "@/hooks/useElementHeight";
import OnlyMobile from "./OnlyMobile";

export default function MainWebSite({ children }) {
  const [contentHeight, rightContentRef] = useElementHeight();

  return (
    <>
      <NavBar ref={rightContentRef} />
      <main style={{ marginTop: contentHeight }}>{children}</main>
      <OnlyMobile />
      <Footer />
    </>
  );
}
