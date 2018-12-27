@messages.each do |message|
  json.set! message.id do
    json.partial! 'messages', message: message
    json.username message.username
  end
end