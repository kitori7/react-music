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
