import HeadingText from '@/components/common/HeadingText';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <main className="container flex flex-col py-8">
      <HeadingText subtext="궁금한 점이 있으시면 언제든지 문의해주세요">Contact</HeadingText>
      <ContactForm />
    </main>
  );
};

export default Contact;
