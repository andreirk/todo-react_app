import React, {Component} from 'react';

import {Button, Card, Checkbox, Container, Grid, Icon, Image, Label, Menu, Table} from 'semantic-ui-react'

const TodoItems = (props) => (
  <Card.Group stackable itemsPerRow={1}>
    {props.items.map(todo => {
      return <Card centered >
            <Grid padded >

              <Grid.Column width={1}>
                <Container textAlign='justified' fluid >
                  <Checkbox  />
                </Container>

              </Grid.Column>
              <Grid.Column width={15}>


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
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
              </Grid.Column>
            </Grid>
          </Card>


    })}

  </Card.Group>
)

const TodoSideBar = (props) => (
  <Card.Group>


  </Card.Group>
)

// TodoTable is a Stateless component
const TodoBox = (props) => {
  return (
    <Grid>
      <Grid.Column width={2}>
        Menu
      </Grid.Column>
      <Grid.Column width={14}>
        <TodoItems items={props.items}/>
      </Grid.Column>

    </Grid>

  )
}

export default TodoBox;