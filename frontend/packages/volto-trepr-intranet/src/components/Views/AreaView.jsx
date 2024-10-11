import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from '@plone/volto/helpers';
import { Container } from '@plone/components';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

const AreaView = (props) => {
  const { content, location } = props;
  const { telefone, email } = content;
  const path = getBaseUrl(location?.pathname || '');

  return (
    <Container id="page-document" className="view-wrapper area-view">
      <RenderBlocks {...props} path={path} />
      <Container narrow className="contato">
        <Container className="telefone">
          <span>Telefone</span>: <span>{telefone}</span>
        </Container>
        <Container className="email">
          <span>E-mail</span>: <a href={`mailto:${email}`}>{email}</a>
        </Container>
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
AreaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
  }).isRequired,
};

export default AreaView;
