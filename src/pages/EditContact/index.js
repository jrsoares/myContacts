import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContactPage() {
  return (
    <>
      <PageHeader title="Editar Júnior Soares" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
