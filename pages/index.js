import Link from "next/link";

function HomePage() {
  return (
    <div>
      <p>Halaman Home</p>
      <ul>
        <li>
            <Link href="/portfolio">Portofolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
