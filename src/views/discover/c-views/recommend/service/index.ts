import requests from "@/service";

export function getBanners() {
  return requests.get({
    url: "/banner"
  });
}

export function getHotRecommend() {
  return requests.get({
    url: "/personalized"
  });
}

export function getNewAlbum() {
  return requests.get({
    url: "/album/newest"
  });
}

export function getPlayListDetail(id: number) {
  return requests.get({
    url: "/playlist/detail",
    params: { id }
  });
}
