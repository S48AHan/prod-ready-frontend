/* eslint-disable react-refresh/only-export-components */
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutRouteComponent,
});

function AboutRouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-extrabold mb-4">
        About Page!
      </h1>
      <p className="text-lg text-gray-300">
        The boilerplate is set. The Boundaries are drawn.
      </p>
    </div>
  );
}
