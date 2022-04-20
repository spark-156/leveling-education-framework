const qs = require("query-string");

const setQueryStringWithoutPageReload = (qsValue) => {
  const newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    qsValue;

  window.history.pushState({ path: newurl }, "", newurl);
};

export const setQueryStringValue = (
  key,
  value,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);

  Object.keys(values).forEach((key) => {
    if (values[key] == null) {
      delete values[key];
    }
  });

  let newQsValue;

  if (!value) {
    delete values[key];
    newQsValue = qs.stringify({ ...values });
  } else {
    newQsValue = qs.stringify({ ...values, [key]: value });
  }

  if (newQsValue) setQueryStringWithoutPageReload(`?${newQsValue}`);
  else setQueryStringWithoutPageReload("");
};

export const getQueryStringValue = (
  key,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);
  return values[key];
};
