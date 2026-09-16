import os

OUT = "/home/claude/kit"

# ---- Palette ----
PINK        = "#FF4DA5"
PURPLE      = "#8B2FFF"
MAGENTA     = "#C13BE0"
CYAN        = "#55CFFF"
BLUE        = "#3E8EFF"
ORANGE      = "#FF9F1C"
DARK        = "#1A1A1E"
WHITE       = "#FFFFFF"

# ---- Icon geometry: right-pointing faceted "play/gem" mark ----
A  = (70, 40)     # top
B  = (70, 200)    # bottom
C  = (200, 120)   # right tip
AB = (70, 120)
BC = (135, 160)
CA = (135, 80)
O  = (113.33, 120)

def pts(*p):
    return " ".join(f"{x:.2f},{y:.2f}" for x, y in p)

FACETS = [
    (pts(A, AB, O), PINK),
    (pts(AB, B, O), MAGENTA),
    (pts(B, BC, O), ORANGE),
    (pts(BC, C, O), BLUE),
    (pts(C, CA, O), CYAN),
    (pts(CA, A, O), PURPLE),
]

def facet_polys(stroke="#FFFFFF", stroke_opacity="0.35", stroke_width="1.6"):
    out = []
    for p, color in FACETS:
        out.append(f'<polygon points="{p}" fill="{color}" stroke="{stroke}" stroke-opacity="{stroke_opacity}" stroke-width="{stroke_width}" stroke-linejoin="round"/>')
    return "\n    ".join(out)

def facet_wireframe(stroke=DARK, stroke_width="2.5"):
    out = []
    for p, _ in FACETS:
        out.append(f'<polygon points="{p}" fill="none" stroke="{stroke}" stroke-width="{stroke_width}" stroke-linejoin="round"/>')
    return "\n    ".join(out)

HIGHLIGHT = f'<polygon points="{pts((150,88),(168,100),(150,108))}" fill="#FFFFFF" fill-opacity="0.55"/>'

SOLID_TRIANGLE = f'<polygon points="{pts(A,B,C)}"'

WORDMARK_STYLE = 'font-family="Poppins, '"'"'Avenir Next'"'"', '"'"'Helvetica Neue'"'"', Arial, sans-serif" font-weight="700" letter-spacing="2"'

def wordmark_text(x, y, size, fill, anchor="start"):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" {WORDMARK_STYLE}>CINEVO</text>'

def write(name, content):
    path = os.path.join(OUT, name)
    with open(path, "w") as f:
        f.write(content.strip() + "\n")
    print("wrote", path)

# ---------------------------------------------------------------
# 1. Icon mark only — full color
# ---------------------------------------------------------------
write("icon-mark.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  <g>
    {facet_polys()}
    {HIGHLIGHT}
  </g>
</svg>
''')

# ---------------------------------------------------------------
# 2. Primary horizontal lockup — icon + wordmark, full color
# ---------------------------------------------------------------
write("logo-primary-horizontal.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">
  <g transform="translate(0,0) scale(0.8)">
    {facet_polys()}
    {HIGHLIGHT}
  </g>
  {wordmark_text(258, 138, 84, DARK)}
</svg>
''')

# ---------------------------------------------------------------
# 3. Wordmark only — full color (dark ink)
# ---------------------------------------------------------------
write("wordmark-only.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 120">
  {wordmark_text(20, 88, 84, DARK)}
</svg>
''')

# ---------------------------------------------------------------
# 4. Monochrome black lockup (wireframe icon + solid black wordmark)
# ---------------------------------------------------------------
write("logo-black.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 200">
  <g transform="translate(0,0) scale(0.8)">
    {facet_wireframe()}
  </g>
  {wordmark_text(258, 138, 84, "#000000")}
</svg>
''')

# ---------------------------------------------------------------
# 5. Reversed white lockup on dark card (ready-to-use asset)
# ---------------------------------------------------------------
write("logo-reversed-white.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 240">
  <rect x="0" y="0" width="720" height="240" rx="20" fill="{DARK}"/>
  <g transform="translate(40,20) scale(0.8)">
    {SOLID_TRIANGLE} fill="{WHITE}"/>
  </g>
  {wordmark_text(298, 138, 84, WHITE)}
</svg>
''')

# ---------------------------------------------------------------
# 6. Stacked / vertical lockup — full color
# ---------------------------------------------------------------
write("logo-stacked.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 340">
  <g transform="translate(35.25,10) scale(0.85)">
    {facet_polys()}
    {HIGHLIGHT}
  </g>
  {wordmark_text(150, 250, 60, DARK, anchor="middle")}
</svg>
''')

# ---------------------------------------------------------------
# 7. App icon — rounded square, dark-to-purple gradient, mark centered
# ---------------------------------------------------------------
write("app-icon.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="appbg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1A1E"/>
      <stop offset="100%" stop-color="#3B1264"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="200" height="200" rx="44" fill="url(#appbg)"/>
  <g transform="translate(22,20) scale(0.65)">
    {facet_polys(stroke="#FFFFFF", stroke_opacity="0.45")}
    {HIGHLIGHT}
  </g>
</svg>
''')

# ---------------------------------------------------------------
# 8. Color palette reference sheet
# ---------------------------------------------------------------
swatches = [
    ("Primary Accent — Pink",   PINK,    "255, 77, 165",  "0, 70, 35, 0"),
    ("Primary Color — Purple",  PURPLE,  "139, 47, 255",  "45, 82, 0, 0"),
    ("Secondary Color — Cyan",  CYAN,    "85, 207, 255",  "67, 19, 0, 0"),
    ("Primary Color — Orange",  ORANGE,  "255, 159, 28",  "0, 38, 89, 0"),
    ("Secondary Color — Ink",   DARK,    "26, 26, 30",    "0, 0, 0, 90"),
]
rows = []
row_h = 118
for i, (label, hexv, rgb, cmyk) in enumerate(swatches):
    y = 20 + i * row_h
    rows.append(f'''
    <rect x="20" y="{y}" width="150" height="{row_h-18}" rx="14" fill="{hexv}"/>
    <text x="190" y="{y+34}" font-size="22" font-weight="700" fill="{DARK}" font-family="Poppins, Arial, sans-serif">{label}</text>
    <text x="190" y="{y+62}" font-size="18" fill="{DARK}" font-family="Poppins, Arial, sans-serif">HEX {hexv}</text>
    <text x="190" y="{y+86}" font-size="18" fill="{DARK}" font-family="Poppins, Arial, sans-serif">RGB {rgb}   ·   CMYK {cmyk}</text>
    ''')
write("color-palette-reference.svg", f'''
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 {20 + row_h*len(swatches) + 20}">
  <rect x="0" y="0" width="620" height="{20 + row_h*len(swatches) + 20}" fill="#FFFFFF"/>
  {''.join(rows)}
</svg>
''')

print("done")

# ---- Upscale: inject explicit pixel width/height (4x) for crisp raster export ----
import re, glob
SCALE = 4
for svgfile in glob.glob(os.path.join(OUT, "*.svg")):
    with open(svgfile) as f:
        content = f.read()
    m = re.search(r'viewBox="0 0 ([\d.]+) ([\d.]+)"', content)
    if m:
        w, h = float(m.group(1)), float(m.group(2))
        content = content.replace(
            f'viewBox="0 0 {m.group(1)} {m.group(2)}"',
            f'viewBox="0 0 {m.group(1)} {m.group(2)}" width="{w*SCALE:.0f}" height="{h*SCALE:.0f}"',
            1
        )
        with open(svgfile, "w") as f:
            f.write(content)
print("upscaled width/height attrs added")
