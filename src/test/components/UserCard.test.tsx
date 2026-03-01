import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserCard from "../../features/home/components/UserCard";

function renderCard(props?: Partial<React.ComponentProps<typeof UserCard>>) {
  const defaults = {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    city: "New York",
    company: "Acme Inc",
    index: 0,
  };
  return render(
    <MemoryRouter>
      <UserCard {...defaults} {...props} />
    </MemoryRouter>
  );
}

describe("UserCard", () => {
  it("renders user name and username", () => {
    renderCard();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("@johndoe")).toBeInTheDocument();
  });

  it("renders email, city and company", () => {
    renderCard();
    expect(screen.getAllByText("john@example.com").length).toBeGreaterThan(0);
    expect(screen.getAllByText("New York").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Acme Inc").length).toBeGreaterThan(0);
  });

  it("displays correct initials", () => {
    renderCard({ name: "Alice Smith" });
    expect(screen.getByText("AS")).toBeInTheDocument();
  });

  it("renders different initials for different names", () => {
    renderCard({ name: "Bob Jones", index: 2 });
    expect(screen.getByText("BJ")).toBeInTheDocument();
  });
});
