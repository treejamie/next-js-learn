import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' }, // that's going to break at somepoint
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',  // this smells a bit - is there a way to not do this?
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}