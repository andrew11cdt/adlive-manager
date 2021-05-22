import axios from "axios";
import queryString from "query-string";
import { isEmpty, isNil, path } from "ramda";

class RestClient {
  private domain: string;
  private defaultContentType: string;
  private token: string;

  constructor() {
    this.domain = "";
    this.defaultContentType = "application/json";
    this.token = "";
  }

  setDomain(domain: string) {
    this.domain = domain;
  }

  setToken(token: string) {
    this.token = token;
  }

  createHeaders(options = { contentType: "application/json" }) {
    return {
      "Content-Type": path(["contentType"], options) || this.defaultContentType,
      "adsl-at": this.token,
    };
  }

  createApi(url, query = {}) {
    return `${this.domain}${url}${
      isEmpty(query) || isNil(query) ? "" : `?${queryString.stringify(query)}`
    }`;
  }

  asyncGet(url, query = {}, options = { contentType: "application/json" }) {    
    return axios.get(this.createApi(url, query), {
      headers: this.createHeaders(options),
    });
  }

  asyncPost(url, data = {}, options = { contentType: "application/json" }) {
    return axios.post(this.createApi(url), data, {
      headers: this.createHeaders(options),
    });
  }

  asyncPut(url, data = {}, options = { contentType: "application/json" }) {
    return axios.put(this.createApi(url), data, {
      headers: this.createHeaders(options),
    });
  }

  asyncDelete(url, options = { contentType: "application/json" }) {
    return axios.delete(this.createApi(url), {
      headers: this.createHeaders(options),
    });
  }

  asyncAll(requests) {
    return axios
      .all(
        requests.map((req) => {
          if (req.method === "get") {
            return this.asyncGet(req.url, req.query || {}, req.options || {});
          }

          return this.asyncPost(req.url, req.data || {}, req.options || {});
        })
      )
      .then(
        axios.spread((...responses) =>
          responses.map((res) => path(["data"], res) || null)
        )
      );
  }
}

const restClient = new RestClient();

restClient.setDomain(process.env.NEXT_PUBLIC_API_HOST);

export default restClient;
