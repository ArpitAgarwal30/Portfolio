export interface NavItem {
  id: string;
  label: string;
}

// Order matches the sections on the home page; ids are the section anchors.
export const sections: NavItem[] = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "expertise", label: "Expertise" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];
