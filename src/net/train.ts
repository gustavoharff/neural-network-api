import type { NeuralNetwork } from "brain.js";
import type { INeuralNetworkData } from "brain.js/dist/src/neural-network";
import { getColor, getColorArray } from "./get-color";

export async function train(
  net: NeuralNetwork<INeuralNetworkData, INeuralNetworkData>
) {
  const a = await getColor("a");
  const b = await getColor("b");
  const c = await getColor("c");
  const d = await getColor("d");
  const e = await getColor("e");
  const f = await getColor("f");
  const g = await getColor("g");
  const h = await getColor("h");
  const i = await getColor("i");
  const j = await getColor("j");
  const k = await getColor("k");
  const l = await getColor("l");
  const m = await getColor("m");
  const n = await getColor("n");
  const o = await getColor("o");
  const p = await getColor("p");
  const q = await getColor("q");
  const r = await getColor("r");
  const s = await getColor("s");
  const t = await getColor("t");
  const u = await getColor("u");
  const v = await getColor("v");
  const w = await getColor("w");
  const x = await getColor("x");
  const y = await getColor("y");
  const z = await getColor("z");
  const _0 = await getColor("0");
  const _1 = await getColor("1");
  const _2 = await getColor("2");
  const _3 = await getColor("3");
  const _4 = await getColor("4");
  const _5 = await getColor("5");
  const _6 = await getColor("6");
  const _7 = await getColor("7");
  const _8 = await getColor("8");
  const _9 = await getColor("9");

  net.train(
    [
      { input: getColorArray(a), output: { a: 1 } },
      { input: getColorArray(b), output: { b: 1 } },
      { input: getColorArray(c), output: { c: 1 } },
      { input: getColorArray(d), output: { d: 1 } },
      { input: getColorArray(e), output: { e: 1 } },
      { input: getColorArray(f), output: { f: 1 } },
      { input: getColorArray(g), output: { g: 1 } },
      { input: getColorArray(h), output: { h: 1 } },
      { input: getColorArray(i), output: { i: 1 } },
      { input: getColorArray(j), output: { j: 1 } },
      { input: getColorArray(k), output: { k: 1 } },
      { input: getColorArray(l), output: { l: 1 } },
      { input: getColorArray(m), output: { m: 1 } },
      { input: getColorArray(n), output: { n: 1 } },
      { input: getColorArray(o), output: { o: 1 } },
      { input: getColorArray(p), output: { p: 1 } },
      { input: getColorArray(q), output: { q: 1 } },
      { input: getColorArray(r), output: { r: 1 } },
      { input: getColorArray(s), output: { s: 1 } },
      { input: getColorArray(t), output: { t: 1 } },
      { input: getColorArray(u), output: { u: 1 } },
      { input: getColorArray(v), output: { v: 1 } },
      { input: getColorArray(w), output: { w: 1 } },
      { input: getColorArray(x), output: { x: 1 } },
      { input: getColorArray(y), output: { y: 1 } },
      { input: getColorArray(z), output: { z: 1 } },
      { input: getColorArray(_0), output: { 0: 1 } },
      { input: getColorArray(_1), output: { 1: 1 } },
      { input: getColorArray(_2), output: { 2: 1 } },
      { input: getColorArray(_3), output: { 3: 1 } },
      { input: getColorArray(_4), output: { 4: 1 } },
      { input: getColorArray(_5), output: { 5: 1 } },
      { input: getColorArray(_6), output: { 6: 1 } },
      { input: getColorArray(_7), output: { 7: 1 } },
      { input: getColorArray(_8), output: { 8: 1 } },
      { input: getColorArray(_9), output: { 9: 1 } },
    ],
    {
      callback: (status) => {
        console.log(status);
      },
    }
  );
}
