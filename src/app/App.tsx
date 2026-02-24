export default function App() {
  return (
    <div className="size-full flex items-center justify-center">
      <div className="text-center">
        <h1>Simple Hello World</h1>
        <p>Version: {import.meta.env.PACKAGE_VERSION}</p>
      </div>
    </div>
  );
}
