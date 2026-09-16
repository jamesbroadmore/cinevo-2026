import assert from "node:assert/strict";
import test from "node:test";
import { isVideoFile, parseFilename } from "./library.ts";

test("parseFilename reads title and year", () => {
  assert.equal(parseFilename("Blade Runner (1982).mkv").title, "Blade Runner");
  assert.equal(parseFilename("Blade Runner (1982).mkv").year, "1982");
  assert.equal(parseFilename("The.Matrix.1999.1080p.BluRay.x264.mp4").title.includes("Matrix"), true);
  assert.equal(parseFilename("The.Matrix.1999.1080p.BluRay.x264.mp4").year, "1999");
  assert.equal(isVideoFile("foo.mp4"), true);
  assert.equal(isVideoFile("notes.txt"), false);
});
