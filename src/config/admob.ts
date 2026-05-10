/**
 * Google AdMob Configuration
 *
 * Replace these test IDs with your actual AdMob unit IDs from:
 * https://admob.google.com
 *
 * Test IDs (for development):
 * Banner: ca-app-pub-3940256099942544/6300978111
 * Interstitial: ca-app-pub-3940256099942544/1033173712
 * Rewarded: ca-app-pub-3940256099942544/5224354917
 */

export const ADMOB_CONFIG = {
  // Replace with your AdMob App ID
  appId: 'ca-app-pub-XXXXXXXXXXXXX~XXXXXXXXXX',

  // Banner Ad Unit IDs
  bannerAdUnitId: __DEV__
    ? 'ca-app-pub-3940256099942544/6300978111' // Test ID
    : 'ca-app-pub-XXXXXXXXXXXXX/XXXXXXXXXX', // Production ID

  // Interstitial Ad Unit IDs (shown between screens)
  interstitialAdUnitId: __DEV__
    ? 'ca-app-pub-3940256099942544/1033173712' // Test ID
    : 'ca-app-pub-XXXXXXXXXXXXX/XXXXXXXXXX', // Production ID

  // Rewarded Ad Unit IDs (optional - for free content unlock)
  rewardedAdUnitId: __DEV__
    ? 'ca-app-pub-3940256099942544/5224354917' // Test ID
    : 'ca-app-pub-XXXXXXXXXXXXX/XXXXXXXXXX', // Production ID
};

/**
 * Subscription Prices
 */
export const SUBSCRIPTION_CONFIG = {
  monthlyPrice: '4.99',
  currency: 'EUR',
  consultationPrice: '5.00',
  consultationDuration: 30, // minutes
  freeConsultationDuration: 0, // minutes (form-based only)
};
