import Image from "next/image";
import Link from "next/link";
const EventsPage = ({ events_categories }) => {
  return (
    <div>
      <h1>EVENT INDEX PAGE</h1>
      <div>
        {events_categories.map((category) => (
          <Link key={category.id} href={`/events/${category.id}`} passHref>
            <a>
              <Image width={300} height={300} src={category.image}></Image>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </a>
          </Link>
        ))}
        {/* <a href="">
          <img src="" alt="" />
          <h2>Events in London</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum,
            est ullam nostrum adipisci quasi nulla ex voluptatem possimus qui!
            Non tempora facilis facere fugiat tenetur praesentium rerum ad
            neque. Quia suscipit inventore vero repellat. Culpa quasi hic veniam
            magni modi sunt nostrum aliquam illo amet necessitatibus iusto
            exercitationem dolor odit neque corporis, accusantium harum quos?
            Illo accusantium sint voluptas.
          </p>
        </a>

        <a href="">
          <img src="" alt="" />
          <h2>Events in San Francisco</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum,
            est ullam nostrum adipisci quasi nulla ex voluptatem possimus qui!
            Non tempora facilis facere fugiat tenetur praesentium rerum ad
            neque. Quia suscipit inventore vero repellat. Culpa quasi hic veniam
            magni modi sunt nostrum aliquam illo amet necessitatibus iusto
            exercitationem dolor odit neque corporis, accusantium harum quos?
            Illo accusantium sint voluptas.
          </p>
        </a>

        <a href="">
          <img src="" alt="" />
          <h2>Events in Barcelona</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum illum,
            est ullam nostrum adipisci quasi nulla ex voluptatem possimus qui!
            Non tempora facilis facere fugiat tenetur praesentium rerum ad
            neque. Quia suscipit inventore vero repellat. Culpa quasi hic veniam
            magni modi sunt nostrum aliquam illo amet necessitatibus iusto
            exercitationem dolor odit neque corporis, accusantium harum quos?
            Illo accusantium sint voluptas.
          </p>
        </a> */}
      </div>
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      events_categories,
    },
  };
}
