import AppCard, { card } from "./AppCard";

type props = {
  cards: card[];
};

function AppMainBody(props: props) {
  return (
    <div className="AppMainBody">
      <ul className="flex flex-wrap -m-4">
        {props.cards.map((card) => (
          <li className="w-full sm:w-1/2 lg:w-1/3 p-4" key={card.id}>
            <AppCard card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppMainBody;
