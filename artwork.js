// ============================================================
//  YOUR ARTWORK — edit this list to update the gallery.
//  Put your files in the "images" folder, then add an entry.
//
//  type: "image"      a render (JPG/PNG/WebP)
//        "video"      a turntable or breakdown (MP4). "poster" = still image shown before it plays
//        "model"      an interactive 3D model (.glb). Visitors can drag to rotate it.
//        "sketchfab"  a model already on Sketchfab. "id" = the code at the end of the model's URL
//
//  tag:   becomes a filter button (Characters, Environments, Props...)
//  wide:  true makes the card span two columns, good for hero pieces
// ============================================================
const ARTWORK = [
  { type: "image", file: "images/sample-render-1.svg", title: "Studio sphere",  tag: "Lookdev",      note: "Blender · Cycles", wide: true },
  { type: "model", file: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    title: "Astronaut (demo model)", tag: "Characters", note: "Drag to rotate · replace with your own .glb" },
  { type: "image", file: "images/sample-render-2.svg", title: "Block study",    tag: "Environments", note: "Lighting test" },
  { type: "image", file: "images/sample-render-3.svg", title: "Ring prop",      tag: "Props",        note: "Substance Painter" },

  // Examples — remove the // to use:
  // { type: "image", file: "images/dragon.jpg", title: "Dragon", tag: "Characters", note: "ZBrush · Substance · Marmoset" },
  // { type: "video", file: "images/dragon-turntable.mp4", poster: "images/dragon.jpg", title: "Dragon turntable", tag: "Characters" },
  // { type: "model", file: "images/crate.glb", poster: "images/crate.jpg", title: "Sci-fi crate", tag: "Props", note: "2.4k tris" },
  // { type: "sketchfab", id: "abc123def456", poster: "images/robot.jpg", title: "Robot", tag: "Characters" },
];
