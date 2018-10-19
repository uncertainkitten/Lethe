json.extract! @server, :id, :name

json.set! :owner do
  json.set! :owner_id, @server.owner.id
  json.set! :owner_name, @server.owner.username
  json.set! :owner_email, @server.owner.email
end

json.set! :members do
 json.array! @memberships, :id, :user_id, :server_id
end