# audio-transcripter

> https://audio-transcripter.vercel.app

## Getting Started

### Prerequisites

I build this project with the following setup:

- macOS Sonoma v14.5
- node v18.19.1
- yarn v1.22.22
- npm v10.5.0

## Development

1. create your `.env` file based on the `.env.example`

2. install all necessary dependencies

```bash
yarn install
```

3. start frontend

```bash
yarn start
```

## Production

1. create your `.env` file based on the `.env.example`

2. install all necessary dependencies

```bash
yarn install
```

3. build application

```bash
yarn build
```

## Testing

Warning: Some child dependencies of `@testing-library` are not compatible with the latest version of React. There are some other warnings related to the fetch mock.
Test are still passing but you may see some warnings.


1. install all necessary dependencies

2. test application
```bash
yarn install
```

```bash
yarn test
```
