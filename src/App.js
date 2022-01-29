import "./semantic/dist/semantic.css";
import {
  Container,
  Header,
  Icon,
  Segment,
  Grid,
  Button,
} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Segment
    textAlign="center"
    style={{
      minHeight: 300,
      margin: "0em",
      padding: "1em 0em",
      backgroundColor: "#45758C",
    }}
    vertical
  >
    <Container text>
      <Header
        as="h1"
        content="Christina Branson"
        inverted
        style={{
          color: "#FFFFFF",
          fontSize: "5em",
          marginBottom: 0,
          marginTop: "1em",
          fontWeight: "normal",
          textTransform: "uppercase",
        }}
      />
      <Header
        as="h2"
        content="Full stack software engineer"
        inverted
        style={{
          color: "#FFFFFF",
          fontSize: "2.5em",
          marginTop: "0.25em",
          marginBottom: "1em",
          textTransform: "uppercase",
          fontWeight: "normal",
        }}
      />
    </Container>
  </Segment>
);

const threePanelPadding = { padding: "3em 2em 0em 2em" };

const App = () => (
  <div>
    <HomepageHeading />
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={threePanelPadding}>
            <p style={{ fontSize: "1.33em" }}>
              I'm a full-stack software engineer with 10 years of experience,
              particularly with <strong>Python</strong>, <strong>Django</strong>,
              & <strong>React</strong>
              .
            </p>
            <Button
              primary
              size="huge"
              target="_blank"
              href="https://docs.google.com/document/d/1KsukwiO2ViQmg5vPAlrATYzLKKaHbB4gZjFr3G-WORw/edit?usp=sharing"
            >
              Resume
              <Icon name="right arrow" />
            </Button>
          </Grid.Column>
          <Grid.Column style={threePanelPadding}>
            <p style={{ fontSize: "1.33em" }}>
              <strong>I love creating!</strong> I'm usually working on a side
              project to learn a new technology, or just to{" "}
              build something fun!
            </p>
            <Button
              primary
              size="huge"
              target="_blank"
              href="https://github.com/christinabranson"
            >
              GitHub
              <Icon name="right arrow" />
            </Button>
          </Grid.Column>
          <Grid.Column style={threePanelPadding}>
            <p style={{ fontSize: "1.33em" }}>
              I'm currently a <strong>Software Engineer</strong> at{" "}
              <a href="https://healthverity.com/" target="_blank">
                <strong>HealthVerity</strong>
              </a>
              . I have previous experience in the defense industry and creative
              agencies.
            </p>
            <Button
              primary
              size="huge"
              target="_blank"
              href="https://www.linkedin.com/in/christina-branson/"
            >
              LinkedIn
              <Icon name="right arrow" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default App;
