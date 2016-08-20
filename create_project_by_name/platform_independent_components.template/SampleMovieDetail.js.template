/*
 * @flow
 */

'use-strict';

import constants from './constants';

import React, {
 Component,
} from 'react';

class SampleMovieDetail extends Component {

  constructor(props) {
    super(props);
    const {StyleSheet, ...other} = props;
    this.styles = StyleSheet.create({
      title: {
        paddingTop: 64,
        paddingLeft: 32
      }
    });
  }

  render() {
    const {params, goBack, HyperLink, ...other} = this.props;
    const sceneRef = this;
    const styles = this.styles;
    return (
      <HyperLink
      onPress={ () => goBack(sceneRef) }
      style={styles.title}
      >
        {params.movieId}
      </HyperLink>
    );
  }
}

exports.SampleMovieDetail = SampleMovieDetail;
