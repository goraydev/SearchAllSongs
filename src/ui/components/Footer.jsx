import React from "react";

export const Footer = () => {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="footer fixed bottom-0 w-full py-2">
      <p className="text-center">
        Rights reserverd &copy;{currentYear()}. Developed by Aguedo Yanac Gerson
        | Goraycode
      </p>
    </footer>
  );
};
