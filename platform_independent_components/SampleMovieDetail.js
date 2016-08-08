/*
 * @flow
 */

'use-strict';

import constants from './constants';

import React, {
 Component,
} from 'react';

class SampleMovieDetail extends Component {

 render() {
   const url = constants.ROUTE_PATHS.ROOT;
   const onPress = () => this.props.navigator.pop();
   const paramDict = this.props.HyperLinkPropsFilter({
     to: url,
     onPress: onPress
   })
   return (
     <this.props.HyperLinkClass
      {...paramDict}
      style={{paddingTop: 64, paddingLeft: 32}}
     >
      {this.props.params.movieId}
     </this.props.HyperLinkClass>
   );
 }
}

exports.SampleMovieDetail = SampleMovieDetail;
