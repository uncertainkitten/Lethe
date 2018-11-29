json.set! :user do
  json.partial! "api/user", user: @user
end

if @servers && !@servers.empty?
  json.set! :servers do
    @servers.each do |server|
      json.set! server.id do
        json.set! :id, server.id
        json.set! :name, server.name
        json.set! :owner_id, server.owner_id
      end
    end
  end
else
  json.servers({})
end
