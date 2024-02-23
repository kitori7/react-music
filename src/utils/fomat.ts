export function formatCount(count: number): string {
  if (count > 100000) {
    return Math.floor(count / 100000) + "万";
  } else {
    return count.toString();
  }
}

export function getImgSize(imageUrl: string, width: number, hight: number = width): string {
  return `${imageUrl}?param=${width}y${hight}`;
}

export function formatTime(time: number): string {
  const timeSeconds = time / 1000;

  const minute = String(Math.floor(timeSeconds / 60)).padStart(2, "0");
  const second = String(Math.floor(timeSeconds) % 60).padStart(2, "0");

  return minute + ":" + second;
}
