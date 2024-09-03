import ContactButtonItem from "./contact-button-item";

const ContactButton = () => {
  return (
    <div className=" flex-end w-full sticky top-0">
      <div className="card p-2">
        <ContactButtonItem
          href="mailto:privilege@scola.co.id"
          title="privilege@scola.co.id"
          className="socialContainer containerOne"
          src="/assets/images/email_1.png"
        />
        <ContactButtonItem
          href="https://www.tiktok.com/@scola.co.id?_t=8kVgxHqR33q&_r=1"
          title="scola.co.id"
          className="socialContainer containerOne"
          src="/assets/images/tiktok.png"
        />
        <ContactButtonItem
          href="https://www.instagram.com/scola_yourprivilege?igsh=MmV3eTg0dnBlMmg2&utm_source=qr"
          title="scola_yourprivilege"
          className="socialContainer containerOne"
          src="/assets/images/instagram.png"
        />
        <ContactButtonItem
          href="tel:+6281336344458"
          className="socialContainer containerOne"
          title="081336344458"
          src="/assets/images/phone_1.png"
        />
        <ContactButtonItem
          href="https:wa.me/+6281336344458"
          className="socialContainer containerOne"
          title="081336344458"
          src="/assets/images/whatsapp_1.png"
        />
      </div>
    </div>
  );
};

export default ContactButton;
