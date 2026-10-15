import { useRef, useState } from "react";
import LoginDetails from "./LoginDetails";

export default function LoginForm() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl"
      >
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-slate-800">
            Login Form
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your login details below
          </p>
        </div>

        <div>
          <label
            htmlFor="username"
            className="mb-2 block font-medium text-slate-700"
          >
            Username
          </label>

          <input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Enter username"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block font-medium text-slate-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Enter password"
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>

      <LoginDetails data={submittedData} />
    </div>
  );
}