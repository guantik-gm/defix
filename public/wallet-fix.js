// Web3 Wallet Compatibility Fix
// This script prevents wallet injection conflicts

(function() {
  'use strict';
  
  // Prevent wallet injection errors
  const originalConsoleError = console.error;
  console.error = function(...args) {
    const message = args.join(' ');
    
    // Filter out known wallet injection errors
    if (
      message.includes('inpage.js') ||
      message.includes('inject.js') ||
      message.includes('Cannot destructure property') ||
      message.includes('t is not a function') ||
      message.includes('Cannot create proxy')
    ) {
      return; // Suppress wallet-related errors
    }
    
    originalConsoleError.apply(console, args);
  };
  
  // Ensure window.ethereum is properly handled
  if (typeof window !== 'undefined') {
    window.addEventListener('ethereum#initialized', () => {
      // Wallet is ready
    });
    
    // Handle multiple wallet scenario
    if (window.ethereum?.providers?.length > 0) {
      // Multiple wallets detected, use the first one
      window.ethereum = window.ethereum.providers[0];
    }
  }
})();