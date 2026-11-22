// All site copy lives here.

export const brand = "Pavan";

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const headline = ["Hey, I'm", "Pavan Sai Vellanki"];

export const lede = "I build AI agents that do the work, not just the talking.";

export const ctas = {
  primary: { label: "See my work", href: "#work" },
  secondary: { label: "Get in touch", href: "#contact" },
};

export const media = {
  video: "/media/rabbit-loop.mp4",
  poster: "/media/rabbit.png",
};

export const about = {
  title: "About",
  bio: [
    "I'm an AI engineer who builds agentic systems for real problems. I've shipped a WhatsApp agent that captures business leads around the clock, a voice agent for telephony, and an ML model that predicts borewell depth from geology, not just numbers.",
    "Python, FastAPI, LangGraph and React are my daily tools. I'm based in Hyderabad and open to full-time roles and freelance projects.",
  ],
  now: {
    role: "AI Engineer",
    company: "JNET Technologies",
    period: "May 2025 - Present",
    place: "Hyderabad, India",
  },
};

export const skills = {
  title: "Skills",
  groups: [
    { label: "Languages", items: ["Python"] },
    { label: "Backend", items: ["FastAPI"] },
    {
      label: "AI",
      items: ["Agentic AI", "RAG", "LangChain", "LangGraph"],
    },
    { label: "Frontend", items: ["React", "Web design"] },
  ],
};

export const projects = {
  title: "Work",
  items: [
    {
      name: "WhatsApp AI Agent",
      tag: "Agentic AI · Lead generation",
      body: "An AI agent that works for your business at any hour. It chats with customers on WhatsApp and turns conversations into qualified leads.",
      href: "https://github.com/PavansaiVellanki",
    },
    {
      name: "Borewell Depth Predictor",
      tag: "Machine learning · Geology",
      body: "An ML model trained on a state's borewell data, with lithology layered on top. It weighs the type of rock under the soil, not just numbers, so depth predictions are more accurate.",
      href: "https://github.com/PavansaiVellanki",
    },
    {
      name: "Telephony Voice Agent",
      tag: "Voice AI · Telephony",
      body: "A voice agent that answers phone calls and holds natural conversations.",
      href: "https://github.com/PavansaiVellanki",
    },
  ],
};

export const services = {
  title: "Services",
  intro: "Available for freelance projects.",
  items: [
    {
      name: "AI agents",
      body: "WhatsApp and chat agents, RAG assistants and workflow automation built on LangGraph.",
    },
    {
      name: "Voice & telephony",
      body: "Voice agents that answer, qualify and route calls.",
    },
    {
      name: "Web design & build",
      body: "Clean, fast React sites and landing pages, from design to deploy.",
    },
  ],
};

export const beyond = {
  title: "Beyond work",
  items: [
    { name: "Photography", note: "Framing light" },
    { name: "Drawing", note: "Sketching ideas" },
    { name: "Chess", note: "Thinking six moves ahead" },
    { name: "Running", note: "Chasing miles" },
    { name: "Anime", note: "Marathon sessions" },
    { name: "Languages", note: "Collecting human ones" },
  ],
};

export const contact = {
  title: "Let's talk",
  lede: "Open to full-time roles and freelance projects.",
  email: "vellankipavansai@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/PavansaiVellanki" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vellanki-pavansai/",
    },
  ],
};
