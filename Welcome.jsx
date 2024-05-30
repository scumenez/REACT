import { Age } from "./Age";

export function Welcome({ name, surname, age }) {
  return (
    <div>
      <p>
        Hello,
        <strong>
          {name} {surname}
        </strong>
        !
        <Age age={age} />
      </p>

      {age > 18 && <p>{age} è maggiore di 18.</p>}

      {age !== undefined && <p>{age}.</p>}

      {age > 18 && age < 65 && <p>{age} è compreso tra 18 e 65.</p>}

      {age > 18 && age < 65 && name === "John" && <p>{age}</p>}

      {age > 18 && name === "Riccardo" && (
        <p>
          {age} il tuo nome è {name}
        </p>
      )}
    </div>
  );
}

export const person = { name: "Riccardo", surname: "Cuomo", age: "28" };
