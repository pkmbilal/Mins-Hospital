import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";

export const metadata = {
  title: "Contact Us | Mins Hospital",
  description:
    "Get in touch with Mins Hospital for appointments, medical enquiries, support, and directions.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <ContactMap />
      <SiteFooter />
    </>
  );
}
