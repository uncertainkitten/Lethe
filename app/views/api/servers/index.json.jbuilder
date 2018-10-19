@servers.each do |server|
  json.set! server.id do
    json.set! :id, server.id
    json.set! :owner_id, server.owner_id
    json.set! :name, server.name
  end
end