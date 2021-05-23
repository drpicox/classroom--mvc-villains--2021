export function selectViews(mainState) {
  return mainState.views;
}

export function selectTopView(mainState) {
  const views = selectViews(mainState);
  return views[views.length - 1];
}

export function selectHasViewBack(mainState) {
  const views = selectViews(mainState);
  return views.length > 1;
}
