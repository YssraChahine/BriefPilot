export const formQuestions = {
  beschwerde: [
    {
      id: "recipient",
      label: "An wen geht das Schreiben?",
      hint: "Zum Beispiel: DHL Kundenservice, Amazon Support, Händlername",
      placeholder: "DHL Kundenservice",
      type: "text",
      required: true,
    },
    {
      id: "subject",
      label: "Worum geht es kurz?",
      hint: "Das wird später als Betreff genutzt.",
      placeholder: "Rückerstattung wegen falscher Rücksendung",
      type: "text",
      required: true,
    },
    {
      id: "whatHappened",
      label: "Was ist passiert?",
      hint: "Beschreibe den Sachverhalt so genau wie möglich.",
      placeholder:
        "Ich habe ein Paket verschickt, es kam zurück und ich musste zusätzliche Kosten zahlen...",
      type: "textarea",
      required: true,
    },
    {
      id: "whenHappened",
      label: "Wann ist es passiert?",
      placeholder: "Zum Beispiel: im November 2025 / am 12.11.2025",
      type: "text",
      required: false,
    },
    {
      id: "goal",
      label: "Was möchtest du erreichen?",
      hint: "Zum Beispiel Erstattung, Prüfung, Entschuldigung oder Ersatz.",
      placeholder: "Ich möchte die zusätzlichen Kosten erstattet bekommen.",
      type: "textarea",
      required: true,
    },
  ],

  widerspruch: [
    {
      id: "recipient",
      label: "An welche Stelle geht der Widerspruch?",
      placeholder: "Jobcenter Hamburg, Krankenkasse, Behörde...",
      type: "text",
      required: true,
    },
    {
      id: "subject",
      label: "Gegen was möchtest du widersprechen?",
      hint: "Zum Beispiel Bescheid, Forderung, Mahnung, Ablehnung.",
      placeholder: "Widerspruch gegen den Bescheid vom ...",
      type: "text",
      required: true,
    },
    {
      id: "decisionDate",
      label: "Von wann ist der Bescheid oder die Forderung?",
      placeholder: "Datum des Bescheids, falls bekannt",
      type: "text",
      required: false,
    },
    {
      id: "whatHappened",
      label: "Was steht in dem Schreiben?",
      placeholder: "Beschreibe kurz, was gefordert oder entschieden wurde.",
      type: "textarea",
      required: true,
    },
    {
      id: "reason",
      label: "Warum hältst du das für falsch?",
      placeholder:
        "Zum Beispiel: Die Angelegenheit wurde bereits geklärt, Angaben sind falsch, Unterlagen liegen vor...",
      type: "textarea",
      required: true,
    },
    {
      id: "goal",
      label: "Was soll die Stelle tun?",
      placeholder: "Ich bitte um erneute Prüfung und schriftliche Bestätigung.",
      type: "textarea",
      required: true,
    },
  ],

  vermieter: [
    {
      id: "recipient",
      label: "An wen geht das Schreiben?",
      placeholder: "Vermieter, Hausverwaltung, Ansprechpartner...",
      type: "text",
      required: true,
    },
    {
      id: "subject",
      label: "Worum geht es?",
      placeholder: "Rückfrage zur Nebenkostenabrechnung",
      type: "text",
      required: true,
    },
    {
      id: "apartment",
      label: "Um welche Wohnung geht es?",
      hint: "Adresse oder kurze Beschreibung, falls relevant.",
      placeholder: "Wohnung in der Musterstraße 12, 3. OG links",
      type: "text",
      required: false,
    },
    {
      id: "whatHappened",
      label: "Was ist der Sachverhalt?",
      placeholder:
        "Beschreibe die Situation, die Abrechnung, den Mangel oder die Rückfrage.",
      type: "textarea",
      required: true,
    },
    {
      id: "goal",
      label: "Was möchtest du vom Vermieter?",
      placeholder:
        "Ich bitte um Erklärung, Korrektur, Reparatur oder schriftliche Rückmeldung.",
      type: "textarea",
      required: true,
    },
  ],

  bewerbung: [
    {
      id: "recipient",
      label: "An wen geht die Nachricht?",
      placeholder: "Recruiter, Unternehmen, Ansprechpartner...",
      type: "text",
      required: true,
    },
    {
      id: "subject",
      label: "Worum geht es?",
      placeholder: "Antwort auf Ihre Anfrage / Gehaltsvorstellung",
      type: "text",
      required: true,
    },
    {
      id: "role",
      label: "Um welche Position geht es?",
      placeholder: "Junior Frontend Developer",
      type: "text",
      required: false,
    },
    {
      id: "whatHappened",
      label: "Was möchtest du mitteilen?",
      placeholder:
        "Beschreibe kurz, worauf du antworten möchtest oder was du sagen willst.",
      type: "textarea",
      required: true,
    },
    {
      id: "goal",
      label: "Was soll am Ende erreicht werden?",
      placeholder:
        "Zum Beispiel Gespräch vereinbaren, Interesse bestätigen, Rückfrage stellen...",
      type: "textarea",
      required: true,
    },
  ],
};

export const toneOptions = [
  {
    value: "freundlich",
    label: "Freundlich",
  },
  {
    value: "sachlich",
    label: "Sachlich",
  },
  {
    value: "deutlich",
    label: "Deutlich",
  },
  {
    value: "streng",
    label: "Streng",
  },
];

export const inputLanguageOptions = [
  {
    value: "de",
    label: "Deutsch",
  },
  {
    value: "en",
    label: "Englisch",
  },
];

export const outputLanguageOptions = [
  {
    value: "de",
    label: "Deutsch",
  },
];
