import { Meta, StoryObj } from "@storybook/react";
import BrowserCard from "./BrowserCard"; // Adjust the path to your BrowserCard component

// Meta configuration for BrowserCard story
const meta: Meta<typeof BrowserCard> = {
  title: "Components/BrowserCard",
  component: BrowserCard,
  tags: ["autodocs"], // Optional: for automatic documentation
  parameters: {
    backgrounds: { default: "light" }, // Set default background
  },
  argTypes: {
    logoSrc: {
      control: "text",
      description: "URL of the logo image",
      defaultValue: "/chrome.svg",
    },
    logoAlt: {
      control: "text",
      description: "Alt text for the logo image",
      defaultValue: "Chrome Web Store",
    },
    title: {
      control: "text",
      description: "Title of the card",
      defaultValue: "chrome web store",
    },
    reviewCount: {
      control: { type: "number", min: 0 },
      description: "Number of reviews",
      defaultValue: 378,
    },
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "Rating out of 5",
      defaultValue: 4.9,
    },
  },
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "chrome web store",
    reviewCount: 378,
    rating: 4.9, // Default rating
  },
};

export default meta;

type Story = StoryObj<typeof BrowserCard>;

// Default story for BrowserCard
export const Default: Story = {};

// BrowserCard with full stars
export const AllFullStars: Story = {
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "Fully Rated Store",
    reviewCount: 1200,
    rating: 5.0, // Full stars
  },
};

// Half star scenario
export const HalfStarRating: Story = {
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "Half Star Rating",
    reviewCount: 540,
    rating: 2.5, // Half star case
  },
};

// Low rating with mostly empty stars
export const LowRating: Story = {
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "Low Rated Store",
    reviewCount: 150,
    rating: 1.0, // Only one full star
  },
};

// BrowserCard with no reviews and no stars
export const NoReviews: Story = {
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "No Reviews Yet",
    reviewCount: 0,
    rating: 0, // No stars, no reviews
  },
};

// BrowserCard with custom content and partial stars
export const CustomContent: Story = {
  args: {
    logoSrc: "/chrome.svg", // Custom logo
    logoAlt: "Another Web Store",
    title: "Another Web Store",
    reviewCount: 1500,
    rating: 4.3, // Partial stars
  },
};

// BrowserCard with a high number of reviews and full stars
export const HighReviewCount: Story = {
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "Highly Rated Web Store",
    reviewCount: 10000,
    rating: 5,
  },
};

// BrowserCard with zero stars and zero reviews
export const NoStars: Story = {
  args: {
    logoSrc: "/chrome.svg",
    logoAlt: "Chrome Web Store",
    title: "No Stars Web Store",
    reviewCount: 0,
    rating: 0,
  },
};

  
  // Story to simulate height issue
  export const SimulateHeightIssue: Story = {
    args: {
      logoSrc: "/chrome.svg",
      logoAlt: "Chrome Web Store",
      title: "Simulating Height Issue",
      reviewCount: 500,
      rating: 4.7,
    },
    render: (args) => (
      <div
        className="flex flex-col items-center justify-center min-h-screen h-full w-full overflow-hidden bg-gray-100"
        style={{ height: "80vh" }} // Simulate height constraint
      >
        <div className="max-w-2xl flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-md">
          <BrowserCard {...args} />
        </div>
      </div>
    ),
  };