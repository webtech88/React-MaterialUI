import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { push, replace } from 'react-router-redux'

// Material UI
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom'

// Components

const styles = theme => ({
    root: {
      flexGrow: 1,
      padding: 20,
      width: '100%',
      minHeight: 'calc(100% - 156px)',
      [theme.breakpoints.down('md')]: {
        marginTop: 20,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: 800,
      position: 'relative',
    },
    contentHeader: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '30px 0',
      textAlign: 'center',
      borderBottom: '3px solid #cfe1e3',
    },
    title: {
      fontSize: 40,
      fontWeight: 300,
      color: '#757575',
      [theme.breakpoints.down('md')]: {
        fontSize: 30,
      },
    },
    link: {
      lineHeight: 2,
      fontSize: 12,
      color: '#8bb4c2',
      marginTop: 40,
    },
    contents: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      minHeight: 'calc(100vh - 366px)',
    },
    grid: {
      margin: '100px 0',
      [theme.breakpoints.down('md')]: {
        margin: '50px 0',
      },
    },
    gridx: {
      padding: '0 25px',
      [theme.breakpoints.down('md')]: {
        padding: '10px 0',
      },
    },
    grid1: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#cfe1e3',
      height: '100%',
      textAlign: 'center',
      padding: '50px 10px',
    },
    grid2: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#f8f5f1',
      height: '100%',
      textAlign: 'center',
      padding: '50px 10px',
    },
    item: {
      marginBottom: 10,
      cursor: 'pointer',
    },
    h1: {
      fontSize: 12,
      fontWeight: 500,
      color: '#2f2f2f',
      lineHeight: 1.5
    },
    h2: {
      fontSize: 10,
      fontWeight: 300,
      color: '#2f2f2f', 
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 170,
      height: 120,
      border: '1px solid white',
      margin: '20px 0',
      cursor: 'pointer',
    },
    dollar: {
      fontSize: 18,
      padding: 0,
      margin: 0,
    },
    date: {
      fontSize: 14,
      paddingTop: 7,
      margin: 0,
    },
    number: {
      fontSize: 22,
      paddingTop: 0,
      margin: 0,
    },
    or: {
      width: '100%',
      textAlign: 'center',
      color: '#2f2f2f',
    },
    or1: {
      width: '100%',
      textAlign: 'center',
      color: '#2f2f2f',
    },
    p1: {
      display: 'flex',
      fontSize: 18,
      textAlign: 'center',
      color: '#2f2f2f',
      padding: '5px 0', 
      fontWeight: 300,
    },
    p2: {
      display: 'flex',
      fontSize: 11,
      textAlign: 'center',
      color: '#2f2f2f',
      fontWeight: 100,
    },
    p3: {
      display: 'flex',
      fontSize: 12,
      textAlign: 'center',
      color: '#2f2f2f',
      fontWeight: 500,
      paddingTop: 20,
    },
})

class Delivered extends Component {

    navigate = to => () => {
      this.props.push(to)
    }

    render() {
      
      const { classes } = this.props
      
      return (
          <div className={classes.root}>
            <div className={classes.contentHeader}>
                <div className={classes.container}>
                    <div className={classes.title}>delivered</div>
                    <div className={classes.link}>Just lift a finger. we got you</div>
                </div>
            </div>
            <div className={classes.contents}>
                <div className={classes.container}>
                  <Grid container className={classes.grid} justify="center">
                    <Grid item xs={12} md={6} className={classes.gridx}>
                      <Zoom in={true}>
                        <div className={classes.grid1}>
                          <div className={classes.p1}>GLASSES PRESCRIPTION</div>
                          <div className={classes.or1}>
                            or
                          </div>
                          <div className={classes.p1}>CONTACT LENS RENEWAL</div>
                          <div className={classes.box}>
                            <div className={classes.p1}>SINGLE EXAM</div>
                            <div className={classes.p1}>
                              <p className={classes.dollar}>$</p>
                              <p className={classes.number}>150</p>
                            </div>
                          </div>
                          <div className={classes.or}>
                            or
                          </div>
                          <div className={classes.box}>
                            <div className={classes.p1}>VISIONAIRE</div>
                            <div className={classes.p2}>( subscription )</div>
                            <div className={classes.p1}>
                              <p className={classes.dollar}>$</p>
                              <p className={classes.number}>24.</p>
                              <p className={classes.dollar}>99</p>
                              <p className={classes.date}>/month</p>                          
                            </div>
                            <div className={classes.p2}>Exam(annual) + Classes(cool)</div>
                          </div>
                        </div>
                      </Zoom>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.gridx}>
                      <Zoom in={true} style={{ transitionDelay: 100 }}>
                        <div className={classes.grid2}>
                          <div className={classes.p1}>COMPLETE EYE EXAM</div>
                          <div className={classes.p3}>On a mobile bus customized<br />for an amazing experience</div>
                          <div className={classes.box}>
                            <div className={classes.p1}>SINGLE EXAM</div>
                            <div className={classes.p1}>
                              <p className={classes.dollar}>$</p>
                              <p className={classes.number}>300</p>
                            </div>
                          </div>
                          <div className={classes.or}>
                            or
                          </div>
                          <div className={classes.box}>
                            <div className={classes.p1}>VISIONAIRE</div>
                            <div className={classes.p2}>( subscription )</div>
                            <div className={classes.p1}>
                              <p className={classes.dollar}>$</p>
                              <p className={classes.number}>34.</p>
                              <p className={classes.dollar}>99</p>
                              <p className={classes.date}>/month</p>                          
                            </div>
                            <div className={classes.p2}>Exam(annual) + Classes(cool)</div>
                          </div>
                        </div>
                      </Zoom>
                    </Grid>
                  </Grid>
                </div>
            </div>
          </div>
      )
	}
}

Delivered.propTypes = {
	classes: PropTypes.object.isRequired,
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({
	push,
	replace
}, dispatch)

export default compose(
	withStyles(styles), connect(mapStateToProps, mapDispatchToProps)
)(Delivered)
