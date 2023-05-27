import Image from "next/image";
import Link from "next/link";
const EventsCatPage = ({ data, city }) => {
  return (
    <div>
      <h1>Events in {city}</h1>
      <div>
        {data.map((ev) => (
          <>
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
              <a>
                <Image width={300} height={300} src={ev.image}></Image>
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </a>
            </Link>
          </>
        ))}
      </div>
      {/* <a href="/events/london/ev1">Event 1</a>
      <a href="/events/event2">Event 2</a>
      <a href="/events/event3">Event 3</a>
      <a href="/events/event4">Event 4</a>
      <a href="/events/event5">Event 5</a>
      <a href="/events/event6">Event 6</a> */}
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPath = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPath,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter(
    (ev) => ev.city.toString().toLowerCase() === id.toString().toLowerCase()
  );
  const formattedCity = id[0].toUpperCase() + id.substring(1, id.length);
  return { props: { data, city: formattedCity } };
}
