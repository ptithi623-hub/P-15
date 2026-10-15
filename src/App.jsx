import LoginForm from "./Components/LoginForm";

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-cyan-100 px-4 py-10">
      <div className="w-full max-w-md">
        <LoginForm />

        <p className="mt-6 text-center text-sm text-slate-500">
          React useRef() · Uncontrolled Components · Tailwind CSS
        </p>
      </div>
    </main>
  );
}