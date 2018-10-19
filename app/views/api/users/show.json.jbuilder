json.set! :user do
  json.partial! "api/user", user: @user
end

json.set! :servers do
  @servers.each do |server|
    json.set! server.id do
      json.set! :id, server.id 
      json.set! :name, server.name
    end
  end
end
