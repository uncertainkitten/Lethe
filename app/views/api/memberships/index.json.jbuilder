@memberships.each do |member|
  json.set! member.id do
    json.set! :id, member.id
    json.set! :server_id, member.server_id
    json.set! :user_id, member.user_id
    json.set! :server, member.server.name
    json.set! :user, member.user.username
  end
end