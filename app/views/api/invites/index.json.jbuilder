@invites.each do |invite|
  json.set! invite.url do
    json.set! :id, invite.id
    json.set! :url, invite.url
    json.set! :uses, invite.num_uses
    json.set! :server_id, invite.server.id
    json.set! :server, invite.server.name
  end
end