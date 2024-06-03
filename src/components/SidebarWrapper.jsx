import {useContext, createContext, useState} from "react";


const HeaderContext = createContext({
	headerItems: [],
	addItem: () => {}
});

export default  function SidebarWrapper ({ children }) {
	const [headerItems, setHeaderItems] = useState([]);
	const contextValue = {
		items: headerItems,
		addItem: (item) => {
			setHeaderItems(items => [...items, item]);
		}
	}
	return <HeaderContext.Provider value={contextValue}>
		{children}
	</HeaderContext.Provider>
}

export const useHeaderContext = () => useContext(HeaderContext);
