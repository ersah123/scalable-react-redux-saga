# Scalable Redux architecture for React Projects with Redux-Saga and Typescript

## Starting Project

`yarn start`

## Runnign Tests

`yarn test`

## Dependencies

- redux@4.0.4
- react-redux@7.1.0
- redux-saga@1.0.5
- redux-saga-test-plan@4.0.0-beta.4
- typesafe-actions@4.4.2
- enzyme@3.10.0
- redux-mock-store@1.5.3
- enzyme-adapter-react-16@1.14.0

## Folder Structure

```
src
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── post.tsx
│   └── postList.tsx
├── containers
│   ├── __tests__
│   │   └── postList.container.spec.tsx
│   └── postList.tsx
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── serviceWorker.ts
└── state
    ├── configureStore.dev.ts
    ├── ducks
    │   ├── index.ts
    │   └── post
    │       ├── __tests__
    │       │   ├── __mockData__
    │       │   ├── actions.spec.ts
    │       │   │   └── postsData.json
    │       │   ├── reducers.spec.ts
    │       │   └── sagas.spec.ts
    │       ├── actions.ts
    │       ├── reducers.ts
    │       ├── sagas.ts
    │       └── types.ts
    ├── index.ts
    ├── middlewares
    │   └── saga.ts
    └── utils
        └── apiCaller.ts
```
