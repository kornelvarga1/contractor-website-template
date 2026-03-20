const COMPANY_NAME = "Phoenix Roofing & Repair";

const Terms = () => (
  <>
    <section className="bg-primary py-14">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl">Terms &amp; Conditions</h1>
      </div>
    </section>
    <section className="bg-background py-14">
      <div className="mx-auto max-w-3xl px-4 lg:px-6 prose prose-neutral">
        <p><strong>Last updated:</strong> March 2026</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using the {COMPANY_NAME} website and services, you agree to be bound by these Terms &amp; Conditions.</p>

        <h2>2. Services</h2>
        <p>{COMPANY_NAME} provides roofing inspection, repair, replacement, and related services in the Phoenix metropolitan area. All work is performed by licensed, bonded, and insured professionals.</p>

        <h2>3. Estimates &amp; Pricing</h2>
        <p>All estimates are provided free of charge and are non-binding. Final pricing is determined after a thorough inspection and may vary based on materials, scope of work, and site conditions.</p>

        <h2>4. Promotions &amp; Discounts</h2>
        <p>Promotional offers are subject to change and may not be combined with other discounts unless explicitly stated. Discounts must be mentioned at the time of the estimate.</p>

        <h2>5. Communication Consent</h2>
        <p>By submitting your phone number through any form on this website, you consent to receiving text messages and phone calls from {COMPANY_NAME} regarding your inquiry. Message and data rates may apply. You may opt out at any time by replying STOP.</p>

        <h2>6. Limitation of Liability</h2>
        <p>{COMPANY_NAME} shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services beyond the amount paid for the specific service rendered.</p>

        <h2>7. Contact</h2>
        <p>For questions about these terms, contact us at <a href="mailto:mike@phoenixroofingandrepair.com" className="text-accent">mike@phoenixroofingandrepair.com</a> or call <a href="tel:6024970154" className="text-accent">(602) 497-0154</a>.</p>
      </div>
    </section>
  </>
);

export default Terms;
