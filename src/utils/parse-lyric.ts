export interface ILyric {
  time: number;
  text: string;
}

const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
export function parseLyric(lyricString: string) {
  const lyric: ILyric[] = [];
  const lines: string[] = lyricString.split("\n");
  for (const line of lines) {
    const res = timeRegExp.exec(line);
    if (!res) continue;
    const time =
      Number(res[1]) * 60 * 1000 +
      Number(res[2]) * 1000 +
      (res[3].length === 2 ? Number(res[3]) * 10 : Number(res[3]));

    const text = line.replace(timeRegExp, "");
    lyric.push({ time, text });
  }

  return lyric;
}
