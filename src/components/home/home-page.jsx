import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a>
            <Image
              alt={ev.title}
              height={200}
              width={200}
              src={ev.image}
            ></Image>
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
