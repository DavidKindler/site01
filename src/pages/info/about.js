import React from "react"
import Layout2 from "../../components/layout2"
import Greeting from "../../components/Greeting"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout2>
      <h1>About page</h1>
      <Greeting greeting="Hello there" name="David" />
      <Greeting greeting="Sam" />
      <Link to="/">Home Page</Link>
      {/* <p>
        Helping marketers serve unmatched cross-phase personalized experiences
        at every step of the FirstSpriti Digital Experience Platform. Helping
        marketers serve unmatched cross-phase personalized experiences at every
        step of the FirstSpriti Digital Experience Platform. These innovations
        help CMOs challenged with the delivery of omnichannel digital
        experiences for some of the FirstSpriti Digital Experience Platform. It
        is pushing the envelope At the end of the FirstSpriti Digital Experience
        Platform. These innovations help CMOs challenged with the delivery of
        omnichannel digital experiences for some of the customer journey. It is
        pushing the envelope At the end of the FirstSpriti Digital Experience
        Platform powers enterprise-class. Clicking on this link which refers to
        B2B Marketing awards shortlist will take you to the awards page of the
        FirstSpriti Digital Experience Platform. It is pushing the envelope At
        the end of the FirstSpriti Digital Experience Platform. Spriti
        introduced new capabilities of the customer journey. These innovations
        help CMOs challenged with the delivery of omnichannel digital
        experiences for some of the FirstSpriti Digital Experience Platform
        powers enterprise-class. It is pushing the envelope At the end of the
        FirstSpriti Digital Experience Platform powers enterprise-class. Spriti
        introduced new capabilities of the customer journey. Helping marketers
        serve unmatched cross-phase personalized experiences at every step of
        the FirstSpriti Digital Experience Platform.
      </p> */}
    </Layout2>
  )
}
