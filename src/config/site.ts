/**
 * Central site configuration — edit these values in ONE place.
 */
export const SITE_NAME = "Mathcraft";
export const SITE_TAGLINE = "O Level math concepts, from the ground up";
export const CERTIFICATE_ISSUER = SITE_NAME;
export const CREATOR_NAME = "Ashique Anan Abir";
export const CREATOR_ROLE = "Creator & Developer";
export const CREATOR_PORTFOLIO = "https://ashiqueanan.github.io/portfolio/";
export const CONTACT_EMAIL = "abirashique@gmail.com";

/** GitHub Pages base path — must match the repo name (lowercase, no spaces). */
export const REPO_NAME = "mathcraft";
export const BASE_PATH = `/${REPO_NAME}`;
export const LIVE_URL = `https://ashiqueanan.github.io/${REPO_NAME}/`;

/** Dedication — the site was made for Ashique's cousin. */
export const DEDICATION_NAME = "Ayus";

/** Google Analytics (GA4). Default is live; env override swaps it at build time. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-SS92F2Q4PL";
