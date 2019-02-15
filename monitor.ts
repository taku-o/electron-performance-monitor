'use strict';
const initial = process.hrtime();
const processType = process.type; // browser or renderer

// length
const lenType = 8;
const lenCategory = 9;
const lenName = 20;

export function format(category: string, name: string): string {
  const t = process.hrtime(initial);
  const t0 = ('00' + t[0]).slice(-8);
  const t1 = ('000000000' + t[1]).slice(-9);
  return `[time][${pad(processType, lenType)}][${pad(category, lenCategory)}] ${pad(name, lenName)}: ${t0},${t1}`;
}

function pad(text: string, len: number): string {
  return len - text.length > 0?
    `${text}${' '.repeat(len - text.length)}`:
    text.substring(0, len);
}

declare var process : {
  type: string,
  hrtime(): [number, number],
  hrtime(f: [number, number]): [number, number],
};
