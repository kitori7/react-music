import requests from "@/service";

export function getBanners() {
  return requests.get({
    url: "/banner"
  });
}
