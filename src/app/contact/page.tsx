import ContactFormSheet from "../components/ui/ContactForm";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className=" space-y-8 bg-accent-cream text-text font-sans"
    >
      <Header />
      <ContactFormSheet />
      <Footer topWaveColor="#fff9f3" />
    </main>
  );
}
