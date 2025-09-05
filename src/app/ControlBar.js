// handles buttons & controls
export default function ControlBar({ onPlay, onPause, onContinue, onRewind, onSkip }) {
  return (
    <div className="control-bar">

      <button onClick={onPlay}> Play</button>

      <button onClick={onPause}>Pause</button>

      <button onClick={onContinue}> Resume</button>

      <button onClick={onRewind}> Back 5s</button>

      <button onClick={onSkip}> Forward 5s</button>
    </div>
  );
}
