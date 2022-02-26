class HeaderTemplate {
  //   <Row>
  // <Col>org</Col>
  // <Col>key</Col>
  // <Col>type</Col>
  // <Col>manufacturer</Col>
  // <Col>model</Col>
  // <Col>serial</Col>
  // <Col>inventory</Col>
  // <Col>year</Col>
  // <Col>place</Col>
  // </Row>
  const headerData = [
    { 
      columns: {
        "key": {
          
        }
      }
    }
  ]

  cols = headerData.columns.map(i => {console.log(i)})
  render() {
    return <header>header</header>;
  }
}
