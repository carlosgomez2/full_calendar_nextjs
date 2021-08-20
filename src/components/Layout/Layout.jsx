import React from 'react'
import Agenda from '../Agenda/Agenda'
import './Layout.module.sass'

import { Container, Card, CardBody } from 'reactstrap'

const Layout = () => {
  return (
    <Container>
      <Card className="mt-4">
        <CardBody>
          <Agenda></Agenda>
        </CardBody>
      </Card>
    </Container>
  )
}

export default Layout