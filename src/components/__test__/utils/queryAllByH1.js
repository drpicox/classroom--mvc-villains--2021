import { buildQueries } from "@testing-library/dom";

function queryAllByH1(container) {
  return Array.from(container.querySelectorAll("h1"));
}

const getMultipleError = (container) => `Found multiple h1"`;
const getMissingError = (container) => `Unable to find any h1"`;

const [queryByH1, getAllByH1, getByH1, findAllByH1, findByH1] = buildQueries(
  queryAllByH1,
  getMultipleError,
  getMissingError
);

export { queryByH1, queryAllByH1, getByH1, getAllByH1, findAllByH1, findByH1 };
