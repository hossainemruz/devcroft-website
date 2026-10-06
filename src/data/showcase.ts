// Replace these illustrations with real app captures when the recording is ready.
// Set placeholder to false for each finished screenshot.
export const demoVideo = {
  src: "",
  poster: "/media/agent-placeholder.webp",
  captions: "",
};

export const screenshots = {
  agent: {
    src: "/media/agent-placeholder.webp",
    title: "Your agent, in context",
    alt: "Placeholder illustration of agent sessions beside an active coding conversation.",
    placeholder: true,
    annotations: [
      { label: "Pick up a previous session", x: 12, y: 36 },
      { label: "Keep your tools in reach", x: 48, y: 14 },
    ],
  },
  review: {
    src: "/media/review-placeholder.webp",
    title: "Feedback that stays with the code",
    alt: "Placeholder illustration of a code diff with a saved line comment.",
    placeholder: true,
    annotations: [
      { label: "See exactly what changed", x: 75, y: 38 },
      { label: "Leave feedback for your agent", x: 50, y: 63 },
    ],
  },
  resources: {
    src: "/media/resources-placeholder.webp",
    title: "The context behind the change",
    alt: "Placeholder illustration of repository resources and an implementation plan.",
    placeholder: true,
    annotations: [
      { label: "Keep plans beside the project", x: 12, y: 35 },
      { label: "Return to the original session", x: 62, y: 87 },
    ],
  },
  dashboard: {
    src: "/media/dashboard-placeholder.webp",
    title: "A clear place to start",
    alt: "Placeholder illustration of recent projects and a project todo list.",
    placeholder: true,
    annotations: [],
  },
  relationships: {
    src: "/media/relationships-placeholder.webp",
    title: "See the connections",
    alt: "Placeholder illustration connecting shared-api to backend and dashboard repositories.",
    placeholder: true,
    annotations: [],
  },
};
export type ScreenshotKey = keyof typeof screenshots;
