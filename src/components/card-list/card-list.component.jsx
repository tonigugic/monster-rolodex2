// import { Component } from "react";

import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
	<div className="card-list">
		{monsters.map((monster) => {
			const { name, id, email } = monster;
			return <Card name={name} id={id} email={email} key={id} />;
		})}
	</div>
);

// class CardList extends Component {
// 	render() {
// 		const { monsters } = this.props;

// 		return (
// 			<div className="card-list">
// 				{monsters.map((monster) => {
// 					const { name, id, email } = monster;
// 					return <Card name={name} id={id} email={email} key={id} />;
// 				})}
// 			</div>
// 		);
// 	}
// }

export default CardList;
