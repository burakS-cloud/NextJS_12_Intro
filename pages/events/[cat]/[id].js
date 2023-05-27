import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";

const EventPage = ({ data }) => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      console.log("POST:", data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const inputEmail = useRef();
  return (
    <>
      <div>
        <Image
          src={data.image}
          width={300}
          height={300}
          alt={data.description}
        ></Image>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <form onSubmit={onSubmit} action="">
        <label htmlFor="email">Email:</label>
        <input
          ref={inputEmail}
          id="email"
          placeholder="Please insert your email here"
          type="email"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const { allEvents } = data;

  const allPaths = allEvents.map((ev) => {
    return {
      params: {
        cat: ev.city,
        id: ev.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
