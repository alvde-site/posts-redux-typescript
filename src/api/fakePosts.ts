import { TFakeApi, TFakeApiHeaders } from "../utils/types"

class PostsApi {
  _baseUrl: string;
  _headers: TFakeApiHeaders;
  constructor({ baseUrl, headers }:TFakeApi) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialMovies<T>(): Promise<T> {
    return fetch(`${this._baseUrl}`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res:Response) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }
}

export const fakePosts = new PostsApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});