interface IGet {
  url: string;
  header?: HeadersInit;
}

const BASE_URL = "http://192.168.0.2:8000/api/";

export async function get(props: IGet) {
  const response = await fetch(BASE_URL + props.url, {
    method: "GET",
    headers: props.header,
  });

  const result = await response.json();
  return result;
}
