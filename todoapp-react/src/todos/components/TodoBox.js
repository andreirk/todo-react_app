import React, {Component} from 'react';

import {Button, Card, Grid, Icon, Image, Label, Menu, Table} from 'semantic-ui-react'

const TodoItems = (props) => (
  <Card.Group stackable itemsPerRow={1}>
    {props.items.map(todo => {
      return      <Card centered>
        <Card.Content>
          <Card.Header>{todo.title}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            {todo.description} <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
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
      <Grid.Column width={3}>
        Menu
      </Grid.Column>
      <Grid.Column width={12}>
        <TodoItems items={props.items}/>
      </Grid.Column>

    </Grid>

  )
}

export default TodoBox;