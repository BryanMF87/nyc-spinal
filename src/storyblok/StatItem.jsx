import { storyblokEditable } from "@storyblok/react";

export default function StatItem({ blok }) {
  const { statistic, text } = blok;

  return (
    <div
      className="flex items-center space-x-4 bg-white/10 rounded-xl p-4 text-left"
      {...storyblokEditable(blok)}
    >
      <span className="text-2xl font-bold text-sky-300">
        {statistic}
      </span>

      <span className="text-sky-100">
        {text}
      </span>
    </div>
  );
}
