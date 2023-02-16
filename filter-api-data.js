function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((obj) =>
    mandatoryKeys.every((key) => obj.hasOwnProperty(key))
  );
}
