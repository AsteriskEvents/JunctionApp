import React from 'react';
import { connect } from 'react-redux';
import { RegistrationFields } from '@hackjunction/shared';
import { groupBy } from 'lodash-es';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Link
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Image from 'components/generic/Image';

const RecruitmentProfileInfo = React.memo(({ profile }) => {
  const fields = Object.keys(profile);
  const grouped = groupBy(fields, field =>
    RegistrationFields.getCategory(field)
  );
  const { education, portfolio, spokenLanguages, avatar } = profile;
  return (
    <React.Fragment>
      <Image
        url={avatar}
        alt="Profile picture"
        transformation={{ width: '20%', height: '20%' }}
      />
      {education && (
        <React.Fragment>
          <Typography variant="h2">Education</Typography>
          <Typography>{education.level}</Typography>
        </React.Fragment>
      )}
      {portfolio && (
        <React.Fragment>
          <Typography variant="h2">Portfolio</Typography>
          <Link>{portfolio}</Link>
        </React.Fragment>
      )}

      <Typography variant="h2">Interests</Typography>
      <Link>{portfolio}</Link>
      <ExpansionPanel key="languages">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="languages-content"
          id="languages-header"
        >
          <Typography>Languages</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {spokenLanguages.map(language => (
            <p>
              <Typography>{language}</Typography>
            </p>
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
});

const mapState = state => ({});

export default connect(mapState)(RecruitmentProfileInfo);
