/// <reference types="astro/client" />

declare module "astro:jsx" {
  interface HTMLAttributes {
    "is:client"?: boolean;
    "is:inline"?: boolean;
    "define:vars"?: unknown;
  }
}