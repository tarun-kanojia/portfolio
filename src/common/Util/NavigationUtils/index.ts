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
