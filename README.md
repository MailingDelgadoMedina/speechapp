# Speech App Coaching Call

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## This app utilize the following dependancies:

- Firebase Authentication with Google [Documentation](https://firebase.google.com/docs/auth/web/google-signin?authuser=6)

```bash
npm install firebase
```

```bash
npm i firebase-tools
```

- React Speech kit [Documentation](https://www.npmjs.com/package/react-speech-kit)

```bash
npm i react-speech-kit
```

- TailwindCSS[Documentation](https://tailwindcss.com/docs/guides/nextjs)

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

tailwind.config.js

/\*_ @type {import('tailwindcss').Config} _/
module.exports = {

content: [
```bash
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
```
],
theme: {
extend: {},
},
plugins: [],
}

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel
