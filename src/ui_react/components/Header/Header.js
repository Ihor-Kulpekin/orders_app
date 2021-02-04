import React from 'react';
import PropTypes from 'prop-types';

import {fade} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {compose, withHandlers, withProps, withState} from "recompose";
import {connect} from "react-redux";
import {getOrders} from "../../../redux/actions/actions";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 800,
        width: '100%',
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    }
}));

const Header = ({onChange, value}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4">
                        OrderList
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase value={value}
                                   placeholder="Search…"
                                   classes={{
                                       root: classes.inputRoot,
                                       input: classes.inputInput,
                                   }} onChange={onChange}
                                   inputProps={{'aria-label': 'search'}}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
};

Header.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

const enhance = compose(
    connect(undefined, {getOrders}),
    withProps((props) => ({
        getOrders: props.getOrders
    })),
    withState('value', 'setValue', ''),
    withHandlers({
        onChange: ({setValue, getOrders}) => (event) => {
            setValue(event.target.value);
            getOrders(event.target.value)
        }
    })
)

export default enhance(Header);
