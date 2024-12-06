import "./semantic/dist/semantic.css";
import {
  Container,
  Header,
  Icon,
  Segment,
  Grid,
  Button,
  Image
} from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => (
  <Segment
    textAlign="center"
    style={{
      margin: "0em",
      padding: "0em",
      backgroundColor: "#535c68",
      display: "flex",
    }}
    vertical
  >
    <Container style={{ alignSelf: "center" }}>
      <Grid verticalAlign='middle' stackable columns={2}>
        <Grid.Column textAlign='center' width={4}>
          <Image src='/images/avatar.png' size='medium' rounded />
        </Grid.Column>
        <Grid.Column textAlign='center' width={8}>
          <Container text>
            <Header
              as="h1"
              content="Christina Branson"
              inverted
              style={{
                color: "#FFFFFF",
                fontSize: "4em",
                fontWeight: "800",
                textTransform: "uppercase",
              }}
            />
            {/* <Header
              as="h2"
              content="Full stack software engineer"
              inverted
              style={{
                color: "#FFFFFF",
                marginTop: "0em",
                fontSize: "2em",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            /> */}
          </Container>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
);

const threePanelPadding = { padding: "3em 2em 0em 2em" };

const App = () => (
  <div className="main-container">
    <HomepageHeading />
    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable columns={3}>
        <Grid.Row textAlign="center" className={"align-self"}>
          <Grid.Column style={threePanelPadding}>
            <Header as="h2">I'm a full-stack software engineer.</Header>
            <p>
              With <strong className="resume">ten</strong> years of experience
              with Python, PHP, and Javascript.
              <br />
              <br />
              I've particularly enjoyed working with{" "}
              <strong className="resume">Django</strong> &{" "}
              <strong className="resume">React</strong>.
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
              project to learn a new technology, or just to build something fun!
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
