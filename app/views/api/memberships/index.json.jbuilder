@memberships.each do |membership|
  json.set! membership.id do
    json.set! :id, membership.id
    json.set! :server_id, membership.server_id
    json.set! :user_id, membership.user_id
    json.set! :server, membership.server.name
    json.set! :user, membership.user.username
  end
end