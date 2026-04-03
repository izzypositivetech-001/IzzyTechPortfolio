import { describe, it, expect } from "vitest";
import { projects } from "../data/projects";
import { testimonials } from "../data/testimonials";

describe("Projects Data", () => {
  it("should have at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("every project should have required fields", () => {
    projects.forEach((project) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("image");
      expect(project).toHaveProperty("tags");
      expect(project).toHaveProperty("demoUrl");
      expect(project).toHaveProperty("githubUrl");
    });
  });

  it("every project image should use webp format", () => {
    projects.forEach((project) => {
      expect(project.image).toMatch(/\.webp$/);
    });
  });

  it("every project should have at least one tag", () => {
    projects.forEach((project) => {
      expect(project.tags.length).toBeGreaterThan(0);
      project.tags.forEach((tag) => {
        expect(tag).toHaveProperty("name");
        expect(tag).toHaveProperty("color");
      });
    });
  });

  it("every demoUrl should be a valid URL or placeholder", () => {
    projects.forEach((project) => {
      expect(project.demoUrl).toMatch(/^https?:\/\//);
    });
  });
});

describe("Testimonials Data", () => {
  it("should have at least one testimonial", () => {
    expect(testimonials.length).toBeGreaterThan(0);
  });

  it("every testimonial should have required fields", () => {
    testimonials.forEach((t) => {
      expect(t).toHaveProperty("id");
      expect(t).toHaveProperty("content");
      expect(t).toHaveProperty("author");
      expect(t).toHaveProperty("role");
      expect(t).toHaveProperty("initials");
    });
  });

  it("initials should be exactly 2 characters", () => {
    testimonials.forEach((t) => {
      expect(t.initials).toHaveLength(2);
    });
  });
});
