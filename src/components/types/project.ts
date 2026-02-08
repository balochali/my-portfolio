export interface Project {
  id: number;
  slug: string; // generated from title, e.g., "ai-chatbot-using-python-hugging-face"
  title: string;
  category: string;
  tags: string[]; // short tags, e.g., ["Python", "Flask", "AI"]
  description: string; // short description
  longDescription?: string; // detailed description for project details page
  features?: string[]; // list of key features
  techStack?: string[]; // technologies used
  image: string; // main project image
  gallery?: string[]; // additional images/screenshots
  demoUrl: string; // live demo link
  codeUrl: string; // GitHub or source code link
  status: "Completed" | "In Progress" | "Pending"; // project progress status
  featured: boolean; // highlighted project
  role?: string; // Role in the project
  duration?: string; // Duration of the project
  challenge?: string; // Problem statement
  solution?: string; // Solution details
}
