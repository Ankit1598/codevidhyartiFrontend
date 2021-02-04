import React from "react";
import {
	Container,
	Grid,
	withStyles,
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
	Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import {
	CartSection,
	CartItemImg,
	CartItemLeft,
	CartItemRight,
} from "./Cart.elements";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: "#1976d2",
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

const Cart = () => {
	const classes = useStyles();
	const [{ basket, user }, dispatch] = useStateValue();
	const total = getBasketTotal(basket);

	const removeFromBasket = (id) => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<>
			<CartSection>
				<Container>
					<Grid container justify='center' spacing={5}>
						<Grid item xs={12} justify='center' alignItems='center'>
							<Typography align='center' variant='h1'>
								Your Cart
							</Typography>
							<Typography align='center' component='p'>
								{basket?.length || 0} items in your cart
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<TableContainer component={Paper}>
								<Table className={classes.table} aria-label='customized table'>
									<TableHead>
										<TableRow>
											<StyledTableCell align='left'>Course</StyledTableCell>
											<StyledTableCell align='center'>Price</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{user &&
											Object.values(basket).map((row) => (
												<StyledTableRow key={row.name}>
													<StyledTableCell component='th' scope='row'>
														<CartItemLeft>
															<CartItemImg src={row.img} alt='img' />
															<h1>{row.title}</h1>
														</CartItemLeft>
													</StyledTableCell>
													<StyledTableCell align='right'>
														<CartItemRight>
															{row.price}
															<IconButton
																onClick={() => removeFromBasket(row.id)}
															>
																<DeleteIcon fontSize='large' />
															</IconButton>
														</CartItemRight>
													</StyledTableCell>
												</StyledTableRow>
											))}
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
					</Grid>
					<Grid container justify='flex-end'>
						<Grid xs={12} lg={3}>
							<Typography align='center' variant='h5'>
								Total:
							</Typography>
							<Typography align='center' component='p'>
								{total} Rupees
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</CartSection>
		</>
	);
};

export default Cart;
