import { useRouter } from "next/router";

function ClientPage() {
    const router = useRouter();
    return <div>Halaman Client si : {router.query.clientId}</div>;
}

export default ClientPage;
