import {useEffect, useState} from "react";

export const useClientReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return ready;
}

export const REGISTER_URL = 'https://www.tourn.io';
export const HOTEL_URL = 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1749577100283&key=GRP&app=resvlink';
