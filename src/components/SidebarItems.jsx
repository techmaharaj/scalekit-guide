import {useHeaderContext} from "@site/src/components/SidebarWrapper";

function SidebarItem(props) {
	return (
		<li
			key={props.id}
			className={
				"theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item " +
				props.classList
			}
		>
			<a className="menu__link" href={"#" + props.id}>
				{props.title}
			</a>
		</li>
	);
}

export default function SidebarItems() {
	const {items} = useHeaderContext();
	return items.map(itemProp => <SidebarItem {...itemProp}></SidebarItem>)
}