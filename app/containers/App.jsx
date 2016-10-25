import { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as appActions from '../actions';
import { Link } from 'react-router';
import styles from './AppStyle.scss';
import dateformat from 'dateformat';
class App extends Component {

  constructor(props) {
    super(props);
    this.actions = bindActionCreators(appActions, props.dispatch);
  }

  componentWillMount() {
    this.actions.getTrains();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.trains);
  }

  render() {

    const { services } = this.props.trains;

    if(!services) return false;

    return (
      <div className="trainLine trainLine__main">
        <h1>Train Line </h1>

        <ul className="trainLine__timetable">

          {services.map((item, index) => {
            const date = new Date(item.scheduledInfo.scheduledTime);
            const realtime = item.realTimeUpdatesInfo ? item.realTimeUpdatesInfo.realTimeServiceInfo : {};
            const status = realtime.realTimeFlag;
            const platform = realtime.realTimePlatform ? `Plat. ${realtime.realTimePlatform}` : ' - ';


            return (
              <li className="trainLine__timetable__item" key={index}>
                <Link to="/abc">
                <div className="trainLine__station">
                  <span className="trainLine__station__time">{dateformat(date, 'HH:MM')}</span>
                  <span className="trainLine__station__name">{item.destinationList[0].crs}</span>
                  <span className="trainLine__station__platform">{platform}</span>
                </div>

                <i className="trainLine__chevron chevron right"></i>
                <div className="trainLine__service">
                  <span className="trainLine__service__name">{item.serviceOperator}</span>
                  <span className={`trainLine__service__status trainLine__service__status--${status ? 'onTime' : 'delayed'}`}>{status ? 'On time' : 'Delayed'}</span>
                </div>
              </Link>
              </li>);
            })}
          </ul>
        </div>
      );
    }

  };

  function mapStateToProps(state) {
    const {trains } = state;
    return {
      trains
    };
  }

  export default connect(mapStateToProps)(App);
