export default function getFrameById(id) {
  for (var i = 0; i < window.frames.length; i++) {
    try {
      if (window.frames[i].name === id) {
          return window.frames[i];
      }
    } catch(err) {}
  }
}
