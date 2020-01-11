import React from "react";
import { Row, Container } from "react-bootstrap";
import CounterList from "../Components/CounterList";
import CountUpAnimation from "../Components/CountUpAnimation";
export default function Counter() {
  return (
    <>
      <Row className="no-gutters couterSection py-4 text-white mt-5">
        <Container>
          <Row className="my-4">
            <CounterList
              icon="fa fa-cloud-download"
              number={<CountUpAnimation endAnimation={654} />}
              info="Download"
            />
            <CounterList
              icon="fa fa-clock-o"
              number={<CountUpAnimation endAnimation={450} />}
              info="Hours"
            />
            <CounterList
              icon="fa fa-coffee"
              number={<CountUpAnimation endAnimation={325} />}
              info="Coffee"
            />
            <CounterList
              icon="fa fa-user"
              number={<CountUpAnimation endAnimation={757} />}
              info="Happy CLients"
            />
          </Row>
        </Container>
      </Row>
    </>
  );
}
