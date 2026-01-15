# User List Challenge

## Task
Display a list of users and add a search input that filters by name.

**Requirements:**
1. Show all users in a list
2. Add a text input at the top
3. As the user types, filter the list to show only matching names (case-insensitive)
4. Match the reference design (see `reference.html` or screenshot below)

**Time:** 15 minutes

**Bonus:**
- Display user initials in an avatar circle (e.g., "Alice Johnson" → "AJ")
- Show a count of filtered users in the footer

**Note:** No additional dependencies are required, but you may add them if you prefer.

---

## Getting Started

```bash
# Install dependencies (use your preferred package manager)
bun install    # or yarn / pnpm / npm

# Start the dev server
bun run dev    # or yarn dev / pnpm dev / npm dev
```

Open `src/App.tsx` and implement the `FilterableList` component.

---

## Bonus Discussion Points (if time permits)
After completing the challenge, we may discuss:
- What if this list came from an API?
- How would you handle 10,000 users?
- How would you debounce the search input?
