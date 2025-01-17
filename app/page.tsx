import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="site-section">
        <div className="wrapper flex flex-col items-center gap-4">
          <h1 className="text-center text-5xl font-bold lg:text-8xl">
            Turn Every Commit into a Commitment!
          </h1>
          <p className="mx-auto text-center text-lg lg:w-4/5 lg:text-xl">
            Turn every commit into an announcement, every issue into a solution,
            and every collaboration into progress. Keep your team informed,
            aligned, and ready to tackle anything.
          </p>
          <Link href={"/auth/register"} className="btn primary lg">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
