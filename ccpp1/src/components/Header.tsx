import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-end gap-4 p-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
