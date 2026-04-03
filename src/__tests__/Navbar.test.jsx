import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock the useScrollSpy hook
vi.mock("@/hooks/useScrollSpy", () => ({
  useScrollSpy: () => "hero",
}));

import { Navbar } from "../components/Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("IzzyTech")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    const expectedLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    expectedLinks.forEach((linkName) => {
      const links = screen.getAllByText(linkName);
      expect(links.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("each nav link points to the correct section anchor", () => {
    render(<Navbar />);

    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks[0].closest("a")).toHaveAttribute("href", "#hero");

    const aboutLinks = screen.getAllByText("About");
    expect(aboutLinks[0].closest("a")).toHaveAttribute("href", "#about");

    const projectLinks = screen.getAllByText("Projects");
    expect(projectLinks[0].closest("a")).toHaveAttribute("href", "#projects");
  });

  it("renders the mobile menu toggle button", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });
});
