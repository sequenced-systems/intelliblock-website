import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Intelliblock Consulting terms of use — governing access to intelligence outputs, intellectual property ownership, advisory disclaimer, and limitations on liability.',
  alternates: { canonical: 'https://www.intelliblockconsulting.com/terms/' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <main>
      <section className="section section--white page-offset" aria-labelledby="terms-headline">
        <div className="container">
          <div className="prose-doc">

            <h1 id="terms-headline">Terms of Use</h1>
            <p className="prose-doc__meta">Effective date: 20 June 2026 &nbsp;|&nbsp; Governing law: England and Wales</p>

            <h2>1. Who we are</h2>
            <p>Intelliblock Consulting (&ldquo;Intelliblock&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a UK-registered advisory firm operated by Ayodeji Idowu, Managing Director, based in Portsmouth, England. We provide infrastructure bankability intelligence and policy convergence analysis for the African infrastructure market.</p>

            <h2>2. Acceptance of these terms</h2>
            <p>By accessing or using this website (&ldquo;the Site&rdquo;), you agree to be bound by these Terms of Use. If you do not agree, do not use the Site. We may update these terms at any time. Continued use of the Site following any update constitutes acceptance of the revised terms.</p>

            <h2>3. Nature of our services</h2>
            <p>Intelliblock provides infrastructure bankability intelligence, policy convergence analysis, and scored Signal Briefs for the Nigerian and African infrastructure market. All outputs are:</p>
            <ul>
              <li><strong>Advisory only.</strong> No output constitutes legal, financial, investment, or professional advice under the Financial Services and Markets Act 2000 or any other applicable law.</li>
              <li><strong>AI-assisted.</strong> All intelligence outputs are produced with AI assistance and reviewed and approved by the Managing Director before delivery.</li>
              <li><strong>Point-in-time analysis.</strong> Bankability scores, IRR assessments, and policy signal assessments reflect conditions at the time of analysis. They are not guarantees of future outcomes or investment returns.</li>
            </ul>

            <h2>4. Intellectual property</h2>
            <p>All content on this Site — including but not limited to the 100-Point Bankability Framework, Signal Brief format, methodology documentation, score archive entries, analytical reports, and written intelligence — is the intellectual property of Intelliblock Consulting and is protected by UK copyright law.</p>
            <p>You may not reproduce, distribute, adapt, republish, display, or transmit any content from this Site in any form without the prior written consent of Intelliblock Consulting. Reproduction for personal, non-commercial reference is permitted provided the source is clearly attributed: &ldquo;Source: Intelliblock Consulting, intelliblockconsulting.com.&rdquo;</p>
            <p>The Bankability Framework, scoring methodology, and associated tools are proprietary. No licence to use them for commercial purposes is granted by access to this Site.</p>

            <h2>5. Advisory disclaimer</h2>
            <p>Intelliblock outputs are analytical instruments — not regulated financial advice. Specifically:</p>
            <ul>
              <li>Bankability scores do not constitute a recommendation to invest in, finance, or develop any project.</li>
              <li>Opportunity window assessments do not constitute a prediction of project timelines or financial close.</li>
              <li>Recommendations in Signal Briefs direct the Strategist toward further analytical steps — they are not personal recommendations to transact in any controlled investment under the Financial Services and Markets Act 2000.</li>
            </ul>
            <p>If you require regulated financial advice, you should consult a firm authorised by the Financial Conduct Authority.</p>

            <h2>6. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Intelliblock Consulting shall not be liable for any direct, indirect, incidental, consequential, or punitive loss or damage arising from your reliance on content published on this Site. This includes, without limitation, loss of profit, loss of revenue, or loss of anticipated savings.</p>
            <p>Nothing in these terms limits liability for fraud, personal injury, or death caused by negligence, or any other liability that cannot be excluded under English law.</p>

            <h2>7. Third-party links and services</h2>
            <p>This Site contains links to third-party services including Setmore (booking) and LinkedIn. We are not responsible for the content, privacy practices, or terms of those services. Links do not constitute endorsement.</p>

            <h2>8. Governing law and jurisdiction</h2>
            <p>These Terms of Use are governed by the laws of England and Wales. Any dispute arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h2>9. Contact</h2>
            <p>For any query relating to these terms: <a href="mailto:ayodeji@intelliblockconsulting.com">ayodeji@intelliblockconsulting.com</a></p>

          </div>
        </div>
      </section>
    </main>
  )
}
