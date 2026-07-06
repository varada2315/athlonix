import React, { useEffect } from 'react';

const PolicyContainer = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="section section-white" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-anton)', fontSize: '48px', marginBottom: '32px', color: '#000' }}>{title}</h1>
        <div style={{ color: '#333', lineHeight: '1.8', fontSize: '16px' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const TermsAndConditions = () => (
  <PolicyContainer title="ATHLONIXX FITCLUB – TERMS & CONDITIONS">
    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>1. Introduction</h3>
    <p style={{ marginBottom: '16px' }}>Welcome to Athlonixx Fitclub (“Athlonixx”, “we”, “our”, or “us”). By enrolling as a member, accessing our premises, or using any of our services, you agree to comply with the following Terms & Conditions. If you do not agree with any part of these terms, you are advised not to use our facilities or services.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>2. Membership Plans & Payments</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Athlonixx offers Monthly, Quarterly, and Annual membership plans.</li>
      <li>Membership fees must be paid in full prior to accessing the facility.</li>
      <li>Memberships are non-transferable and non-shareable.</li>
      <li>Memberships do not auto-renew. Renewal must be completed before expiry to avoid service interruption.</li>
      <li>All fees paid are non-refundable and non-adjustable, except at the sole discretion of management.</li>
      <li>Pricing, offers, and packages are subject to change without prior notice.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>3. Referral Program</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>The referred member must mention the referring member’s name at the time of sign-up (front desk registration) to qualify.</li>
      <li>The referring member will receive 1 complimentary month of membership, subject to the referred member completing full payment.</li>
      <li>Referral benefits cannot be exchanged for cash or transferred.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>4. Facility Usage & Member Conduct</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Minimum age requirement: 8 years and above. Members below 8 must be accompanied by a parent or legal guardian.</li>
      <li>Members must follow all safety instructions, gym rules, and staff guidance at all times.</li>
      <li>Proper gym attire and footwear are mandatory.</li>
      <li>Equipment must be handled responsibly and returned after use.</li>
      <li>Athlonixx reserves the right to deny entry, suspend, or terminate memberships due to misconduct, rule violations, or disruptive behavior.</li>
      <li>Guests are not permitted inside the premises unless authorized by management.</li>
      <li>Smoking, alcohol, drugs, or any illegal substances are strictly prohibited.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>5. Health, Liability & Disclaimer</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Members acknowledge that physical exercise involves inherent risks.</li>
      <li>All members must sign a liability waiver and health declaration form before using the facility.</li>
      <li>Members with pre-existing medical conditions are strongly advised to consult a physician prior to commencing any fitness program.</li>
      <li>Athlonixx Fitclub shall not be held responsible for injuries, medical conditions, accidents, or loss/theft of personal belongings within the premises.</li>
      <li>Lockers (if provided) are for temporary use only.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>6. Privacy & Data Protection</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Personal information collected is used solely for membership management and internal communication.</li>
      <li>We do not sell or share member data with third parties, except where legally required.</li>
      <li>Members may receive updates, promotions, and service notifications via phone, email, or messaging platforms.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>7. Membership Suspension & Termination</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Athlonixx reserves the right to suspend or terminate memberships due to non-payment or breach of gym policies.</li>
      <li>Membership freeze requests for medical reasons must be supported by valid documentation and are subject to management approval.</li>
      <li>No refunds will be issued for terminated memberships due to misconduct.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>8. Unexpected situations</h3>
    <p style={{ marginBottom: '16px' }}>Athlonixx shall not be liable for interruptions caused by circumstances beyond our control, including but not limited to natural disasters, government regulations, pandemics, or unforeseen emergencies.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>9. Amendments to Terms</h3>
    <p style={{ marginBottom: '16px' }}>We reserve the right to amend these Terms & Conditions at any time. Updated terms will be communicated via notice boards or digital platforms. Continued usage of the facility implies acceptance of the revised terms.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>10. GOVERNING LAW & DISPUTES</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>These Terms & Conditions are governed by the laws of Bengaluru, India.</li>
      <li>Any disputes shall be resolved through arbitration or legal proceedings in the jurisdiction of Gurgaon.</li>
    </ul>
    <p style={{ marginBottom: '16px' }}>By using our facilities, you acknowledge and agree to these Terms & Conditions.</p>
  </PolicyContainer>
);

export const PrivacyPolicy = () => (
  <PolicyContainer title="ATHLONIXX FITCLUB – PRIVACY POLICY">
    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>1. Introduction</h3>
    <p style={{ marginBottom: '16px' }}>At Athlonixx Fitclub, your privacy matters to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website or services. By accessing our services, you agree to this policy. If you have any questions or concerns, please contact us at Email ID-</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>2. Information We Collect</h3>
    <p style={{ marginBottom: '8px' }}>We may collect the following information:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Name, phone number, email address, and billing details</li>
      <li>Payment information (securely processed through third-party payment gateways)</li>
      <li>Health information voluntarily provided for fitness assessments</li>
      <li>Website usage data collected through cookies and tracking tools</li>
      <li>Marketing and analytics data collected via tools such as Meta Pixel</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>3. How We Use Your Information</h3>
    <p style={{ marginBottom: '8px' }}>Your information is used to:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Register and manage your membership</li>
      <li>Process payments securely</li>
      <li>Send important updates, offers, and promotional messages (you may opt out anytime)</li>
      <li>Provide personalized fitness recommendations</li>
      <li>Improve our services through feedback and analytics</li>
      <li>Comply with legal and regulatory requirements</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>4. Data Storage & Security</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Your data is stored on secure and protected systems.</li>
      <li>We take appropriate technical and organizational measures to prevent unauthorized access, misuse, or data breaches.</li>
      <li>Your data will be retained until you request deletion or as required by law.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>5. Your Rights</h3>
    <p style={{ marginBottom: '8px' }}>You have the right to:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Request access to the personal data we hold about you</li>
      <li>Request correction of inaccurate or outdated information</li>
      <li>Request deletion of your data (subject to legal or operational requirements)</li>
    </ul>
    <p style={{ marginBottom: '16px' }}>To exercise your rights, please email us at Email ID</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>6. Cookies & Tracking Technologies</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>We use cookies and similar technologies to enhance user experience and analyze website traffic.</li>
      <li>You can manage or disable cookies through your browser settings.</li>
      <li>We may use third-party tools (such as Meta Pixel) to optimize marketing and advertisements.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>7. Sharing of Information</h3>
    <p style={{ marginBottom: '8px' }}>We do not sell or rent your personal data. However, your data may be shared with:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Payment service providers for secure transactions</li>
      <li>Marketing platforms for targeted campaigns</li>
      <li>Legal authorities, if required under applicable law</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>8. Updates to This Policy</h3>
    <p style={{ marginBottom: '16px' }}>Athlonixx Fitclub may update this Privacy Policy from time to time. Any changes will be posted on our website. Continued use of our services after updates indicates your acceptance of the revised policy.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>9. Governing Law</h3>
    <p style={{ marginBottom: '16px' }}>This Privacy Policy shall be governed by and interpreted in accordance with the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts in the city where Athlonixx Fitclub operates.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>9. GOVERNING LAW</h3>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>This Privacy Policy is governed by the laws of Bengaluru, India.</li>
      <li>Any disputes will be resolved in accordance with the applicable legal framework.</li>
    </ul>
  </PolicyContainer>
);

export const CancellationPolicy = () => (
  <PolicyContainer title="ATHLONIXX FITCLUB – CANCELLATION POLICY">
    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>1. Membership Expiry & Cancellation</h3>
    <p style={{ marginBottom: '16px' }}>Athlonixx Fitclub does not operate on automatic recurring payments. Your membership will automatically expire on the selected end date if not renewed. No separate cancellation request is required.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>2. Refund Policy</h3>
    <p style={{ marginBottom: '16px' }}>All membership plans are non-refundable. Once a membership is purchased, it remains valid for the full duration selected at the time of enrollment, regardless of usage. Early termination does not qualify for a partial or full refund.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>3. Cancellation of Add-On Services</h3>
    <p style={{ marginBottom: '16px' }}>If you wish to cancel personal training packages, add-on services, or have any membership-related concerns, you must visit the Athlonixx Fitclub reception desk in person for assistance. All such requests are subject to management approval and applicable terms.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>4. Policy Updates</h3>
    <p style={{ marginBottom: '16px' }}>Athlonixx Fitclub reserves the right to modify or update this Cancellation Policy at any time. Any changes will be communicated through our official channels. Continued use of our services after updates implies acceptance of the revised policy.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>5. Governing Law</h3>
    <p style={{ marginBottom: '16px' }}>This Cancellation Policy shall be governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts in the city where Athlonixx Fitclub operates.</p>
  </PolicyContainer>
);

export const RefundPolicy = () => (
  <PolicyContainer title="ATHLONIXX FITCLUB – REFUND POLICY">
    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>1. No Refund Policy</h3>
    <p style={{ marginBottom: '8px' }}>All payments made towards memberships, services, or products at Athlonixx Fitclub are strictly non-refundable. We do not provide refunds for:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Unused membership periods</li>
      <li>Early cancellations</li>
      <li>Change of plans or personal circumstances</li>
      <li>Partial usage of services</li>
    </ul>
    <p style={{ marginBottom: '16px' }}>Once a payment is completed, it is considered final.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>2. Exceptional Cases</h3>
    <p style={{ marginBottom: '8px' }}>While we maintain a strict no-refund policy, exceptions may be granted at the sole discretion of management in genuine cases. Examples may include:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Accidental duplicate payments</li>
      <li>Verified billing errors</li>
      <li>Special circumstances deemed valid by management</li>
    </ul>
    <p style={{ marginBottom: '16px' }}>Approval of such requests is not guaranteed.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>3. Refund Processing (If Approved)</h3>
    <p style={{ marginBottom: '8px' }}>If a refund is approved:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>It will be processed within 5–7 working days.</li>
      <li>The amount will be credited back to the original mode of payment used during the transaction.</li>
      <li>Processing timelines may vary depending on the bank or payment provider.</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>4. Non-Refundable Services</h3>
    <p style={{ marginBottom: '8px' }}>The following are strictly non-refundable:</p>
    <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
      <li>Membership plans (Monthly, Quarterly, Annual)</li>
      <li>Personal training packages</li>
      <li>Group class packages</li>
      <li>Merchandise and retail products</li>
      <li>Any promotional or discounted plans</li>
    </ul>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>5. Policy Updates</h3>
    <p style={{ marginBottom: '16px' }}>Athlonixx Fitclub reserves the right to update or modify this Refund Policy at any time. Any revisions will be communicated through our official channels. Continued use of our services after changes implies acceptance of the updated policy.</p>

    <h3 style={{ marginTop: '24px', marginBottom: '12px', fontWeight: 'bold' }}>6. Governing Law</h3>
    <p style={{ marginBottom: '16px' }}>This Refund Policy shall be governed by the laws of India. Any disputes arising shall fall under the jurisdiction of the courts in the city where Athlonixx Fitclub operates.</p>
  </PolicyContainer>
);
