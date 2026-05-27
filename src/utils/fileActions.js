export async function copyToClipboard(text) {
  if (!text) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Could not copy text:", error);
    return false;
  }
}

export function downloadTextFile({ filename, content }) {
  if (!content) {
    return;
  }

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);
  const temporaryLink = document.createElement("a");

  temporaryLink.href = url;
  temporaryLink.download = filename;
  temporaryLink.click();

  URL.revokeObjectURL(url);
}

export function createSafeFilename(value) {
  const fallbackName = "briefpilot-entwurf";

  if (!value) {
    return fallbackName;
  }

  return (
    value
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 60) || fallbackName
  );
}
