import {useEffect, useState} from "react";

export const useClientReady = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return ready;
}

export const REGISTER_URL = 'https://www.tourn.io/tournaments/bigd-3-may-2025';
