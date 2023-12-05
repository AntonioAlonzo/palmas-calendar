"use client";

import { useState, useEffect } from "react";
import Event from "./event";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [events, setEvents] = useState([]);

  const [queryParameters] = useSearchParams();

  let lang = "";
  if (typeof document !== "undefined") {
    lang = queryParameters.get("lang");
  }

  useEffect(() => {
    fetch("https://fundacioncostapalmas.com/wp-json/jet-cct/event")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const months = [
    {
      month: 0,
      events: [],
    },
    {
      month: 1,
      events: [],
    },
    {
      month: 2,
      events: [],
    },
    {
      month: 3,
      events: [],
    },
    {
      month: 4,
      events: [],
    },
    {
      month: 5,
      events: [],
    },
    {
      month: 6,
      events: [],
    },
    {
      month: 7,
      events: [],
    },
    {
      month: 8,
      events: [],
    },
    {
      month: 9,
      events: [],
    },
    {
      month: 10,
      events: [],
    },
    {
      month: 11,
      events: [],
    },
  ];

  events
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((event) => {
      const date = new Date(event.date);
      months[date.getMonth()].events.push(event);
    });

  return (
    <>
      {months.map((month) => {
        return (
          <div className="flex flex-wrap gap-7 mb-4 pb-10">
            {month.events.map((eventItem) => {
              return (
                <Event key={eventItem._ID} data={eventItem} lang={lang}></Event>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
