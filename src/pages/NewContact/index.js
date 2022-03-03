import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import PageHeader from '../../components/PageHeader';

export default function NewContactPage() {
  return (
    <>
      <PageHeader title="Novo Contato" />
      <Input placeholder="Nome" />
      <Select>
        <option value="1">Instagram</option>
      </Select>
    </>
  );
}
