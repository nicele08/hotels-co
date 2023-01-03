# Hotels&Co

[![Maintainability](https://api.codeclimate.com/v1/badges/b8d2c68d475b15aa7c2a/maintainability)](https://codeclimate.com/github/nicele08/hotels-co/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/b8d2c68d475b15aa7c2a/test_coverage)](https://codeclimate.com/github/nicele08/hotels-co/test_coverage)

This is a [Next.js](https://nextjs.org/) project demonstrates infinite scroll pagination and other high performance features that allow the site to works better on low internet speed whith help of [React-query](https://react-query.tanstack.com/).

## Demo

Click to see a [Demo](https://hotels-co.vercel.app/) deployed on vercel.

## Setup

First clone repo:

```bash
git clone https://github.com/nicele08/hotels-co.git
```
Set environment variables:

Copy `.env_example` file and rename to `.env.local`
then update `NEXT_PUBLIC_DEFAULT_API` variable with the appropriate api.
You can use this [API](https://63b14335f9a53fa20274f035.mockapi.io/api/v1) if not own yours.

Install dependencies:

```bash
npm install
# or
yarn install
```

## Getting Started

### Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing

For test coverage run:

```bash
npm run test:coverage
# or
yarn test
```

### Production

First, build project:

```bash
npm run build
# or
yarn build
```
Start server:

```bash
npm run start
# or
yarn start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Feedbacks

You can check out [`nicele08/hotels-co`](https://github.com/nicele08/hotels-co) - your feedback and contributions are welcome!
