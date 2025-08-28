import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
      <SignIn />
    </div>
  );
}
