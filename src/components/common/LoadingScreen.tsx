
const LoadingScreen = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600" />
        <p className="mt-3 text-sm text-slate-500">Loading..................</p>
      </div>
    </div>
  );
}

export default LoadingScreen
