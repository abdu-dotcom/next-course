import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "1", name: "abduh" },
    { id: "2", name: "jhon" },
    { id: "3", name: "budi" },
    { id: "4", name: "ryan" },
  ];
  return (
    <div>
      <h1>Halaman Client</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
