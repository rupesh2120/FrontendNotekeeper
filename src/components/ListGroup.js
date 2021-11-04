import React from "react";

export const ListGroup = (props) => {
	const { tags, onItemSelect, selectedTag } = props;

	return (
		<div>
			<ul className="list-group">
				{tags.map((tag) => (
					<li
						onClick={() => onItemSelect(tag.label)}
						key={tag.value}
						className={
							tag.label === selectedTag
								? "list-group-item active"
								: "list-group-item"
						}
					>
						{tag.label}
					</li>
				))}
			</ul>
		</div>
	);
};
