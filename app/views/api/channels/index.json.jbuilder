@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :server_id
    json.set! :messages, channel.messages
  end
end