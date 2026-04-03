"use client";

import { useEffect, useState } from "react";

function detectTailscaleByImage(
  url: string,
  timeoutMs = 1500,
): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    let done = false;

    const finish = (result: boolean) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      resolve(result);
    };

    const timer = setTimeout(() => finish(false), timeoutMs);

    img.onload = () => finish(true);
    img.onerror = () => finish(false);

    img.src = `${url}?t=${Date.now()}`;
  });
}

export default function InternalMenu() {
  const [showInternalMenu, setShowInternalMenu] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    detectTailscaleByImage("http://rocket.shinee.kr:3000/file.svg").then(
      (ok) => {
        setShowInternalMenu(ok);
        setChecked(true);
      },
    );
  }, []);

  if (!checked) return null;

  return (
    <>
      {showInternalMenu && (
        <span>
          -{" "}
          <a
            href="http://rocket.shinee.kr:2283/share/B3KvMNh0NfJpH2ngdmSDZKaVKx972Cx3SccIhF775y4u0bVsQca3bfsfMTuYTQk6B1I"
            target="_blank"
          >
            Sunbee archive
          </a>
        </span>
      )}
    </>
  );
}
