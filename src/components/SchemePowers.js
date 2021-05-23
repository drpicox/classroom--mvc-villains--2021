export function SchemePowers({ scheme }) {
  const powers = [
    { name: "Laugh", level: 9 },
    { name: "Luck", level: -4 },
  ];

  return (
    <div data-testid="scheme-powers">
      <h3>Scheme Powers</h3>
      <ul>
        {powers.map((power) => (
          <li key={power.name} data-testid="power">
            {power.name}, level {power.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
