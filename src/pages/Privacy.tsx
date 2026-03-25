import { client } from "@/config/client";

const Privacy = () => (
  <>
    <section className="bg-primary py-14">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Privacy Policy</h1>
      </div>
    </section>
    <section className="bg-background py-14">
      <div className="mx-auto max-w-3xl px-4 lg:px-6 prose prose-neutral">
        <p><strong>Last updated:</strong> March 2026</p>

        <h2>1. Information We Collect</h2>
        <p>When you fill out a form on our website, we may collect your name, phone number, email address, and details about your roofing needs. We do not collect information from visitors who do not submit a form.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information you provide solely to respond to your inquiry, provide estimates, schedule services, and communicate with you about your project. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

        <h2>3. Text Messaging</h2>
        <p>By providing your phone number, you consent to receiving text messages from {client.companyName}. These messages may include appointment confirmations, follow-ups, and service updates. Message frequency varies. Reply STOP to opt out. Message and data rates may apply.</p>

        <h2>4. Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

        <h2>5. Cookies</h2>
        <p>Our website may use cookies and similar technologies to improve your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.</p>

        <h2>6. Third-Party Services</h2>
        <p>We may use third-party tools (e.g., analytics, form processing) that collect anonymous usage data. These services have their own privacy policies governing data use.</p>

        <h2>7. Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us.</p>

        <h2>8. Contact</h2>
        <p>For privacy-related questions, contact us at <a href={`mailto:${client.email}`} className="text-accent">{client.email}</a> or call <a href={`tel:${client.phoneTel}`} className="text-accent">{client.phone}</a>.</p>
      </div>
    </section>
  </>
);

export default Privacy;
