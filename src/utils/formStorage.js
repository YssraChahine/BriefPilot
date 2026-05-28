const STORAGE_PREFIX = "briefpilot-form";

export function getFormStorageKey(categoryId) {
  return `${STORAGE_PREFIX}-${categoryId}`;
}

export function loadSavedForm(categoryId) {
  if (!categoryId) {
    return null;
  }

  try {
    const savedData = localStorage.getItem(getFormStorageKey(categoryId));

    if (!savedData) {
      return null;
    }

    return JSON.parse(savedData);
  } catch (error) {
    console.error("Could not load saved form:", error);
    return null;
  }
}

export function saveForm(categoryId, values) {
  if (!categoryId || !values) {
    return;
  }

  try {
    localStorage.setItem(getFormStorageKey(categoryId), JSON.stringify(values));
  } catch (error) {
    console.error("Could not save form:", error);
  }
}

export function clearSavedForm(categoryId) {
  if (!categoryId) {
    return;
  }

  try {
    localStorage.removeItem(getFormStorageKey(categoryId));
  } catch (error) {
    console.error("Could not clear saved form:", error);
  }
}
