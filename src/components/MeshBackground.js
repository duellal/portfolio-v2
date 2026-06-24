
function MeshBackgroundFooter() {
  return (
    <div className="mesh-background" aria-hidden="true">
      <div className="mesh-footer" />
    </div>
  );
}

function MeshBackgroundFull() {
  return (
    <div className="mesh-background bg-repeat" aria-hidden="true">
      <div className="mesh-header" />
      <div className="mesh-hero" />
      <div className="mesh-ambient">
        <div className="mesh-ambient-layer mesh-ambient-a" />
        <div className="mesh-ambient-layer mesh-ambient-b" />
      </div>
      <div className="mesh-footer" />
    </div>
  );
}

function MeshBackgroundHeader() {
  return (
    <div className="mesh-background" aria-hidden="true">
      <div className="mesh-header" />
    </div>
  );
}

function MeshBackgroundHero() {
  return (
    <div className="mesh-background" aria-hidden="true">
      <div className="mesh-hero" />
    </div>
  );
}

function MeshBackgroundRepeat() {
  return (
    <div className="mesh-background" aria-hidden="true">
      <div className="mesh-ambient bg-repeat-y">
        <div className="mesh-ambient-layer mesh-ambient-a" />
        <div className="mesh-ambient-layer mesh-ambient-b" />
      </div>
    </div>
  );
}


export {
  MeshBackgroundFooter,
  MeshBackgroundFull,
  MeshBackgroundHeader,
  MeshBackgroundHero,
  MeshBackgroundRepeat,
}
