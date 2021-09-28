import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Icon,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  sectionOne: {
    backgroundColor: 'midnightblue',
    height: '25em',
    color: 'white',
  },
  sectionOneText: {
    width: '80%',
    fontSize: '3em',
    position: 'relative',
    top: '1em',
    left: '1em',
    fontFamily: 'Bell MT',
  },
  sectionTwo: {
    alignItems: 'center',
  },
  innerSectionTwo: {
    background: '#fafafa',
    color: '#2E324B',
    width: '80%',
    paddingBottom: '8em',
    position: 'relative',
    top: '-10em',
  },
  divider: {
    height: '0.2em',
    width: '85%',
    marginTop: '1em',
    marginBottom: '1em',
    backgroundColor: '#063E63',
  },
  leftSide: {
    paddingLeft: '4em',
    paddingRight: '1em',
    paddingTop: '5em',
    width: '50%',
  },
  leftSideTop: {
    marginBottom: '0.5em',
    marginTop: '1em',
  },
  leftSideHeader: {
    fontSize: '2.3em',
    fontFamily: 'geometric',
  },
  leftSideSentence: {
    marginTop: '0.5em',
    fontSize: '1.1em',
    marginBottom: '0.5em',
    fontFamily: 'Opensanslight',
    fontWeight: '700',
    width: '95%',
  },
  rightSide: {
    marginTop: '8%',
    marginRight: '1.5em',
    width: '50%',
    alignItems: 'center',
    background: 'white',
    position: 'relative',
    top: '4em',
  },
  textField: {
    marginTop: '0.8em',
    marginBottom: '0.8em',
    width: '65%',
    borderRadius: '0.35em',
    borderColor: '#2E324B !important',
  },
  formHeader: {
    marginTop: '1.8em',
    fontSize: '2em',
    marginLeft: '-1em',
  },
  formButton: {
    marginTop: '0.8em',
    width: '65%',
    borderRadius: '1em',
    fontFamily: 'avertaDemo',
    fontSize: '1.1em',
    fontWeight: '400',
    backgroundColor: '#2E324B',
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#373c59',
    },
  },
}));

const JobDetails = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sectionOne}>
        <Typography className={`${classes.sectionOneText}`} variant="h4">
          Opportunity for an Experienced Delivery Driver
        </Typography>
      </Box>
      <Box className={`${classes.sectionTwo} ${classes.column}`}>
        <Box className={`${classes.innerSectionTwo} ${classes.row}`}>
          <Box className={`${classes.leftSide} ${classes.column}`}>
            <Divider
              className={`${classes.divider}`}
              orientation="horizontal"
            />
            <Box className={`${classes.leftSideTop}`}>
              <Typography className={`${classes.leftSideHeader}`}>
                Job Description
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ textAlign: 'justify' }}
                className={`${classes.leftSideSentence}`}
              >
                We are looking for a detail-oriented truck dispatcher to
                dispatch our drivers to customer locations. In this role, your
                duties will include communicating with our customers to record
                their requirements, planning and adjusting routes, as well as
                scheduling drivers to deliver or collect freight, shipments, and
                packages.
              </Typography>
            </Box>
            <Box className={`${classes.leftSideTop}`}>
              <Typography className={`${classes.leftSideHeader}`}>
                Responsibilities
              </Typography>
            </Box>
            <Box>
              <Typography className={`${classes.leftSideSentence}`}>
                Scheduling drivers to make freight deliveries or collect
                shipments and packages.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Preparing dispatch documents, as well as generating freight
                bills and invoices.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Reviewing drivers’ logs, including dispatched calls and arrival
                times.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Monitoring truck repairs and maintenance schedules.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Logging customer shipping schedules and complaints.
              </Typography>
            </Box>
            <Box className={`${classes.leftSideTop}`}>
              <Typography className={`${classes.leftSideHeader}`}>
                Requirements
              </Typography>
            </Box>
            <Box>
              <Typography className={`${classes.leftSideSentence}`}>
                High school diploma or GED.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                2-3 years of experience as a truck dispatcher in a similar
                industry.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Knowledge of applicable transportation regulations and laws.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Monitoring truck repairs and maintenance schedules.
              </Typography>
              <Typography className={`${classes.leftSideSentence}`}>
                Proficiency in office software, including Microsoft Word, Excel,
                and Outlook Express.
              </Typography>
            </Box>
          </Box>
          <Box className={`${classes.rightSide} ${classes.column}`}>
            <Divider
              className={`${classes.divider}`}
              orientation="horizontal"
            />
            <Typography className={`${classes.formHeader}`}>
              Send us a Mail
            </Typography>
            <TextField
              className={`${classes.textField}`}
              label="Name"
              variant="outlined"
              size="small"
            />
            <TextField
              className={`${classes.textField}`}
              label="Company"
              variant="outlined"
              size="small"
            />
            <TextField
              className={`${classes.textField}`}
              label="Email"
              variant="outlined"
              size="small"
            />
            <TextField
              className={`${classes.textField}`}
              label="Mobile No."
              variant="outlined"
              size="small"
            />
            <TextField
              className={`${classes.textField}`}
              label="Paste Your Resume Here"
              variant="outlined"
              minRows="5"
              multiline
              size="medium"
            />
            <TextField
              className={`${classes.textField}`}
              multiline
              label="Cover Letter"
              minRows="5"
              variant="outlined"
              size="medium"
            />
            <TextField
              className={`${classes.textField}`}
              label="Message to the Recruiter"
              variant="outlined"
              minRows="5"
              multiline
              size="medium"
            />
            <Button
              component={Link}
              to="./thankyou"
              className={`${classes.formButton}`}
              variant="contained"
            >
              Submit Application
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetails;
