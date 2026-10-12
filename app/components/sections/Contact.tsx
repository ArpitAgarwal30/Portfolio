import { Mail } from "lucide-react";
import { Section } from "~/components/layout/Section";
import { GitHubIcon, LinkedInIcon } from "~/components/ui/BrandIcons";
import { CopyEmailButton } from "~/components/ui/CopyEmailButton";
import { externalLinkProps, primaryButton, secondaryButton } from "~/components/ui/styles";
import { profile } from "~/content/profile";

export function Contact() {
  return (
    <Section id="contact" index="06" title="Let's talk" description={profile.closing}>
      <p className="font-mono text-lg break-all sm:text-xl">{profile.email}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={`mailto:${profile.email}`} className={primaryButton}>
          <Mail className="size-4" aria-hidden="true" />
          Send an email
        </a>
        <a href={profile.links.linkedin} {...externalLinkProps} className={secondaryButton}>
          <LinkedInIcon className="size-4" />
          LinkedIn
        </a>
        <a href={profile.links.github} {...externalLinkProps} className={secondaryButton}>
          <GitHubIcon className="size-4" />
          GitHub
        </a>
      </div>
      <div className="mt-4">
        <CopyEmailButton email={profile.email} />
      </div>
      <p className="mt-8 text-sm text-muted">Based in {profile.location}.</p>
    </Section>
  );
}
