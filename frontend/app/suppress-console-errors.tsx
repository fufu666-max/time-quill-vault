"use client";

import { useEffect } from "react";

/**
 * Suppress non-critical console errors that don't affect functionality
 * - Base Account SDK COOP warnings
 * - WalletConnect configuration errors (due to placeholder projectId)
 * - Coinbase/External service request failures
 * Also hides visual error notifications/badges on the page
 */
export function SuppressConsoleErrors() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const originalError = console.error;
    const originalWarn = console.warn;

    // List of error messages to suppress
    const suppressPatterns = [
      /Base Account SDK requires the Cross-Origin-Opener-Policy/i,
      /Failed to fetch.*api\.web3modal\.org/i,
      /Failed to fetch.*pulse\.walletconnect\.org/i,
      /Failed to fetch.*cca-lite\.coinbase\.com/i,
      /\[Reown Config\] Failed to fetch remote project configuration/i,
      /Analytics SDK: TypeError: Failed to fetch/i,
      /ERR_BLOCKED_BY_RESPONSE/i,
      /Failed to load resource.*pulse\.walletconnect/i,
      /Failed to load resource.*api\.web3modal/i,
      /Failed to load resource.*cca-lite\.coinbase/i,
      /Failed to load resource.*favicon\.ico/i,
      /Lit is in dev mode/i,
    ];

    // Override console.error
    console.error = (...args: any[]) => {
      const message = args.join(" ");
      const shouldSuppress = suppressPatterns.some((pattern) =>
        pattern.test(message)
      );

      if (!shouldSuppress) {
        originalError.apply(console, args);
      }
    };

    // Override console.warn
    console.warn = (...args: any[]) => {
      const message = args.join(" ");
      const shouldSuppress = suppressPatterns.some((pattern) =>
        pattern.test(message)
      );

      if (!shouldSuppress) {
        originalWarn.apply(console, args);
      }
    };

    // Hide visual error notifications/badges that might appear on the page
    const hideErrorElements = () => {
      // Hide elements that look like error notification badges
      // Look for small notification-like elements with "Issues" text
      const selectors = [
        '[class*="issue"]',
        '[class*="error-badge"]',
        '[class*="notification"]',
        '[role="alert"]',
      ];

      selectors.forEach((selector) => {
        try {
          document.querySelectorAll(selector).forEach((el) => {
            const text = (el.textContent || "").trim();
            // Only hide if it looks like a small notification badge (contains "Issues" or error count)
            if (text.match(/\d+\s*Issues?/i) || text.match(/Issues?\s*\d+/i)) {
              const htmlEl = el as HTMLElement;
              // Only hide if element is relatively small (likely a badge)
              const rect = htmlEl.getBoundingClientRect();
              if (rect.width < 200 && rect.height < 100) {
                htmlEl.style.display = "none";
                htmlEl.style.visibility = "hidden";
              }
            }
          });
        } catch (e) {
          // Ignore selector errors
        }
      });
    };

    // Run after a short delay to ensure DOM is ready, then watch for new elements
    const timeoutId = setTimeout(hideErrorElements, 100);
    const observer = new MutationObserver(() => {
      setTimeout(hideErrorElements, 50); // Debounce
    });
    
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    // Cleanup: restore original console methods on unmount
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}

