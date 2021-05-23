# Villain Schemes app

Assignment of Spring 2021.

## Setup

Install dependencies:

```bash
$ yarn
```

## Develop store

```bash
yarn test:store
```

In the interactive test screen press:

- `p` plus one number of test file to focus that test suite
- `p` plus `store` to return to all tests
- `t` plus the name of one test to focus that test
- `t` and intro to run all tests again of selected suites

Check coverage:

```bash
yarn test:store:coverage
```

The coverage should be 100%.
If it is not 100%, remove exceeding code.

## Develop components

```bash
yarn test:components
```

In the interactive test screen press:

- `p` plus one number of test file to focus that test suite
- `p` plus `components` to return to all tests
- `t` plus the name of one test to focus that test
- `t` and intro to run all tests again of selected suites

Check coverage:

```bash
yarn test:components:coverage
```

## Pair-Programming implementation

- https://en.wikipedia.org/wiki/Pair_programming

Switch roles every test. Share the same computer or the use the "Live Share Extension". Using the extension, run the tests in local and use `.only` to focus in the current implemented test. Remember remove all `.only` when finished with the test, and before delivering.

```javascript
test("some test", () => {
  /* ... */
});
```

Focusin with `.only`:

```javascript
test.only("some test", () => {
  /* ... */
});
```

Remember to remove all `.only` and keep track that there are no _skipped_ tests.

> > **Important**: Tests must remain unchanged.
