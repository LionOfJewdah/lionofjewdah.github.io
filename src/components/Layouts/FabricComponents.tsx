import * as React from "react";
import "./Layout.css";

import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

export interface FabricLayout {
	buttonLabel: string;
}

export class FabricComponents extends React.Component<FabricLayout> {
	public static defaultProps: Partial<FabricLayout> = {
		buttonLabel: "I am a button."
	};

	public render() {
		return <Fabric className="pad-below-20 pad-above-10">
			<DefaultButton>
				{this.props.buttonLabel}
			</DefaultButton>
		</Fabric>;
	}
}

export default FabricComponents;
