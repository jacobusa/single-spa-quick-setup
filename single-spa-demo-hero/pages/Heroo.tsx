import React from "react";
import { Hero } from "@jacobusa/github-package-storybook-test";
import { Logo1, ToggleSwitch, Modal } from "@trimac-ux/da-components";

interface Props {}

const Heroo = (props: Props) => {
	return (
		<div className="bg-red-500">
			<ToggleSwitch enabled={true} handleClick={() => console.log("clicked")} />
			<Modal
				open={true}
				titleText="create desk"
				badgeText="Draft"
				bodyText="Create a new desk"
				confirmBtnText="activate"
				cancelBtnText="save draft"
				onCancel={() => false}
				onClose={() => false}
				onConfirm={() => false}
			/>
			<Logo1 width={32} />
			<Hero />
		</div>
	);
};

export default Heroo;
