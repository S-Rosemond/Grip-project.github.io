import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';
import MenuCartIcon from '@material-ui/icons/RestaurantMenu';
import DessertIcon from '@material-ui/icons/LocalCafe';
import DrinksIcon from '@material-ui/icons/LocalBar';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
});

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}
class PersistentDrawerLeft extends React.Component {
	state = {
		open: false
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit" noWrap>
							WILD TIGER THAI RESTAURANT AND BAR
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{theme.direction === 'ltr' && <CloseIcon />}
						</IconButton>
					</div>
					{['Home', 'Menu', 'Dessert', 'Beverages'].map((text, index) => {
						const svgIcons = [<HomeIcon />, <MenuCartIcon />, <DessertIcon />, <DrinksIcon />];
						return (
							<Fragment>
								<Divider />
								<List>
									<ListItem button key={text}>
										<ListItemIcon>{svgIcons[index]}</ListItemIcon>
										<ListItemText primary={text} />
									</ListItem>
								</List>
							</Fragment>
						);
					})}
					<Divider />
					<List />
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo
						vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
						tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
						commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
						quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
						proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
						feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
						ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
					</Typography>
					<Typography paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi
						etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare
						suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
						Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
						tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum
						quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
						senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod
						elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
						posuere sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</main>
			</div>
		);
	}
}

PersistentDrawerLeft.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
