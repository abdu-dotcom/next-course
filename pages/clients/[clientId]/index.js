import { useRouter } from "next/router";

function ClientPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "1" },
    });
  }
  return (
    <div>
      <p>Halaman Client si : {router.query.clientId}</p>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientPage;
