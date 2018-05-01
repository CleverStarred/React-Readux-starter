import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class BaseComponent extends Component {


    render() {
        return (
            <div>
                Fake
            </div>
        );
    }
}

BaseComponent.PropTypes = {
    showUploadPanel: PropTypes.bool.isRequired
};

// const mapStateToProps = (state) => ({showUploadPanel: state.showUploadPanel});
// const mapDispatchToProps = (dispatch) => (bindActionCreators(new Actions,dispatch));

export default BaseComponent;