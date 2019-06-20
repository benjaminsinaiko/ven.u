import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    maxWidth: 800,
    margin: '20px auto'
  },
  container: {
    textAlign: 'left'
  },
  textUnderline: {
    textDecoration: 'underline'
  },
  heading: {
    textDecoration: 'underline'
  },
  subHeading: {
    textDecoration: 'underline',
    fontStyle: 'italic'
  }
});

const Privacy = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <Grid className={classes.container}>
        <Typography variant="h5" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="caption" gutterBottom>
          Effective date: March 28, 2019
        </Typography>
        <br />
        <Typography variant="body2" paragraph>
          We at Tunimal, LLC (“Ven.u”, “we”, “us” or “our”) know you care about how your personal
          information is used and shared – and we take your privacy seriously. This privacy policy
          (“Privacy Policy”) covers our treatment of personally identifiable information (“Personal
          Information”), and certain non-personally identifiable information(“Other Information”),
          that we gather when you use or otherwise engage (via mobile application, web browsing, or
          otherwise) with our Ven.u network. It describes what types of information we collect, how
          we use that information, and who we share that information with. The Service(s) shall
          include uses and sharing of your Personal Information and Other Information provided in
          this Privacy Policy.
        </Typography>
        <Typography variant="body2" paragraph>
          By using or accessing the Services in any manner, you acknowledge that you accept and
          agree to the terms, practices and policies outlined in this Privacy Policy, and you hereby
          consent that we may collect, and use as set forth below.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          The Information We Collect.
        </Typography>
        <br />
        <Typography variant="body2" className={classes.subHeading}>
          Information You Provide to Us:
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          We receive and store any information you provide to us. For example, when you sign-up or
          register for the mobile application we may collect Personal Information and Other
          Information such as your name, email address, your birthday and your gender. Certain
          information may be required to register with us or to take advantage of some of our
          features. If you do not provide us with such information, your access to or use of the
          Service may be limited.
        </Typography>
        <Typography variant="body2" className={classes.subHeading}>
          Mobile Applications and Your Location:
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          We may make available mobile applications related to our Services. To provide
          location-based services, we may collect, and use precise location data, including the
          real-time geographic location of you or your mobile device. You can control your location
          information from your mobile device settings and, if available, from your account
          settings.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          How We Use Personal Information and Other Information.
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          Ven.u uses your Personal Information and Other Information as follows:
        </Typography>
        <Typography variant="caption" paragraph>
          To operate and maintain the Service (such as, overall operating and maintenance, providing
          customer service, fixing malfunctions, testing our security systems, etc.).
        </Typography>
        <Typography variant="caption" paragraph>
          To provide you with the features, functions and benefits of the Service (such as, sending
          you notices and messages and managing your profile).
        </Typography>
        <Typography variant="caption" paragraph>
          To enhance, improve, add to and further develop the Service (such as, creating new
          features or functions, refining or personalizing the user experience, increasing Service
          technical performance, etc.).
        </Typography>
        <Typography variant="caption" paragraph>
          We will use your contact information to provide you with notices related to your use of
          the Service (such as, Ven.u mobile app updates, Privacy updates, legal notices, etc.).
        </Typography>
        <Typography variant="caption" paragraph>
          We will use your contact information (such as, your email address or phone number) to
          provide you with account notifications, as well as promotional and marketing emails or
          texts (such as, Participating Merchant offers). You can opt-out of receiving certain types
          of promotional and marketing emails and other communications – but in such case you may
          not receive the full benefit of the Service. Opting-out can be done by via our email
          subscribtion settings or by such other methods as may be made available by us from time to
          time.
        </Typography>
        <Typography variant="caption" paragraph>
          To help personalize the Service experience for you (such as, remembering your information
          so you will not have to enter it each time you use the Service or providing you with
          offers, advertisements or features you may like).
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          What You Can Do to Your Personal Information.
        </Typography>
        <br />
        <Typography variant="body2" className={classes.subHeading}>
          Editing your profile:
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          If you are a registered user of the Service, we provide you with tools to access or modify
          your Personal Information and other profile information. These tools are accessible from
          your profile section when logged-in to the Ven.u mobile application.
        </Typography>
        <Typography variant="body2" className={classes.subHeading}>
          Limitations:
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          Even after you remove information from your profile or delete your account, your Personal
          Information and Other Information may be retained by us on back-up servers indefinitely.
          We keep such servers to help protect the stability and availability of the Service (such
          as protecting it from viruses and malfunctions).
        </Typography>
        <Typography variant="caption" paragraph>
          In addition, copies of your information may remain viewable elsewhere to the extent it has
          been publicly published by you or otherwise shared by you with others (such as information
          posted by you to chat forums).
        </Typography>
        <Typography variant="caption" paragraph>
          We may also indefinitely retain and use any aggregated data derived from or incorporating
          your Personal Information or Other Information after you update or delete it, but not in a
          manner that would identify you personally.
        </Typography>
        <Typography variant="body2" className={classes.subHeading}>
          Laws and Regulations:
        </Typography>
        <br />
        <Typography variant="body2" paragraph>
          We may also retain your Personal Information or Other Information to the extent required
          to comply with (or we deem it reasonable in light of) any laws or regulations.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          The Location of Your Personal Information and Other Information.
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          While your Personal Information and Other Information is in our possession, it will be
          primarily stored at hosting facilities owned and operated by Ven.u or its third party
          providers. By using the Service you are consenting to have your Personal Information and
          Other Information stored, transferred and processed by such third party providers on
          Ven.u’s behalf.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          The Security of Your Personal Information.
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          Ven.u takes certain precautions to protect your Personal Information and Other Information
          and to limit the risk that it will be accessed without authorization, including use of
          certain industry standard technologies and practices. That said, we cannot guarantee the
          security of such information. Unauthorized entry or use, hardware or software failure, and
          other factors, may compromise the security of user information at any time. No security
          system is perfect – so your use of the Service is at your own risk.
        </Typography>
        <Typography variant="caption" paragraph>
          If we learn of a security systems breach, then we may attempt to notify you via email or
          by a posting on your Service account page – so that you can take appropriate protective
          steps. Pursuant to our Terms of Service you have consented to receive such notice by
          electronic means (provided that such consent is void where prohibited by applicable law).
        </Typography>
        <Typography variant="caption" paragraph>
          In addition to the security measures referenced above, once created, your Service account
          is protected by a password for your privacy and security. You must prevent unauthorized
          access to your account and Personal Information by selecting and protecting your password
          appropriately and limiting access to your computer or device and browser by signing off
          after you have finished accessing your account.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          Changes to this Privacy Policy.
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          This Privacy Policy was last changed on the date set forth at the top of the policy. We’re
          constantly trying to improve the Service, so we may need to change this Privacy Policy
          from time to time as well, but we will alert you to material changes by placing a notice
          on www.getvenu.com, by sending you an email, and/or by some other means. In addition, we
          will also edit the date at the top of this policy to reflect the date of the changes.
          Please note that if you’ve opted not to receive legal notice emails from us (or you
          haven’t provided us with your email address), those legal notices will still govern your
          use of the Service, and you are still responsible for reading and understanding them. If
          you use the Service after any changes to the Privacy Policy have been posted, that means
          you agree to all of the changes, including with respect to information we may have
          collected prior to such changes.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          Information from Children.
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          We do not knowingly collect or solicit personal information from anyone under the age of
          13. If you are under 13, please do not attempt to register for the Service or send any
          personal information about yourself to us. If we learn that we have collected personal
          information from a child under age 13, we will delete that information as quickly as
          possible. If you believe that a child under 13 may have provided us personal information,
          please contact us at <a href="mailto:privacy@getvenu.com">privacy@getvenu.com</a>.
        </Typography>
        <Typography variant="body1" className={classes.heading}>
          Contacting Us.
        </Typography>
        <br />
        <Typography variant="caption" paragraph>
          If you have any questions or concerns regarding our privacy policies, please send us a
          detailed message to <a href="mailto:privacy@getvenu.com">privacy@getvenu.com</a>
        </Typography>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Privacy);
