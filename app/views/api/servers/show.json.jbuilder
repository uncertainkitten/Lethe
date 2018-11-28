json.partial! 'server', server: @server

json.set! 'owner' do
  json.set! :owner_id, @server.owner_id
  json.set! :owner_username, @server.owner.username
  json.set! :owner_email, @server.owner.email
end