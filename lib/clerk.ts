import { clerkClient } from "@clerk/nextjs";

// Configure Clerk to be more lenient with clock skew
export const configureClerk = () => {
  // This sets a custom JWT verification option to be more lenient with clock skew
  // The default is 300 seconds (5 minutes)
  process.env.CLERK_JWT_VERIFICATION_OPTIONS = JSON.stringify({
    clockSkewTolerance: 600, // 10 minutes tolerance
  });
};

// Call this function in your app initialization
configureClerk(); 