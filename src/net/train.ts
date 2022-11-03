import type { NeuralNetwork } from "brain.js";
import type { INeuralNetworkData } from "brain.js/dist/src/neural-network";
import { getImage, getImageArray } from "./get-image";

export async function train(
  net: NeuralNetwork<INeuralNetworkData, INeuralNetworkData>
) {
  const a = await getImage("a");
  const b = await getImage("b");
  const c = await getImage("c");
  const d = await getImage("d");
  const e = await getImage("e");
  const f = await getImage("f");
  const g = await getImage("g");
  const h = await getImage("h");
  const i = await getImage("i");
  const j = await getImage("j");
  const k = await getImage("k");
  const l = await getImage("l");
  const m = await getImage("m");
  const n = await getImage("n");
  const o = await getImage("o");
  const p = await getImage("p");
  const q = await getImage("q");
  const r = await getImage("r");
  const s = await getImage("s");
  const t = await getImage("t");
  const u = await getImage("u");
  const v = await getImage("v");
  const w = await getImage("w");
  const x = await getImage("x");
  const y = await getImage("y");
  const z = await getImage("z");
  const _0 = await getImage("0");
  const _1 = await getImage("1");
  const _2 = await getImage("2");
  const _3 = await getImage("3");
  const _4 = await getImage("4");
  const _5 = await getImage("5");
  const _6 = await getImage("6");
  const _7 = await getImage("7");
  const _8 = await getImage("8");
  const _9 = await getImage("9");

  net.train(
    [
      { input: getImageArray(a), output: { a: 1 } },
      { input: getImageArray(b), output: { b: 1 } },
      { input: getImageArray(c), output: { c: 1 } },
      { input: getImageArray(d), output: { d: 1 } },
      { input: getImageArray(e), output: { e: 1 } },
      { input: getImageArray(f), output: { f: 1 } },
      { input: getImageArray(g), output: { g: 1 } },
      { input: getImageArray(h), output: { h: 1 } },
      { input: getImageArray(i), output: { i: 1 } },
      { input: getImageArray(j), output: { j: 1 } },
      { input: getImageArray(k), output: { k: 1 } },
      { input: getImageArray(l), output: { l: 1 } },
      { input: getImageArray(m), output: { m: 1 } },
      { input: getImageArray(n), output: { n: 1 } },
      { input: getImageArray(o), output: { o: 1 } },
      { input: getImageArray(p), output: { p: 1 } },
      { input: getImageArray(q), output: { q: 1 } },
      { input: getImageArray(r), output: { r: 1 } },
      { input: getImageArray(s), output: { s: 1 } },
      { input: getImageArray(t), output: { t: 1 } },
      { input: getImageArray(u), output: { u: 1 } },
      { input: getImageArray(v), output: { v: 1 } },
      { input: getImageArray(w), output: { w: 1 } },
      { input: getImageArray(x), output: { x: 1 } },
      { input: getImageArray(y), output: { y: 1 } },
      { input: getImageArray(z), output: { z: 1 } },
      { input: getImageArray(_0), output: { 0: 1 } },
      { input: getImageArray(_1), output: { 1: 1 } },
      { input: getImageArray(_2), output: { 2: 1 } },
      { input: getImageArray(_3), output: { 3: 1 } },
      { input: getImageArray(_4), output: { 4: 1 } },
      { input: getImageArray(_5), output: { 5: 1 } },
      { input: getImageArray(_6), output: { 6: 1 } },
      { input: getImageArray(_7), output: { 7: 1 } },
      { input: getImageArray(_8), output: { 8: 1 } },
      { input: getImageArray(_9), output: { 9: 1 } },
    ],
    {
      callback: (status) => {
        console.log(status);
      },
    }
  );
}
