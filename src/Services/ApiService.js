import axios from "axios";
import { useEffect, useState } from "react";

let ApiService = (url) => {
  const [state, setState] = useState({ moviesData: null, loading: true });

  useEffect(() => {
    setState({ moviesData: null, loading: true });
    axios
      .get(url)
      .then((response) => response["data"])
      .then((response) => setState({ moviesData: response, loading: false }));
  }, [url]);

  return state;
};

export default ApiService;
