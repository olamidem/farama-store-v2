import { Lock, LogIn, Phone } from "lucide-react";
import bgImage from "../../assets/this.png";

const LoginScreen = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans overflow-hidden">
      {/* LEFT PANE: LOGIN FORM */}
      <div className="w-full md:w-[45%] bg-white flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-12 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-md w-full mx-auto space-y-8 relative z-10">
          {/* Logo Brand Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur-md opacity-30"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-slate-900 via-slate-950 to-blue-950 flex items-center justify-center border border-white/10 shadow-lg text-white font-black text-lg tracking-wider">
                  FM
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-none">
                  FARAMA STORE
                </h1>
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Login to have access to your dashboard
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                Staff Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="number"
                  required
                  placeholder="Phone number"
                  className="w-full py-2.5 pl-10 pr-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl text-slate-800 placeholder-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="••••"
                  className="w-full py-2.5 pl-10 pr-4 bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 rounded-xl text-slate-800 placeholder-slate-400 text-sm font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-1.5 text-slate-500 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/20"
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white rounded-xl text-xs font-bold tracking-wider uppercase transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
            >
              <LogIn className="w-4 h-4" />

              <span>Sign In</span>
            </button>
          </form>

          {/* Footer branding */}
          <div className="border-t border-slate-100 pt-6 text-center text-slate-400 text-[11px] font-medium">
            <p>© 2026 Farama Store. All Rights Reserved.</p>
            <p className="mt-0.5">Authorized Store Personnel Only.</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANE: BEAUTIFUL GROCERY BANNER SPLIT */}
      <div className="hidden md:block md:w-[55%] relative overflow-hidden bg-slate-900">
        {/* Sleek diagonal white split panel overlay */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-white transform -skew-x-6 -translate-x-8 z-10" />

        <img
          src={bgImage}
          alt="Farama Store Grocery"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-85 select-none"
        />
      </div>
    </div>
  );
};

export default LoginScreen;
