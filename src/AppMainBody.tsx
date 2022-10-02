import classnames from "classnames";
import AppCard, { card } from "./AppCard";
import AppHeading from "./AppHeading";

type props = {
  className?: string;
  cards: card[];
};

function AppMainBody(props: props) {
  return (
    <div className={classnames("AppMainBody py-6 px-8", props.className)}>
      <AppHeading level={2} text="Media" className="mb-4" />
      <ul className="flex flex-wrap -m-4">
        {props.cards.map((card) => (
          <li className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4" key={card.id}>
            <AppCard card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppMainBody;
