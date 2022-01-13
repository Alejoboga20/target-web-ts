export interface Route {
	path: string;
	Component: JSXComponent;
	exact?: boolean;
	private?: boolean;
}

type JSXComponent = () => JSX.Element;
