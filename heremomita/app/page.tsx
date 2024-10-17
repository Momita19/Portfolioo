'use client';
import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Parent from '../components/Parent';
import Loader from '../components/Loader';
import Opening from '../components/Opening'; // Import the Opening component
import './globals.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtains, setShowCurtains] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show loader for 3 seconds
    const loaderTimer = setTimeout(() => {
      setIsLoading(false); // Stop loading
      setShowCurtains(true); // Start curtain animation
    }, 3000); // 3 seconds

    // After curtain animation, show content
    const curtainTimer = setTimeout(() => {
      setShowCurtains(false); // Stop showing curtains
      setShowContent(true); // Show content
    }, 10000); // 10 seconds for curtain animation

    // Clean up timers
    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(curtainTimer);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Opening showCurtains={showCurtains} />
      {/* Always render the content, but control visibility with CSS */}
      <div className={`content ${showContent ? "showContent" : ""}`}>
        <Header />
        <Parent />
      </div>
    </div>
  );
}
