import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Header, Title, Icon, Clear, Content } from "./Accordion.elements";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 20,
		marginBottom: 20,
	},
}));

const Accordion = ({ children, title}) => {
	const classes = useStyles();
	const [expand, setExpand] = useState(false);
	return (
		<>
			<Paper variant="outlined" className={classes.root}>
				<Header onClick={() => setExpand((expand) => !expand)}>
					<Title>{title}</Title>
					<Icon>{expand ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</Icon>
					<Clear />
				</Header>
				{expand && <Content>{children}</Content>}
			</Paper>
		</>
	);
};

export default Accordion;
