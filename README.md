# Speech App Coaching Call

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## This app utilize the following dependencies:

- Firebase Authentication with Google [Documentation](https://firebase.google.com/docs/auth/web/google-signin?authuser=6)

```bash
npm install firebase
```

```bash
npm i firebase-tools
```

<hr/>

- React Speech kit [Documentation](https://www.npmjs.com/package/react-speech-kit)

```bash
npm i react-speech-kit --legacy-peer-deps
```

<hr/>
### TailwindCSS [Documentation](https://tailwindcss.com/docs/guides/nextjs)

```bash
npm install -D tailwindcss postcss autoprefixer --force
```

```bash
npx tailwindcss init -p
```

#### Add the paths to all of your template files in your tailwind.config.js file.

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

#### Add the paths to all of your template files in your globals.css file. Please clean your file before adding this code.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<hr/>

### TailwindUI [Documentation](https://tailwindui.com/documentation)

```bash
npm install tailwindcss@latest --force
```

```bash
npm i  @tailwindcss/forms --force
```

```bash
npm i  @tailwindcss/typography --force
```

```bash
npm i  @tailwindcss/aspect-ratio --force
```

```bash
npm install @headlessui/react @heroicons/react --force
```

<hr/>

### Lottie Animation for Web [Documentation](https://www.npmjs.com/package/lottie-web)

```bash
npm i lottie-web --force
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel
