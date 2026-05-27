function getToneIntro(tone) {
  const toneMap = {
    freundlich: {
      opening:
        "ich wende mich heute an Sie, um den folgenden Sachverhalt zu klären.",
      request: "Ich bitte Sie daher freundlich um Prüfung und Rückmeldung.",
    },
    sachlich: {
      opening:
        "ich wende mich an Sie, um den folgenden Sachverhalt sachlich darzustellen.",
      request:
        "Ich bitte Sie um Prüfung des Vorgangs und um eine schriftliche Rückmeldung.",
    },
    deutlich: {
      opening:
        "ich wende mich an Sie, da aus meiner Sicht eine Klärung des folgenden Sachverhalts erforderlich ist.",
      request:
        "Ich bitte Sie daher um zeitnahe Prüfung und eine nachvollziehbare schriftliche Rückmeldung.",
    },
    streng: {
      opening:
        "ich wende mich an Sie, da der folgende Sachverhalt aus meiner Sicht dringend geklärt werden muss.",
      request:
        "Ich fordere Sie daher auf, den Vorgang zeitnah zu prüfen und mir schriftlich zu antworten.",
    },
  };

  return toneMap[tone] || toneMap.sachlich;
}

function cleanValue(value) {
  return value?.trim() || "";
}

function createSubjectLine(subject) {
  return cleanValue(subject) || "Ihr Anliegen";
}

function createGreeting(recipient) {
  const cleanedRecipient = cleanValue(recipient);

  if (!cleanedRecipient) {
    return "Sehr geehrte Damen und Herren,";
  }

  return "Sehr geehrte Damen und Herren,";
}

function createClosing(tone) {
  if (tone === "streng") {
    return "Mit freundlichen Grüßen";
  }

  return "Mit freundlichen Grüßen";
}

function createParagraphs(paragraphs) {
  return paragraphs.filter(Boolean).join("\n\n");
}

function generateComplaintLetter(answers) {
  const tone = getToneIntro(answers.tone);
  const subject = createSubjectLine(answers.subject);

  const paragraphs = [
    `${createGreeting(answers.recipient)}`,
    tone.opening,
    cleanValue(answers.whenHappened)
      ? `Der Vorfall ereignete sich beziehungsweise wurde von mir festgestellt: ${cleanValue(
          answers.whenHappened,
        )}.`
      : "",
    `Nach meiner Darstellung stellt sich der Sachverhalt wie folgt dar:\n${cleanValue(
      answers.whatHappened,
    )}`,
    `Mein Anliegen ist folgendes:\n${cleanValue(answers.goal)}`,
    tone.request,
    "Bitte bestätigen Sie mir den Eingang dieses Schreibens und teilen Sie mir mit, wie der Vorgang weiter bearbeitet wird.",
    createClosing(answers.tone),
  ];

  return {
    subject: `Beschwerde: ${subject}`,
    body: createParagraphs(paragraphs),
  };
}

function generateObjectionLetter(answers) {
  const tone = getToneIntro(answers.tone);
  const subject = createSubjectLine(answers.subject);

  const paragraphs = [
    `${createGreeting(answers.recipient)}`,
    `hiermit lege ich Widerspruch gegen ${subject} ein.`,
    cleanValue(answers.decisionDate)
      ? `Das betreffende Schreiben beziehungsweise der Bescheid datiert vom ${cleanValue(
          answers.decisionDate,
        )}.`
      : "",
    `Nach meinem Verständnis geht es um folgenden Sachverhalt:\n${cleanValue(
      answers.whatHappened,
    )}`,
    `Ich halte die Entscheidung beziehungsweise Forderung aus folgenden Gründen für nicht zutreffend:\n${cleanValue(
      answers.reason,
    )}`,
    `Ich bitte Sie daher um Folgendes:\n${cleanValue(answers.goal)}`,
    tone.request,
    "Bitte bestätigen Sie mir den Eingang dieses Widerspruchs schriftlich.",
    createClosing(answers.tone),
  ];

  return {
    subject: `Widerspruch: ${subject}`,
    body: createParagraphs(paragraphs),
  };
}

function generateLandlordLetter(answers) {
  const tone = getToneIntro(answers.tone);
  const subject = createSubjectLine(answers.subject);

  const paragraphs = [
    `${createGreeting(answers.recipient)}`,
    tone.opening,
    cleanValue(answers.apartment)
      ? `Es geht um folgende Wohnung beziehungsweise folgendes Mietverhältnis: ${cleanValue(
          answers.apartment,
        )}.`
      : "",
    `Der Sachverhalt stellt sich aus meiner Sicht wie folgt dar:\n${cleanValue(
      answers.whatHappened,
    )}`,
    `Ich bitte Sie daher um Folgendes:\n${cleanValue(answers.goal)}`,
    tone.request,
    "Bitte geben Sie mir hierzu eine schriftliche Rückmeldung.",
    createClosing(answers.tone),
  ];

  return {
    subject: subject,
    body: createParagraphs(paragraphs),
  };
}

function generateJobLetter(answers) {
  const tone = getToneIntro(answers.tone);
  const subject = createSubjectLine(answers.subject);

  const roleLine = cleanValue(answers.role)
    ? `Bezugnehmend auf die Position als ${cleanValue(answers.role)} möchte ich Ihnen gerne antworten.`
    : "";

  const paragraphs = [
    `${createGreeting(answers.recipient)}`,
    roleLine || tone.opening,
    `Ich möchte Ihnen Folgendes mitteilen:\n${cleanValue(answers.whatHappened)}`,
    `Mein Ziel beziehungsweise mein Wunsch für den weiteren Verlauf ist:\n${cleanValue(
      answers.goal,
    )}`,
    "Ich freue mich über Ihre Rückmeldung.",
    createClosing(answers.tone),
  ];

  return {
    subject: subject,
    body: createParagraphs(paragraphs),
  };
}

const generators = {
  beschwerde: generateComplaintLetter,
  widerspruch: generateObjectionLetter,
  vermieter: generateLandlordLetter,
  bewerbung: generateJobLetter,
};

export function generateLetter({ categoryId, answers }) {
  const generator = generators[categoryId];

  if (!generator) {
    return {
      subject: "Entwurf",
      body: createParagraphs([
        "Sehr geehrte Damen und Herren,",
        "ich möchte Ihnen den folgenden Sachverhalt mitteilen:",
        cleanValue(answers.whatHappened),
        cleanValue(answers.goal),
        "Mit freundlichen Grüßen",
      ]),
    };
  }

  return generator(answers);
}
