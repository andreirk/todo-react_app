import React, {Component} from 'react';

import {Button, Card, Checkbox, Container, Grid, Icon, Image, Label, Menu, Table} from 'semantic-ui-react'

const TodoItems = (props) => (
  <Card.Group stackable itemsPerRow={1}>
    {props.items.map(todo => {
      return <Card centered >
            <Grid padded >

              <Grid.Column width={1}>
                <Container >
                  <Checkbox  />
                </Container>
              </Grid.Column>
              <Grid.Column width={14}>

            <Card.Content>
              <Card.Header>{todo.title}</Card.Header>
              <Card.Meta>{todo.description}</Card.Meta>

            </Card.Content>
            <div className="content">
              <Grid >
                <Grid.Column width='4' >
                  <Icon name='circle' color='red' />  Urgently priority
                </Grid.Column>
                <Grid.Column  width='4' >
                  <Card.Meta><Icon name='clock outline' /> 13:00</Card.Meta>
                </Grid.Column>
                <Grid.Column  width='4' >
                  <Card.Meta><Icon name='bell outline' /> 1 hour</Card.Meta>
                </Grid.Column>
              </Grid>
            </div>

              </Grid.Column>
              <Grid.Column>
                <Icon name='trash alternate outline' size='big' color='red' />
              </Grid.Column>
            </Grid>
          </Card>

    })}

  </Card.Group>
)

const TodoSideBar = ({priorities}) => (

  priorities.map(item => {
    return   <Card.Group>
      <Card centered >
        <Card.Content>
          <Card.Header>{item.title}</Card.Header>
        </Card.Content>
      </Card>

    </Card.Group>
  })

)

// TodoTable is a Stateless component
const TodoBox = (props) => {
  return (
    <Container>

      <Grid>
        <Grid.Column width={2}>
          Menu
        </Grid.Column>
        <Grid.Column width={14}>
          <Menu>
            <Menu.Item name='browse' >
              Browse
            </Menu.Item>

            <Menu.Item name='submit' >
              Submit
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item name='signup' >
                Sign Up
              </Menu.Item>

              <Menu.Item name='help' >
                Help
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <TodoItems items={props.items}/>
        </Grid.Column>
      </Grid>
    </Container>

  )
}

export default TodoBox;