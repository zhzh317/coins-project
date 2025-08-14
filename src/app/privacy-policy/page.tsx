import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | CoinsCiphers",
  description: "Read the Privacy Policy for CoinsCiphers to understand how we collect, use, and protect your personal information when you use our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: August 14, 2025</p>
          </section>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p>
              Welcome to CoinsCiphers ("us", "we", or "our"). We operate the https://coinsciphers.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 id="information-collection">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, email addresses when you subscribe to our newsletter, and usage data collected via cookies.
            </p>

            <h3 id="personal-data">Personal Data</h3>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First name and last name (optional)</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h3 id="usage-data">Usage Data</h3>
            <p>
              We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <h2 id="use-of-data">Use of Data</h2>
            <p>CoinsCiphers uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information</li>
            </ul>

            <h2 id="cookies-policy">Cookies Policy</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
            <p>For more information, please visit our dedicated <a href="/cookies-policy">Cookies Policy</a> page.</p>

            <h2 id="security-of-data">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>

            <h2 id="links-to-other-sites">Links to Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated by us. If you click a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>

            <h2 id="changes-to-this-policy">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 id="contact-us">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please <a href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

