import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

// eslint-disable-next-line react-refresh/only-export-components
function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-extrabold mb-4">
        Welcome the Full stack Engineering!
      </h1>
      <p className="text-lg text-gray-300">
        The boilerplate is set. The Boundaries are drawn.
      </p>
    </div>
  );
}
