import {
  EMAIL_URL,
  GITHUB_PROFILE,
  LINKIDIN_PROFILE,
} from "../../constants/UI/SocialLinks";

export function navigateTo(url: string) {
  window.open(url, "_blank");
}

export function navigateToGitHub() {
  navigateTo(GITHUB_PROFILE);
}

export function navigateToLinkindin() {
  navigateTo(LINKIDIN_PROFILE);
}

export function navigateToMailMe() {
  navigateTo(EMAIL_URL);
}

export const navigateToSectionWithId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const navigateToHomeSection = () => {
  navigateToSectionWithId("home");
};

export const navigateToAboutMeSection = () => {
  navigateToSectionWithId("about-me");
};

export const navigateToContactSection = () => {
  navigateToSectionWithId("contact");
};

export const navigateToProjectsSection = () => {
  navigateToSectionWithId("projects");
};

export const navigateToSkillsSection = () => {
  navigateToSectionWithId("skills");
};
