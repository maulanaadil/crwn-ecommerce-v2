export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_STRIPE_PUBLISHED_KEY: string;
      ENV: "development" | "production" | "test";
    }
  }
}
