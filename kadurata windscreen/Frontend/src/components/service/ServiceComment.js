import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

const ServiceComment = () => (
  <Comment.Group>
    <Comment>
      {/* <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' /> */}
      <Comment.Content>
        <Comment.Author></Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            
          </p>
          <p>
           
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action style={{color:'blue'}}></Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      {/* <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' /> */}
      <Comment.Content>
        <Comment.Author></Comment.Author>
        <Comment.Metadata>
          <div></div>
        </Comment.Metadata>
        <Comment.Text></Comment.Text>
        <Comment.Actions>
          <Comment.Action style={{color:'blue'}}>write your comment here</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply>
      <Form.TextArea style={{width:'100%',height:'50%'}} />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={() => alert('Your Coment Is Succesfully Sent')} />
    </Form>
  </Comment.Group>
)

export default ServiceComment