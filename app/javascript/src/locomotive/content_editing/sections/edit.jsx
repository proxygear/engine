import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRedux from '../utils/with_redux';
import { find } from 'lodash';
import Input from '../inputs/base.jsx';

class Edit extends Component {

  getDefinition() {
    const { definitions, match } = this.props;
    return definitions.find(definition => definition.type === match.params.type)
  }

  getData(type) {
    const { sectionsContent } = this.props.site;
    return sectionsContent[type] || {};
  }

  render() {
    const definition = this.getDefinition();

    return (
      <div className="lce-edit-section">
        <p>TODO: EditSection / {definition.name}</p>
        <p>
          <Link to="/">Back</Link>
        </p>
        <div className="lce-field">
          {definition.settings.map(setting =>
            <Input
              key={`section-input-${setting.id}`}
              setting={setting}
              data={this.getData(definition.type)}
              type="staticSection"
              sectionType={definition.type}
            />
          )}
        </div>
      </div>
    )
  }

}

export default withRedux(Edit, state => { return {
  site: state.site, definitions: state.sectionDefinitions
} });
