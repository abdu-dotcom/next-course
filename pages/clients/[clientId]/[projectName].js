import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>
    Nama client : {router.query.clientId} <br></br>
    Halaman Client project bernama : {router.query.projectName} </div>;
}

export default ClientProjectPage;
