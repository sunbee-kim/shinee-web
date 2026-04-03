"use client";

import { Bowlby_One } from "next/font/google";
import clsx from "clsx";

const anton = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
});

type RocketRProps = {
  text?: string;
  className?: string;
};

export default function RocketR({ text = "R", className }: RocketRProps) {
  return (
    <span
      className={clsx(
        anton.className,
        "inline-block leading-none select-none font-black",
        className,
      )}
      style={{
        fontSize: "120px",
        color: "#b8321c",
        transform: "scale(1.2, 1)",
        lineHeight: 0.85,
      }}
      aria-label={text}
    >
      {text}
    </span>
  );
}
