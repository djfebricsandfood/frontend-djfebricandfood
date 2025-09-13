import { useState } from "react";
import { Share2 } from "lucide-react";

export default function SharePopup({open , setOpen}) {
 

  return (
    <div className="absolute top-4 right-4 flex space-x-2">
      {/* Share button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
      >
        <Share2 className="h-5 w-5" />
      </button>

      {/* Popup */}
      {open && (
        <div className="absolute top-12 right-0 bg-white rounded-2xl shadow-xl p-3 flex flex-col space-y-2 z-50">
          <a
            href="https://facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/?text=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
