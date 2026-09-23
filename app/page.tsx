"use client";
import { useState } from "react";
import Opening from "@/components/invitation/Opening";
import Couple from "@/components/invitation/Couple";
import Event from "@/components/invitation/Event";
import Countdown from "@/components/invitation/Countdown";
import RSVP from "@/components/invitation/RSVP";
import Wishes from "@/components/invitation/Wishes";
import Footer from "@/components/invitation/Footer";

export default function Home() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      {!opened && <Opening onOpen={() => setOpened(true)} />}
      {opened && (
        <main className="animate-slide-up">
          <Couple />
          <Countdown />
          <Event />
          <RSVP />
          <Wishes />
          <Footer />
        </main>
      )}
    </>
  );
}
