import requests from "@/service";

export function getSongDetail(ids: number) {
  return requests.get({
    url: "/song/detail",
    params: { ids }
  });
}

export function getSongLyric(id: number) {
  return requests.get({
    url: "/lyric",
    params: {
      id
    }
  });
}
