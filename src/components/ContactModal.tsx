"use client";

import { useContactModal } from "@/store/useContactModal";
import ContactForm from "./ContactForm";

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();

  return <ContactForm isOpen={isOpen} onClose={closeModal} />;
};

export default ContactModal;
