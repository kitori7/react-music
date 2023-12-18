export function formatCount(count: number): string {
  if (count > 100000) {
    return Math.floor(count / 100000) + "万";
  } else {
    return count.toString();
  }
}

export function getImgSize(imageUrl: string, width: number, hight: number = width): string {
  return `${imageUrl}?param=${width}x${hight}`;
}
