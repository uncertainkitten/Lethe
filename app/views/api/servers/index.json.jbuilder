@servers.each do |server|
  json.set! server.id do
    json.set! :id, server.id
    json.set! :owner, server.owner.username
    json.set! :name, server.name
  end
end