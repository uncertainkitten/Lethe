# README

## Live
[Live](https://lethe-project.herokuapp.com/#/)

## Description
Lethe is an app for text chatting modelled after Discord.  Features include servers that users can create and manage which host channels in which users can chat.  Joining servers is done through an invite system, which can protect against information leaking in the way that a traditional search system would.   

Lethe is written in Ruby 2.5.1 on Rails 5.2.1 on backend, and JS with React and Redux on frontend.

The Ruby on Rails portion of Lethe utilizes a Postgresql database for ease of use as well as having easy configuration patterns for protecting backend API routes, such as user authentication, deleting servers, and attempts to spoof memberships that aren't one's own.  The React.js portion of Lethe allows for dynamic updating using state managed by Redux, allowing most of Lethe's action to take place on the Splash component page.

## Implemented key features:
### Protections for core elements of the database:

```
from application_controller.rb

  def protected_server
    current_user
    target_server

    if !target_server
      render json: ["server not found"], status: 404 and return
    end

    unless (target_server) && (logged_in?) && (@current_user == @target_server.owner)
      render json: ["You can't do that"], status: 403
    end
  end

  def protected_membership
    current_user
    target_membership

    if !target_membership
      render json: ["Membership not found"], status: 404 and return
    end

    unless (target_membership) && (logged_in?) && (@current_user == @target_membership.user)
      render json: ["You can't do that"], status: 403
    end
  end
```

### Invites that self destruct once they run out of uses:

```
from invite.rb

def self.use!(invite)
    invite.num_uses = invite.num_uses - 1
    invite.save!

    if invite.num_uses <= 0
      invite.destroy
    end
  end

  from invites_controller.rb

def update
    puts "Updating"
    @invite = Invite.find_by(id: params[:id])
    @membership = Membership.new(user_id: current_user.id, server_id: @invite.server_id)

    if @membership.save
      Invite.use!(@invite)
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end
```

### Pleasant UI experience with dynamic forms and clear instructions:

![alt-text](https://github.com/uncertainkitten/lethe/blob/master/NewServerStyle.png "Look at how fancy that is")



## Challenges

### Invites

The invite functionality of Lethe was surprisingly difficult to implement on both frontend and backend. An invite consists of a unique URL and a limited number of uses, both of which required model level implementation - in particular, the Invite.use! method relies on the Membership that the invite is supposed to create being generated before it is called, but conveniently modifies the invite so that the number of invites are decreased.  On the frontend, getting the state to update such that using an invite adds the server to the server index required crossing invite actions across several reducers.  The abstraction of invites as something between a join table and an object in their own right was tricky to deal with.

### Context Menus

Compare these two screenshots:
![alt-text](https://github.com/uncertainkitten/lethe/blob/master/MenuDown.png "Context menu downward")

![alt-text](https://github.com/uncertainkitten/lethe/blob/master/MenuUp.png "Context menu upward")

Getting the context menus to not violate the dimensions of the splash container was difficult but lead to a much better user experience that doesn't require disruptive scrolling.  The context menus in general required me to figure out how to implement modals in state - the solution I settled on was that the ui.modal would take in an ID for any modal element and use the component to associate properly - the splash page has a click listener that closes all modals, and all server items have a right click option to open the modal - only one modal can be open at a time.  This is handled easily by the fact that ui.modal in state only takes a single id.  The React Component for the menu has a listener for the mouse position to make sure it is either above or below a Y-axis threshold to determine which direction the menu should open in.

```
from server_index_item.jsx

  checkPosition(e) {
    if (e.screenY > 500) {
      this.setState({menuClass: "upMenu"});
    } else {
      this.setState({menuClass: "downMenu"});
    }
  }

  ...
   <div className="serverIcon" onContextMenu={this.handleRightClick}>

```

The context menus give access to many of Lethe's features, including the aforementioned Invites.

## Future Features
Lethe is still a work in progress - future features include:
- Channels in servers
- Livechat using ActionCable and WebSockets
- Private messaging between users
- Friends and blocks
- Roles and Permissions
- Emoji :)
- Mentions
- Uploads
- Categories
- Mutes
- Rate limiting
- Voice





