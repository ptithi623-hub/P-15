export default function LoginDetails({ data }) {
  if (!data) return null;

  return (
    <div className="mt-6 rounded-2xl border border-emerald-200 bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-emerald-700">
        ✓ Submitted Information
      </h2>

      <div className="space-y-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">
            Username
          </p>
          <p className="mt-1 break-words font-semibold text-slate-800">
            {data.username}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">
            Password
          </p>
          <p className="mt-1 break-words font-semibold text-slate-800">
            {data.password}
          </p>
        </div>
      </div>
    </div>
  );
}