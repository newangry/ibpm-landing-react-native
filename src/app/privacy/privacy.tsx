"use client";
import Logo from "@/components/Logo";
import WavyBackground from "@/components/WavyBackground";
import ContentCard from "@/components/ContentCard";
import styles from "./privacy.module.css";

function Privacy() {
  return (
    <WavyBackground>
      <section className={styles.hero}>
        <ContentCard>
          <Logo label="Privacy Policy" />
          <p>
            This Privacy Policy describes the privacy practices of iBPM and
            applies to all users of the app. iBPM is an offline app that does
            not collect or store any personal information.
          </p>
          <h3>Information Collection:</h3>
          <p>
            iBPM does not collect any personally identifiable information, such
            as your name, address, email address, or phone number. The app does
            not track your browsing history or other personal data.
          </p>
          <h3>Data Storage:</h3>
          <p>
            iBPM does not store any personal information on your device or
            elsewhere.
          </p>
          <h3>Third-Party Services:</h3>
          <p>
            iBPM does not use any third-party services that collect or store
            personal information.
          </p>          
          <h3>Changes to This Privacy Policy:</h3>
          <p>
            We may update this Privacy Policy from time to time. If we make any
            changes, we will post the updated Privacy Policy on the app. We
            encourage you to review the Privacy Policy regularly to stay
            informed of any changes.
          </p>
          <h3>Contact Us:</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy, you
            can contact us at privacy at superiortech dot co
          </p>
        </ContentCard>
      </section>
    </WavyBackground>
  );
}

export default Privacy;
