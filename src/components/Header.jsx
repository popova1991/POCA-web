export default function Header({ onHome }) {
  return (
    <header className="header">
      <div className="logo" onClick={onHome} role="button" tabIndex={0}>
        Speca
      </div>
    </header>
  );
}
