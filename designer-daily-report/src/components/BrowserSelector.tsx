import React from "react";
import BrowserCard from "./BrowserCard"; // Import your BrowserCard component

// Define the browsers data (logoSrc, logoAlt, title)
const browsers = {
  edge: {
    logoSrc: `${process.env.PUBLIC_URL}/edge.svg`, // Update the path dynamically
    logoAlt: "Edge Web Store",
    title: "Edge Web Store",
    reviewCount: 220,
    rating: 4.7,
  },
  chrome: {
    logoSrc: `${process.env.PUBLIC_URL}/chrome.svg`, // Update the path dynamically
    logoAlt: "Chrome Web Store",
    title: "Chrome Web Store",
    reviewCount: 378,
    rating: 4.9,
  },
  firefox: {
    logoSrc: `${process.env.PUBLIC_URL}/firefox.svg`, // Update the path dynamically
    logoAlt: "Firefox Add-ons",
    title: "Firefox Add-ons",
    reviewCount: 120,
    rating: 4.5,
  },
  safari: {
    logoSrc: `${process.env.PUBLIC_URL}/safari.svg`, // Update the path dynamically
    logoAlt: "Safari Extensions",
    title: "Safari Extensions",
    reviewCount: 90,
    rating: 4.3,
  },
  opera: {
    logoSrc: `${process.env.PUBLIC_URL}/opera.svg`, // Update the path dynamically
    logoAlt: "Opera Add-ons",
    title: "Opera Add-ons",
    reviewCount: 65,
    rating: 4.1,
  },
};
// Define types for the props
interface BrowserSelectorProps {
  selectedBrowser: string; // This will be the value from the combobox
}

// BrowserSelector component that renders the correct BrowserCard based on the selected browser
const BrowserSelector: React.FC<BrowserSelectorProps> = ({
  selectedBrowser,
}) => {
  // Get the browser data based on the selected browser
  const browserData = browsers[selectedBrowser as keyof typeof browsers];

  // If the selected browser is not in the list, we can return a fallback or nothing
  if (!browserData) {
    return <p>Please select a browser to see details.</p>;
  }

  return (
    <BrowserCard
      logoSrc={browserData.logoSrc}
      logoAlt={browserData.logoAlt}
      title={browserData.title}
      reviewCount={browserData.reviewCount}
      rating={browserData.rating}
    />
  );
};

export default BrowserSelector;
